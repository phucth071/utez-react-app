import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

interface SidebarProps {
  isVisible: boolean;
}

function Sidebar({ isVisible }: SidebarProps) {
  return (
    <aside className={cx("sidebar-wrapper", { hidden: !isVisible })}>
      <h2>Sidebar</h2>
    </aside>
  );
}

export default Sidebar;
