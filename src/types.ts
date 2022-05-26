export interface SigninProps {
  loading: boolean;
  error: Error | null;
}

export type LoginReqType = {
  email: string;
  password: string;
};
export interface LoginResType {
  token: string;
}
