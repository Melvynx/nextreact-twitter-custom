import type { DefaultUser } from 'next-auth';

declare module 'next-auth' {
  type Session = {
    user?: DefaultUser & {
      id: string;
    };
  }
}
