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
      section className={`paddings ${css.wrapper}`}
    >

      <a className="anchor" id="skills"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}>

        <div className={`flexCenter cssheading`}>
          <span className="primaryText">My Skills</span>
          <p style={{ marginTop: "2rem" }}>
          I've about <strong>2</strong> Years experience as a <b> MERN Stack Developer </b> using various technologies like Typescript, Redux and Git.
          </p>
          {/* <p><strong>6</strong> months experience in Node.js, Express.js and MongoDB</p> */}
          {/* <p>The purpose of education is to make good human beings with skill and expertise...</p> */}
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
                    <li>React-Icons</li>
                    <li className="skillItem">Flowbites</li>
                    <li>NPM</li>
                  </ul>
                </div>
                <div>
                  <ul className="skillUl">
                    <li className="skillItem">Yarn</li>
                    <li>OOP</li>
                    <li className="skillItem">TailwindCSS</li>
                    <li>Styled-Component</li>
                    <li className="skillItem">Bootstrap 5</li>
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
                      <li>Typescript</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="skillUl">
                      <li className="skillItem">JavaScript</li>
                      <li>Node.js</li>
                      <li className="skillItem">Express.js</li>
                      <li>MongoDB</li>
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