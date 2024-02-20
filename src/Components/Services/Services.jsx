import React from 'react';
import './Services.css';
import { motion } from "framer-motion"
import { fadeIn, staggerChildren} from '../motion';

function Services() {
  return (
    <motion.div variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once :false, amount:0.25}} id="services">
    <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
            <motion.div variants={fadeIn('up',"tween",0.5,0.6)}>
                <i className="ri-code-s-slash-line"></i>
                <h2> Custom Website Development</h2>
                <p>
                   Emphasize your skills in building tailor-made websites from scratch, ensuring that they meet the unique needs and objectives of your clients.
                </p>
                <a href="#">Learn more</a>
            </motion.div>
            <motion.div variants={fadeIn('up',"tween",0.7,0.6)}>
                <i className="ri-crop-line"></i>
                <h2> Responsive Web Design</h2>
                <p>
                   Highlight your ability to create websites that look and function seamlessly on various devices, including desktops, tablets, and smartphones.
                </p>
                <a href="#">Learn more</a>
            </motion.div>
            <motion.div variants={fadeIn('up',"tween",0.9,0.6)}>
                <i className="ri-window-fill"></i>
                <h2> Front-End Development</h2>
                <p>
                   Specify your expertise in front-end technologies such as HTML, CSS, and JavaScript to create interactive and dynamic web applications.
                </p>
                <a href="#">Learn more</a>
            </motion.div>
        </div>
    </div>
</motion.div>

  )
}

export default Services
