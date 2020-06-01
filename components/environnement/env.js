import React from "react";

const Env = () => {
    return (
        <div id="env">
            <div className="env-container">
                <h1>Mon matériel 💼</h1>
                <p>Ce setup m'accompagne tous les jours pour développer. Je souhaite m'acheter un ordinateur portable pour être plus mobile.</p>
                <ul>
                    <li>
                        💻 Ordinateur Fixe Asus (i5, 8Go Ram, GTX 950, 1To HDD)
                    </li>
                    <li>
                        ⌨ Clavier Microsoft & Souris Roccat Kova
                    </li>
                    <li>
                        🎧 Airpods
                    </li>
                    <li>
                        🎧 Turtle Beach PX22
                    </li>
                    <li>
                        📱 Samsung Note 8
                    </li>
                </ul>
            </div>
            <div className="env-container">
                <h1>Mes éditeurs de texte 🧰</h1>
                <p>Je dispose de la license étudiante Jetbrains pour avori accès gratuitement</p>
                <ul>
                    <li>
                        <a href="https://www.jetbrains.com/idea/" target="_blank">Intellij Idea Ultimate</a> pour développer en Java.
                    </li>
                    <li>
                        <a href="https://www.jetbrains.com/webstorm/" target="_blank">WebStorm</a> pour tout ce qui touche au Web.
                    </li>
                    <li>
                        <a href="https://www.jetbrains.com/pycharm/" target="_blank">PyCharm</a> pour réaliser mes scrips python.
                    </li>
                    <li>
                        <a href="https://www.jetbrains.com/datagrip/" target="_blank">DataGrip</a> pour manier les bases de données.
                    </li>
                    <li>
                        <a href="https://www.jetbrains.com/fr-fr/lp/mono/" target="_blank">JetBrains Mono</a> m'accompagne tous les jours comme police d'écriture.
                    </li>
                    <li>
                        <a href="https://www.jetbrains.com/toolbox-app/" target="_blank">JetBrains Toolbox</a> me permet de rassembler tous mes éditeurs en un seul endroit.
                    </li>
                </ul>
            </div>
            <div className="env-container">
                <h1>Mes applications 📌</h1>
                <p>J'utilise ces applications pour gagner du temps. Elles sont disponible également sur mon téléphone pour être toujours connecté.</p>
                <ul>
                    <li>
                        <a href="https://www.google.com/intl/fr/chrome/dev/" target="_blank">Chrome Developer</a> pour aller sur Internet.
                    </li>
                    <li>
                        <a href="https://affinity.serif.com/fr/designer/" target="_blank">Affinity Designer</a> pour réaliser mes maquettes et mes designs.
                    </li>
                    <li>
                        <a href="https://evernote.com/intl/" target="_blank">Evernote</a> pour prendre des notes et rédiger.
                    </li>
                    <li>
                        <a href="https://trello.com/" target="_blank">Trello</a> pour organiser mes projets.
                    </li>
                    <li>
                        <a href="https://github.com/" target="_blank">Github</a> pour poster les sources de mes projets.
                    </li>
                    <li>
                        <a href="https://discord.com/" target="_blank">Discord</a>, <a href="https://slack.com/" target="_blank">Slack</a> et <a href="https://mattermost.com/" target="_blank">Mattermost</a> pour communiquer
                    </li>
                    <li>
                        Les documentations me permettent d'apprendre plus sur les frameworks que j'utilise.
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Env;