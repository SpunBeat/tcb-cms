

export interface LoginResponse {
  token?: string;
  error?: string;
}

export interface MetaResponse {
  code:number;
  data:string;
  message?: string;
}
