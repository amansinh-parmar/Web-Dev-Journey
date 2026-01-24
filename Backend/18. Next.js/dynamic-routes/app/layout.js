// app/layout.js
import "./globals.css";
import Providers from "./providers"; // client component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers> {/* Only Providers is client */}
      </body>
    </html>
  );
}
