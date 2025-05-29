import "@simulador/styles/globals.css";
import "@simulador/styles/Form.css";

export const metadata = {
  title: "Simulador",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
