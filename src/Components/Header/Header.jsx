import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5"
//  import LowerHeader from './LowerHeader';

import classes from "./Header.module.css"
 import { Link } from 'react-router-dom';
import { BiCartDownload } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';


function Header() {
    const [{ user, basket }, dispatch] = useContext(DataContext);
    const totalItem = basket?.reduce((amount, item) => {
      return item.amount + amount;
    }, 0);
  return (
   
    <section> 
        <section className={classes.fixed}>
              
            <div className={classes.header__container}>
                {/* log */}
                <div className={classes.logo__container}>
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </Link>
               
                {/* delivery */}
                {/* <span>icon</span> */}
                <div className={classes.delivery__container}>
                    <span>
                        <IoLocationOutline />
                    </span>
                    <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
                    </div>
                </div>
                </div>
          
            {/* search */}
           
            <div className={classes.search__container}>
                
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" name="" id="" placeholder='search product'/>
                {/* {search icon} */}
                <IoSearch size={38} />
            </div>
            {/* right side a */}
            <div className={classes.order__container}>
                    <Link to="/" className={classes.language}>
                <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
                    <select>

                        <option value="">EN</option>
                        <option value="">Amharic</option>
                        <option value="">JP</option>
                        <option value="">Ch</option>
                        <option value="">It</option>
                    </select>
                    </Link >    
                    {/* three components */}
                     <Link to= {!user && "/auth"} >
                     <div>
                        { user ? (

                            <>
                             <p> Hello {user?.email.split( "@")[0]}</p>
                            
                             <span onClick ={() => auth.signOut()}  
                                >sign out</span>
                            </>
                               
                            ):( 
                            <>
                               
                            <p> Hello, sign in</p>
                            <span>account & list</span>
                             </> 
                        )}

                       
                     </div>
                     </Link >
                     {/* order */}
                     <Link  to="/orders">
                     <div >
                        <p>Returns</p>
                        <span>& orders</span>
                     </div>
                     </Link >
                     {/* cart */}
                    
                     <Link  to="/cart" className={classes.cart}>
                     <div>
                    
                        <BiCartDownload  size = {35}/>
                        
                        <span>{totalItem}</span>
                       
                     </div>
                     </Link >
                </div>

                </div>
      </section>
      <LowerHeader />
    </section>
    
  
  )
}

 export default Header
