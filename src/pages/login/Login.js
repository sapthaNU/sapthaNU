import React from 'react';
import maskGroup from '../../assets/login/MaskGroup.png';
import Logo from '../../assets/login/Logo.png';
import { Link } from 'react-router-dom';

import { DocumentationIcon,SupportIcon } from '../../assets/icons';

import './style.css';


const handleInput = (e) => {
  console.log(e.target.name, e.target.value);
}

const Login = () => {
  return (
    <div className='login-container' style={{backgroundImage:`url(${maskGroup})`}}>
      <div className='content-container'>

        <div className='logo-container'>
          <img alt="test IO" src={Logo} style={{width:'25%'}}/>
          <p>NU's Loadtesting solution</p>
        </div>

        <form className='form-style'>
          <h3>Log in to your account</h3>

          <input className='input-style' type="text" name="username" placeholder='Username' value="" onChange={handleInput}/>
          <input className='input-style' type="password" name="password" placeholder='Password' value="" onChange={handleInput}/>
          <button className='button-primary' type="submit">Login</button>
        </form>

      </div>
      <Link to="" className='forget-password'>Can't log in?</Link>

      <div className='footer-container'>
        <div className='footer-inner-container'>
          <Link to="" className='link-style'>
            <DocumentationIcon/>
            <p>Documentation</p>
          </Link>

          <Link to="" className='link-style'>
            <SupportIcon/>
            <p>Support</p>
          </Link>
          
        </div>
        <p>Copyright (c) 2022, NU Technology Inc. All rights reserved worldwide.</p>
      </div>
    </div>
  )
}

export default Login