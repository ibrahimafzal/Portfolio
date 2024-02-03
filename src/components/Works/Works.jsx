import React from 'react'
import css from "./Works.module.scss"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textVariant2, zoomIn } from "../../utils/motion"
import { workExp } from '../../utils/data'



const Works = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}
            >
                <a className="anchor" id="work-experience"></a>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className='primaryText yPaddings'>
                    My Work Experience
                </span>

                <div className={`flexCenter ${css.experiences}`}>
                    {
                        workExp.map((exp, idx) => {
                            return (
                                <motion.div
                                    variants={textVariant2}
                                    className={`res ${css.exp}`}
                                    key={idx}
                                >
                                    <div className={css.post}>
                                        <h1>{exp.company}</h1>
                                        <hr style={{width:"19rem"}}/>
                                        <h3 style={{color:"rgb(76 85 93)"}}>{exp.place}</h3>
                                        <p>{exp.tenure}</p>
                                        <p style={{lineHeight:"9px", color:"rgb(76 85 93)"}}>{exp.totalTime}</p>
                                    </div>
                                    <div className={css.tenure}>
                                        <h1>{exp.role}</h1>
                                        <p className="work-details">{exp.detail}</p>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                    <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
                        <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
                        <div><div className={css.circle} style={{ background: "#286F6C" }}></div></div>
                        <div><div className={css.circle} style={{ background: "#F2704E" }}></div></div>
                        <div><div className={css.circle} style={{ background: "#EEC048" }}></div></div>
                    </motion.div>
                </div>

            </div>
        </motion.section>
    )
}

export default Works