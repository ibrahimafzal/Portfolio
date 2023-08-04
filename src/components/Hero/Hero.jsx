import React from 'react'
import css from "./Hero.module.scss"
import certificate from "../../imgs/certificate.png"
import person from "../../imgs/ib.png"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, slideIn } from "../../utils/motion"
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'

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
                        Full Stack Web Developer with a passion
                        <br />
                        Utilizing MongoDB, Express.js,
                        <br />
                        React.js, and Node.js
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
                        className=''
                    />
                </motion.div>

                {/* person email */}
                <div className={css.email}>
                    <a href="https://www.linkedin.com/in/ibrahim-afzal-552861257/" target={"_blank"} title="LinkedIn" rel='noreferrer noopener'>
                        <AiFillLinkedin size={"40px"} style={{ color: "blue" }} />
                    </a>
                    <a target={"_blank"} href="https://github.com/ibrahimafzal" title="Github" rel='noreferrer noopener'>
                        <AiFillGithub size={"40px"} style={{ color: "black" }} />
                    </a>
                    <a target={"_blank"} href="https://wa.me/+923107739779" rel="noopener noreferrer" title="WhatsApp">
                        <AiOutlineWhatsApp size={"40px"} style={{ color: "green" }} />
                    </a>
                </div>

                {/* Lower Elements */}
                <div className={css.lowerElements}>
                    <motion.div
                        variants={fadeIn("right", "tween", 0.3, 1)}
                        className={`${css.experience}`}
                    >
                        <div className="primaryText">2</div>
                        <div className="secondaryText">
                            <div>Years Experience</div>
                            <div>MERN Stack Developer</div>
                        </div>

                    </motion.div>

                    {/* <motion.div
                        variants={fadeIn("right", "tween", 0.3, 1)}
                        className={`${css.experience}`}
                    > */}
                    {/* <div className="primaryText">One</div>
                        <div className="secondaryText">
                            <div>Months Backend Experience in</div>
                            <div>Node.js , Express.js , MongoDB</div>
                        </div> */}

                    {/* </motion.div> */}

                </div>
            </motion.div>
        </section>
    )
}

export default Hero;