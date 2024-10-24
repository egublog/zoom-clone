import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Yoom",
  description: "Video calling app",
  icons: {
    icon: '/icons/logo.svg'
  }
};

/**
 * RootLayoutコンポーネント
 *
 * このコンポーネントは、アプリケーション全体のレイアウトを定義します。
 * StreamVideoProviderを使用して、子要素にビデオストリーミング機能を提供します。
 *
 * @param children - レイアウト内にレンダリングされる子要素
 * @returns JSX.Element - アプリケーションのルートレイアウト要素
 */
const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
