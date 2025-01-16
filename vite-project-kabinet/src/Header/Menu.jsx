import { MenuList } from "./MenuList.jsx"
import './menu.style.css'
import { useNavigate } from "react-router"

export const Menu = ({menuOpen, setMenuOpen}) => { 

    const navigate = useNavigate()

    return (
        <section className="menu">
            <button 
                className="menu__hamburger"
                onClick={() => {
                    setMenuOpen(!menuOpen)
                    navigate("/")
                }}
            >
            {menuOpen ? "✕" : "☰"}
            </button>

            <MenuList/>
        </section>
    )
  }