import { Header } from "../Header/Header.jsx"
import { CardFullArticle} from "../Content/CardFullArticle.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { useLocation } from "react-router"
import "./article.style.css"
 
export const CardDetail = () => {

    const location = useLocation()
    const originalTitle = location.state?.originalTitle;

    return (
        <div className="page__container">
            <Header/>
            <CardFullArticle title={originalTitle}/>
            <Footer/>
        </div>
    )
}