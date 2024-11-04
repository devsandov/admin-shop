import { tesloApi } from '@/api/tesloApi';
import type { AuthResponse } from '../interfaces/auth.response';
import { isAxiosError } from 'node_modules/axios/index.cjs';
import type { User } from '../interfaces';

interface LoginError {
  ok: false;
  message: string;
}

interface LoginSuccess {
  ok: true;
  user: User;
  token: string;
}

export const loginAction = async (
  email: string,
  password: string,
): Promise<LoginError | LoginSuccess> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>('/auth/login', { email, password });

    return {
      ok: true,
      user: data.user,
      token: data.token,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        ok: false,
        message: 'User or password wrong',
      };
    }

    throw new Error('Something went wrong');
  }
};
