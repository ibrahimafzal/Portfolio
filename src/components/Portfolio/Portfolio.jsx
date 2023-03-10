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
            <a className="anchor" id="portfolio"></a>

            <div className={`flexCenter innerWidth ${css.container}`}>

                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className='primaryText'>My Latest Works</span>
                        <p style={{ marginTop: "15px" }}>Here checkout my projects I've completed recently.</p>
                    </div>

                    <span className='secondaryText'>Explore More Works</span>
                </div>

                {/* images */}
                <div className={`flexCenter ${css.showCase}`}>
                    <motion.img variants={fadeIn("up", "tween", 0.5, 0.6)} src={ShowCase1} alt="project" />
                    <motion.img variants={fadeIn("up", "tween", 0.7, 0.6)} src={ShowCase2} alt="project" />
                    <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src={ShowCase3} alt="project" />
                </div>
            </div>
        </motion.section>
    )
}

export default Portfolio;