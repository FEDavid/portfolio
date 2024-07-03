// quickContactComponent.js
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../styles.css';

function Component() {

  const gh_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://github.com/FEDavid" />
  const li_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://www.linkedin.com/in/david-t-mould/" />
  const lt_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://linktr.ee/dmould" />

  return (
    <div className="bg-[--custom_blue] custom_pattern_blue grid pt-0 lg:pt-4">
      <div className='pt-5 pb-10 grid w-[60%] justify-self-center lg:grid-cols-2'>
          <div className='w-auto'>
              <h2 className="text-xl font-bold lg:text-3xl text-[--custom_lime]"><span className='lg:text-3xl text-base relative bottom-[3px] font-extralight tracking-tighter me-1 lg:me-2'>//</span>Want to get in touch?</h2>
              <form class="mt-5 justify-items-center grid gap-5 lg:pe-4">
                  <input type="text" placeholder="Name" class="p-2 rounded-md w-full"/>
                  <input type="email" placeholder="Email" class="p-2 rounded-md w-full"/>
                  <textarea placeholder="Message" class="p-2 rounded-md w-full h-[100px]"></textarea>
                  <button class="p-2 rounded-md w-full bg-[--custom_lime] text-[--custom_blue] font-bold hover:opacity-50 transition-opacity duration-[250ms]">Send</button>
              </form>
          </div>
          <div className='w-auto mt-8 lg:mt-0'>
            <h2 className="text-xl font-bold lg:text-3xl text-[--custom_lime] mb-4"><span className='lg:text-3xl text-base relative bottom-[1px] font-extralight tracking-tighter me-1 lg:me-2'>#</span>Socials</h2>
            <div className='grid lg:px-4 text-left gap-4'>
              <a className='rounded-full bg-[--custom_lime] hover:opacity-80 transition-opacity' href='https://github.com/FEDavid'>{gh_component}@Github<span className='hidden md:inline-block justify-self-end'>&nbsp;-&nbsp;@FEDavid</span></a>
              <a className='rounded-full bg-[--custom_lime] hover:opacity-80 transition-opacity' href='https://www.linkedin.com/in/david-t-mould/'>{li_component}@LinkedIn<span className='hidden md:inline-block justify-self-end'>&nbsp;-&nbsp;/david-t-mould/</span></a>
              <a className='rounded-full bg-[--custom_lime] hover:opacity-80 transition-opacity' href='https://linktr.ee/dmould'>{lt_component}@Linktree<span className='hidden md:inline-block justify-self-end'>&nbsp;-&nbsp;/dmould</span></a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Component;