import React from 'react';
import './Contact.css';
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../motion';

function Contact() {
  return (
    <>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once :false, amount:0.25}} id="contact">
        <div className="container">
            <div className="row">
                <motion.div variants={fadeIn('right','tween',0.6,1)} className="contact-left">
                    <h1 className="sub-title">Contact Me</h1>
                    <p><i className="ri-send-plane-fill"></i>inderpalsingh4040@gmail.com</p>
                    <p><i className="ri-phone-fill"></i>+919023640440</p>
                    <div className="social-icons">
                        <a href="https://github.com/Inderpal004" target="_blank"><i className="ri-github-fill"></i></a>
                        <a href="https://www.instagram.com/i_am_inderpal/" target="_blank"><i className="ri-instagram-fill"></i></a>
                        <a href="www.linkedin.com/in/inderpal-singh-3a6453293" target="_blank"><i className="ri-linkedin-box-fill"></i></a>
                    </div>
                    <a href="/Inderpal-cv.pdf" className="btn btn-2" download>Download CV</a>
                </motion.div>
                <motion.div variants={fadeIn('left','tween',0.6,1)} className="contact-right">
                    <form action="https://formspree.io/f/xkndrzgn" method="POST">
                        <input type="text" name="Name" autoComplete='off' id="name" placeholder="Enter Your Name" required />
                        <input type="email" name="Email" autoComplete='off' id="email" placeholder="Enter Your Email" required />
                        <textarea name="Message" id="message" autoComplete='off' rows="6" placeholder="Your Message"></textarea>
                        <input type="submit" className="btn btn-2" value="Submit"/>
                    </form>
                </motion.div>
            </div>
        </div>
    </motion.div>

    <div className="copyright">
        Copyright &copy; Inder. Made With <i className="ri-heart-fill"></i> by
        Inderpal
    </div>

    </>
  )
}

export default Contact
