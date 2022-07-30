import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Navbar</h1>
      <main>{children}</main>
    </>
  );
}
