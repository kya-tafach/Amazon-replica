import React, { useContext,useState,useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import CarouselEffect from './Components/Carousel/CarouselEffect'
import { BiCategory } from 'react-icons/bi'
import Category from './Components/Category/Category'
import Product from './Components/Product/Product'
import {Type} from './Utility/action.type'
import {auth} from './Utility/firebase'
import {DataContext} from './Components/DataProvider/DataProvider'


import Routing from './Router'


function App() {

  const [{ user }, dispatch] = useContext(DataContext);

   useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({type:Type.SET_USER,
          user:authUser})
      }else{
        dispatch({type:Type.SET_USER,
          user:null})
      }
    })
  
   }, []);

  


  return (
    <>
      <Routing/>
    </>

  
   
  
  )
}

export default App
