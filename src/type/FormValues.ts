export interface FormValues {
  id: string;
  fullName: string;
  selectObject: string;
  dateOfBirth: string;
  gender: string;
  selectNationality: string;
  nationId: string;
  province: string;
  district: string;
  address: string;
  email: string;
  mobile: string;
  travels: {
    departureDate: string;
    immigrationDate: string;
    departure: string;
    destination: string;
  }[];
  symptoms: string[];
  vaccines: string;
}
