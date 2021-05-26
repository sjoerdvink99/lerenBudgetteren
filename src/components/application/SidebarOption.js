import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarOption.css";

export default function SidebarOption({ Icon, title, link }) {
  const history = useHistory();

  const changePage = () => {
    history.push(link);
  };
  return (
    <div className='sidebarOption' onClick={changePage}>
      <Icon className='sidebarOption__icon' />
      <h3>{title}</h3>
    </div>
  );
}
