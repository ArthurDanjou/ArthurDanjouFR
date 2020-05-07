import React from 'react';
import "./footer.scss";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <h1>Travaillons ensemble !</h1>
                <h3>
                    Envoyez moi votre projet en détaillant votre délais, votre budget et vos attentes
                    <br />
                    à <span><a href="mailto:arthurdanjou@outlook.fr">contact@arthurdanjou.fr</a></span> pour que l'on en discute ensemble !
                </h3>
            </div>
            <div className="footer-bottom">
                <div className="social-list">
                    <a href="https://github.com/ArthurDanjou" target="_blank">
                        <img src="/assets/github.svg" height={50} alt="GitHub Icon" />
                    </a>
                    <a href="https://twitter.com/ArthurDanj" target="_blank">
                        <img src="/assets/twitter.svg" height={50} alt="Twitter Icon" />
                    </a>
                    <a href="mailto:arthurdanjou@outlook.fr" target="_blank">
                        <img src="/assets/email.svg" height={50} alt="Mail Icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;