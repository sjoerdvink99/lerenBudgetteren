import React from "react";
import { Typography } from "@material-ui/core";
import image from "../../assets/contact.svg";
import "./Contact.css";

export default function Contact() {
  return (
    <div className='contact'>
      <Typography variant='h3'>Contact</Typography>
      <div className='contact__container'>
        <div className='contact__left'>
          <Typography variant='body1'>
            Leren Budgetteren Postadres:
            <br />
            Postbus 80125
            <br />
            3508 TC Utrecht Bestuursgebouw
            <br />
            Heidelberglaan 8<br />
            3584 CS Utrecht
            <br />
            <br />
            Tel. (030) 253 35 50
            <br />
            Whatsapp: 06-41634378 (online: 09.00 uur -17.00 uur)
            <br />
            E-mail: studievoorlichting@uu.nl
          </Typography>
        </div>
        <div className='contact__right'>
          <img src={image} alt='contact' />
        </div>
      </div>
    </div>
  );
}
