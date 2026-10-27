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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}