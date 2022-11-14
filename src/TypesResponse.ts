
export interface ILocation {
  lat: number;
  long: number;
}

export interface IResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: ILocation;
  pictures: string[];
  createdAt: Date | string;
  updatedAt: Date | string;
  description: string;
  employment_type: string[];
}
