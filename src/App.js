import React from 'react';
import './App.css';
import {SkillsBar as Skills} from './components/Skills'
import { Parallax } from 'react-parallax';
import Projects from './components/Projects'
import ReactWOW from 'react-wow'
import 'animate.css'

function App() {
  return (
    <div className='main'>
      <Parallax
            bgImage={window.innerWidth < 650 ? require('./images/mobilebackground.jpg') :require('./images/background.jpeg')}
            bgImageAlt="the cat"
            strength={650}
            className='head-part'
        >

            <div>
            <ReactWOW animation='bounceIn' duration='2s'>
              <h3 className='name'><b id='react'>React</b> | <b id='vue'>Vue</b> JS developer</h3>          
              <h1 className='about-first' >
               <span>&lt;</span>
                Tigran Arshakyan 
               <span>/&gt;</span>
               <a href='https://github.com/Tik2004'>
                <img width='50px' src={require('./images/git.svg')} alt='github' />
               </a>
              </h1>
            </ReactWOW>
            </div>

      </Parallax>
      <div className='skills'>
        <h1 className='skills-text'>My Skills</h1>
        <Skills />
        <h1 className='about-skills-text'>About Me</h1>
        <ReactWOW animation='rollIn' duration='1s'>
          <div className='about-card'>
            I am 16 years old self-taught Programmer without expirience, I love to learn new things every day,
            and nothing can change my mind.
          </div>
        </ReactWOW>
        <h1 className='recent-projects'>My recent Projects</h1>
        <Projects />
      </div>
      <div className='footer'>
        <h1>Thank you, you can contact me on <a style={{color:'#f90363'}} href='https://www.instagram.com/ar_____t__/'>Instagram</a></h1>
      </div>
    </div>
  );
}

export default App;
