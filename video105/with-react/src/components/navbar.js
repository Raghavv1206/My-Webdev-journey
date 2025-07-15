import React from 'react'
import Footer from './footer'

const navbar = (props) => {
  return (
    <div>
      <div className='logo'>{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>about</li>
        <li>contact us</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default navbar
