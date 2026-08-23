import "./globals.css";

export const metadata = {
  title: {
    default: "Ahmed Atya | UI/UX Designer",
    template: "%s | Ahmed Atya",
  },
  description:
    "Ahmed Atya is a UI/UX designer creating clear, user-friendly digital experiences.",
  icons: {
    icon: [{ url: "/assets/home/group.svg", type: "image/svg+xml" }],
    shortcut: "/assets/home/group.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles/shared.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
