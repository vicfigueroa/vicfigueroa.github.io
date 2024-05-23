import React from "react";
import '../App.css';

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skill-section">
                <h4 className="skillTitle">Front End</h4>
                <span className='skill'>JavaScript</span>
                <span className='skill'>HTML</span>
                <span className='skill'>CSS</span>
                <span className='skill'>React</span>
            </div>
            <div className="skill-section">
                <h4 className="skillTitle">Back End</h4>
                <span className='skill'>Node.JS</span>
                <span className='skill'>Express</span>
                <span className='skill'>MongoDB</span>
                <span className='skill'>Restful API Development</span>
                <span className='skill'>React</span>
            </div>
            <div className='skill-section'>
                <h4 className='skillTitle'>Developer Tools</h4>
                <span className='skill'>Git</span>
                <span className='skill'>npm</span>
                <span className='skill'>Postman</span>
                <span className='skill'>Agile Methodology</span>
                <span className='skill'>Scrum</span>
                <span className='skill'>JIRA</span>
            </div>
            <div className='skill-section'>
                <h4 className='skillTitle'>Miscellaneous</h4>
                <span className='skill'>Adobe Premiere Pro</span>
                <span className='skill'>Adobe Photoshop</span>
                <span className='skill'>After Effects</span>
            </div>
        </div>
    );
}

export default Skills;
