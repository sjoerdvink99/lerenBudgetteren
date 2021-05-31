import React from 'react';
import ProfileSidebar from './ProfileSidebar';
import './Billing.css'

export default function Billing() {
    return (
        <div className='billing'>
            <ProfileSidebar />
            <div className='billing__container'>
                <h1>Billing!!!</h1>
            </div>
        </div>
    )
}