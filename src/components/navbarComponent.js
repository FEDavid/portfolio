import React, { useRef } from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

function Component() {
  // Reference to the menu-btn checkbox
  const menuBtnRef = useRef(null);

  const handleLinkClick = () => {
    // Uncheck the menu-btn checkbox
    if (menuBtnRef.current.checked) {
      menuBtnRef.current.checked = false;
    }
  };

  return (
    <div className="h-min self-start grid grid-cols-2 justify-between items-center header bg-[--custom_blue_light] md:bg-transparent">
      <h2 className="font-[Trebuchet_MS] text-3xl w-min whitespace-nowrap text-white mr-5 select-none ms-5 pb-5 md:pb-0">david-mould.<span className='font-black'>DEV</span></h2>
      <input className="menu-btn" type="checkbox" id="menu-btn" ref={menuBtnRef} /> {/* Use ref here */}
      <label className="menu-icon justify-self-end h-5 me-5 mb-5 hover:opacity-50 transition-opacity" htmlFor="menu-btn">
        <span className="navicon top-2"></span>
      </label>
      <ul id="nav_menu" className='font-[Trebuchet_MS] text-white menu w-[500px] justify-items-end grid grid-cols-4 justify-self-end'>
        <Link to="/" onClick={handleLinkClick}><li className='p-5 inline-block rounded-b hover:text-[--custom_blue] hover:bg-[--custom_lime]'>Home</li></Link>
        <a href='https://github.com/FEDavid' target='blank' onClick={handleLinkClick}><li className='p-5 inline-block rounded-b ml-5 hover:text-[--custom_blue] hover:bg-[--custom_lime]'>Portfolio</li></a>
        <Link to="/blog" onClick={handleLinkClick}><li className='p-5 inline-block rounded-b ml-5 hover:text-[--custom_blue] hover:bg-[--custom_lime]'>Blog</li></Link>
        <a href="/#contact_link" onClick={handleLinkClick}><li className='p-5 inline-block rounded-b ml-5 hover:text-[--custom_blue] hover:bg-[--custom_lime]'>Contact</li></a>
      </ul>
    </div>
  );
}

export default Component;
