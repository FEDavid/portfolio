// navbarComponent.js
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import '../styles.css';

function Component() {

  const gh_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://github.com/FEDavid" />
  const li_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://www.linkedin.com/in/david-t-mould/" />
  const lt_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://linktr.ee/dmould" />

  return (
    <div className="bg-[--custom_lime] h-min self-end text-xl font-bold text-[--custom_blue] p-3 flex justify-between whitespace-nowrap ">
      <h2 className="font-[Trebuchet_MS] text-xl w-min whitespace-nowrap mr-5 select-none self-center">david-mould.<span className='font-black'>DEV</span></h2>
      {/* <ul id="socials" class="text-sm">
        <li class="inline-block">{gh_component}</li>
        <li class="inline-block mx-2">{li_component}</li>
        <li class="inline-block">{lt_component}</li>
      </ul> */}
      <Link to="/sitemap" className='hover:opacity-50 transition-opacity'>
        <div className='flex gap-1 dm-sans-regular-font text-base'>
          <span class="material-symbols-outlined self-center">map</span>
          <p className='relative'>Sitemap</p>
        </div>
      </Link>
    </div>
  );
}

export default Component;