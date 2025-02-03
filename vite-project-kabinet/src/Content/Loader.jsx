import loader_layer1 from "../Content/assets/logo_transparent_layer1.png"
import loader_layer2 from "../Content/assets/logo_transparent_layer2.png"
import "./article.style.css"

export const Loader = () => {

    return (
        <article className="article article--mob-align">
            <div className="article__loader-image-container"> 
                <img className="article__loader-image-layer1" src={loader_layer1} alt="Kabinet logo"/>
                <img className="article__loader-image-layer2" src={loader_layer2} alt="Kabinet logo"/>
            </div>
        </article>
    )
}