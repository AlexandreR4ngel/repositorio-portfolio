import './Header.style.css';
import { BsLinkedin, BsGithub } from "react-icons/bs"; // https://react-icons.github.io/react-icons/icons?name=bs

export default function Header() {
    return (
        <div className='SectionHeader'>
            <p>Sobre</p>
            <p>Qualificação</p>
            <p>Projetos</p>
            <a href="https://www.linkedin.com/in/alexandre-magno-rangel-193842222/" target="blank">
                <BsLinkedin />
            </a>
            <a href="https://github.com/AlexandreR4ngel" target="blank">
                <BsGithub />
            </a>
        </div>
    )
}