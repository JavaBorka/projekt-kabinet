import { Image } from "./Image.jsx"
import { CardPreface } from "./CardPreface.jsx"
import { Link } from 'react-router';
import "./card.style.css"

export const CardPreview = ({genre, title, author, content, image}) => {

    const cardClassName = () => {
        if (image) {
            if (genre === "esej") {
                return `card card--esej card--image`
            }
            else {
                return `card card--texty card--image`
            }
        } 
        else {
            if (genre === "esej") {
                return `card card--esej`
            }
            else {
                return `card card--texty`
            }
        }
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