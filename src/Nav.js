
    const Nav = (props) => {

        return (
            <ul>
                <li>Accueil</li>
                <li>{props.menuElements[0]}</li>
                <li>{props.menuElements[1]}</li>
                <li>{props.menuElements[2]}</li>
            </ul>
        )
    }

    export default Nav;