/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { Fragment } from 'react';
import { formatDate } from '~/src/lib/date/formatDate';
import type { TlTweet } from '~/src/lib/scheme/tweet';

type TweetProps = {
  tweet: TlTweet;
};

export const Tweet = ({ tweet, children }: PropsWithChildren<TweetProps>) => {
  return (
    <TweetBase tweetId={tweet.id} user={tweet.user} createdAt={tweet.createdAt}>
      <p className="text-sm text-gray-300">{tweet.content}</p>
      <div className="flex flex-row gap-6">{children}</div>
    </TweetBase>
  );
};

type TweetBaseProps = {
  user: TlTweet['user'];
  createdAt?: string;
  tweetId?: string;
  className?: string;
};

export const TweetBase = ({
  user,
  createdAt,
  children,
  tweetId,
  className,
}: PropsWithChildren<TweetBaseProps>) => {
  const LinkComponent = tweetId ? Link : Fragment;
  const props = tweetId ? { href: `/tweets/${tweetId}` } : ({} as never);
  return (
    <div className={clsx('flex w-full flex-row items-start p-4', className)}>
      <img src={user.image ?? ''} alt="user" className="h-10 w-10 rounded-full" />
      <div className="ml-4 flex w-full flex-col gap-2">
        <Link href={`/users/${user.id}`}>
          <div className="flex flex-row items-center gap-2">
            <p className="text-base text-neutral-100">{user.displayName}</p>
            <p className="text-sm text-gray-500">@{user.username}</p>
            <p className="text-sm text-gray-500">·</p>
            {createdAt && (
              <p className="text-sm text-gray-500">
                {formatDate(new Date(createdAt))}
              </p>
            )}
          </div>
        </Link>

        <LinkComponent {...props}>{children}</LinkComponent>
      </div>
    </div>
  );
};
