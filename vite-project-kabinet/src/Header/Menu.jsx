import { MenuList } from "./MenuList.jsx"
import './menu.style.css'

export const Menu = ({menuOpen, setMenuOpen}) => { 

    return (
        <section className="menu">
            <button 
                className="menu__hamburger"
                onClick={() => {
                    setMenuOpen(!menuOpen)
                }}
            >
            {menuOpen ? "✕" : "☰"}
            </button>

            <MenuList/>
        </section>
    )
  }