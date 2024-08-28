import React from 'react';
import "./MainComponent.css"
import Button from "../../../components/common/Button/Button"
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';

const MainComponent = () => {
    return (
        <div className='flex-info'>
            <div className="left-component">
                <motion.h1 
                    className="track-crypto-heading" 
                    initial={{opacity:0.5, scale:0, translateX:"500px"}} 
                    animate={{opacity:1, scale:1, translateX:"0"}} 
                    transition={{duration:1}}>
                        Track Crypto
                </motion.h1>
                <motion.h1 className="real-time-heading"
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{ duration:1, delay:0.5}}
                >Real Time.</motion.h1>
                <motion.p className='info-text'
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{ duration:1, delay:1.3}}
                >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
                <motion.div className="btn-flex" 
                    initial={{opacity:0, translateY:"10px"}}
                    animate={{opacity:1, translateY:"0px"}}
                    transition={{ duration:1, delay:1.8}}
                >
                    <Link to="/dashboard"> <Button text={"Dashboard"}/> </Link>
                    <Button text={"Share"} outlined={true}/>
                </motion.div>
            </div>
            <motion.div className='phone-container'
                    initial={{scale:0, translateY:"-200px"}}
                    animate={{scale:1, translateY:"0"}}
                    transition={{ duration:2}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >
                <img src={iphone} alt="" className='iphone'/>
                <img src={gradient} alt="" className='gradient'/>
            </motion.div>
        </div>
    );
}

export default MainComponent;
