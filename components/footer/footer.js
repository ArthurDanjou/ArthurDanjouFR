import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <h1>Travaillons ensemble !</h1>
                <h3>
                    Envoyez moi votre projet en détaillant votre délais, votre budget et vos attentes
                    <br />
                    à <span><a href="mailto:contact@arthurdanjou.fr">contact@arthurdanjou.fr</a></span> pour que l'on en discute ensemble !
                </h3>
                <div className="spacer">ou</div>
                <h2>Retrouvez moi sur</h2>
                <div className="social-list">
                    <a href="https://github.com/ArthurDanjou" target="_blank">
                        <img src="/assets/social/github.svg" height={50} alt="GitHub Icon" />
                    </a>
                    <a href="https://twitter.com/ArthurDanj" target="_blank">
                        <img src="/assets/social/twitter.svg" height={50} alt="Twitter Icon" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    Développé et conçu avec <span>❤</span> par Arthur Danjou
                    <br/>
                    © Copyright 2020 - Tous droits réservés
                </p>
            </div>
        </footer>
    )
}

export default Footer;