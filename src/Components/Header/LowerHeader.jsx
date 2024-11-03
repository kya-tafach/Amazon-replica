import React from 'react'
import { IoMdMenu } from "react-icons/io";

// import classes from './LowerHeader.module.css'
import classes from './Header.module.css'

function LowerHeader() {
  return (
    <>
      
      <div className={classes.lower__container}>
      <ul>
        <li>
            <IoMdMenu/>
            <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer service</li>
        <li>Registry</li>
        <li>Gift cards</li>
        <li>sell</li>
        <li>Medical care</li>
        <li>prime</li>
        <li>Buy Again</li>
        <li>Amazon Pay</li>
        <li>New Releases</li>
        <li>Best Sellers</li>
      </ul>
      </div>
  </>
  )
}

export default LowerHeader
