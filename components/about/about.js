import React from "react";
import {BddMap, FrameWorksMap, LanguagesMap, OtherMap} from "./skill";
import Link from "next/link";

const About = () => {
    return (
        <div id="about">
            <img src="assets/photo-round.png" alt="Photo de moi" />
            <div className="about-container">
                <h1>Introduction 👋</h1>
                <p>
                    Salut, je suis Arthur Danjou !
                    <br />
                    Je suis agé de 17 ans. Je suis né au Luxembourg, j'ai vécu en Belgique et actuellement je vis en France.
                    Je suis passionné par l'informatique, les nouvelles technologies et la moto? Je développe des applications web, mobiles et bureautiques.
                </p>
            </div>
            <div className="about-container">
                <h1>Mon parcours 🧮</h1>
                <p>
                    Comme dit précédemment, en 2015 j'ai commencé à développer en Java pour créer des plugins sur MineCraft.
                    J'ai rejoins différents projets qui m'ont appris différentes technologies et m'ont aidés à améliorer mon niveau en Java.
                    Puis j'ai voulu m'expertiser dans le Web, oui ce vaste domaine. J'ai donc appris de nouveaux langages. Avec ces mêmes langages,
                    on peut développer des applications mobiles et bureautiques. En parallèle, j'ai passé mon permis moto, le permis A1. Depuis ce moment, une nouvelle passion s'est créee en moi.
                    Avec mes cours, j'ai pu passer la formation PSC1 (Prévention et secours civiques de niveau 1).

                </p>
            </div>
            <div className="about-container">
                <h1>Ma formation 📚</h1>
                <p>
                    Je suis actuellement en classe de première générale. Je fais partie de la génération du nouveau baccalauréat.
                    Mes spécialités sont Mathémétiques, Physique-Chimie et Sciences économiques et sociales.
                    Pour la classe de Terminale, je garde les deux premières spécialités listées précédemment.
                    J'envisage de faire une classe préparatoire MP2I (Maths / Physique / Informatique / Ingénieurie).
                    C'est une nouvelle classe préparatoire. Enfin, j'aimerais rejoindre une école d'ingénieur spécialisée en informatique, ou dans un autre domaine.
                </p>
            </div>
            <div className="about-container">
                <h1>Mes compétences 🎨</h1>
                <p>
                    En développant régulièrement, j'améliore mes compétences et je découvre de nouvelles technologies augmentant donc ma stack.
                    réalise beaucoup de projets professionnels et personnels pour découvrir et approfondir mes connaissances.
                    Ma stack actuelle se compose de :
                </p>
                <div className="skill">
                    <h3>Langages de programmation</h3>
                    <LanguagesMap />
                </div>
                <div className="skill">
                    <h3>Bases de données</h3>
                    <BddMap />
                </div>
                <div className="skill">
                    <h3>Frameworks</h3>
                    <FrameWorksMap />
                </div>
                <div className="skill">
                    <h3>Autres</h3>
                    <OtherMap />
                </div>
            </div>
            <div className="about-container">
                <h1>Mes expériences 🧰</h1>
                <p>
                    Durant ma scolarité, j'ai eu la chance de découvrir pleins de métiers en stage.
                </p>
                <ul className="experience-list">
                    <li>
                        <h3 className="actual">Erisium</h3>
                        <h5>Février 2019 - Aujourd'hui</h5>
                        <p>
                            Développement et réalisation de projets Back-End et Front-End réalisés par l’équipe GamePlay – Maintien et mise à jour des projets en production.
                        </p>
                    </li>
                    <li>
                        <h3 className="not-actual">Idemia</h3>
                        <h5>Juin 2019</h5>
                        <p>
                            Découverte du secteur IT, technologie de l’information – Découverte du data-center – Découverte de différents métiers de la société
                            (développeur, support informatique, UX/UI designer, chef de produits...)
                        </p>
                    </li>
                    <li>
                        <h3 className="not-actual">La Salle à Manger</h3>
                        <h5>Avril 2018</h5>
                        <p>
                            Nettoyage de la salle – Serveur – Prise de commandes – Accueil des clients
                        </p>
                    </li>
                </ul>
            </div>
            {/*TODO change to new CV
            <Link href="/resume">
                <a className="about-container button">
                    Mon CV
                </a>
            </Link>
            */}
            <a className="about-container button" href="/assets/CV.pdf" target="_blank">Mon Résumé</a>
        </div>
    )
};

export default About;