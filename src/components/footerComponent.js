// navbarComponent.js
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../styles.css';

function Component() {

  const gh_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://github.com/FEDavid" />
  const li_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://www.linkedin.com/in/david-t-mould/" />
  const lt_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://linktr.ee/dmould" />

  return (
    <div className="bg-[--custom_lime] h-min self-end text-xl font-bold text-[--custom_blue] ps-3 pe-2 px-3 flex justify-between whitespace-nowrap border-t">
      <h2 className="font-[Trebuchet_MS] text-xl w-min whitespace-nowrap mr-5 select-none self-center">david-mould.<span className='font-black'>DEV</span></h2>
      <ul id="socials" class="text-sm">
        <li class="inline-block">{gh_component}</li>
        <li class="inline-block mx-2">{li_component}</li>
        <li class="inline-block">{lt_component}</li>
      </ul>
    </div>
  );
}

export default Component;