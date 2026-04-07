import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Manager Pro",
  description: "Next.js management Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
    {/* nav bar with logo and navigation links */}
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link 
              href="/users" 
              className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              UserDash
            </Link>
            
            <div className="flex gap-4">
              <Link 
                href="/users" 
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Directory
              </Link>
            </div>
          </div>
        </nav>

      {/* main component area  */}
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>

        {/* footer  */}
        <footer className="border-t bg-white p-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} User Management Project
        </footer>
      </body>
    </html>
  );
} 