export interface AuthProps {
  studentId: string;
  password: string;
  autoLogin: boolean;
  setCredentials: (studentId: string, password: string) => void;
  setAutoLogin: (value: boolean) => void;
  reset: () => void;
}
