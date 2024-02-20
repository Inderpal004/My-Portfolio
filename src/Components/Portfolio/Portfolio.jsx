import React from 'react';
import './Portfolio.css';
import { motion } from "framer-motion"
import { fadeIn, staggerChildren} from '../motion';

export default function Portfolio() {
  return (
    <>
      <motion.div variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once :false, amount:0.25}} id="portfolio">
        <div className="container">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
                <motion.div variants={fadeIn('up',"tween",0.5,0.6)} className="work">
                    <img src="/work-4.png" />
                    <div className="layer">
                        <h3>Youtube Clone Website</h3>
                        <p>
                            Handcrafted using React Js.
                        </p>
                        <a target="_blank" href="https://vidtube-youtube.netlify.app/"><i className="ri-external-link-line"></i></a>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn('up',"tween",0.7,0.6)} className="work">
                    <img src="work2-1.png" />
                    <div className="layer">
                        <h3>Nike Store</h3>
                        <p>
                            Crafted with the Power of HTML, CSS, and JavaScript.
                        </p>
                        <a target="_blank" href="https://inderpal004.github.io/E-Commerce-Website/"><i className="ri-external-link-line"></i></a>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn('up',"tween",0.9,0.6)} className="work">
                    <img src="work3-1.png" />
                    <div className="layer">
                        <h3>Real Estate</h3>
                        <p>
                            Created With the Help of React Js.
                        </p>
                        <a target="_blank" href="https://inderpal004.github.io/Real-Estate/"><i className="ri-external-link-line"></i></a>
                    </div>
                </motion.div>
            </div>
            <a href="https://github.com/Inderpal004?tab=repositories" target="_blank" className="btn-p">See more</a>
        </div>
    </motion.div>

    </>
  )
}
