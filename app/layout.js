import "./globals.css";
export const metadata = {
  title: "مهندس نوری",
  description: "برنامه نویس وب اپ های مدرن",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
