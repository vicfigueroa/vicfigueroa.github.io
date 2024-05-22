import React from "react"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import '../App.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                <a href="https://www.linkedin.com/in/victoria-figueroa08/" target='_blank' style={{ color: '#0077b5' }}>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/vicfigueroa"  target='_blank' style={{ color: 'black' }}>
                    <FaGithub />
                </a>
                <a href="mailto:vic_figueroa08@yahoo.com" style={{ color: 'grey' }}>
                    <MdOutlineEmail />
                </a>
            </div>

            <p className='copyright'>Copyright @ 2024 || Built by Victoria Figueroa || Last Updated: May 22, 2024 </p>
        </footer>
    )
}
export default Footer;
