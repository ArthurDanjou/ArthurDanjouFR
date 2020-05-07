import React from "react";
import "./tag.scss";

const Tag = (props) => {
    return (
        <div className={props.left ? "tag left": "tag right"}>
            <h1>{props.children}</h1>
            <style jsx>{`
            .tag {
                color: ${props.color};
                background-color: ${props.background};
                transform: rotate(${props.left ? "-20deg": "20deg"});
            }`}</style>
        </div>
    )
};

export default Tag;