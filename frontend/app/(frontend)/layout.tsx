import { TopNav } from "@/components/home/top-nav";
import { Nav } from "@/components/nav";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="container  font-[14px] mt-3">
        <TopNav />
        {children}
    </div>
  );
};

export default Layout;
