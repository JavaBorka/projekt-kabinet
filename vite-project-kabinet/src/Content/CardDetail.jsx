import { Header } from "../Header/Header.jsx"
import { CardFullArticle} from "../Content/CardFullArticle.jsx"
import { Footer } from "../Footer/Footer.jsx"
import "./article.style.css"
 
export const CardDetail = () => {

    return (
        <div className="page__container">
            <Header/>
            <CardFullArticle/>
            <Footer/>
        </div>
    )
}