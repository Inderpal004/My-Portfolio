import React from 'react';
import './Education.css';
import { workExp } from '../data';
import { motion } from "framer-motion"
import { textVariant2,staggerContainer, zoomIn, fadeIn } from '../motion';

export default function Education() {
    return (
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once :false, amount:0.25}} className='container'>
            <h1 className='sub-title'>Education & Certification</h1>
            <div className="education">
                {
                    workExp.map((edu, index) => {
                        return <motion.div variants={textVariant2} className='edu' key={index}>
                            <div className="post">
                                <h1>{edu.place}</h1>
                                <p>{edu.tenure}</p>
                            </div>
                            <div className="role">
                                <h1>{edu.role}</h1>
                                {/* <p>{edu.detail}</p> */}
                            </div>
                        </motion.div>
                    })
                }
                <motion.div variants={zoomIn(1,1)} className="progressbar">
                    <motion.div variants={fadeIn("down","tween",2,1.5)} className="line"></motion.div>
                    <div><div className="circle" style={{ background: '#286F6c' }}></div></div>
                    <div><div className="circle" style={{ background: '#F2704E' }}></div></div>
                    <div><div className="circle" style={{ background: '#EEC048' }}></div></div>
                    <div><div className="circle" style={{ background: '#286F6c' }}></div></div>
                </motion.div>

            </div>
        </motion.div>
    )
}
