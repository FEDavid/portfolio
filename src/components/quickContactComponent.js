// quickContactComponent.js
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../styles.css';

function Component() {

  const gh_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://github.com/FEDavid" className='me-2'/>
  const li_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://www.linkedin.com/in/david-t-mould/" className='me-2'/>
  const lt_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://linktr.ee/dmould" className='me-2'/>

  return (
    <div className="bg-[--custom_blue] pt-5 pb-10 custom_pattern_blue grid">
        <div className='justify-self-center lg:w-[30%] w-[80%]'>
            <h2 className="text-xl font-bold lg:text-4xl text-[--custom_lime]"><span className='lg:text-3xl text-base relative bottom-[3px] font-extralight tracking-tighter me-1 lg:me-2'>//</span>Want to get in touch?</h2>
            <ul id="socials" class="my-5 grid grid-rows-3 gap-6 justify-items-start">
                <li class="inline-block text-[--custom_lime]">{gh_component}&nbsp;@GitHub</li>
                <li class="inline-block text-[--custom_lime]">{li_component}&nbsp;@LinkedIn</li>
                <li class="inline-block text-[--custom_lime]">{lt_component}&nbsp;@Linktr.ee</li>
            </ul>
            <form class="mt-5 justify-items-center grid gap-5">
                <input type="text" placeholder="Name" class="p-2 rounded-md w-full"/>
                <input type="email" placeholder="Email" class="p-2 rounded-md w-full"/>
                <textarea placeholder="Message" class="p-2 rounded-md w-full h-[100px]"></textarea>
                <button class="p-2 rounded-md w-full bg-[--custom_lime] text-[--custom_blue] font-bold hover:opacity-50 transition-opacity duration-[250ms]">Send</button>
            </form>
        </div>
    </div>
  );
}

export default Component;