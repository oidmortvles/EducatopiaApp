import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppinsFont = Poppins({
  weight:["300","400","600", "800"], style:["normal"], subsets:["latin"] , variable:"--fontPoppins" 
});

export const metadata: Metadata = {
  title: "Educatopia",
  description: "Educatopia es un ecosistema educativo para docentes. Una plataforma para compartir y conectar con profesionales de la educación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppinsFont.className}>
        {children}
      </body>
    </html>
  );
}
