import React from "react";

import Navbar from './navbar'

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
