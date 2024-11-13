import "./card.style.css"

export const Card = ({genre, title, author, content, image}) => {

    const displayImage = () => {
        return (
            <div className="card__photo">
                <a className="card__image-link" href="#">
                    <img className="card__image" src={image} alt="Fotka xy" />
                </a>
                <div className="card__text-container">
                    <p className="card__text-content">
                        {content}
                    </p>
                </div>
            </div>
        )
    }

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
            <h1 className="card__name">{title}</h1>
            <p className="card__author">{author}</p>
            { image && displayImage() }
            { !image && displayContent()}
        </div>
      </>
    )
  }