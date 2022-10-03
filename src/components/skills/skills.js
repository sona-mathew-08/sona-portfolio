import React from "react";
import './skills.css';

import { Line } from 'rc-progress';

const Skills =()=>{
    const skillsData = [
    {
      number: 90,
      name: "HTML"
    },
    {
      number: 80,
      name: "Css"
    },
    {
      number: 80,
      name: "JavaScript"
    },
    {
      number: 70,
      name: "React"
    },
    {
        number: 70,
        name: "Node"
      },
    {
        number: 70,
        name: "Flutter"
      },
      {
        number: 70,
        name: "C"
      },
      {
        number: 70,
        name: "C++"
      }

  ];
    return(
        <div className="container container-skills">
            <div className="skills_text skills-lg">
                <h1>SKILLS</h1>
            </div>
                <div class="u-center">
                <section class="skills">
                {skillsData.map(({ number, name }) => {
                    return (
                    <div class="skill">
                        <h3 class="skill__type">{name}</h3>
                        <div class="skill__outer-bar">
                            <div class={`skill__inner-bar skill__inner-bar--${number}`}></div>
                        </div>
                    </div>
                    );
                })}
                    
                </section>
            </div>
            <div className="skills_text skills-sm">
                <h1>SKILLS</h1>
            </div>
        </div>
    );
}

export default Skills;