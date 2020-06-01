import React from 'react';

const BannerHome = () => {
    return (
        <section id="banner-home">
            <div className="banner-container">
                <div className="name">
                    Arthur <span id="rainbow">Danjou</span>
                </div>
                <div className="role">
                    creative developer <span id="spacer">&</span> author of myself
                </div>
                <a href="#about-home" className="scroller">
                    <p>Scroll</p>
                    <div className="scroller-animation"/>
                </a>
            </div>
        </section>
    )
}

export default BannerHome;