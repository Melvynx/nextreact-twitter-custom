import type { PropsWithChildren } from 'react';
import { Layout } from '~/src/components/layout/Layout';
import './globals.css';
import Providers from './providers';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-900 text-white">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
