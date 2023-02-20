import React from 'react'
import css from "./Hero.module.scss"
import certificate from "../../imgs/certificate.png"
import person from "../../imgs/ibm10.png"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, slideIn } from "../../utils/motion"

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`innerWidth ${css.container}`}
            >

                {/* Upper Elements */}
                <div className={css.upperElements}>
                    <motion.span
                        variants={fadeIn("right", "tween", 0.2, 1)}
                        className='primaryText'
                    >
                        Hey there, <br /> I'm M.Ibrahim Afzal.
                    </motion.span>
                    <motion.span
                        variants={fadeIn("left", "tween", 0.4, 1)}
                        className='secondaryText'
                    >
                        I design beautiful simple
                        <br />
                        things, And I love what i do
                    </motion.span>
                </div>

                {/* person div */}
                <motion.div
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    className={css.person}
                >
                    <motion.img
                        variants={slideIn("up", "tween", 0.3, 1.0)}
                        src={person} alt=""
                    />
                </motion.div>

                {/* person email */}
                <a
                    className={css.email}
                    href="mailto:linktoibrahim@gmail.com"
                >
                    linktoibrahim@gmail.com
                </a>

                {/* Lower Elements */}
                <div className={css.lowerElements}>
                    <motion.div
                        variants={fadeIn("right", "tween", 0.3, 1)}
                        className={`${css.experience}`}
                    >
                        <div className="primaryText">2</div>
                        <div className="secondaryText">
                            <div>
                                Years
                            </div>
                            <div>Experience</div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", "tween", 0.5, 1)}
                        className={`${css.certificate}`}
                    >
                        <img src={certificate} alt="certificate" />
                        <span>CERTIFIED PROFESSIONAL</span>
                        <span>UI/UX DESIGNER</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero;