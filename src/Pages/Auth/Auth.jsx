import React, { useState,useContext } from 'react'
 import classes from './SignUp.module.css' 
import Layout from '../../Components/LayOut/LayOut'
import { Link, useNavigate} from 'react-router-dom'
import { auth } from '../../Utility/firebase'
import {ClipLoader } from 'react-spinners'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {DataContext} from '../../Components/DataProvider/DataProvider'
import {Type} from '../../Utility/action.type'

function Auth() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const  [error, setError] = useState("");

const [ user, dispatch ] = useContext(DataContext)
const navigate = useNavigate();
const [loading, setLoading] = useState({
    signIn:false,
    signUp:false
})
   


// console.log(user);
const authHandler = async (e) => {
   e.preventDefault();
//   console.log(e.target.name);
  if(e.target.name == "Sign In"){
    setLoading({...loading,signIn:true})
    signInWithEmailAndPassword(auth, email, password)
    .then((userInfo) => {
    
      dispatch({type:Type.SET_USER, 
        user:userInfo.user
      })
      setLoading({...loading,signIn:false})
      navigate('/');
    })
    .catch((err) => {
      setError(err.message);
      setLoading({...loading,signIn:false})
    //   console.log(err);
    });
  }else {
    setLoading({...loading,signUp:true})
    createUserWithEmailAndPassword(auth, email, password)
    .then((userInfo) => {
        
   
      dispatch({type:Type.SET_USER, 
        user:userInfo.user
      })
      setLoading({...loading,signUp:false})
      navigate('/');
    })
    .catch((error) => {
    //   console.log(error);
      setError(error.message);
      setLoading({...loading,signUp:false})
    });
  }
}
//   auth
//     .signInWithEmailAndPassword(email, password)
//     .then((auth) => {
//       console.log(auth);
//     })
//     .catch((error) => {
//       setError(error.message);
//     });
// };
 
// console.log(email, password)
  return (
    <section className={classes.login}>
        {/* logo */}
            <Link to="/">
                <img src="https://cdn4.iconfinder.com/data/icons/payment-methods-8/87/amazon-1024.png" alt="" />
        
        
                </Link>

        {/* form*/}
        <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">

        <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" />    

        </div>
        <div>
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" />

        </div>

            <button type="submit" 
            onClick={authHandler} 
            name= "Sign In"
            className={classes.login__signInButton}
            > {loading.signIn ? (
                <ClipLoader color="white" size={20}></ClipLoader>
            ): (
                "Sign In"
                )}
            
             
                </button>

        </form>
        {/* agreement */}
        <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

        {/* create account button */}
        <button type="submit" 
        onClick={authHandler} 
        name= "Sign Up"
        className={classes.login__registerButton}
         >
            {loading.signUp ? (
                <ClipLoader color="white" size={20}></ClipLoader>
            ): (
                "Create your Amazon Account"
                )}
           
            </button>

        {error && (
            <small style ={{ paddingTop:"5px", color : "red"  }}>({error}) </small>)}






        


        </div>

    </section>
  )
}

    export default Auth;
