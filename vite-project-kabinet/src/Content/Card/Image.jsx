export const Image = (props) => {
    return (
        <div className="card__photo">
            <a className="card__image-link" href="#">
                <img className="card__image" src={props.image} alt="Fotka xy" />
            </a>
            <div className="card__text-container">
                <p className="card__text-content">
                    {props.content}
                </p>
            </div>
        </div>
    )
}
