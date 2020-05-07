import React, {useState} from 'react';
import Link from "next/link";
import "./header.scss";
import ActiveLink from "./activelink/activelink";

const Header = () => {

    const [isOpened, setOpened] = useState(false);
    const [isActive, setActive] = useState(false);

    return (
        <header id="header">
            <div className={isActive ? "active logo" : "logo"} >
                LOGO
            </div>
            <div className={isOpened ? "opened cross" : "cross"} onClick={() => setOpened(!isOpened)}/>

            <div className={isOpened ? "opened menu" : "menu"} >
                <div className="menu-top">
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
                                <ActiveLink href="/blog" activeClassName="active">
                                    <a>Mon blog</a>
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
                        </ul>
                    </div>
                    <div className="contact-link">
                        <div className="title">
                            Les autres
                        </div>
                        <ul>
                            <li>
                                <Link href="/resume">
                                    <a>Résumé</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/cli">
                                    <a>Console</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-bottom">
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