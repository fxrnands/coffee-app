import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return <div className="max-w-2xl pb-10 mx-auto">{children}</div>;
};

export default MainLayout;
