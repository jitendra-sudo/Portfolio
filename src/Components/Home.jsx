import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import HomeImage from './HomeImage.png';
import Education from './Education';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Statistics from './Statistics';
import Contact from './Contact';
import Resume from './JitendraSaini-Resume.pdf'
import './Home.css';


function DrawerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="menu-btn" onClick={toggleSlider}>
        {isOpen ? 'Close Menu' : 'Menu'}
      </button>
      <div className={`slider ${isOpen ? 'open' : ''}`}>
        <ul className="links-list">
        <li><a className="linkt" href="#">Home</a></li>
        <li><a className="linkt" href="#about">About</a></li>
        <li><a className="linkt" href="#education">Education</a></li>
        <li><a className="linkt" href="#skills">Skills</a></li>
        <li><a className="linkt" href="#projects">Projects</a></li>
        <li><a className="linkt" href="#statistics">Statistics</a></li>
        <li><a className="linkt" href="#contact">Contact</a></li>
         <a  style={{border:'none'}} href={Resume} download> <button className='ResumeMenu' >Resume</button> </a>
        </ul>
      </div>
    </div>
  );
}

function Home() {
  const [isMobile] = useMediaQuery("(max-width: 850px)");

  useEffect(() => {
    const elements = document.getElementsByClassName('typewrite');
    for (let element of elements) {
      const toRotate = JSON.parse(element.getAttribute('data-type'));
      const period = parseInt(element.getAttribute('data-period'), 10) || 2000;
      let i = 0;
      let txt = '';
      let isDeleting = false;

      const type = () => {
        const current = toRotate[i];
        if (isDeleting) {
          txt = current.substring(0, txt.length - 1);
        } else {
          txt = current.substring(0, txt.length + 1);
        }

        element.querySelector('.wrap').textContent = txt;

        let speed = 100;
        if (isDeleting) {
          speed /= 2;
        }

        if (!isDeleting && txt === current) {
          speed = period;
          isDeleting = true;
        } else if (isDeleting && txt === '') {
          isDeleting = false;
          i = (i + 1) % toRotate.length;
          speed = 500;
        }

        setTimeout(type, speed);
      };

      type();
    }
  }, []);

  return (
    <>
      <div id="container">
        <header>
          <div className="logo">
            <h3>Jitendra</h3>
          </div>
          <div >
          {!isMobile ? (
            <nav id="nav-menu">
            <a className="navPage" href="#">Home</a>
            <a className="navPage" href="#about">About</a>
            <a className="navPage" href="#edu">Education</a>
            <a className="navPage" href="#skills">Skills</a>
            <a className="navPage" href="#projects">Projects</a>
            <a className="navPage" href="#statistics">Statistics</a>
            <a className="navPage" href="#contact">Contact</a>
            
            <a  style={{border:'none' , color:'transparent'}} href={Resume}  download> <button className='Resume' >Resume</button> </a>
            </nav>
          ) : (
            <DrawerMenu />
          )}


          </div>
        </header>

        <main>
          <div className="hero">
            <h1 id="animatedText">
              <a href=""  className="typewrite"  data-period="2000"  data-type='[ "Hi, I am Jitendra Saini.", "I am Creative.", "I Love to Develop." ]'>
                <span className="wrap"></span>
              </a>
            </h1>
            <p>Full-Stack Developer passionate about building scalable web applications</p>
            <div className="logoM">
              <img src={HomeImage} alt="Developer" />
            </div>
          </div>
        </main>
      </div>

      <About />
      <Education />
      <Skills />
      <Projects />
      <Statistics />
      <Contact />
    </>
  );
}

export default Home;
