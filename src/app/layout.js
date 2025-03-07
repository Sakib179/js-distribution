import './globals.css';

export const metadata = {
  title: 'Tech Store - Your marketplace for tech products',
  description: 'Find the best deals on laptops, phones, and more',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}