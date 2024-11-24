import './header.style.css'
import logo from "../Header/logo_kabinet.svg"
import { Menu } from "./Menu.jsx"

export const Header = ({menuOpen, setMenuOpen}) => {

    return (
        <header className="header">
            <div className="header__menu">
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </div>

            <div className="header__logo">
                <a className="header__link" href="#">
                    <img className="header__image" src={logo} alt="Kabinet logo"/>
                </a>
            </div>
        </header>
    )
}