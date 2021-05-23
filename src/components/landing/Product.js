import React from "react";
import { Typography } from "@material-ui/core";
import "./Product.css";

export default function Product() {
  return (
    <div className='product'>
      <Typography variant='h3'>Product</Typography>
      <div className='product__container'>
        <div className='product__left'>
          <img src='#' alt='leren budgetteren' />
        </div>
        <div className='product__right'>
          <Typography variant='p'>
            Leren Budgetteren is the company working hard to improve your day to
            day life. Our goal is to make sure everyone has a better future,
            especially helping those of you who earn a low wage or could use an
            extra helping hand. We do this by giving you a clear picture of your
            current financial state and we help you learn about your financials.
            With Leren Budgetteren, you can manage your income, gain clear
            insight in how much money you really have, and how you can best
            devide it over your expenditures. We know this can be very
            challenging, which is why with Leren Budgetteren we help you through
            every step of the way!
          </Typography>
        </div>
      </div>
    </div>
  );
}
