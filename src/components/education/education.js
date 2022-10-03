import React from "react";
import './education.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import MecLogo from './college-logo3.svg';
import SapsLogo from './SAPS.png'
import CpsLogo from './CPS.png'

const Education=()=>{
return(
   
   <div className="container container-education">
        <div className="education">
            <h1>EDUCATION</h1>
        </div>
        <div className="timeline">
              <Timeline lineColor={'#ddd'}>
              <TimelineItem
                key="002"
                dateText="12/2020 – Present"
                dateInnerStyle={{ background: '#2997FF' }}
                style={{ color: '#2997FF' }}
                bodyContainerStyle={{
                  background: '#ddd',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
              >
                
                <p>
                <img className="mec-logo" src={MecLogo} alt="MEC" />
                B.Tech, Computer Science & Engineering<br/>
                Model Engineering College,Thrikkakara
                </p>
              
              </TimelineItem>
              <TimelineItem
                key="001"
                dateText="06/2018 – 03/2020"
                dateInnerStyle={{ background: '#2997FF',borderColor:'#2997FF' }}
                
                bodyContainerStyle={{
                  background: '#ddd',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
              >
              <p>
              <img className="saps-logo" src={SapsLogo} alt="MEC" />
              Senior Secondary,Science<br/>
              St. Antony's Public School, Anakkal<br/>
              Percentage:97.20%
              </p>
              </TimelineItem>
              
              <TimelineItem
                key="003"
                dateText="06/2006 – 03/2018"
                dateInnerStyle={{ background: '#2997FF' }}
                bodyContainerStyle={{
                  background: '#ddd',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
              >
                
                <p>
                <img src={CpsLogo} alt="MEC" />
                Secondary<br/>
                Carmel CMI Public School, Vazhakulam
                Percentage:98.40%
                </p>
              
              </TimelineItem>
              
              
            </Timeline>

        </div>
   </div>
);
}

export default Education;
