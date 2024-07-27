// quickContactComponent.js
import React, { useState } from 'react';

import { SocialIcon } from 'react-social-icons';
import '../styles.css';

function Component() {

  const gh_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://github.com/FEDavid" />
  const li_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://www.linkedin.com/in/david-t-mould/" />
  const lt_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://linktr.ee/dmould" />
  const cp_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://codepen.io/FEDavid" />

  const [buttonText, setButtonText] = useState('Send');
  const [buttonTextColour, setButtonTextColour] = useState('text-[--custom_blue]');
  const [buttonColour, setButtonColour] = useState('bg-[--custom_lime]');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSending(true);

    setTimeout(() => {
      setButtonText('Sent!');
      setButtonColour('bg-[--custom_blue_light]');
      setButtonTextColour('text-[--custom_lime]');
      setIsSending(false);
    }, 3000);
  };

  return (
    <div id="contact_link" className="bg-[--custom_blue] custom_pattern_blue grid pt-0 lg:pt-4">
      <div className='py-8 grid w-[60%] justify-self-center lg:grid-cols-2'>
        <div className='w-auto'>
          {/* <h2 className="text-xl font-bold lg:text-3xl text-[--custom_lime]"><span className='lg:text-3xl text-base relative bottom-[3px] font-extralight tracking-tighter me-1 lg:me-2'>//</span>Want to get in touch?</h2> */}
          <form id="contact-form" class="justify-items-center grid gap-5 lg:pe-4" onSubmit={handleSubmit}>
            <input type="text" name="user_name" placeholder="Name" class="p-2 rounded-md w-full" />
            <input type="email" name="user_email" placeholder="Email" class="p-2 rounded-md w-full" />
            <textarea name="message" placeholder="Message" class="p-2 rounded-md w-full h-[100px]"></textarea>
            <button type="submit" value="Send" className={`p-2 transition-all rounded-md w-full ${buttonColour} ${buttonTextColour} font-bold hover:opacity-50 transition-opacity duration-[250ms]`}>{isSending ? <span>Sending...</span> : buttonText}</button>
          </form>
        </div>
        <div className='w-auto mt-8 lg:mt-0 hidden lg:block'>
          {/* <h2 className="text-xl font-bold lg:text-3xl text-[--custom_lime] mb-4"><span className='lg:text-3xl text-base relative bottom-[1px] font-extralight tracking-tighter me-1 lg:me-2'>#</span>Socials</h2> */}
          <div className='grid lg:px-4 text-left gap-4'>
            <a className='rounded-full bg-[--custom_lime] hover:opacity-80 transition-opacity' href='https://github.com/FEDavid'>{gh_component}@Github<span className='hidden md:inline-block justify-self-end'>&nbsp;-&nbsp;@FEDavid</span></a>
            <a className='rounded-full bg-[--custom_lime] hover:opacity-80 transition-opacity' href='https://www.linkedin.com/in/david-t-mould/'>{li_component}@LinkedIn<span className='hidden md:inline-block justify-self-end'>&nbsp;-&nbsp;/david-t-mould/</span></a>
            <a className='rounded-full bg-[--custom_lime] hover:opacity-80 transition-opacity' href='https://codepen.io/FEDavid'>{cp_component}@Codepen<span className='hidden md:inline-block justify-self-end'>&nbsp;-&nbsp;/FEDavid</span></a>
            <a className='rounded-full bg-[--custom_lime] hover:opacity-80 transition-opacity' href='https://linktr.ee/dmould'>{lt_component}@Linktree<span className='hidden md:inline-block justify-self-end'>&nbsp;-&nbsp;/dmould</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;