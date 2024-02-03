import React from 'react';
import css from "./Portfolio.module.scss"
import { motion } from "framer-motion"
import { fadeIn, staggerChildren } from "../../utils/motion"
import ShowCase1 from "../../imgs/w1.png"
import ShowCase2 from "../../imgs/w2.png"
import ShowCase3 from "../../imgs/w3.png"

const Portfolio = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}
        >
            <a className="anchor" id="projects"></a>

            <div className={`flexCenter innerWidth ${css.container}`}>

                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className='primaryText'>My Latest Works</span>
                        <p style={{ marginTop: "15px" }}>Here checkout my projects I've completed recently.</p>
                    </div>

                    <a href="https://github.com/ibrahimafzal?tab=repositories" target="_blank" rel=" noreferrer" title='Visit My GitHub Repository'>
                        <span className='secondaryText'>
                            Explore More Works
                        </span>
                    </a>
                </div>

                {/* images */}
                <div className={`flexCenter ${css.showCase}`}>
                    <a href="https://app.ace-academy.nl" target='_blank' rel='noreferrer noopener'>
                        <motion.img variants={fadeIn("up", "tween", 0.5, 0.6)} src={ShowCase1} alt="project" style={{ width: "100%", borderRadius: "20px", height: "20rem" }} />
                    </a>
                    <a href="https://dev.agilityup.ai/" target='_blank' rel='noreferrer noopener'>
                        <motion.img variants={fadeIn("up", "tween", 0.7, 0.6)} src={ShowCase2} alt="project" style={{ width: "100%", borderRadius: "20px", height: "20rem" }} />
                    </a>
                    <a href="">
                        <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src={ShowCase3} alt="project" style={{ width: "100%", borderRadius: "20px", height: "20rem" }} />
                    </a>
                </div>
            </div>
        </motion.section>
    )
}

export default Portfolio;