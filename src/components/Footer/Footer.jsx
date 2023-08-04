import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion'
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'



const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>


      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:linktoibrahim@gmail.com" title='Please click on "saying hi"'>saying hi</a>
          </span>
          <span style={{display:"flex", gap:"20px", marginTop:"20px"}}>
            <a href="https://www.linkedin.com/in/ibrahim-afzal-552861257/" target={"_blank"} title="LinkedIn" rel="noreferrer">
              <AiFillLinkedin size={"40px"} style={{ color: "blue" }} />
            </a>
            <a target={"_blank"} href="https://github.com/ibrahimafzal" title="Github" rel="noreferrer">
              <AiFillGithub size={"40px"} style={{ color: "black" }} />
            </a>
            <a target={"_blank"} href="https://wa.me/+923107739779" rel="noopener noreferrer" title="WhatsApp">
              <AiOutlineWhatsApp size={"40px"} style={{ color: "green" }} />
            </a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText" style={{ fontWeight: 800 }}>Information</span>
            <hr />
            <p style={{ marginTop: "10px" }}><span style={{ fontWeight: 800 }}>Address: </span> Satellite Town, Jhang, Punjab, Pakistan.</p>
            <p style={{ marginTop: "10px" }}><span style={{ fontWeight: 800 }}>Postal Code: </span>35200</p>
          </div>
          <ul className={css.menu}>
            <li> <a href="#experties">SERVICES</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#work-experience">EXPERIENCE</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;