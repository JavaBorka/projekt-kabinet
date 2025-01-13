import { Header } from "../Header/Header.jsx"
import { CardFullArticle} from "../Content/CardFullArticle.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { useLocation } from "react-router"
import { useState } from "react"
import { MenuList } from "../Header/MenuList.jsx"
import "./article.style.css"
 
export const CardDetailPage = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const location = useLocation()
    
    return (
        <div className={`app_container ${menuOpen && "menu_open"}`}>
            <div className="page__container">
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

                {menuOpen && <section className="menu"><MenuList/></section>}

                <CardFullArticle/>

                <Footer/>
            </div>
        </div>
    )
}