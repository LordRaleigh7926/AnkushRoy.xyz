import type { Metadata } from "next";
import "@styles/globals.css";
import Navbar from "@components/navbar"
import Credits from '@components/creds';

export const metadata: Metadata = {
  title: "Ankush Roy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        {/* <Credits></Credits>  */}
      </body>

    </html>
  );
}
