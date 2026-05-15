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
  additionalPhotos: File[] = [];

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
