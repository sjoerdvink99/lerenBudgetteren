import React from "react";
import { useHistory } from "react-router-dom";
import "./NavbarItem.css";

export default function NavbarItem({ Icon, title, link, closeMenu }) {
  const history = useHistory();

  const changePage = () => {
    history.push(link);
    if (closeMenu) {
      closeMenu();
    }
  };
  return (
    <div className='navbarItem' onClick={changePage}>
      <Icon className='navbarItem__icon' />
      <h3>{title}</h3>
    </div>
  );
}
