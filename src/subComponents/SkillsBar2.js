import React from 'react';
import JavaScript from '../assets/Images/java-script.png'
import TypeScript from '../assets/Images/typescript.png'
import React1 from '../assets/Images/physics.png'
import Python from '../assets/Images/python.png'
import Java from '../assets/Images/java-script.png'
import CSS from '../assets/Images/css-3.png'
import './SkillsBar.css'


const SkillBarr = () => {
    return (
      <ul>
  <li className='right'>
    <h2>Backend</h2>

    <p style={{width:"70%" }} data-value="75">Python</p>
    <progress max="100" value="75" class="python">
   
      <div class="progress-bar">
        <span style={{width: "75%"}}>75%</span>
      </div>
    </progress>

    <p style={{width:"65%" }} data-value="70">React</p>
    <progress max="100" value="70" class="php">
   
      <div class="progress-bar">
        <span style={{width: "50%"}}>70%</span>
      </div>
    </progress>

    <p style={{width:"60%" }} data-value="45">Node.js</p>
    <progress max="100" value="45" class="jquery">
   
      <div class="progress-bar">
        <span style={{width: "45%"}}>45%</span>
      </div>
    </progress>

   
     
    
  </li>
</ul>
      



    );
};

export default SkillBarr;