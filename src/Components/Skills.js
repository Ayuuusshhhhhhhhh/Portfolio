import React from 'react'; 
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaJava, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiVercel } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        Java: <FaJava />,
        HTML: <FaHtml5 />,
        CSS: <FaCss3Alt />,
        PHP: <FaPhp />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Npm: <FaNpm />,
        Vercel: <SiVercel />
    };
    
    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
}

export default Skills;
