import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RequiredDirective } from "../../../../shared/styles/directive/required.directive";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading,
  List,
  Link,
  Image,
  ImageToolbar,
  ImageCaption,
  ImageStyle,
  ImageResize,
  ImageUpload,
  Table,
  TableToolbar,
  BlockQuote,
  Alignment,
  Font,
  Indent,
  IndentBlock,
  Code,
  CodeBlock,
  HorizontalLine,
  MediaEmbed,
  PasteFromOffice,
  FontBackgroundColor,
  FontColor,
  RemoveFormat,
  Subscript,
  Superscript,
  Undo
} from 'ckeditor5';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RequiredDirective, CKEditorModule],
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
  eventForm!: FormGroup;
  eventHeaderPhoto: File | null = null;
  eventHeaderPhotoUrl: string | null = null;
  mainEventPhoto: File | null = null;
  mainEventPhotoUrl: string | null = null;
  searchResultsLogo: File | null = null;
  searchResultsLogoUrl: string | null = null;
  galleryPhotos: { file: File; url: string }[] = [];
  galleryUploadError: string | null = null;

  public Editor = ClassicEditor;

  content = '';

  config = {

    licenseKey: 'GPL',

    plugins: [
      Essentials,
      Paragraph,
      Bold,
      Italic,
      Underline,
      Strikethrough,
      Subscript,
      Superscript,

      Heading,

      Font,
      FontColor,
      FontBackgroundColor,

      Alignment,

      List,

      Indent,
      IndentBlock,

      Link,

      Image,
      ImageToolbar,
      ImageCaption,
      ImageStyle,
      ImageResize,
      ImageUpload,

      Table,
      TableToolbar,

      BlockQuote,

      HorizontalLine,

      Code,
      CodeBlock,

      MediaEmbed,

      PasteFromOffice,

      RemoveFormat,

      Undo
    ],

    toolbar:
    {
      shouldNotGroupWhenFull: true,

      items: [

        'undo',
        'redo',

        '|',

        'removeFormat',

        '|',

        'heading',

        '|',

        'fontFamily',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',

        '|',

        'bold',
        'italic',
        'underline',
        'strikethrough',

        '|',

        'subscript',
        'superscript',

        '|',

        'alignment',

        '|',

        'bulletedList',
        'numberedList',

        '|',

        'outdent',
        'indent',

        '|',

        'link',
        'uploadImage',
        'insertTable',
        'mediaEmbed',

        '|',

        'blockQuote',

        '|',

        'code',
        'codeBlock',

        '|',

        'horizontalLine'
      ]
    }
  };



  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {




    this.initializeForm();
  }


  initializeForm(): void {
    this.eventForm = this.fb.group({
      eventTitle: [''],
      allDayEvent: [false],
      startDate: [''],
      startTime: [''],
      startMeridian: ['AM'],
      endDate: [''],
      endTime: [''],
      endMeridian: ['AM'],
      resourcer: [''],
      description: [''],
      location: [''],
      feesAdmission: [''],
      displayDateTime: [''],
      contactEmail: [''],
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
  }

  saveAsDraft(): void {
    console.log('Draft saved:', this.eventForm.value);
  }

  submitForApproval(): void {
    console.log('Submitted for approval:', this.eventForm.value);
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  onPhotoSelect(event: any, photoType: string): void {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (photoType === 'Event Header Photo') {
      if (this.eventHeaderPhotoUrl) {
        URL.revokeObjectURL(this.eventHeaderPhotoUrl);
      }
      this.eventHeaderPhoto = file;
      this.eventHeaderPhotoUrl = URL.createObjectURL(file);
      this.eventForm.patchValue({ eventHeaderPhoto: file });
    } else if (photoType === 'Main Event Photo') {
      if (this.mainEventPhotoUrl) {
        URL.revokeObjectURL(this.mainEventPhotoUrl);
      }
      this.mainEventPhoto = file;
      this.mainEventPhotoUrl = URL.createObjectURL(file);
      this.eventForm.patchValue({ mainEventPhoto: file });
    } else if (photoType === 'Search Results Logo') {
      if (this.searchResultsLogoUrl) {
        URL.revokeObjectURL(this.searchResultsLogoUrl);
      }
      this.searchResultsLogo = file;
      this.searchResultsLogoUrl = URL.createObjectURL(file);
      this.eventForm.patchValue({ searchResultsLogo: file });
    }

    console.log(`Photo selected for ${photoType}:`, file.name);
  }

  onGalleryPhotosSelect(event: any): void {
    const files: File[] = event.target.files ? Array.from(event.target.files) : [];

    if (!files.length) {
      return;
    }

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
        url: URL.createObjectURL(file)
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
}
