import React from "react";
import "./skills.scss";
import Tag from "../tag/tag";

const Skills = () => {
    return (
        <section id="skills">
            <Tag color="#00d9ff" background="#d9fcff" left={false}>Ce que j'aime</Tag>
            <div className="skills-container">
                <div className="skills-left skill">
                    <h1>Le Développement</h1>
                    <p>
                        Je suis développeur Web FullStack, c'est à dire que je maîtrise le BackEnd et le FrontEnd.
                        Je réalise des sites pour des projets personnels ou professionnels. En parallèle, je développe des logiciels Mobile et Desktop.
                    </p>
                </div>
                <div className="skills-right skill">
                    <h1>La Technologie</h1>
                    <p>
                        J'adore la sécurité, le DevOps, et les machines.
                        Ce sont des domaines très importants qu'il ne faut pas négliger sur un projet ! Je me documente au quotidien pour respecter la vie privée de mes clients.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Skills;