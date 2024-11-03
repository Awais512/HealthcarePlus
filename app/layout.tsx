// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/Sidebar";
// import { DarkModeProvider } from "@/context/DarkmodeContext";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Healthcare Dashboard",
//   description: "Modern healthcare management dashboard",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <DarkModeProvider>
//           <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
//             {/* Background Pattern */}
//             <div className="fixed inset-0 z-0 opacity-30">
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:20px_20px]" />
//             </div>

//             {/* Navigation Bar */}
//             <Navbar />

//             {/* Main Content Area */}
//             <div className="pt-[73px] flex h-screen">
//               {/* Sidebar */}
//               <Sidebar />

//               {/* Main Content - Scrollable */}
//               <main className="ml-64 flex-1 p-8 overflow-y-auto h-[calc(100vh-73px)]">
//                 {children}
//               </main>
//             </div>
//           </div>
//         </DarkModeProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkmodeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Healthcare Dashboard",
  description: "Modern healthcare management dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
