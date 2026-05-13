import { Component } from '@angular/core';
import { ProfileSettingsModel } from '../../Models/profile-settings.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequiredDirective } from '../../../../shared/styles/directive/required.directive';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ReactiveFormsModule,RequiredDirective],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  savedProfileData: ProfileSettingsModel | null = null;

  settingsForm;

  constructor(private readonly fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      prefix: ['Mr.'],
      greeting: ['Hello'],
      firstName: ['Larry', Validators.required],
      middleName: [''],
      lastName: ['Bell', Validators.required],
      jobTitle: ['Board Member / Marketing Chair'],
      contactPreference: ['Email', Validators.required],
      phonePreference: ['Work Phone', Validators.required],
      workPhone: ['727-544-4777'],
      homePhone: [''],
      cellPhone: [''],
      altPhone: [''],
      fax: ['727-209-0837'],
      email: ['larry@poweredbybelltech.com', [Validators.required, Validators.email]],
      addressLine1: ['6530 Park Blvd. N', Validators.required],
      addressLine2: [''],
      city: ['Pinellas Park', Validators.required],
      state: ['FL', Validators.required],
      postalCode: ['33781', Validators.required],
      country: ['United States', Validators.required],
      repActive: [true],
      primaryContact: [false],
      billingContact: [false],
      personalBio: ['']
    });
  }

  saveChanges(): void {
    if (this.settingsForm.invalid) {
      this.settingsForm.markAllAsTouched();
      return;
    }

    this.savedProfileData = this.settingsForm.getRawValue() as ProfileSettingsModel;
    console.log('Profile payload ready for API:', this.savedProfileData);
  }

  clearChanges(): void {
    this.settingsForm.reset({
      prefix: 'Mr.',
      greeting: 'Hello',
      firstName: '',
      middleName: '',
      lastName: '',
      jobTitle: '',
      contactPreference: 'Email',
      phonePreference: 'Work Phone',
      workPhone: '',
      homePhone: '',
      cellPhone: '',
      altPhone: '',
      fax: '',
      email: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: 'FL',
      postalCode: '',
      country: 'United States',
      repActive: true,
      primaryContact: false,
      billingContact: false,
      personalBio: ''
    });
  }
}
