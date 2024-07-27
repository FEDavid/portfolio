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
    <div className="bg-[--custom_lime] h-min self-end text-xl font-bold text-[--custom_blue] p-2 flex justify-between whitespace-nowrap ">
      <h2 className="font-[Trebuchet_MS] text-xl w-min whitespace-nowrap mr-4 select-none self-center">david-mould.<span className='font-black'>DEV</span></h2>
      {/* <ul id="socials" class="text-sm">
        <li class="inline-block">{gh_component}</li>
        <li class="inline-block mx-2">{li_component}</li>
        <li class="inline-block">{lt_component}</li>
      </ul> */}

      <Link to="/sitemap" className='hover:opacity-50 transition-opacity flex gap-1 dm-sans-regular-font text-base'>
        <svg width="30" height="30" viewBox="0 0 300 400">
          <defs>
            <mask id="mask_btm">
              <rect width="280" height="85" fill="white" x="10" y="190" />
            </mask>
          </defs>
          <rect width="40" height="150" x="130" y="125" fill="black" />
          <rect width="250" height="100" rx="40" ry="40" fill="none" stroke-width="50" stroke="black" x="25" y="200" mask="url(#mask_btm)" />
          <rect rx="20" ry="20" width="100" height="100" fill="black" x="100" y="25" />
          <rect rx="20" ry="20" width="100" height="100" fill="black" x="100" y="275" />
          <rect rx="20" ry="20" width="100" height="100" fill="black" transform="translate(-25, 275)" />
          <rect rx="20" ry="20" width="100" height="100" fill="black" transform="translate(225, 275)" />
        </svg>
      </Link>

    </div>
  );
}

export default Component;