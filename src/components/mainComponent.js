// portfolioComponent.js

// Imports
import React, { useEffect, useState } from 'react';
import '../styles.css';

// Images
import testImage from '../media/filter_portrait.png';
import flask_weather_thumbnail from '../media/flask_weather.png';
import php_ticket_thumbnail from '../media/php_ticket.png';
import react_portfolio_thumbnail from '../media/react_portfolio.png';

// Icons
import { SocialIcon } from 'react-social-icons';

// Components
import TechStackComponent from './techStackComponent';
import QuickContactsComponent from './quickContactComponent';
import PostComponent from './postComponent';



function Component() {

  const [aboutText, setAboutText] = useState('');
  const [postText1, setPostText1] = useState('');
  const [postText2, setPostText2] = useState('');
  const [postText3, setPostText3] = useState('');
  const gh_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://github.com/FEDavid" />
  const li_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://www.linkedin.com/in/david-t-mould/" />
  const lt_component = <SocialIcon bgColor="#D4DE29" fgColor="#021117" url="https://linktr.ee/dmould" />

  useEffect(() => {
    fetch('/about.txt')
      .then(response => response.text())
      .then(data => {
        setAboutText(data);
      });
  }, []);

  useEffect(() => {
    fetch('/flask_weather_txt.txt')
      .then(response => response.text())
      .then(data => {
        setPostText1(data);
      });
  }, []);

  useEffect(() => {
    fetch('/php_ticket_txt.txt')
      .then(response => response.text())
      .then(data => {
        setPostText2(data);
      });
  }, []);

  useEffect(() => {
    fetch('/react_portfolio_txt.txt')
      .then(response => response.text())
      .then(data => {
        setPostText3(data);
      });
  }, []);

  return (
    <div class="grid justify-center">
      <div id="main_section" className="w-[60%] justify-self-center text-white relative grid md:mb-8">
        <div class="grid z-10">
          <section id="top_content" className='relative text-left px-5 pb-5 w-2/3 h-min'>
            <h2 id="main_heading" className="text-9xl font-medium ml-[-8px] font-[Trebuchet_MS] tracking-tight whitespace-nowrap [text-shadow: 6px 6px 9px rgba(0,0,0,0.3);] bg-gradient-to-r from-[--custom_lime] to-[--custom_lime_dark] inline-block text-transparent bg-clip-text">David Mould</h2>
            <h3 id="sub_heading" className="text-3xl text-white font-[Trebuchet_MS] tracking-tighter whitespace-nowrap [text-shadow: 6px 6px 9px rgba(0,0,0,0.3);]">BSC(Hons) Web and Mobile Development student</h3>
          </section>
          <div id="bottom_content" class="self-end w-1/2 bg-[rgba(2,17,23,0.75)] p-5">
            <ul id="socials" class="mb-10">
              <li class="inline-block">{gh_component}</li>
              <li class="inline-block mx-5">{li_component}</li>
              <li class="inline-block">{lt_component}</li>
            </ul>
            <pre id="about_txt" style={{whiteSpace: 'pre-wrap'}} class="self-end pt-10 text-left text-pretty font-sans font-medium md:border-t">
              <h1 class="text-4xl font-bold text-[--custom_lime] mb-5 align-text-top"><span className=' text-3xl relative bottom-[3px] font-extralight tracking-tighter me-2'>//</span>About me</h1>
              {aboutText}
            </pre>
          </div>
        </div>
        {/* Absolute portrait picture */}
        <img id="main_img" src={testImage} alt="My portrait" className="absolute bottom-10 right-10 h-5/6 max-h-[600px] opacity-70"/>
      </div>
      <TechStackComponent />
      <div className='grid pt-8 gap-8 custom_pattern_blue xl:grid-cols-[29%_29%] justify-center'>
        <PostComponent thumbnail = {react_portfolio_thumbnail} title="React/Tailwind portfolio site" content={postText3} stack={["HTML5", "React", "JS", "Tailwind", "CSS3", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test"]} link="https://github.com/FEDavid/portfolio"/>
        <PostComponent thumbnail = {flask_weather_thumbnail} title="Flask weather web application" content={postText1} stack={["Python", "Flask", "HTML5", "CSS3"]} link="https://github.com/FEDavid/Basic_weather"/>
        <PostComponent thumbnail = {php_ticket_thumbnail} title="PHP ticket web application" content={postText2} stack={["PHP", "MySQL", "HTML5", "CSS3"]} link="https://github.com/FEDavid/PHP-ticket_system"/>
      </div>
      <QuickContactsComponent />
    </div>
  );
}

export default Component;