import { ReactNode } from "react";
import "./GlobalStyles.scss";

interface DefaultLayoutProps {
  children: ReactNode;
}

function GlobalStyles({ children }: DefaultLayoutProps) {
  return children;
}

export default GlobalStyles;
