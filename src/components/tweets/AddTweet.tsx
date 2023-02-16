'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { client } from '~/src/lib/client/client';
import { tweetKeys } from '~/src/lib/query/tweetQuery';
import { AddTweetForm } from './AddTweetForm';

type AddTweetProps = { tweetId?: string };

export const AddTweet = ({ tweetId }: AddTweetProps) => {
  const session = useSession();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (content: string) =>
      client('/api/tweets', { method: 'POST', data: { content, tweetId } }),
    {
      onSuccess: () => {
        void queryClient.invalidateQueries({
          queryKey: tweetId ? tweetKeys.getById(tweetId) : tweetKeys.all,
          refetchPage: tweetId ? undefined : (_, i) => i === 0,
        });
      },
    }
  );

  if (session.status !== 'authenticated') {
    return <p>Please login to add tweet</p>;
  }

  const handleSubmit = (content: string) => {
    mutation.mutate(content);
  };

  return (
    <AddTweetForm
      disabled={mutation.isLoading}
      user={session.data.user}
      onSubmit={handleSubmit}
    />
  );
};
