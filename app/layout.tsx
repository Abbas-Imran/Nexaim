import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const organizationSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   "name": "The Nexaim",
  //   "url": "https://thenexaim.com/",
  //   "logo": "",
  //   "contactPoint": {
  //     "@type": "ContactPoint",
  //     "telephone": "03432469633",
  //     "contactType": "customer service",
  //     "areaServed": "PK",
  //     "availableLanguage": "en"
  //   },
  //   "sameAs": [
  //     "https://www.instagram.com/_thenexaim/",
  //     "https://www.facebook.com/thenexaim"
  //   ]
  // };
  return (
    <>
      {children}
    </>
  );
}
