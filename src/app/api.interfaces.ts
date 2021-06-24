

export interface LoginResponse {
  token?: string;
  error?: string;
}

export interface MetaResponse {
  code:number;
  data:any;
  message?: string;
  status?:number;
}

export interface ActiveActionDetail {
  id: number;
  name: string;
  chapters: string[];
  type: string;
  scope: string;
}

export interface ActionDetail {
  id: number;
  name: string;
  colors: string;
  chapters:string[];
  description:string;
  amount_goal: number;
  type:string;
  logo:string;
  end_date: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
  sign_link:string;
  current_amount:number;
  promotors:any[];
  patrons: [
    {
      id: number;
      name: string;
      description: string;
      short_description: string;
      logo: string;
    }
  ];
  products:any[];
  co2_saved:string;
  liters_saved:string;
  verification:string;
  share_text:string;
  share_image:string;
  impact?:string;
  recurrency?:string;
  scope?:string;
  temporality?:string;
  country?:string;
  state?:string;
  zipcode?:string;
  image?:string;
}
