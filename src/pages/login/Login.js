import React from 'react';
import maskGroup from '../../assets/login/MaskGroup.png';
import Logo from '../../assets/login/Logo.png';
import footerIcons from '../../assets/login/footerIcon.png';

import './style.css';

console.log(maskGroup);

const Login = () => {
  return (
    <div className='login-container' style={{backgroundImage:`url(${maskGroup})`}}>
      <div className='content-container'>

        <div className='logo-container'>
          <img alt="test IO" src={Logo} />
          <p>NU’s Loadtesting solution</p>
        </div>

        <form className='form-style'>
          <h3>Log in to your account</h3>

          <input className='input-style' type="text" name="username" placeholder='Username' value=""/>
          <input className='input-style' type="password" name="password" placeholder='Password' value="" />
          <button className='button-primary' type="submit">Login</button>
        </form>

      </div>
      <p>Can’t log in?</p>

      <div className='footer-container'>
        <div className='footer-inner-container'>
          <img alt="test IO" src={footerIcons} />
        </div>
        <p>Copyright (c) 2022, NU Technology Inc. All rights reserved worldwide.</p>
      </div>
    </div>
  )
}

export default Login