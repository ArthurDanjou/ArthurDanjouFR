import React from "react";
import "./loading.scss";

const Loading = (props) => {
    return (
        <div className={`loading ${props.class}`}>
            <svg
                className="spinner"
                width="60px"
                height="60px"
                viewBox="0 0 132 132"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    className="path"
                    fill="none"
                    strokeWidth="6"
                    strokeLinecap="round"
                    cx="66"
                    cy="66"
                    r="60"
                />
            </svg>
        </div>
    )
};

export default Loading;