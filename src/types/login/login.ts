export interface AuthProps {
  studentId: string;
  password: string;
  autoLogin: boolean;
  cookie: string;
  setCredentials: (studentId: string, password: string) => void;
  setAutoLogin: (value: boolean) => void;
  setCookie: (cookie: string) => void;
  reset: () => void;
}
