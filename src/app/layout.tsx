import "./globals.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid grid-rows-[16px_auto_28] m-0 p-0 box-border  bg-black text-white">
        <header className="">
          <Header />
        </header>

        <main >{children}</main>
        <footer >
          <Footer />
        </footer>
      </body>
    </html>
  );
}
