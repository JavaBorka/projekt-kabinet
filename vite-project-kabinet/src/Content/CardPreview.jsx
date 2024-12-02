import { Image } from "./Image.jsx"
import { CardPreface } from "./CardPreface.jsx"
import { Link } from 'react-router';
import "./card.style.css"

export const CardPreview = ({genre, title, author, content, image}) => {

    const cardClassName = () => {
        const classes = ["card"]

        if (genre === "esej") {
            classes.push("card--essay")
        }
        else {
            classes.push("card--texts")
        }

        if (image) {
            classes.push("card--image")
        }

        return classes.join(" ")
    }

    return (
            <div className={cardClassName()}>
                <Link to="/clanek" className="card__link">
                    <h1 className="card__name">{title}</h1>
                    <p className="card__author">{author}</p>
                    { image && <Image image={image} content={content}/> }
                    { !image && <CardPreface content={content}/>}
                </Link>
            </div>
    )
  }