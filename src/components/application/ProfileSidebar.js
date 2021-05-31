import React from "react";
import { useStateValue } from "../../StateProvider";
import SidebarOption from "./SidebarOption";
import "./ProfileSidebar.css";
import {
  Subscriptions,
  Storage,
  Receipt,
  AccountBox,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

export default function ProfileSidebar() {
  const [{ user }] = useStateValue();

  return (
      <div className='profilesidebar'>
        <Avatar src={user.photoURL} alt={user.displayName} />
        <SidebarOption
          Icon={AccountBox}
          title='Account details'
          link='/profile'
        />
        <SidebarOption
          Icon={Subscriptions}
          title='My subscription'
          link='/profile/subscription'
        />
        <SidebarOption
          Icon={Storage}
          title='Privacy preferences'
          link='/profile/privacy'
        />
        <SidebarOption Icon={Receipt} title='Billing' link='/profile/billing' />
    </div>
  );
}
