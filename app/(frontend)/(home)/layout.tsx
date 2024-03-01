import { Nav } from "@/components/nav";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="container  font-[14px] mt-3">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
