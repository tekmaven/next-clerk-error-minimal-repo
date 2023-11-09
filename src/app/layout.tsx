import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next-clerk-error-minimal-repo",
  description: "next-clerk-error-minimal-repo",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <h1>next-clerk-error-minimal-repo layout</h1>
          <UserButton afterSignOutUrl="/" />
          <div>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
