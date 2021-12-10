export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface TokenPayload {
  exp: number;
  first_name: string;
  iat: number;
  iss: string;
  jti: string;
  last_name: string;
  nbf: number;
  prv: string;
  sub: string;
  user_id: string;
}
