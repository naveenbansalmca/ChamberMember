export interface ProfileSettingsModel {
  prefix: string;
  greeting: string;
  firstName: string;
  middleName: string;
  lastName: string;
  jobTitle: string;
  contactPreference: string;
  phonePreference: string;
  workPhone: string;
  homePhone: string;
  cellPhone: string;
  altPhone: string;
  fax: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  repActive: boolean;
  primaryContact: boolean;
  billingContact: boolean;
  personalBio: string;
}
