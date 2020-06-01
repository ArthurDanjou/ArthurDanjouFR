import React from "react";

const languages = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "NodeJS",
    "Markdown",
];

const bdds = [
    "MariaDB",
    "Redis",
    "RabbitMQ",
    //"PostgreSQL",
    "MongoDB"
];

const frameworks = [
    "Spring",
    "ElectronJS",
    "ReactJS",
    "NextJS",
    "React Native",
    "AdonisJS v5",
];

const others = [
    "DevSecOps",
    "Git",
    "Team",
    "RestAPI",
    "SysAdmin",
    //"Docker",
    //"Kubernetes",
];

export const LanguagesMap = () => {
    return (
        <ul className="skill-list">
            {languages.map(lang => {
                return <li key={lang}>{lang}</li>
            })}
        </ul>
    )
}

export const BddMap = () => {
    return (
        <ul className="skill-list">
            {bdds.map(base => {
                return <li key={base}>{base}</li>
            })}
        </ul>
    )
}

export const FrameWorksMap = () => {
    return (
        <ul className="skill-list">
            {frameworks.map(fw => {
                return <li key={fw}>{fw}</li>
            })}
        </ul>
    )
}

export const OtherMap = () => {
    return (
        <ul className="skill-list">
            {others.map(other => {
                return <li key={other}>{other}</li>
            })}
        </ul>
    )
}