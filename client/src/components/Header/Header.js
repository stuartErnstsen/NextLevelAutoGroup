import './Header.scss';
import logo from '../../assets/images/nlag_logo_temp2.png';

const Header = props => {
    return (
        <header>
            <div id="logo-content-container">
                <img src={logo} alt='NEXT LEVEL' />
                <div className='logo-text'>
                    <h1>NEXT LEVEL</h1>
                    <h2><span>AUTO GROUP</span></h2>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <div className='nav-line nav-top-line'></div>
                        HOME
                        <div className='nav-line'></div>
                    </li>
                    <li>
                        <div className='nav-line nav-top-line'></div>
                        SERVICES
                        <div className='nav-line'></div>
                    </li>
                    <li>
                        <div className='nav-line nav-top-line'></div>
                        INVENTORY
                        <div className='nav-line'></div>
                    </li>
                    <li>
                        <div className='nav-line nav-top-line'></div>
                        ABOUT
                        <div className='nav-line'></div>
                    </li>
                    <li>
                        <div className='nav-line nav-top-line'></div>
                        CONTACT
                        <div className='nav-line'></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;