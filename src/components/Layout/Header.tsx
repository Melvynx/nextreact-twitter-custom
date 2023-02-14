import { getSession } from '~/src/lib/auth/nextAuth';
import { LoginButton, LogoutButton } from './AuthButtons';

export const Header = async () => {
  const session = await getSession();
  console.log({ session });

  return (
    <header>
      <h4>Twitter</h4>
      {session?.user ? (
        <div>
          {session.user.name}
          <LogoutButton />
        </div>
      ) : (
        <div>
          <LoginButton />
        </div>
      )}
    </header>
  );
};
