import NavBar from "@/components/navbar/page";
const RootLayout =({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)=> {
  return (
    <html>

      <body className="min-h-full flex flex-col"
      cz-shortcut-listen="true"
      >
        <NavBar/>
        {children}</body>
    </html>
  );
}
export default RootLayout;