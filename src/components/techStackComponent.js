// postComponent.js
import React from 'react';
import '../styles.css';

function Component() {
  return (
    <div className="p-5 text-[--custom_blue] grid custom_pattern">
      <div className='justify-self-center lg:w-[60%] w-[90%]'>
        <h2 className="text-xl font-bold lg:text-4xl text-[--custom_blue]"><span className='lg:text-3xl text-base relative bottom-[3px] font-extralight tracking-tighter me-1 lg:me-2'>//</span>Tools and Technologies I Use</h2>
        <div className='grid mt-4 gap-6 tech_icons justify-items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <i class="icon_tooltips devicon-html5-plain"><span>HTML5</span></i>
          <i class="icon_tooltips devicon-css3-plain"><span>CSS3</span></i>
          <i class="icon_tooltips devicon-tailwindcss-plain"><span>Tailwind CSS</span></i>
          <i class="icon_tooltips devicon-javascript-plain"><span>JavaScript</span></i>
          <i class="icon_tooltips devicon-jquery-plain"><span>jQuery</span></i>
          <i class="icon_tooltips devicon-php-plain"><span>PHP</span></i>
          <i class="icon_tooltips devicon-react-original"><span>React</span></i>
          <i class="icon_tooltips devicon-mysql-plain"><span>MySQL</span></i>
          <i class="icon_tooltips devicon-github-original"><span>GitHub</span></i>
          <i class="icon_tooltips devicon-firebase-plain"><span>Firebase</span></i>
          <i class="icon_tooltips devicon-python-plain"><span>Python</span></i>
          <i class="icon_tooltips devicon-flask-original"><span>Flask</span></i>
          <i class="icon_tooltips devicon-java-plain"><span>Java</span></i>
          <i class="icon_tooltips devicon-csharp-plain"><span>C#</span></i>
          <i class="icon_tooltips devicon-android-plain"><span>Android</span></i>
          <i class="icon_tooltips devicon-flutter-plain"><span>Flutter</span></i>
          <i class="icon_tooltips devicon-dart-plain"><span>Dart</span></i>
          <i class="icon_tooltips devicon-bootstrap-plain"><span>Bootstrap</span></i>   
        </div>
      </div>
    </div>
  );
}

export default Component;