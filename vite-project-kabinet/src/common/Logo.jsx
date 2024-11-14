import logo from "../Header/logo_kabinet.svg"

export const Logo = () => {
    return (<div className="header__logo">
        <a className="header__link" href="#">
            <img className="header__image" src={logo} alt="Kabinet logo"/>
        </a>
    </div>)
};
