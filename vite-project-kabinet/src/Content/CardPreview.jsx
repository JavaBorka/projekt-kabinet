import { Image } from "./Image.jsx"
import { CardPreface } from "./CardPreface.jsx"
import { Link } from 'react-router'
import { ROUTE_ESSAYS } from "../constants/routes.constants.js"
import { ROUTE_TEXTS } from "../constants/routes.constants.js"
import { createSlug } from "../utils/createSlug.js"
import "./card.style.css"


export const CardPreview = ({id, genre, title, author, content, image, catId}) => {

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

    const createRoute = (title, genre, id) => {
        return (`/${genre === "esej" ? ROUTE_ESSAYS : (`${ROUTE_TEXTS}/${createSlug(genre)}`)}/${id}-${createSlug(title)}`)
    }

    return (
            <div className={cardClassName()}>
                <Link to = {createRoute(title, genre, id)} state={{id: id}} className="card__link">
                    <h1 className="card__name">{title}</h1>
                    <p className="card__author">{author}</p>
                    { image && <Image image={image} content={content}/> }
                    { !image && <CardPreface content={content}/>}
                </Link>
            </div>
    )
  }