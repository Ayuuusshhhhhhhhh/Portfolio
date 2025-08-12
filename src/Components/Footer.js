import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Ayush Baranwal</h4>
      <h4>Copyright &copy; 2025 AB</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Ayuuusshhhhhhhhh" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/ayush-baranwal-9031b8256/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:ayushbaranwal2004@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/chutpagluuuuU/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer