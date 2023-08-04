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
                    <li onClick={() => setMenuOpened(false)}><a href='#experties'>Services</a></li>
                    <li onClick={() => setMenuOpened(false)}><a href='#work-experience'>Experience</a></li>
                    <li onClick={() => setMenuOpened(false)}><a href='#projects'>Projects</a></li>
                    <li onClick={() => setMenuOpened(false)}><a href='#skills'>Skills</a></li>
                    <li onClick={() => setMenuOpened(false)} className={`flexCenter ${css.phone}`}>
                        <p>+92 310 7739 779</p>
                    <a target={"_blank"} href="https://wa.me/+923107739779" rel="noopener noreferrer" title="WhatsApp">
                        <BiPhoneCall size={"40px"} />
                    </a>
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