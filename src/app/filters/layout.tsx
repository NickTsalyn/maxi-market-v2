import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="px-4 pt-4 pb-14 md:px-10 md:pt-7 md:pb-28 xl:px-20 xl:pb-20 2xl:px-[200px] bg-grey-bg-2 ">
      {children}
    </div>
  );
}
