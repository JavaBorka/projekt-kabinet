import { Header } from "../Header/Header.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { MenuList } from "../Header/MenuList.jsx"
import { useState } from "react"
import { AboutKabinetArticle } from "./AboutKabinetArticle.jsx"

export const AboutKabinetPage = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className={`app_container ${menuOpen && "menu_open"}`}>
            <div className="page__container">
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

                {menuOpen && <section className="menu"><MenuList/></section>}

                <AboutKabinetArticle/>

                <Footer/>
            </div>
        </div>
    )
}