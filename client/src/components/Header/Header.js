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
                <div className='logo-contact'>
                    <h3><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg><span>: (801)-690-0645</span></h3>
                    <h3><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                        <span>: 1160 W 725 N, Centerville, UT 84014</span></h3>
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