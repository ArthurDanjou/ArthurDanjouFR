import React from 'react';
import "./banner.scss";

const Banner = () => {
    return (
        <section id="banner">
            <div className="banner-container">
                <div className="name">
                    Arthur <span id="rainbow">Danjou</span>
                </div>
                <div className="role">
                    creative developer <span id="spacer">&</span> author of myself
                </div>
                <a href="#about" className="scroller">
                    <p>Scroll</p>
                    <div className="scroller-animation"/>
                </a>
            </div>
        </section>
    )
}

export default Banner;