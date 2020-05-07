import React from "react";
import "./about.scss";
import Tag from "../tag/tag";
import Link from "next/link";

const About = () => {
    return (
        <section id="about">
            <Tag color="red" background="#fa7878" left={true}>Qui suis-je ?</Tag>
            <div className="about-content">
                <div className="about-right">
                    <img src="/assets/photo.png" alt="My photo"/>
                </div>
                <div className="about-left">
                    <div className="left-content">
                        <h1>C'est moi !</h1>
                        <p>
                            Je m'appelle Arthur DANJOU. J'ai 17 ans, je suis né au <span className="color">Luxembourg</span> et j'habite actuellement à <span className="color">Paris</span>.<br/>
                            Depuis tout jeune, je suis passionné d'<span className="color">informatique</span>. C'est en 2015 que j'ai commencé à <span className="color">développer</span>.<br/>
                            C'est en pratiquant chaque jour que je me forme et que j'acquiers de nouvelles <span className="color">compétences</span> au travers de mes différents projets <span className="color">personnels</span> et <span className="color">professionnels</span>.
                        </p>
                    </div>
                    <Link href="/env">
                        <div className="page-button">
                            <a>
                                En savoir plus
                            </a>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default About;