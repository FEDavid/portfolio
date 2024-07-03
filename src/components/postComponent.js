// navbarComponent.js
import React from 'react';
import '../styles.css';

function Component(props) {
  return (
    <div className="w-full justify-self-center md:w-1/2 xl:w-full grid grid-rows-[min-content_1fr]">
      <div className='h-64 overflow-hidden'>
        <a href={props.link} target='blank'>
          <img src={props.thumbnail} alt="My logo" className='object-cover w-full h-full transition hover:opacity-75' />
        </a>
      </div>
      <div className='p-6 text-left text-white custom_gradient md:rounded-b-2xl'>
        <h2 className='text-2xl font-semibold'>{props.title}</h2>
        <p className='mt-4 opacity-80 h-[100px] text-ellipsis overflow-hidden line-clamp-4 transition-opacity'>{props.content}</p>
        <div className='mt-6 flex text-sm text-[--custom_blue] gap-4 flex-wrap'>
          {props.stack.map((item, index) => (
            <p key={index} className='px-3 pb-0.5 bg-[--custom_lime] rounded-3xl hover:opacity-80 transition-opacity'>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Component;