import React from "react";

const ProcessHome = () => {
    return (
        <section id="process-home">
            <div className="tag left">
                Mon procédé
            </div>
            <div className="process-container">
                <div className="process-left">
                    <div className="processus">
                        <h1>1. Réception</h1>
                        <p>J'examine votre commande et nous discutons de vos <span className="color">attentes</span>,
                            vos <span className="color">contraintes</span>, votre <span className="color">délais</span> et votre <span className="color">budget</span>.
                            Une fois que nous sommes en <span className="color">accord</span>, je commence le <span className="color">brainstorming</span> autour de votre commande.</p>
                    </div>
                    <div className="processus">
                        <h1>2. Brainstorming</h1>
                        <p>Je conçois la <span className="color">maquette</span> de votre projet afin d'avoir un rapide aperçu.
                            Une fois <span className="color">satisfait</span> de celle-ci, je commence le <span className="color">développement</span>.</p>
                    </div>
                </div>
                <div className="process-middle" />
                <div className="process-right">
                    <div className="processus">
                        <h1>3. Réalisation</h1>
                        <p>Je développe avec les <span className="color">technologies</span> précédemment choisies.
                            Avant la livraison, une <span className="color">vision en direct</span> vous sera disponible pour voir le résultat
                            afin de corriger les petits <span className="color">détails</span> vous dérangeant.</p>
                    </div>
                    <div className="processus">
                        <h1>4. Livraison</h1>
                        <p>Une fois le projet fini, je vous le <span className="color">livre</span>.
                            Je fournis également un <span className="color">service d'installation</span> du site web sur votre machine, avec un coût supplémentaire.</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProcessHome;