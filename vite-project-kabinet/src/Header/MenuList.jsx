import { Link } from 'react-router'
import { ROUTE_ESSAYS, ROUTE_TEXTS, ROUTE_PROSE, ROUTE_POEM, ROUTE_DIARY, ROUTE_INTERVIEW, ROUTE_REVIEW } from '../constants/routes.constants.js'

export const MenuList = () => {

    return (
        <ul className="menu__list">
            <li className="menu__eseje">
                <Link className="menu__link menu__link--eseje" to={`/${ROUTE_ESSAYS}`}>
                    eseje
                </Link>
            </li>
            <li className="menu__texty">
                <Link className="menu__link menu__link--texty" to={`/${ROUTE_TEXTS}`}>
                    texty
                </Link>
                <ul className="menu__dropdown">
                    <li>
                        <Link className="menu__link menu__link--dropdown" to={`/${ROUTE_TEXTS}/${ROUTE_POEM}`}>
                            básne
                        </Link>
                    </li>
                    <li>
                        <Link className="menu__link menu__link--dropdown" to={`/${ROUTE_TEXTS}/${ROUTE_DIARY}`}>
                            z diára
                        </Link>
                    </li>
                    <li>
                        <Link className="menu__link menu__link--dropdown" to={`/${ROUTE_TEXTS}/${ROUTE_INTERVIEW}`}>
                            rozhovor
                        </Link>
                    </li>
                    <li>
                        <Link className="menu__link menu__link--dropdown" to={`/${ROUTE_TEXTS}/${ROUTE_REVIEW}`}>
                            review
                        </Link>
                    </li>
                    <li>
                        <Link className="menu__link menu__link--dropdown" to={`/${ROUTE_TEXTS}/${ROUTE_PROSE}`}>
                            próza
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="menu__ocasopise">
                <a className="menu__link menu__link--ocasopise" href="#ocasopise">o časopise</a>
            </li>
        </ul>
    )
}