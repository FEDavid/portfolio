// portfolioComponent.js
import React, { useEffect, useState } from 'react';
import '../styles.css';
import testImage from '../media/filter_portrait.png';
import { SocialIcon } from 'react-social-icons';

function Component() {

  const [portfolioText, setPortfolioText] = useState('');
  const gh_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://github.com/FEDavid" />
  const li_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://www.linkedin.com/in/david-t-mould/" />
  const lt_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://linktr.ee/dmould" />

  useEffect(() => {
    fetch('/portfolio.txt')
      .then(response => response.text())
      .then(data => {
        setPortfolioText(data);
      });
  }, []);

  return (
    <div id="main_section" className=" w-[60%] justify-self-center text-white relative grid mb-5">
      <div class="z-10 grid">
        <section id="top_content" className='relative text-left px-5 pb-5 w-2/3 h-min'>
          <h2 id="main_heading" className="text-9xl ml-[-7px] text-[--custom_lime] font-[Trebuchet_MS] font-semibold tracking-tight whitespace-nowrap [text-shadow: 6px 6px 9px rgba(0,0,0,0.3);]">David Mould</h2>
          <h3 id="sub_heading" className="text-3xl text-white font-[Trebuchet_MS] tracking-tighter whitespace-nowrap [text-shadow: 6px 6px 9px rgba(0,0,0,0.3);]">BSC(Hons) Web and Mobile Development student</h3>
        </section>
        <div id="bottom_content" class="self-end">
          <ul id="socials" class="mb-5">
            <li class="inline-block">{gh_component}</li>
            <li class="inline-block mx-5">{li_component}</li>
            <li class="inline-block">{lt_component}</li>
          </ul>
          <p class="self-end px-5 text-left mb-5">{portfolioText}</p>
          <p class="self-end px-5 text-left">{portfolioText}</p>
        </div>
      </div>
      {/* Absolute portrait picture */}
      <img id="main_img" src={testImage} alt="My portrait" className="absolute bottom-10 right-10 h-5/6 max-h-[600px] opacity-70"/>
    </div>
  );
}

export default Component;