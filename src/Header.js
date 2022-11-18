import Nav from "./Nav";

const Header = () => {
    const menuElements = ["Accueil", "Recettes", "Contact"];

    return (
        <div>
            <h1>Je suis le header</h1>
            <Nav />
            <h2>Regardes le chat</h2>
            <Nav menuElements={menuElements}/>
        </div>
    )
}

export default Header;