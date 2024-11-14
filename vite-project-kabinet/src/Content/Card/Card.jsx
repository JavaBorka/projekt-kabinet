import "./card.style.css"
import { Image } from "./Image.jsx"
import {Headline} from "vite-project-kabinet/src/common/Headline.jsx";

export const Card = ({genre, title, author, image}) => {

    const displayContent = () => {
        return (
            <p class="card__content">
                {content}
            </p>
        )
    }

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
      <>
        <div className={cardClassName()}>
            <Headline>{title}</Headline>
            <p className="card__author">{author}</p>
            { image && <Image image={image} content={content} /> }
            { !image && displayContent()}
        </div>
      </>
    )
  }


