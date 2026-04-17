import "./globals.css";

export const metadata = {
  title: "BrainLab",
  description: "Tutorías que sí se entienden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
