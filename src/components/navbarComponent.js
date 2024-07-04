// navbarComponent.js
import React from 'react';
import '../styles.css';
// import testImage from '../media/test.jpg'; <img src={testImage} alt="My logo" />

function Component() {
  return (
    <div className="h-min self-start grid grid-cols-2 justify-between items-center header mb-5 bg-[--custom_blue_light] md:bg-transparent">
      <h2 className="font-[Trebuchet_MS] text-3xl w-min whitespace-nowrap text-white mr-5 select-none ms-5 pb-5 md:pb-0">david-mould.<span className='font-black'>DEV</span></h2>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon justify-self-end h-5 me-5 mb-5 hover:opacity-50 transition-opacity" for="menu-btn"><span class="navicon top-2"></span></label>
      <ul id="nav_menu" className='font-[Trebuchet_MS] text-white menu w-[500px] justify-items-end grid grid-cols-4 justify-self-end'>
        <a href="#"><li className='p-5 inline-block rounded-b hover:text-[--custom_blue] hover:bg-[--custom_lime]'>
            Home
          </li></a>
          <a href="#"><li className='p-5 inline-block rounded-b ml-5 hover:text-[--custom_blue] hover:bg-[--custom_lime]'>
          Portfolio
          </li></a>
          <a href="#"><li className='p-5 inline-block rounded-b ml-5 hover:text-[--custom_blue] hover:bg-[--custom_lime]'>
          Blog
          </li></a>
          <a href="#contact_link"><li className='p-5 inline-block rounded-b ml-5 hover:text-[--custom_blue] hover:bg-[--custom_lime]'>
          Contact
          </li></a>
      </ul>
    </div>
  );
}

export default Component;