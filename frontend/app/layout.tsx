import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "./toster";
import { GlobalProvider } from "./global-provicer";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "rakib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          {children}
          <ToastContainer />
        </GlobalProvider>
      </body>
    </html>
  );
}
