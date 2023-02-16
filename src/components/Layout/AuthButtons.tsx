'use client';

import { signIn, signOut } from 'next-auth/react';
import { env } from '~/src/env/client';

export const SignInButton = () => {
  return (
    <button onClick={async () => signIn()} className="text-blue-300">
      Login
    </button>
  );
};

export const SignOutButton = () => {
  console.log({ a: env.GITHUB_ID });
  return (
    <button onClick={async () => signOut()} className="text-blue-300">
      Logout
    </button>
  );
};
