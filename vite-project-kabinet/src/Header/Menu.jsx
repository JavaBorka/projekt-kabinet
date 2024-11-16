import './menu.style.css'

export const Menu = () => {

    return (
        <section className="menu">
            <label for="menu-checkbox" className="menu__toggler">☰</label>

            <ul className="menu__list">
                <li className="menu__eseje"><a className="menu__link menu__link--eseje" href="#">Eseje</a></li>
                <li className="menu__texty"><a className="menu__link menu__link--texty" href="#">Texty</a></li>
                <li className="menu__ocasopise"><a className="menu__link menu__link--ocasopise" href="#">O časopise</a></li>
            </ul>
        </section>
    )
  }