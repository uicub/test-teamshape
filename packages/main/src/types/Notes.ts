export interface Note {
  author: Author;
  created_at: string;
  text: string;
  uid: string;
  updated_at: string;
}
export interface Author {
  active: boolean;
  email: string;
  first_name: string;
  last_name: string;
  uid: string;
}

export interface Feedback {
  author: Author;
  anonymous: boolean;
  text: string;
  uid: string;
  created_at: string;
  team: number;
}
