
import Navbar from "../../components/navbar";
import "./globals.css";


export const metadata = {
  title: "PortalSTI",
  description:
    "Gaussian Splatting by Survey Teknologi Indonesia",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
