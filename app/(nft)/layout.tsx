"use client";

import NavBar from "@/components/NavBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <NavBar />
      <main className="p-1">{children}</main>
    </div>
  );
};

export default RootLayout;
