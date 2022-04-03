import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/assets/images/logo-s.png';
import LogoSubtitle from '../../assets/assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

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


    </div>


export default Sidebar;