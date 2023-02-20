import React from "react";
import css from "../People/People.module.scss";
import css2 from "./Skills.module.scss";
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
            I got a job that was in accordance with the salary and field of work
          </p>
          <p>The process of submitting an appilication was quite cosy</p>
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
                    <li>UI Designing</li>
                    <li className="skillItem">Material UI</li>
                    <li>Git</li>
                    <li className="skillItem">React-Icons</li>
                  </ul>
                </div>
                <div>
                  <ul className="skillUl">
                    <li>Flowbites</li>
                    <li className="skillItem">NPM</li>
                    <li>Yarn</li>
                    <li className="skillItem">OOP</li>
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
                      <li className="skillItem">JavaScript</li>
                      <li>React.Js</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="skillUl">
                      <li className="skillItem">CSS</li>
                      <li>TailwindCSS</li>
                      <li className="skillItem">BootStrap</li>
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