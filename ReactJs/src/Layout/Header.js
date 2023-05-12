import React from 'react'
import { Link } from 'react-router-dom'
// import hImg from '../images/headerImg.jpg'

const Header = () => {
  return (
    <>
    <img className='w-full headerimg mt-5' src='images/banner.jpg'/>
    <a class="btn btn-primary mt-5 btn-lg p-4" href="/about">BLOGS</a> 
    
 
    {/* <div className='w-full text-6xl pt-40 headerimg'>E-Commerce</div> */}
    
    </>
  )
}

export default Header