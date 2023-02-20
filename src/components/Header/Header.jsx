import React, { useRef, useState } from 'react'
import css from "./Header.module.scss"
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi"
import { motion } from 'framer-motion'
import { headerVariants, getMenuStyles } from '../../utils/motion'
import useHeaderShadow from "../../Hooks/useHeaderShadow"
import useOutsideAlerter from '../../Hooks/useOutsideAlerter'

const Header = () => {
    
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef()

    useOutsideAlerter(
        {
            menuRef,
            setMenuOpened
        }
    )





    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={headerVariants}
            viewport={{ once: true, amount: 0.25 }}
            className={`${css.wrapper} paddings`}
            style={{boxShadow: headerShadow}}
            >
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                    M.Ibrahim Afzal
                </div>
                <ul 
                ref={menuRef}
                className={`${css.menu} flexCenter`}
                style={getMenuStyles(menuOpened)}
                >
                    <li><a href='#experties'>Services</a></li>
                    <li><a href='#work'>Experience</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#people'>Testimonials</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>+92 310 7739 779</p>
                        <BiPhoneCall size={"40px"} />
                    </li>
                </ul>

                {/* for Medium asnd small screen */}
                <div className={css.menuIcon}
                    onClick={() => { setMenuOpened((prev) => !prev) }}
                >
                    <BiMenuAltRight size={"30px"} style={{cursor:"pointer"}} />
                </div>
            </div>
        </motion.div>
    )
}

export default Header