import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './NavigationBar.scss'

const NavigationBar = () => {
  return (
   <Fragment>
 <div className='navigation'>
     <Link clasName='logo-container' to={'/'}>
<CrownLogo />
 </Link>
 <div className='navs-link-container'> 
 <Link className='nav-link' to="/shop">
SHOP
 </Link>
 <Link className='nav-link' to="/sign-in">
     SIGN IN
 </Link>
 </div>

    </div>
    <Outlet />
    </Fragment>
  )
}

export default NavigationBar

