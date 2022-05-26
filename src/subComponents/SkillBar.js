import React from 'react';
import './SkillsBar.css'


const SkillBar = () => {
    return (
      <ul>
  <li className='left'>
    <h2>Frontend</h2>
 
    <p style={{width:"70%" }}  data-value="80">HTML5</p>
    <progress max="100" value="80" class="html5">
   
      <div class="progress-bar">
        <span style={{width: "80%"}}>80%</span>
      </div>
    </progress>

    <p style={{width:"65%" }} data-value="60">CSS3</p>
    <progress max="100" value="60" class="css3">
   
      <div class="progress-bar">
        <span style={{width: "60%"}}>60%</span>
      </div>
    </progress>

    <p style={{width:"70%" }} data-value="70">JavaScript</p>
    <progress max="100" value="70" class="jquery">
   
      <div class="progress-bar">
        <span style={{width: "70%"}}>70%</span>
      </div>
    </progress>
    
  </li>


</ul>
      



    );
};

export default SkillBar;