export const Image = ({image, content}) => {
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