'use client';

import StoreProvider from '@/app/StoreProvider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import './globals.css';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <StoreProvider>
            <ConfigProvider theme={{ token: { colorPrimary: '#FF8800' } }}>
              <AntdRegistry>{children}</AntdRegistry>
            </ConfigProvider>
          </StoreProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
