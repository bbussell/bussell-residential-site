import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://bussellresidentialgroup.com'),
  title: {
    default: 'Bussell Residential Group | Chicago Real Estate',
    template: '%s | Bussell Residential Group',
  },
  description:
    'Bussell Residential Group is a Chicago real estate brand led by Brittany Bussell, offering thoughtful, hands-on guidance for buyers, sellers, and clients relocating in and around Chicago.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
