import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'IDCD 2028 Kigali — Driving Intelligence, Powering Africa',
  description: 'IDCD 2028 brings the intelligent drives and automation community to Kigali, Rwanda, 19–21 July 2028. Explore technical tracks, author information, programme and venue details.',
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
