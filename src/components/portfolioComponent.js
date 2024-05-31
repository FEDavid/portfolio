// portfolioComponent.js
import React, { useEffect, useState } from 'react';
import '../styles.css';
import testImage from '../media/filter_portrait.png';

function Component() {

  const [portfolioText, setPortfolioText] = useState('');

  useEffect(() => {
    fetch('/portfolio.txt')
      .then(response => response.text())
      .then(data => {
        setPortfolioText(data);
      });
  }, []);

  return (
    <div id="main_section" className=" w-[60%] justify-self-center text-white relative">
      <section className='relative z-10 text-left px-5 pb-5 w-2/3'>
        <h2 id="main_heading" className="text-9xl ml-[-7px] text-[--custom_lime] font-[Trebuchet_MS] font-semibold tracking-tight whitespace-nowrap [text-shadow: 6px 6px 9px rgba(0,0,0,0.3);]">David Mould</h2>
        <h3 id="sub_heading" className="text-3xl text-white font-[Trebuchet_MS] tracking-tighter whitespace-nowrap [text-shadow: 6px 6px 9px rgba(0,0,0,0.3);]">BSC(Hons) Web and Mobile Development student</h3>
        {/* <p>{portfolioText}</p> */}
      </section>
      {/* Absolute portrait picture */}
      <img id="main_img" src={testImage} alt="My portrait" className="absolute bottom-10 right-10 h-5/6 max-h-[600px] opacity-70"/>
    </div>
  );
}

export default Component;