import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequiredDirective } from "../../../../shared/styles/directive/required.directive";
import { from, of, Observable } from 'rxjs';
import { EventService } from '../../Services/event.service';
import { catchError, finalize, map, mergeMap, tap, toArray } from 'rxjs/operators';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { CKEDITOR_CONFIG, CKEDITOR_EDITOR } from '../../../../shared/ckeditor.config';
import { EventCreateRequest } from '../../Models/event-create-request.model';

interface UploadItem {
  file: File;
  category: string;
  progressSetter: (value: number) => void;
  uploadedSetter: () => void;
  errorSetter: (message: string | null) => void;
}

interface UploadResult {
  category: string;
  fileName: string;
  url?: string;
  error?: string | null;
  response?: any;
}

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RequiredDirective, CKEditorModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule],
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
  eventForm!: FormGroup;
  eventHeaderPhoto: File | null = null;
  eventHeaderPhotoUrl: string | null = null;
  eventHeaderPhotoProgress = 0;
  eventHeaderPhotoUploaded = false;
  eventHeaderPhotoError: string | null = null;
  mainEventPhoto: File | null = null;
  mainEventPhotoUrl: string | null = null;
  mainEventPhotoProgress = 0;
  mainEventPhotoUploaded = false;
  mainEventPhotoError: string | null = null;
  searchResultsLogo: File | null = null;
  searchResultsLogoUrl: string | null = null;
  searchResultsLogoProgress = 0;
  searchResultsLogoUploaded = false;
  searchResultsLogoError: string | null = null;
  galleryPhotos: { file: File; url: string; progress: number; uploaded: boolean; error: string | null }[] = [];
  galleryUploadError: string | null = null;
  isUploading = false;

  public Editor = CKEDITOR_EDITOR;
  public config = CKEDITOR_CONFIG;

  content = '';

  timePickerOpen: '' | 'start' | 'end' = '';
  hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
  meridians: Array<'AM' | 'PM'> = ['AM', 'PM'];
  selectedTimes = {
    start: { hour: '12', minute: '00', meridian: 'PM' },
    end: { hour: '12', minute: '00', meridian: 'PM' }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private eventService: EventService) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm(): void {
    this.eventForm = this.fb.group({
      eventTitle: ['', Validators.required],
      allDayEvent: [false],
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
      startMeridian: ['AM'],
      endDate: ['', Validators.required],
      endTime: ['', Validators.required],
      endMeridian: ['AM'],
      resourcer: ['0'],
      description: [''],
      location: [''],
      feesAdmission: [''],
      displayDateTime: [''],
      contactEmail: ['', [Validators.required, Validators.email]],
      websiteUrl: [''],
      chamberEvent: [false],
      onBehalfOfParkEvent: [false],
      memberEvent: [false],
      eventHeaderPhoto: [null],
      mainEventPhoto: [null],
      searchResultsLogo: [null],
      galleryPhotos: [[]],
      mapService: ['none'],
      youtubeUrl: [''],
      metaDescription: [''],
      searchDescription: [''],
      imageCaptions: ['']
    });

    this.initializeTimeValidators();
  }

  private initializeTimeValidators(): void {
    const allDayControl = this.eventForm.get('allDayEvent');

    this.setTimeValidators(allDayControl?.value ?? false);
    allDayControl?.valueChanges.subscribe(isAllDay => this.setTimeValidators(isAllDay));
  }

  private setTimeValidators(isAllDay: boolean): void {
    const startTimeControl = this.eventForm.get('startTime');
    const endTimeControl = this.eventForm.get('endTime');

    if (isAllDay) {
      startTimeControl?.clearValidators();
      startTimeControl?.disable({ emitEvent: false });
      startTimeControl?.updateValueAndValidity({ emitEvent: false });

      endTimeControl?.clearValidators();
      endTimeControl?.disable({ emitEvent: false });
      endTimeControl?.updateValueAndValidity({ emitEvent: false });
    } else {
      startTimeControl?.setValidators([Validators.required]);
      startTimeControl?.enable({ emitEvent: false });
      startTimeControl?.updateValueAndValidity({ emitEvent: false });

      endTimeControl?.setValidators([Validators.required]);
      endTimeControl?.enable({ emitEvent: false });
      endTimeControl?.updateValueAndValidity({ emitEvent: false });
    }
  }

  saveAsDraft(): void {
    console.log('Draft saved:', this.eventForm.value);
  }

  submitForApproval(): void {
    this.eventForm.markAllAsTouched();

    if (this.eventForm.invalid) {
      console.warn('Form invalid:', this.eventForm.value);
      return;
    }

    if (this.isUploading) {
      return;
    }

    if (this.hasImagesToUpload) {
      this.isUploading = true;
      this.uploadAllImages().pipe(
        finalize(() => this.isUploading = false)
      ).subscribe({
        next: (uploadResults: UploadResult[]) => this.submitEvent(uploadResults),
        error: (error: any) => console.error('Image upload failed:', error)
      });
    } else {
      this.submitEvent([]);
    }
  }

  private submitEvent(uploadResults: UploadResult[]): void {
    const eventRequest = this.buildEventRequest(uploadResults);

    this.eventService.saveEvent(eventRequest).pipe(
      finalize(() => {
        // additional cleanup if needed
      })
    ).subscribe({
      next: response => {
        console.log('Event saved successfully:', response);
      },
      error: error => {
        console.error('Event save failed:', error);
      }
    });
  }

  private buildEventRequest(uploadResults: UploadResult[]): EventCreateRequest {
    const raw = this.eventForm.value;

    return {
      eventTitle: raw.eventTitle,
      allDayEvent: raw.allDayEvent,
      startDate: raw.startDate ? raw.startDate.toString() : null,
      startTime: raw.startTime || '',
      endDate: raw.endDate ? raw.endDate.toString() : null,
      endTime: raw.endTime || '',
      resourcer: raw.resourcer,
      description: raw.description,
      location: raw.location,
      feesAdmission: raw.feesAdmission,
      displayDateTime: raw.displayDateTime,
      contactEmail: raw.contactEmail,
      websiteUrl: raw.websiteUrl,
      chamberEvent: raw.chamberEvent,
      onBehalfOfParkEvent: raw.onBehalfOfParkEvent,
      memberEvent: raw.memberEvent,
      mapService: raw.mapService,
      youtubeUrl: raw.youtubeUrl,
      metaDescription: raw.metaDescription,
      searchDescription: raw.searchDescription,
      imageCaptions: raw.imageCaptions,
      attachments: uploadResults.map(result => ({
        category: result.category,
        fileName: result.fileName,
        url: result.response?.fileUrl ?? result.response?.url
      }))
    };
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.time-picker-container')) {
      this.timePickerOpen = '';
    }
  }

  toggleTimePicker(field: 'start' | 'end'): void {
    if (this.timePickerOpen === field) {
      this.timePickerOpen = '';
      return;
    }

    this.timePickerOpen = field;
    const control = this.eventForm.get(field === 'start' ? 'startTime' : 'endTime');
    const parsed = this.parseTimeString(control?.value);
    this.selectedTimes[field] = parsed;
  }

  selectTimePart(field: 'start' | 'end', part: 'hour' | 'minute' | 'meridian', value: string): void {
    this.selectedTimes[field][part] = value as any;
    this.updateTimeControl(field);
  }

  updateTimeControl(field: 'start' | 'end'): void {
    const current = this.selectedTimes[field];
    const value = `${current.hour}:${current.minute} ${current.meridian}`;
    this.eventForm.get(field === 'start' ? 'startTime' : 'endTime')?.setValue(value);
  }

  getFormattedTime(field: 'start' | 'end'): string {
    const control = this.eventForm.get(field === 'start' ? 'startTime' : 'endTime');
    return control?.value || '';
  }

  parseTimeString(value: string | null | undefined): { hour: string; minute: string; meridian: 'AM' | 'PM' } {
    if (!value) {
      return { hour: '12', minute: '00', meridian: 'PM' };
    }
    const match = String(value).trim().match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);
    if (!match) {
      return { hour: '12', minute: '00', meridian: 'PM' };
    }
    const hour = match[1].padStart(2, '0');
    const minute = match[2];
    const meridian = (match[3]?.toUpperCase() as 'AM' | 'PM') || 'AM';
    return { hour: hour === '00' ? '12' : hour, minute, meridian };
  }

  selectedFiles: File[] = [];

  onPhotoSelect(event: any, photoType: string): void {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    this.selectedFiles.push(file);

    if (photoType === 'Event Header Photo') {
      if (this.eventHeaderPhotoUrl) {
        URL.revokeObjectURL(this.eventHeaderPhotoUrl);
      }
      this.eventHeaderPhoto = file;
      this.eventHeaderPhotoUrl = URL.createObjectURL(file);
      this.eventHeaderPhotoProgress = 0;
      this.eventHeaderPhotoUploaded = false;
      this.eventHeaderPhotoError = null;
      this.eventForm.patchValue({ eventHeaderPhoto: file });
    } else if (photoType === 'Main Event Photo') {
      if (this.mainEventPhotoUrl) {
        URL.revokeObjectURL(this.mainEventPhotoUrl);
      }
      this.mainEventPhoto = file;
      this.mainEventPhotoUrl = URL.createObjectURL(file);
      this.mainEventPhotoProgress = 0;
      this.mainEventPhotoUploaded = false;
      this.mainEventPhotoError = null;
      this.eventForm.patchValue({ mainEventPhoto: file });
    } else if (photoType === 'Search Results Logo') {
      if (this.searchResultsLogoUrl) {
        URL.revokeObjectURL(this.searchResultsLogoUrl);
      }
      this.searchResultsLogo = file;
      this.searchResultsLogoUrl = URL.createObjectURL(file);
      this.searchResultsLogoProgress = 0;
      this.searchResultsLogoUploaded = false;
      this.searchResultsLogoError = null;
      this.eventForm.patchValue({ searchResultsLogo: file });
    }

    console.log(`Photo selected for ${photoType}:`, file.name);
  }

  onGalleryPhotosSelect(event: any): void {
    const files: File[] = event.target.files ? Array.from(event.target.files) : [];

    if (!files.length) {
      return;
    }

    this.selectedFiles.push(...files);

    const totalPhotos = this.galleryPhotos.length + files.length;

    if (totalPhotos > 8) {
      const remaining = 8 - this.galleryPhotos.length;
      this.galleryUploadError = `You can only upload ${remaining} more image(s). Maximum is 8 images.`;
      return;
    }

    this.galleryUploadError = null;

    files.forEach(file => {
      this.galleryPhotos.push({
        file,
        url: URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: null
      });
    });

    this.eventForm.patchValue({ galleryPhotos: this.galleryPhotos.map(photo => photo.file) });
  }

  removeEventHeaderPhoto(): void {
    if (this.eventHeaderPhotoUrl) {
      URL.revokeObjectURL(this.eventHeaderPhotoUrl);
    }
    this.eventHeaderPhoto = null;
    this.eventHeaderPhotoUrl = null;
    this.eventForm.patchValue({ eventHeaderPhoto: null });
  }

  removeMainEventPhoto(): void {
    if (this.mainEventPhotoUrl) {
      URL.revokeObjectURL(this.mainEventPhotoUrl);
    }
    this.mainEventPhoto = null;
    this.mainEventPhotoUrl = null;
    this.eventForm.patchValue({ mainEventPhoto: null });
  }

  removeSearchResultsLogo(): void {
    if (this.searchResultsLogoUrl) {
      URL.revokeObjectURL(this.searchResultsLogoUrl);
    }
    this.searchResultsLogo = null;
    this.searchResultsLogoUrl = null;
    this.eventForm.patchValue({ searchResultsLogo: null });
  }

  removeGalleryPhoto(index: number): void {
    if (this.galleryPhotos[index]) {
      URL.revokeObjectURL(this.galleryPhotos[index].url);
    }

    this.galleryPhotos.splice(index, 1);
    this.eventForm.patchValue({ galleryPhotos: this.galleryPhotos.map(photo => photo.file) });
  }

  get hasImagesToUpload(): boolean {
    return !!this.eventHeaderPhoto || !!this.mainEventPhoto || !!this.searchResultsLogo || this.galleryPhotos.length > 0;
  }

  uploadAllImages(): Observable<UploadResult[]> {
    if (this.isUploading) {
      return of([]);
    }

    const uploadItems: UploadItem[] = [];

    if (this.eventHeaderPhoto) {
      uploadItems.push({
        file: this.eventHeaderPhoto,
        category: 'Event Header Photo',
        progressSetter: value => this.eventHeaderPhotoProgress = value,
        uploadedSetter: () => this.eventHeaderPhotoUploaded = true,
        errorSetter: message => this.eventHeaderPhotoError = message
      });
    }

    if (this.mainEventPhoto) {
      uploadItems.push({
        file: this.mainEventPhoto,
        category: 'Main Event Photo',
        progressSetter: value => this.mainEventPhotoProgress = value,
        uploadedSetter: () => this.mainEventPhotoUploaded = true,
        errorSetter: message => this.mainEventPhotoError = message
      });
    }

    if (this.searchResultsLogo) {
      uploadItems.push({
        file: this.searchResultsLogo,
        category: 'Search Results Logo',
        progressSetter: value => this.searchResultsLogoProgress = value,
        uploadedSetter: () => this.searchResultsLogoUploaded = true,
        errorSetter: message => this.searchResultsLogoError = message
      });
    }

    this.galleryPhotos.forEach(photo => {
      uploadItems.push({
        file: photo.file,
        category: 'Gallery Photos',
        progressSetter: value => photo.progress = value,
        uploadedSetter: () => photo.uploaded = true,
        errorSetter: message => photo.error = message
      });
    });

    if (!uploadItems.length) {
      this.galleryUploadError = 'No images selected to upload.';
      return of([]);
    }

    this.galleryUploadError = null;

    return from(uploadItems).pipe(
      mergeMap(item => this.uploadItem(item), 3),
      toArray()
    );
  }

  private uploadItem(item: UploadItem) {
    item.errorSetter(null);
    item.progressSetter(0);

    const formData = new FormData();
    formData.append('DocumentType', item.category);
    formData.append('File', item.file, item.file.name);

    return this.eventService.uploadEventImage(formData).pipe(
      tap(() => {
        setTimeout(() => {
          item.progressSetter(100);
          item.uploadedSetter();
        }, 100);
      }),
      catchError((error) => {
        console.error('Upload error:', error);
        item.errorSetter('Upload failed.');
        return of({
          category: item.category,
          fileName: item.file.name,
          error: 'Upload failed.',
          response: null
        });
      }),
      map((response) => ({
        category: item.category,
        fileName: item.file.name,
        url: response?.fileUrl ?? response?.url,
        response
      }))
    );
  }
}
