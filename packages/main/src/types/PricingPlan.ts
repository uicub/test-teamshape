export interface Features {
    title: string;
}


export interface Plans {
  id: number;
  name: string;
  price_per_month: number;
  is_active: boolean;
  price_id: string;
  features: Features[]
}