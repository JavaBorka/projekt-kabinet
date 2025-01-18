import { Link } from 'react-router'
import { ROUTE_ESSAYS, ROUTE_TEXTS, ROUTE_PROSE, ROUTE_POEM, ROUTE_DIARY, ROUTE_INTERVIEW, ROUTE_REVIEW } from '../constants/routes.constants.js'
import { WP_CAT_ID_PROSE, WP_CAT_ID_POEM, WP_CAT_ID_DIARY, WP_CAT_ID_INTERVIEW, WP_CAT_ID_REVIEW, WP_CAT_ID_ESSAY, CAT_ID_TEXTS } from '../constants/WPcategories.constants.js'

export const MenuList = () => {

    return (
        <ul className="menu__list">
            <li className="menu__eseje">
                <Link className="menu__link menu__link--eseje" to={`/${ROUTE_ESSAYS}`} state={{catId: WP_CAT_ID_ESSAY}}>
                    eseje
                </Link>
            </li>
            <li className="menu__texty">
                <Link className="menu__link menu__link--texty" to={`/${ROUTE_TEXTS}`} state={{catId: CAT_ID_TEXTS}}>
                    texty
                </Link>
                <ul className="menu__dropdown">
                    <li>
                        <Link className="menu__link menu__link--dropdown" to={`/${ROUTE_TEXTS}/${ROUTE_POEM}`} state={{catId: WP_CAT_ID_POEM}}>
                            básne
                        </Link>
                    </li>
                    <li>
                        <Link className="menu__link menu__link--dropdown" to={`/${ROUTE_TEXTS}/${ROUTE_DIARY}`}state={{catId: WP_CAT_ID_DIARY}}>
                            z diára
                        </Link>
                    </li>
                    <li>
                        <Link className="menu__link menu__link--dropdown" to={`/${ROUTE_TEXTS}/${ROUTE_INTERVIEW}`} state={{catId: WP_CAT_ID_INTERVIEW}}>
                            rozhovor
                        </Link>
                    </li>
                    <li>
                        <Link className="menu__link menu__link--dropdown" to={`/${ROUTE_TEXTS}/${ROUTE_REVIEW}`} state={{catId: WP_CAT_ID_REVIEW}}>
                            review
                        </Link>
                    </li>
                    <li>
                        <Link className="menu__link menu__link--dropdown" to={`/${ROUTE_TEXTS}/${ROUTE_PROSE}`} state={{catId: WP_CAT_ID_PROSE}}>
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