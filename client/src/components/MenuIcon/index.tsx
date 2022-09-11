import React, {FC, useState} from "react";
import {Button, Popover} from "antd";

//CSS
import styles from "./MenuIcon.module.css";
import "antd/dist/antd.css";

interface MenuIconProps {
  isMenuOpen?: boolean;
  cssClass?: string;
  handleClick: () => void;
  title?: string;
  content?: React.ReactNode;
}

const MenuIcon: FC<MenuIconProps> = ({
  isMenuOpen = false,
  cssClass = "",
  handleClick,
  title,
  content,
}) => {
  const handleIconClick = () => {
    handleClick();
  };
  // popupVisible;
  return (
    <Popover
      placement="right"
      title={title}
      content={content}
      trigger="click"
      visible={isMenuOpen}>
      <div
        className={`${isMenuOpen ? styles.change : ""} ${cssClass}`}
        onClick={handleIconClick}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </Popover>
  );
};

export default MenuIcon;
