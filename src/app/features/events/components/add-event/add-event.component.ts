import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RequiredDirective } from "../../../../shared/styles/directive/required.directive";

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RequiredDirective],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css',
})
export class AddEventComponent implements OnInit {
  eventForm!: FormGroup;
  additionalPhotos: File[] = [];

  constructor(private fb: FormBuilder, private router: Router) {}

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
      mainEventPhoto: [null],
      secondaryEventLogo: [null],
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
    if (file) {
      console.log(`Photo selected for ${photoType}:`, file.name);
    }
  }

  onAdditionalPhotosSelect(event: any): void {
    const files = event.target.files;
    if (files) {
      this.additionalPhotos = Array.from(files);
    }
  }

  removeAdditionalPhoto(index: number): void {
    this.additionalPhotos.splice(index, 1);
  }
}
