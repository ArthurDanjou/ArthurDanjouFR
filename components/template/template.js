import React from "react";

const Template = (props) => {
    return (
        <div id="template">
            <div className="spacer"/>
            <div className="template-container">
                <div className="template-title">
                    <div className="question">{props.question}</div>
                    <h1 className="title">{props.title}</h1>
                    <div className="description">{props.description}</div>
                </div>
                <div className="template-content">
                    {props.children}
                </div>
            </div>
            <div className="spacer"/>
        </div>
    )
}

export default Template;