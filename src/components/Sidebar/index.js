import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/assets/images/logo-s.png';
import LogoSubtitle from '../../assets/assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => 
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src= {Logo} alt="logo" />
            <img className='sub-logo' src= {LogoSubtitle} alt="slobadan" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" to='/about' className='about-link'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" to='/contact' className='contact-link'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer"
                href='https://www.linkedin.com/in/arafat-erasung-16677a154/'>
                
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer"
                href='https://twitter.com/ArafatErasung'>
                
                <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer"
                href='https://github.com/Arafat-erasung'>
                
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer"
                href='https://www.youtube.com/channel/UCxBjp97r1QvBI0Av_pY_iQw'>
                
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
        </ul>


    </div>


export default Sidebar;