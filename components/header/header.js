import React, {useState} from 'react';
import ActiveLink from "./activelink";
import Link from "next/link";

const Header = () => {

    const [isOpened, setOpened] = useState(false);

    return (
        <header id="header">
            <div className={isOpened ? "opened logo" : "logo"}>
                <Link href="/">
                    <a>
                        Arthur<span id="arrow"/> <br/>Danjou
                    </a>
                </Link>
            </div>

            <div className={isOpened ? "opened cross" : "cross"} onClick={() => setOpened(!isOpened)}/>

            <div className={isOpened ? "opened menu" : "menu"} >
                <div className="pages-link">
                    <div className="title">
                        Mes Pages
                    </div>
                    <ul>
                        <li>
                            <ActiveLink href="/" activeClassName="active">
                                <a>Accueil</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/about" activeClassName="active">
                                <a>A propos</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/env" activeClassName="active">
                                <a>Mon environnement</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/resume" activeClassName="active">
                                <a>Résumé</a>
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
                <div className="contact-links">
                    <ul>
                        <li>
                            <a href="mailto:arthurdanjou@outlook.fr" target='_blank'>Mail</a>
                        </li>
                        <li>
                            <a href="https://github.com/ArthurDanjou" target="_blank">Github</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ArthurDanj" target="_blank">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Header;