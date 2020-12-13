import React from 'react';
import home1 from '../img/home1.png'

import {About, Description, Image, Hide} from '../styles'
//framer motion
import {motion} from 'framer-motion'
import {titleAnim, fade, photoAnim } from '../animation'
import Wave from './Wave'

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact me for any photography or video ideas thay You have. We have profesionals with skills
                </motion.p>
                <motion.button>Contact me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with camera"/>
            </Image>
            <Wave/>
        </About>
        )
}



export default AboutSection;
