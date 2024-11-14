import './header.style.css'
import {Menu} from "./Menu.jsx"
import {Logo} from "../common/Logo.jsx"


export const Header = () => {

    return (
        <header className="header">

            <div className="header__menu">
                <Menu/>
            </div>

            <Logo/>
        </header>
    )
}
