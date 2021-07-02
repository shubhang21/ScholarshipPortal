import React from 'react'
import './header.css' 
import LOGO from './media/LOG.png'




const header1=()=>{
    return(
    <div className='header' id='myHeader'>
    <div className="header__logo">
    <img src={LOGO} alt="MANIPAL UNIVERSITY" />
        <span>SCHOLARSHIP PORTAL</span>
    </div>
    </div>
    )
}


export default header1;