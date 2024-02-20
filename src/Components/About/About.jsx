import React from 'react';
import './About.css';
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textVariant } from '../motion';

export default function About() {
  return (
   <>
   <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once :false, amount:0.25}} id="about">
        <div  className="container">
            <div className="about-row">
                <motion.div variants={fadeIn('right','tween',0.4,1)} className="about-col-1">
                    <img src="/pf2.jpg" />
                </motion.div>

                <div className="about-col-2">
                    <h1 className="sub-title about-heading">About Me</h1>
                    <motion.p variants={textVariant(0.5)}>
                        As a recent graduate with a strong passion for web development, I am eager to start my career as a Front End Web Developer. Committed to utilizing my skills in HTML, CSS, JavaScript, and React JS, I aim to contribute to creative web projects. My objective is to acquire practical experience, collaborate with talented teams, and continually enhance my expertise in web development. Excited to tackle challenges, learn from experienced professionals, and make a meaningful impact in front-end development.
                    </motion.p>

                    <motion.div variants={textVariant(0.5)} className="tab-titles">
                        <p className="tab-links" >
                            Skills
                        </p>
                    </motion.div>

                    <div className="tab-contents" id="skills">
                        <ul>
                            <motion.li variants={fadeIn('up',"tween",0.4,0.6)}><img src="/s1.png" alt="" /></motion.li>
                            <motion.li variants={fadeIn('up',"tween",0.5,0.6)}><img src="/s2.png" alt="" /></motion.li>
                            <motion.li variants={fadeIn('up',"tween",0.6,0.6)}><img src="/s5.png" alt="" /></motion.li>
                            <motion.li variants={fadeIn('up',"tween",0.7,0.6)}><img src="/s3.png" alt="" /></motion.li>
                            <motion.li variants={fadeIn('up',"tween",0.8,0.6)}><img src="/s4.png" alt="" /></motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>

   </>
  )
}
