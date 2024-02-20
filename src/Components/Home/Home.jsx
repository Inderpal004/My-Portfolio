import React from 'react';
import './Home.css';
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from 'react-scroll';

export default function Home() {
    const [text] = useTypewriter({
        words: ['Front-End Developer', 'Learner', 'Programmer'],
        loop: {},
        typeSpeed:70,
        deleteSpeed:50
      })
  return (
    <>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once :false, amount:0.25}} className="container" id='home'>
        <div className="featured-box" id='home'>
            <motion.div variants={fadeIn('right','tween',0.6,1)} className="featured-text">
                <div className="featured-text-card">
                    <span>Hey there! 👋 </span>
                </div>
                <div className="featured-name">
                    <p>I'm <span className="typedText">Inderpal</span></p>
                </div>
                <div className="featured-text-info">
                    <p className="typingText">{text}<Cursor cursorStyle='|' /></p>
                    <p className='small-text'>Let's create something awesome together! 🚀</p>
                </div>
                <div className="featured-text-btn">
                    <a href='/Inderpal-cv.pdf' className="btn-home" download>Download CV</a>
                    <Link to="portfolio"><button className="btn-home transparent"> View Project</button></Link>
                </div>
                <div className="socialheader-icons">
                    <div className="h-icon"><a href="https://www.instagram.com/i_am_inderpal/" target='_blank'><i className="ri-instagram-line"></i></a></div>
                    <div className="h-icon"><a href="www.linkedin.com/in/inderpal-singh-3a6453293" target="_blank"><i className="ri-linkedin-box-line"></i></a></div>
                    <div className="h-icon"><a href="https://www.instagram.com/i_am_inderpal/" target="_blank"><i class="ri-github-fill"></i></a></div>
                </div>
            </motion.div>

            <motion.div variants={fadeIn('left','tween',0.6,1)} className="featured-image">
                <div className="h-image">
                    {/* <img src="/pf11111.jpeg" alt="" /> */}
                    <img src="/pf11111-removebg-preview.png" alt="" />
                </div>
            </motion.div>
        </div>
    </motion.div> 
    </>
  )
}
