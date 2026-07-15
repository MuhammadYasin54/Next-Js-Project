

import "./globals.css"
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
           
        {children}</body>
    </html>
  );
}
export default RootLayout;