import React from "react";
import Link from "next/link";

const AboutHome = () => {
    return (
        <section id="about-home">
            <div className="tag left">
                Qui suis-je ?
            </div>
            <div className="about-content">
                <div className="about-left">
                    <div className="content">
                        <h1>C'est moi !</h1>
                        <p>
                            Je m'appelle <span className="color">Arthur DANJOU</span>. J'ai 17 ans, je suis né au <span className="color">Luxembourg</span> et j'habite actuellement à <span className="color">Paris</span>.
                            <br/>
                            <br/>
                            Depuis tout jeune, je suis passionné d'<span className="color">informatique</span>. C'est en 2015 que j'ai commencé à <span className="color">développer</span>.<br/>
                            C'est en pratiquant chaque jour que je me forme et que j'acquiers de nouvelles <span className="color">compétences</span> au travers de mes différents projets <span className="color">personnels</span> et <span className="color">professionnels</span>.
                            <br />
                            <br />
                            Ayant la <span className="color">volonté</span> d'apprendre, je cherche à découvrir pleins de <span className="color">technologies</span> pour agrandir ma stack et mes <span className="color">connaissances</span>.

                        </p>
                    </div>
                    <Link href="/about">
                        <div className="page-button">
                            <a>
                                En savoir plus
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="about-right">
                    <img src="/assets/photo.png" alt="Une photo de moi" height={400} />
                </div>
            </div>
        </section>
    )
};

export default AboutHome;