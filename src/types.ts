export interface BookType {
  bookId: number;
  title: string;
  author: string;
  createdAt: string;
  url: string;
}

export interface BookResType {
  bookId: number;
  title: string;
  author: string;
  message: string;
  url: string;

  createdAt: string;
}

export type LoginReqType = {
  email: string;
  password: string;
};
export interface LoginResType {
  token: string;
}
