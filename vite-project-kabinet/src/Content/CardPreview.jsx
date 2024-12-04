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

    const createSlug = (title) => {
        return title
        .toLowerCase()
        .normalize('NFD') // Rozdělí znaky s diakritikou
        .replace(/[\u0300-\u036f]/g, '') // Odstraní diakritiku
        .replace(/[^\w\s-]/g, '') // Odstraní vše kromě písmen, čísel, pomlček a mezer
        .trim()
        .replace(/\s+/g, '-'); // Nahradí mezery pomlčkami
      };

    return (
            <div className={cardClassName()}>
                {/* todo: genre/ID-title */}
                <Link to={`/${genre === "esej" ? "esej" : "texty"}/${createSlug(title)}`} state={{originalTitle:title}} className="card__link">
                    <h1 className="card__name">{title}</h1>
                    <p className="card__author">{author}</p>
                    { image && <Image image={image} content={content}/> }
                    { !image && <CardPreface content={content}/>}
                </Link>
            </div>
    )
  }