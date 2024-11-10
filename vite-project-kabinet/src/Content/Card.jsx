import "./card.style.css"
import image from "../assets/dummy/foltynova-krajina.jpg"

export const Card = () => {

    return (
      <>
        <div className="card card--texty card--image">
            <h1 className="card__name">Nedisciplinovaná nostalgia</h1>
            <p className="card__author">Martina Ivanová</p>
            <div className="card__photo">
                <a className="card__image-link" href="#">
                    <img className="card__image" src={image} alt="Fotka xy" />
                </a>
                <div className="card__text-container">
                    <p className="card__text-content">
                        Márnosť prebýva v bezprostrednom susedstve zmyslu a – ako autor ukazuje – sú dokonca nerozlučne prestúpené ako jin a jang každej skutočnosti.
                    </p>
                </div>
            </div>
        </div>
      </>
    )
  }