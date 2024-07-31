import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import avatar from "../../../../assets/images/avatar.jpg";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  faBell,
  faCaretDown,
  faCheck,
  faComment,
  faComments,
  faEarthAsia,
  faEllipsisVertical,
  faGaugeHigh,
  faGear,
  faSignOut,
  faTableCells,
  faUser,
  faWrench,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const cx = classNames.bind(styles);

function Header({ toggleSidebar = () => {} }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [iconBarActive, setIconBarActive] = useState(false);
  const [isTriangleHovered, setIsTriangleHovered] = useState(false);
  const [bellVisible, setBellVisible] = useState(false);
  const [accountMenuVisible, setAccountMenuVisible] = useState(false);
  const bellIconRef = useRef<SVGSVGElement>(null);
  const bellContainerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const accountMenuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleBellContainer = () => {
    setBellVisible(!bellVisible);
  };

  const toggleAccountMenu = () => {
    setAccountMenuVisible(!accountMenuVisible);
  };

  const handleTriangleClick = () => {
    setBellVisible(false);
    setIsTriangleHovered(false);
  };

  const handleLinkClick = useCallback(() => {
    setDropdownVisible(false);
  }, []);

  const handleIconBarClick = () => {
    setIconBarActive(!iconBarActive);
    toggleSidebar();
  };

  useEffect(() => {
    if (!bellVisible) {
      setIsTriangleHovered(false);
    }
  }, [bellVisible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as Element | null;

      if (dropdownRef.current && !dropdownRef.current.contains(targetElement)) {
        if (targetElement && targetElement.closest("a")) {
          return;
        }
        setDropdownVisible(false);
      }
      if (
        bellContainerRef.current &&
        !bellContainerRef.current.contains(targetElement) &&
        bellIconRef.current &&
        !bellIconRef.current.contains(targetElement)
      ) {
        setBellVisible(false);
      }
      if (
        accountMenuRef.current &&
        !accountMenuRef.current.contains(targetElement)
      ) {
        setAccountMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, bellContainerRef, bellIconRef, accountMenuRef]);

  const notifications = [
    {
      id: 1,
      type: "nhắc nhở",
      message:
        "LLCT120205_23_3_07: THÔNG BÁO SỐ 6 - Về việc họp đồng bộ lần thứ 1",
    },
    {
      id: 2,
      type: "kỷ luật",
      message:
        "Các học viên sắp trượt trong Kinh te chinh tri Mac - Lenin_Nhom07 khóa học",
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "nhắc nhở":
        return (
          <FontAwesomeIcon
            className={cx("fa-comments")}
            icon={faComments as IconProp}
          />
        );
      case "kỷ luật":
        return (
          <FontAwesomeIcon
            className={cx("fa-lightbulb")}
            icon={faLightbulb as IconProp}
          />
        );
      default:
        return (
          <FontAwesomeIcon
            className={cx("fa-bell")}
            icon={faBell as IconProp}
          />
        );
    }
  };

  const links = [
    {
      text: "HDSD OBS Studio để quay màn hình",
      href: "https://www.facebook.com/nmkla62",
    },
    {
      text: "HDSD Jitsi để dạy trực tuyến",
      href: "https://github.com/MinhKhanhLA62",
    },
    {
      text: "Hướng dẫn Backup và Restore khóa học",
      href: "https://www.instagram.com/nguyenminh3625/",
    },
    {
      text: "Hướng dẫn chuyển nội dung H5P từ hệ thống cũ sang hệ thống mới",
      href: "https://www.youtube.com/@nguyenminhkhanh.la62",
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div
          className={cx("icon-bar-wrapper", {
            "icon-bar-active": iconBarActive,
          })}
          onClick={handleIconBarClick}
        >
          {Array(3)
            .fill(null)
            .map((_, idx) => (
              <div key={idx} className={cx("icon-bar")}></div>
            ))}
        </div>
        <div className={cx("flex-wrapper")}>
          <div className={cx("dropdown-social-media")} ref={dropdownRef}>
            <div
              className={cx("btn-dropdown", {
                "dropdown-active": dropdownVisible,
              })}
              onClick={toggleDropdown}
            >
              <div className={cx("icon-ellipsis-wrapper")}>
                {Array(3)
                  .fill(null)
                  .map((_, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      className={cx("ellipsis")}
                      icon={faEllipsisVertical as IconProp}
                    />
                  ))}
              </div>
              <span className={cx("text-to-html")}>
                Hướng dẫn dành cho giảng viên
              </span>
              <FontAwesomeIcon
                className={cx("icon-caret-down1")}
                icon={faCaretDown as IconProp}
              />
            </div>
            <div className={cx("social-media")}>
              <div className={cx("btn-earth-asia")}>
                <a
                  className={cx("earth-asia-wrapper")}
                  href="https://web.facebook.com/nmkla62"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  <FontAwesomeIcon
                    className={cx("icon-earth-asia")}
                    icon={faEarthAsia as IconProp}
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className={cx("btn-facebook")}>
                <a
                  className={cx("facebook-wrapper")}
                  href="https://web.facebook.com/nmkla62"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  <FontAwesomeIcon
                    className={cx("facebook")}
                    icon={faFacebookF as IconProp}
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
          <div className={cx("account-wrapper")}>
            <FontAwesomeIcon
              className={cx("btn-bell", {
                "triangle-hover": isTriangleHovered,
              })}
              icon={faBell as IconProp}
              onClick={toggleBellContainer}
              ref={bellIconRef}
            ></FontAwesomeIcon>
            {bellVisible && (
              <div
                className={cx("show-bell-container", {
                  visible: bellVisible,
                  hidden: !bellVisible,
                })}
                ref={bellContainerRef}
              >
                <div
                  className={cx("triangle-indicator")}
                  onMouseEnter={() => setIsTriangleHovered(true)}
                  onMouseLeave={() => setIsTriangleHovered(false)}
                  onClick={handleTriangleClick}
                ></div>
                <div className={cx("show-bell-header-container")}>
                  <h3 className={cx("show-bell-header-text")}>Các thông báo</h3>
                  <div className={cx("show-bell-header-actions")}>
                    <FontAwesomeIcon
                      className={cx("btn-check")}
                      icon={faCheck as IconProp}
                      title="Đánh dấu tất cả đã đọc"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      className={cx("btn-gear")}
                      icon={faGear as IconProp}
                      title="Tất cả thông báo"
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div className={cx("show-bell-content-container")}>
                  {notifications.length === 0 ? (
                    <div className={cx("empty-message")}>
                      Bạn không có thông báo nào
                    </div>
                  ) : (
                    <div className={cx("all-notifications")}>
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={cx("content-item-container")}
                        >
                          <a
                            className={cx("content-link")}
                            href="https://www.facebook.com/nmkla62"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={cx("content-item-body")}>
                              <div className={cx("notification-image")}>
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div className={cx("notification-text")}>
                                {notification.message}
                              </div>
                            </div>
                            <div className={cx("content-item-footer")}>
                              <div className={cx("timestamp")}>
                                cách đây 3 Ngày 8 giờ
                              </div>
                            </div>
                          </a>
                          <a
                            className={cx("view-all-content")}
                            href="https://www.facebook.com/nmkla62"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Xem tất cả thông báo
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  className={cx("see-all-link")}
                  href="https://www.facebook.com/nmkla62"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={cx("show-bell-footer-container")}>
                    See all
                  </div>
                </a>
              </div>
            )}
            <div
              className={cx("btn-account")}
              onClick={toggleAccountMenu}
              ref={accountMenuRef}
            >
              <span className={cx("account-name")}>Nguyen Minh Khanh</span>
              <span className={cx("account-avatar")}>
                <img
                  src={avatar}
                  alt="NMK"
                  className={cx("account-avatar-current")}
                />
              </span>
              <span>
                <FontAwesomeIcon
                  className={cx("icon-caret-down2")}
                  icon={faCaretDown as IconProp}
                />
              </span>
            </div>
            {accountMenuVisible && (
              <div className={cx("show-menu-account-container")}>
                <a
                  className={cx("menu-account")}
                  href="https://www.facebook.com/nmkla62"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={cx("icon-menu")}
                    icon={faGaugeHigh as IconProp}
                  ></FontAwesomeIcon>
                  <span className={cx("text-menu")}>Bảng điều khiển</span>
                </a>
                <div className={cx("dropdown-divider")}></div>
                <a
                  className={cx("menu-account")}
                  href="https://www.facebook.com/nmkla62"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={cx("icon-menu")}
                    icon={faUser as IconProp}
                  ></FontAwesomeIcon>
                  <span className={cx("text-menu")}>Profile</span>
                </a>
                <a
                  className={cx("menu-account")}
                  href="https://www.facebook.com/nmkla62"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={cx("icon-menu")}
                    icon={faTableCells as IconProp}
                  ></FontAwesomeIcon>
                  <span className={cx("text-menu")}>Điểm</span>
                </a>
                <a
                  className={cx("menu-account")}
                  href="https://www.facebook.com/nmkla62"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={cx("icon-menu")}
                    icon={faComment as IconProp}
                  ></FontAwesomeIcon>
                  <span className={cx("text-menu")}>Tin nhắn</span>
                </a>
                <a
                  className={cx("menu-account")}
                  href="https://www.facebook.com/nmkla62"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={cx("icon-menu")}
                    icon={faWrench as IconProp}
                  ></FontAwesomeIcon>
                  <span className={cx("text-menu")}>Tùy chọn</span>
                </a>
                <div className={cx("dropdown-divider")}></div>
                <a
                  className={cx("menu-account")}
                  href="https://www.facebook.com/nmkla62"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className={cx("icon-menu")}
                    icon={faSignOut as IconProp}
                  ></FontAwesomeIcon>
                  <span className={cx("text-menu")}>Sign out</span>
                </a>
              </div>
            )}
          </div>
          {dropdownVisible && (
            <div className={cx("dropdown-menu")}>
              <div className={cx("dropdown-menu-container")}>
                <ul className={cx("list-unstyled")}>
                  {links.map((link, idx) => (
                    <li key={idx} className={cx("nav-item")}>
                      <a
                        className={cx("nav-link")}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                      >
                        <div className={cx("text-dropdown")}>{link.text}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
