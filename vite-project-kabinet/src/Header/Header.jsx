import './header.style.css'
import logo from "../Header/logo_kabinet.svg"
import { Menu } from "./Menu.jsx"
import { Link } from 'react-router';
 
export const Header = ({menuOpen, setMenuOpen}) => {

    return (
        <header className="header">
            <div className="header__menu">
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </div>

            <div className="header__logo">
                <Link to="/">
                    <img className="header__image" src={logo} alt="Kabinet logo"/>
                </Link>
            </div>
        </header>
    )
}