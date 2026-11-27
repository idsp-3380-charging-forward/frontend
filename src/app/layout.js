import Footer from "../components/common/Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Header from '../components/common/Header';
import './globals.css';

export const metadata = {
  title: 'Charging Forward',
  description: 'Zero-emission vehicles (ZEVs) learning hub',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}