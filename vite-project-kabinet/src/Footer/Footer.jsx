import "./footer.style.css"
import fpu from "../Footer/fpu_logo2_cierne_1.svg"

export const Footer = () => {
    
    return (
        <footer>
            <div className="fond__container">
                <div className="fond__text-container">
                    <p className="fond__content">Časopis z verejných zdrojov podporil</p>
                    <a className="fond__link" href="https://www.fpu.sk/sk/">
                        <img className="fond__image" src={fpu} alt="Fond na podporu umenia logo" />
                    </a>
                    <p className="fond__issn">ISSN 2729-7993</p>
                    <p className="fond__copyright">Copyright © {new Date().getFullYear()} KABINET | All rights reserved</p>
                </div>
            </div>
        </footer>
    )
  }