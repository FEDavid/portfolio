// navbarComponent.js
import React from 'react';
import '../styles.css';

function Component(props) {
  return (
    <div className='grid custom_pattern_blue'>
      <div className="w-full justify-self-center md:w-1/2 mt-8">
        <div className='h-64 overflow-hidden'>
          <a href={props.link} target='blank'>
            <img src={props.thumbnail} alt="My logo" className='object-cover w-full h-full transition hover:opacity-75' />
          </a>
        </div>
        <div className='p-6 text-left text-white custom_gradient md:rounded-b-2xl'>
          <h2 className='text-2xl font-semibold'>{props.title}</h2>
          <h2 className='mt-4 opacity-85'>{props.content}</h2>
          <div className='mt-6 flex text-sm text-[--custom_blue] gap-4'>
            {props.stack.map((item, index) => (
              <p key={index} className='px-3 pb-0.5 bg-[--custom_lime] rounded-3xl hover:opacity-85'>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;