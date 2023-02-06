import React from 'react'
import icon from '../assets/icon.png'
import { NavLink } from 'react-router-dom'
import '../Css/ListStyle.css'

const List = () => {
  return (
    <div>
        <header>
            <div className='container container-flex'>
                <div className='logocontainer'>
                    <img src={icon} alt="icon" className='logo' />
                    <h3>Pfactorial Technologies Pvt Ltd</h3>
                </div>
                <nav>
                    <div className='list'>
                        <NavLink to='/' className="litsItem">Home</NavLink>
                        <NavLink to='/about' className="litsItem">About Us</NavLink>
                        <NavLink to='/' className="litsItem">Services</NavLink>
                        <NavLink to='/' className="litsItem">CareerStudies</NavLink>
                        <NavLink to='/' className="litsItem">Gallery</NavLink>
                        <NavLink to='/' className="litsItem">Career</NavLink>
                        <NavLink to='/contact' className="litsItem">ContactUs</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default List