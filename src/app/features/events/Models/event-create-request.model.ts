export interface EventAttachment {
  category: string;
  fileName: string;
  url?: string;
}

export interface EventCreateRequest {
  eventTitle: string;
  allDayEvent: boolean;
  startDate: string | null;
  startTime: string;
  endDate: string | null;
  endTime: string;
  resourcer: string;
  description: string;
  location: string;
  feesAdmission: string;
  displayDateTime: string;
  contactEmail: string;
  websiteUrl: string;
  chamberEvent: boolean;
  onBehalfOfParkEvent: boolean;
  memberEvent: boolean;
  mapService: string;
  youtubeUrl: string;
  metaDescription: string;
  searchDescription: string;
  imageCaptions: string;
  attachments: EventAttachment[];
}
