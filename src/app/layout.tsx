import "./globals.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

export const metadata = {
  title: "Rafał Kubowicz",
  description: "Nowa Nadzieja - Szczecin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-white text-gray-900 antialiased" suppressHydrationWarning>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
