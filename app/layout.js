import "./globals.css";

export const metadata = {
  title: "BunnyBin - AI Smart Trash Bin",
  description: "AI-powered interactive smart trash bin for kids",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
