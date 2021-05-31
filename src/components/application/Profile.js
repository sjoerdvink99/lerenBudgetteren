import React from "react";
import { useStateValue } from "../../StateProvider";
import SidebarOption from "./SidebarOption";
import "./Profile.css";
import {
  Subscriptions,
  Storage,
  Receipt,
  AccountBox,
} from "@material-ui/icons";
import AccountDetails from "./AccountDetails";
import Subscription from './Subscription'
import Privacy from './Privacy'
import Billing from './Billing'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Avatar } from "@material-ui/core";

export default function Profile() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='profile'>
      <div className='profile__sidebar'>
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
      <div className='profile__main'>
        <Router>
          <Switch>
            <Route exact path='/profile' component={AccountDetails} />
            <Route exact path='/profile/subscription' component={Subscription} />
            <Route exact path='/profile/privacy' component={Privacy} />
            <Route exact path='/profile/billing' component={Billing} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
