import React from "react";
import "../public/style/style.scss";

const Resume = () => {
    return (
        <section id="resume">
            <div className="sidebar">
                <div className="links">
                    <ul>
                        <li>
                            <a href="https://arthurdanjou.fr" target="_blank">arthurdanjou.fr</a>
                        </li>
                        <li>
                            <a href="mailto:contact@arthurdanjou.fr" target="_blank">contact@arthurdanjou.fr</a>
                        </li>
                        <li>
                            06 février 2003
                        </li>
                        <li>
                            <a href="https://twitter.com/ArthurDanj" target="_blank">@ArthurDanj</a>
                        </li>
                        <li>
                            <a href="https://github.com/ArthurDanjou" target="_blank">@ArthurDanjou</a>
                        </li>
                        <li>
                            Paris, France
                        </li>
                    </ul>
                </div>
                <div className="tech">
                    <h1>
                        Technologies principales
                    </h1>
                    <ul>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>TypeScript</li>
                        <li>HTML/CSS</li>
                        <li>NodeJS</li>
                        <li>React</li>
                        <li>Next.JS</li>
                        <li>React Native</li>
                    </ul>
                </div>
                <div className="others">
                    <h1>
                        Autres technologies
                    </h1>
                    <ul>
                        <li>DevSecOps</li>
                        <li>SQL</li>
                        <li>NoSQL</li>
                        <li>Scaling</li>
                        <li>Responsive</li>
                        <li>SEO</li>
                    </ul>
                </div>
                <div className="languages">
                    <h1>Langues</h1>
                    <ul>
                        <li>Français ➡ Langue natale</li>
                        <li>Anglais ➡ Ecrit, lu et parlé</li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="header">
                    <h1>
                        Arthur<br/>
                        Danjou
                    </h1>
                    <h2>
                        FullStack & Software Developer
                    </h2>
                    <p>
                        Passionné par l’informatique et la technologie, j'ai appris le développement en 2015.
                        En pratiquant chaque jour, je me forme et j’acquiers de nouvelles compétences au travers de différents projets personnels et professionnels.
                        Je cherche à m'expertiser et à maîtriser les domaines du développement, des nouvelles technologies et du DevSecOps.
                    </p>
                </div>
                <div className="content">
                    <div className="content-section">
                        <h3>Formations</h3>
                        <ul>
                            <li>
                                <h4>Formation en développement | Internet | 2015 - Aujourd'hui</h4>
                                <p>Je me forme en autodidacte avec des projets professionnels et personnels sur Internet. <br/></p>
                            </li>
                            <li>
                                <h4>Permis A1 | Rueil Conduite, 92500 |  2019</h4>
                                <p>Possibilité de conduire une moto allant jusqu'à 125cc. Un total de 21 / 27 points.</p>
                            </li>
                            <li>
                                <h4>Diplôme National du Brevet | La Salle Passy Buzenval, 92500 | 2018</h4>
                                <p>Mention très bien</p>
                            </li>
                            <li>
                                <h4>Formation PSC1 | La Salle Passy Buzenval, 92500 | 2015</h4>
                                <p>Cette formation certifie mon niveau de prévention et secours civique de niveau 1.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="content-section">
                        <h3>Expériences professionnelles</h3>
                        <ul>
                            <li>
                                <h4>Prestation | Erisium SAS, Pontoise | Février 2019 - Aujourd'hui</h4>
                                <p>
                                    Développement et réalisation de projets Back-End et Front-End réalisés par l’équipe GamePlay
                                    – Maintien et mise à jour des projets en production.
                                    <br/><br/>
                                    <strong>Technologies : </strong> Java, MariaDB, Git, TeamWorking
                                </p>
                            </li>
                            <li>
                                <h4>Stage de découverte | Idemia, Courbevoie | Juin 2019</h4>
                                <p>
                                    Découverte du secteur IT, technologie de l’information – Découverte du data-center –
                                    Découverte de différents métiers de la société
                                </p>
                            </li>
                            <li>
                                <h4>Stage Restauration | La Salle à Manger, Boulogne | Avril 2018</h4>
                                <p>Nettoyage de la salle – Serveur – Prise de commandes – Accueil des clients</p>
                            </li>
                        </ul>
                    </div>
                    <div className="content-section hobbies">
                        <h3>Activités & Centres d'intérets</h3>
                        <ul>
                            <li>
                                <img src="/assets/resume/compscience.png" alt="Informatique" height={50}/>
                                Informatique
                            </li>
                            <li>
                                <img src="/assets/resume/dev.png" alt="Developpement" height={50}/>
                                Développement
                            </li>
                            <li>
                                <img src="/assets/resume/cooking.png" alt="Cuisine" height={50}/>
                                Cuisine
                            </li>
                            <li>
                                <img src="/assets/resume/rugby.png" alt="Rugby" height={50}/>
                                Rugby
                            </li>
                            <li>
                                <img src="/assets/resume/fitness.png" alt="Musculation" height={50}/>
                                Musculation
                            </li>
                            <li>
                                <img src="/assets/resume/motorbike.png" alt="Moto" height={50}/>
                                Moto
                            </li>
                            <li>
                                <img src="/assets/resume/security.png" alt="Sécurité" height={50}/>
                                Sécurité
                            </li>
                            <li>
                                <img src="/assets/resume/server.png" alt="Serveurs" height={50}/>
                                Serveurs
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    footer
                </div>
            </div>
        </section>
    )
}

export default Resume;