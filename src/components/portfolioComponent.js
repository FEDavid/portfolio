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
    <div id="main_section" className=" w-[60%] justify-self-center text-white relative grid">
      <div class="z-10 grid">
        <section id="top_content" className='relative text-left px-5 pb-5 w-2/3 h-min'>
          <h2 id="main_heading" className="text-9xl ml-[-7px] text-[--custom_lime] font-[Trebuchet_MS] tracking-tight whitespace-nowrap [text-shadow: 6px 6px 9px rgba(0,0,0,0.3);]">David Mould</h2>
          <h3 id="sub_heading" className="text-3xl text-white font-[Trebuchet_MS] tracking-tighter whitespace-nowrap [text-shadow: 6px 6px 9px rgba(0,0,0,0.3);]">BSC(Hons) Web and Mobile Development student</h3>
        </section>
        <div id="bottom_content" class="self-end w-1/2 bg-[rgba(2,17,23,0.75)] p-5">
          <ul id="socials" class="mb-10">
            <li class="inline-block">{gh_component}</li>
            <li class="inline-block mx-5">{li_component}</li>
            <li class="inline-block">{lt_component}</li>
          </ul>
          <pre id="about_txt" style={{ whiteSpace: 'pre-wrap' }} class="self-end py-10 text-left text-pretty font-sans font-medium border-t">
            <h1 class="text-4xl font-bold text-[--custom_lime] mb-5">About me</h1>
            {portfolioText}
          </pre>
        </div>
      </div>
      {/* Absolute portrait picture */}
      <img id="main_img" src={testImage} alt="My portrait" className="absolute bottom-10 right-10 h-5/6 max-h-[600px] opacity-70"/>
    </div>
  );
}

export default Component;