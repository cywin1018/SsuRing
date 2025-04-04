import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthProps} from '../types/login/login.ts';

const useAuthStore = create<AuthProps>()(
  persist(
    set => ({
      studentId: '',
      password: '',
      autoLogin: false,
      setCredentials: (studentId, password) => set({studentId, password}),
      setAutoLogin: value => set({autoLogin: value}),
      reset: () => set({studentId: '', password: '', autoLogin: false}),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
export default useAuthStore;
