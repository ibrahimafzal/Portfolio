import React from 'react'
import css from "./Experties.module.scss"
import { projectExperience } from "../../utils/data";
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion"


const Experties = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={css.wrapper}
        >
            <a className="anchor" id="experties"></a>
            <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
                <div className={css.leftSide}>
                    {
                        projectExperience.map((exp, idx) => {
                            return (
                                <motion.div
                                    variants={fadeIn("right", "tween", (idx + 1) * 0.2, .7)}
                                    className={css.exp} key={idx}
                                >
                                    <div className='flexCenter' style={{ background: exp.bg }}>
                                        <exp.icon size={25} color="white" />
                                    </div>
                                    <div className=''>
                                        <span>{exp.name}</span>
                                        <span>{exp.projects}</span>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
                <motion.div
                    variants={textVariant(0.5)}
                    className={css.rightSide}
                >
                    <span className="primaryText">What do I help?</span>
                                <div>
                                    <p className='secondaryText'>
                                        I will help you with problem-solving and creating efficient, user-friendly applications. I have much experience in making an attractive and responsive websites
                                        with <a href="#skills" style={{ color: "orange" }} title="Click it here to view my skills">My Skills</a>, and also know about the Customization.
                                    </p>
                                    <p className='secondaryText'>
                                        I am always looking to learn new technologies and stay ahead of the curve. I am a team player,
                                        and I enjoy collaborating with others to build successful products.
                                    </p>
                                </div>
                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText'>20+</span>
                            <span className='secondaryText'>Projects completed</span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText'>9+</span>
                            <span className='secondaryText'>Happy Clients</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Experties