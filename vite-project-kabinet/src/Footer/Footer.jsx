import "./footer.style.css"
import fpu from "../Footer/fpu_logo2_cierne_1.svg"

export const Footer = () => {

    return (
        <footer>
            <div class="fond__container">
                <div class="fond__text-container">
                    <p class="fond__content">Časopis z verejných zdrojov podporil</p>
                    <a class="fond__link" href="#">
                        <img class="fond__image" src={fpu} alt="Fond na podporu umenia logo" />
                    </a>
                    <p class="fond__issn">ISSN 2729-7993</p>
                    <p class="fond__copyright">Copyright © 2024 KABINET | All rights reserved</p>
                </div>
            </div>
        </footer>
    )
  }