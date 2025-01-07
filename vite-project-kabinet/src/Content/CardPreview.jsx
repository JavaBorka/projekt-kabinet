import { Image } from "./Image.jsx"
import { CardPreface } from "./CardPreface.jsx"
import { Link, Route } from 'react-router'
import { ROUTE_ESSAYS } from "../constants/routes.constants.js"
import { ROUTE_TEXTS } from "../constants/routes.constants.js"
import "./card.style.css"

export const CardPreview = ({id, genre, title, author, content, image}) => {

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

    const createSlug = (originalTitle, genre, id) => {
        
        const slug = originalTitle
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');

        return (`/${genre === "esej" ? ROUTE_ESSAYS : ROUTE_TEXTS}/${id}-${slug}`)

      };

    return (
            <div className={cardClassName()}>
                <Link to = {createSlug(title, genre, id)} state={{id: id}} className="card__link">
                    <h1 className="card__name">{title}</h1>
                    <p className="card__author">{author}</p>
                    { image && <Image image={image} content={content}/> }
                    { !image && <CardPreface content={content}/>}
                </Link>
            </div>
    )
  }