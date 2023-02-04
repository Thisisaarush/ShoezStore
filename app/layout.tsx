import "./globals.css";

// components
import { Navbar, Footer } from "@components";
import { ApolloClientProvider } from "src/components/ApolloClientProvider/ApolloClientProvider";
import { NextAuthProvider } from "src/components/NextAuthProvider/NextAuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ApolloClientProvider>
          <NextAuthProvider>
            <Navbar />
            {children}
            <Footer />
          </NextAuthProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
