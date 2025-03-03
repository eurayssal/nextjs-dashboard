import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-lt-installed="true">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
