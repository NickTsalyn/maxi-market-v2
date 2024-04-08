import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="px-4 pt-4 pb-14 grid-cols-1  md:px-10 md:pt-7 md:pb-20  xl:px-20 xl:pb-[84px]  2xl:px-[200px]">
      {children}
    </div>
  );
}
