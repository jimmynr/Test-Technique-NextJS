import "./globals.css";

export const metadata = {
  title: "Test technique",
  description: "Test technique TARAM Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
