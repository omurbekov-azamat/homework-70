export interface SendContact {
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export interface ApiContactList {
  [id: string]: SendContact;
}