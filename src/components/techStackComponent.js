// postComponent.js
import React from 'react';
import '../styles.css';

function Component() {
  return (
    <div className="p-5 text-[--custom_blue] grid custom_pattern">
      <div className='justify-self-center lg:w-[60%] w-[90%]'>
        <h2 className="text-xl font-bold lg:text-4xl text-[--custom_blue]"><span className='lg:text-3xl text-base relative bottom-[3px] font-extralight tracking-tighter me-1 lg:me-2'>//</span>Tools and Technologies I Use</h2>
        <div className='grid mt-4 grid-cols-3 gap-6 tech_icons justify-items-center lg:grid-cols-6'>
          <i class="icon_tooltips devicon-html5-plain"><span className='tooltiptext'>HTML5</span></i>
          <i class="icon_tooltips devicon-css3-plain"><span className='tooltiptext'>CSS3</span></i>
          <i class="icon_tooltips devicon-tailwindcss-plain"><span className='tooltiptext'>Tailwind CSS</span></i>
          <i class="icon_tooltips devicon-javascript-plain"><span className='tooltiptext'>JavaScript</span></i>
          <i class="icon_tooltips devicon-jquery-plain"><span className='tooltiptext'>jQuery</span></i>
          <i class="icon_tooltips devicon-php-plain"><span className='tooltiptext'>PHP</span></i>
          <i class="icon_tooltips devicon-react-original"><span className='tooltiptext'>React</span></i>
          <i class="icon_tooltips devicon-mysql-plain"><span className='tooltiptext'>MySQL</span></i>
          <i class="icon_tooltips devicon-github-original"><span className='tooltiptext'>GitHub</span></i>
          <i class="icon_tooltips devicon-firebase-plain"><span className='tooltiptext'>Firebase</span></i>
          <i class="icon_tooltips devicon-python-plain"><span className='tooltiptext'>Python</span></i>
          <i class="icon_tooltips devicon-flask-original"><span className='tooltiptext'>Flask</span></i>
          <i class="icon_tooltips devicon-java-plain"><span className='tooltiptext'>Java</span></i>
          <i class="icon_tooltips devicon-csharp-plain"><span className='tooltiptext'>C#</span></i>
          <i class="icon_tooltips devicon-android-plain"><span className='tooltiptext'>Android</span></i>
          <i class="icon_tooltips devicon-flutter-plain"><span className='tooltiptext'>Flutter</span></i>
          <i class="icon_tooltips devicon-dart-plain"><span className='tooltiptext'>Dart</span></i>
          <i class="icon_tooltips devicon-bootstrap-plain"><span className='tooltiptext'>Bootstrap</span></i>   
        </div>
      </div>
    </div>
  );
}

export default Component;