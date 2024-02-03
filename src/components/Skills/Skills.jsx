import React from "react";
import css from "../People/People.module.scss";
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren, fadeIn, textVariant } from "../../utils/motion";

const Skills = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section="true"
      className={`paddings ${css.wrapper}`}
    >

      <a className="anchor" id="skills"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}>

        <div className={`flexCenter cssheading`}>
          <span className="primaryText">My Skills</span>
          <p style={{ marginTop: "2rem" }}>
            I've about <strong>more than 1</strong> Year experience as a <b> MERN Stack / Full Stack Developer </b> using various technologies which are showing below.
          </p>
        </div>

        <motion.div
          variants={fadeIn("right", "tween", 0.2, 0.7)}
          className="flexBetween">

          <div className="leftSkills">
            <div className="skillsHeading">
              <h1 className="head">Key Skills:</h1>

              <div className="ulDesign">
                <div>
                  <ul className="skillUl">
                    <li>GitHub</li>
                    <li className="skillItem">Material-UI</li>
                    <li>Stripe (Payment Method)</li>
                    <li className="skillItem">Flowbites</li>
                    <li>Cloudinary (File Storage)</li>
                    <li className="skillItem">Rest APIs</li>
                  </ul>
                </div>
                <div>
                  <ul className="skillUl">
                    <li>Yarn</li>
                    <li className="skillItem">OOP</li>
                    <li>TailwindCSS</li>
                    <li className="skillItem">Styled-Component</li>
                    <li>Bootstrap 5</li>
                    <li className="skillItem">Axios</li>
                  </ul>
                </div>
              </div>


            </div>
          </div>

          <motion.div variants={textVariant(0.5)} className="RightSkills">
            <div className="skillsHeading">
              <h1 className="head">Technical Skills:</h1>
              <div className="skillUl">
                <div className="ulDesign">
                  <div>
                    <ul className="skillUl">
                      <li>HTML</li>
                      <li className="skillItem">CSS</li>
                      <li>React.js</li>
                      <li className="skillItem">Redux Toolkit</li>
                      <li style={{ marginBottom: "20px" }}>Next.js</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="skillUl">
                      <li>JavaScript</li>
                      <li className="skillItem">Typescript</li>
                      <li>Node.js</li>
                      <li className="skillItem">Express.js</li>
                      <li>MongoDB</li>
                      <li className="skillItem">Ruby on Rails(2 months)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>

    </motion.section>
  );
};

export default Skills;