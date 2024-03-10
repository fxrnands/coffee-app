import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return <div className="max-w-[28rem] pb-6 mx-auto">{children}</div>;
};

export default MainLayout;
