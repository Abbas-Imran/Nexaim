import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <head>
        <meta name="google-site-verification" content="rSmgiUi5hClwP2sfbwSV1xX0POJwTuw5IjXRyxhtECs" />
      </head>
      {children}
    </>
  );
}
