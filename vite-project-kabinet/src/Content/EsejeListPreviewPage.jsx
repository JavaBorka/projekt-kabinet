import { Header } from "../Header/Header.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { useState } from "react"
import { MenuList } from "../Header/MenuList.jsx"
import "./article.style.css"
import { EsejeContent } from "./EsejeContent.jsx"

export const EsejeListPreviewPage = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className={`app_container ${menuOpen && "menu_open"}`}>
            <div className="page__container">
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

                {menuOpen && <section className="menu"><MenuList/></section>}

                <EsejeContent/>
            
                <Footer/>
            </div>
        </div>
    )
}