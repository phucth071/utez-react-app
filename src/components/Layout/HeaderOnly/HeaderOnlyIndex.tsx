import { ReactNode } from "react";
import Header from "../common/Header/HeaderIndex";

interface DefaultLayoutProps {
  children: ReactNode;
}

function HeaderOnly({ children }: DefaultLayoutProps) {
  return (
    <div>
      <Header />
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
