import React from "react";
import ProfileSidebar from './ProfileSidebar'
import "./AccountDetails.css";

export default function AccountDetails() {
  return (
    <div className='accountDetails'>
      <ProfileSidebar />
      <div className='accountDetails__container'>
        <h1>Account details</h1>
      </div>
    </div>
  );
}
