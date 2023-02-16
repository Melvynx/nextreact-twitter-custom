import { AddTweet } from '~/src/components/tweets/AddTweet';
import { TwitterLayout } from '~/src/components/tweets/TwitterLayout';
import { TweetsTl } from './TweetsTl';

export default async function MainPage() {
  // 🦁 Remplace cette ligne par un `getTweets` en utilisant le userId qui provient de la session !
  const defaultTweets = [];

  return (
    <TwitterLayout>
      <AddTweet />
      <TweetsTl defaultTweets={{ tweets: defaultTweets, nextPage: 1 }} />
    </TwitterLayout>
  );
}
