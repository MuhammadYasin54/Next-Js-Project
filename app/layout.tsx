import NavBar from "@/components/navbar/page";
import "./globals.css"
import { NextRequest, NextResponse } from "next/server";

const RootLayout =({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)=> {
  const user = true;
  return (
    <html>

      <body className="min-h-full flex flex-col"
      cz-shortcut-listen="true"
      >
        {user && <NavBar/>}
        {children}</body>
    </html>
  );
}
export default RootLayout;