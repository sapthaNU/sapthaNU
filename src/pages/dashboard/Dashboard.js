import React from 'react'
import bg from '../../assets/dashboard/bg.png';
import colorBlur from '../../assets/dashboard/colorBlur.png';
import Logo from '../../assets/dashboard/logo.png';
// import HomeIcon from '../../assets/icons/HomeIcon';
import { HomeIcon,ProjectsIcon,ReportsIcon,TestsIcon,UsersIcon,HelpIcon,ArrowIcon,LogoutIcon } from '../../assets/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

import './style.css';
const Dashboard = () => {
  const isLogged = useSelector((state) => state.isLogged);
  console.log(isLogged)
  return (
    <div className='root-container' style={{ backgroundImage: `url(${bg}),url(${colorBlur})` }}>
      
      <div className='left-panel'>
        <img alt="Test IO" src={Logo} className="dashboard-logo" />
        <ul className='menu-container'>

          <li className='menu-item'>
            <Link to="" className='menu-active'>
              <HomeIcon className='menu-icon' isActive={true}/>
              <p>Home</p>
            </Link>
          </li>

          <li className='menu-item'>
            <Link to="" className=''>
              <ProjectsIcon className='menu-icon' isActive={false}/>
              <p>Projects</p>
              <ArrowIcon className='arrow-style'/>
            </Link>
          </li>
          <li className='menu-item'>
            <Link to="" className=''>
              <TestsIcon className='menu-icon' isActive={false}/>
              <p>Tests</p>
              <ArrowIcon className='arrow-style'/>
            </Link>
          </li>
          <li className='menu-item'>
            <Link to="" className=''>
              <ReportsIcon className='menu-icon' isActive={false}/>
              <p>Reports</p>
            </Link>
          </li>
          <li className='menu-item'>
            <Link to="" className=''>
              <UsersIcon className='menu-icon' isActive={false}/>
              <p>Users</p>
              <ArrowIcon className='arrow-style'/>
            </Link>
          </li>
          <li className='menu-item'>
            <Link to="" className=''>
              <HelpIcon className='menu-icon' isActive={false}/>
              <p>Help</p>
              <ArrowIcon className='arrow-style'/>
            </Link>
          </li>

        </ul>
        <div className='menu-item logout-style'>
          <Link to="" className=''>
            <LogoutIcon className='menu-icon'/>
            <p>Logout</p>
          </Link>
        </div>

      </div>


      <div className='main-panel'>
        <div className='header'>

        </div>
        <div className='content'>

        </div>
      </div>
    </div>
  )
}

export default Dashboard