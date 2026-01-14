import "./globals.css";

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
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
