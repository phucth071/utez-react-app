import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../common/Header/HeaderIndex";
import Sidebar from "./Sidebar/SidebarIndex";
import Footer from "../common/Footer/FooterIndex";

import { ReactNode, useState } from "react";

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps): JSX.Element {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={cx("default-layout-wrapper")}>
      <Header toggleSidebar={toggleSidebar}/>
      <div className={cx("default-layout-container")}>
        <Sidebar isVisible={isSidebarVisible} />
        <div
          className={cx("default-layout-content", {
            "sidebar-visible": isSidebarVisible,
            "sidebar-hidden": !isSidebarVisible,
          })}
        >
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
