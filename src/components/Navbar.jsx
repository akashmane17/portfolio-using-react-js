import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {

  }
  return (
    <>
      <div className="header-overlay"></div>
      <nav>
        <div className="header">
          {isMobileMenu ?
            (<div className="menu-bar" onClick={() => setIsMobileMenu(false)}>
              <div className="icon flex-center"><AiOutlineClose /></div>
            </div>) : (
              <div className="menu-bar" onClick={() => setIsMobileMenu(true)}>
                <div className="icon flex-center"><FaBars /></div>
              </div>
            )
          }

          <div className="logo"><h4>Lilf<span>o</span>x</h4></div>
          <ul className={`menu-list`} >
            <li><a href="">Home</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="">Project</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>

        </div>
      </nav>
      {isMobileMenu && (
        <ul className={"sidebar"}>
          <li><a href="/">Home</a></li>
          <li><a href="/#skills">Skills</a></li>
          <li><a href="/">Project</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      )}

    </>
  )
}

export default Navbar