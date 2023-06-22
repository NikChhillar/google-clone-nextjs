import "./globals.css";

export const metadata = {
  title: "Google next",
  description: "Google clone created using next.js 13.4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
