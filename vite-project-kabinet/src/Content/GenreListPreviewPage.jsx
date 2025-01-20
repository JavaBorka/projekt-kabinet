import { Header } from "../Header/Header.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { useState } from "react"
import { MenuList } from "../Header/MenuList.jsx"
import "./article.style.css"
import { GenreContent } from "./GenreContent.jsx"
import { useLocation } from "react-router"

export const GenreListPreviewPage = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const location = useLocation();
    const { catId } = location.state

    return (
        <div className={`app_container ${menuOpen && "menu_open"}`}>
            <div className="page__container">
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

                {menuOpen && <section className="menu"><MenuList/></section>}

                <GenreContent catId={catId}/>
            
                <Footer/>
            </div>
        </div>
    )
}