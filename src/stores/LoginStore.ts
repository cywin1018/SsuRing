import {create} from 'zustand';
import {AuthProps} from '../types/login/login.ts';

const useAuthStore = create<AuthProps>(set => ({
  studentId: '',
  password: '',
  autoLogin: false,
  setCredentials: (studentId, password) => set({studentId, password}),
  setAutoLogin: value => set({autoLogin: value}),
}));
export default useAuthStore;
