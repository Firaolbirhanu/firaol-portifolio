import "./global.css";

export const metadata = {
  title: "Papi | Computer Science Student & IT Professional",
  description:
    "Personal portfolio of Papi, a Computer Science student and aspiring IT professional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}