import { Link } from 'react-router'
import { ROUTE_ESSAYS } from "../constants/routes.js"

export const MenuList = () => {

    return (
        <ul className="menu__list">
            <li className="menu__eseje">
                <Link className="menu__link menu__link--eseje" to={`/${ROUTE_ESSAYS}`}>
                    eseje
                </Link>
            </li>
            <li className="menu__texty">
                <a className="menu__link menu__link--texty" href="#texty">texty</a>
                <ul className="menu__dropdown">
                    <li>
                        <a className="menu__link menu__link--dropdown" href="#proza">próza</a>
                    </li>
                    <li>
                        <a className="menu__link menu__link--dropdown" href="#basne">básne</a>
                    </li>
                    <li>
                        <a className="menu__link menu__link--dropdown" href="#zdiara">z diára</a>
                    </li>
                    <li>
                        <a className="menu__link menu__link--dropdown" href="#rozhovor">rozhovor</a>
                    </li>
                    <li>
                        <a className="menu__link menu__link--dropdown" href="#review">review</a>
                    </li>
                </ul>
            </li>
            <li className="menu__ocasopise">
                <a className="menu__link menu__link--ocasopise" href="#ocasopise">o časopise</a>
            </li>
        </ul>
    )
}