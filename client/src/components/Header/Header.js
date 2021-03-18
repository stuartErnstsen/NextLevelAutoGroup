import { useContext } from 'react';
import './Header.scss';
import logo from '../../assets/images/nlag_logo_temp2.png';
import AppContext from '../../Context/app-context';

const Header = props => {
    const { scrollPos } = useContext(AppContext)

    return (
        <header className={scrollPos > 0 ? 'scroll-header' : ''}>
            <div id="logo-content-container">
                <img src={logo} alt='NEXT LEVEL' className={scrollPos > 0 ? 'hide-logo' : ''} />
                <div className={`logo-text ${scrollPos > 0 ? 'scroll-logo-text' : ''}`}>
                    <h1>NEXT LEVEL</h1>
                    <h2><span>AUTO GROUP LLC</span></h2>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <div className='nav-line nav-top-line'></div>
                        <span>HOME</span>
                        <div className='nav-line'></div>
                    </li>
                    <li>
                        <div className='nav-line nav-top-line'></div>
                        <span>SERVICES</span>
                        <div className='nav-line'></div>
                    </li>
                    <li>
                        <div className='nav-line nav-top-line'></div>
                        <span>INVENTORY</span>
                        <div className='nav-line'></div>
                    </li>
                    <li>
                        <div className='nav-line nav-top-line'></div>
                        <span>ABOUT</span>
                        <div className='nav-line'></div>
                    </li>
                    <li>
                        <div className='nav-line nav-top-line'></div>
                        <span>CONTACT</span>
                        <div className='nav-line'></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;