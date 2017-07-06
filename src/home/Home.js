import React from "react";

class Home extends React.Component {

    componentWillMount = () => {
        document.addEventListener('scroll', () => {
            let scrollValue = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (scrollValue < screen.height + 200) {
                document.getElementById('parallax-banner').style.backgroundPosition = 'left 0px bottom -' + (scrollValue / 2) + 'px';
                document.getElementById('content-parallax-banner').style.opacity = 1 - (scrollValue / 100);
            }
        });
    };

    render() {
        return (
            <div className="component__home screen__full-screen" id="home">
                <div className="home__header" id="parallax-banner">
                    <div id="content-parallax-banner" className="parallax__content--banner">
                        <h1>Guillaume</h1>
                        <h2>I’m a Javascript developer and I love my life !</h2>
                        <p>Living in Montréal</p>
                    </div>

                    <div className="screen__wrapper">
                        <div className="home__about-me">
                            I coded my first website when I was 15 years old, I had long hair and no beard. A painful work
                            with PHP for IE6 who take me several months to be done.
                            Now I have short hair and a short beard, I work on cool stuff like <strong>SPA
                            frameworks</strong> or <strong>NodeJS</strong> and I
                            code so much faster!
                            <p className="scroll-down">
                                <a data-scroll href="#skills">
                                    <span className="scroll-down__text">Scroll</span>
                                    <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
