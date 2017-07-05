import React from "react";
import Close from "../common/Close";
import "./menu.scss";

class Menu extends React.Component {

    componentDidMount = () => {
        this.addListenerOnDocument();
    };

    addListenerOnDocument = () => {
        document.getElementById('opacity-effect-apply').addEventListener('click', (event) => {
            if (this.state && this.state.open) {
                event.preventDefault();
                this.openMenu(event);
            }
        });
    };

    openMenu = () => {
        if (this.rel.classList.contains('menu__open')) {
            document.body.classList.remove('effect__opacity');
            this.rel.classList.remove('menu__open');
            this.setState({
                open: false
            });
        } else {
            document.body.classList.add('effect__opacity');
            this.rel.classList.add('menu__open');
            this.setState({
                open: true
            });
        }
    };

    renderButtonClose = () => {
        if(this.state && this.state.open) {
            return <button className="menu__svg menu__svg--close" onClick={this.openMenu}>
                <Close/>
            </button>;
        }
    };

    render() {
        return <nav className="component__menu" ref={(rel) => {
            this.rel = rel;
        }}>
            <div>
                <button className="menu__svg menu__svg--open" onClick={this.openMenu}>
                    <svg width="34px" height="20px">
                        <rect width="30" height="3"></rect>
                        <rect x="4" y="7" width="30" height="3"></rect>
                        <rect y="14" width="30" height="3"></rect>
                    </svg>
                    <span className="menu__svg--text">Menu</span>
                </button>
            </div>
            <div className="menu">
                {this.renderButtonClose()}
                <img className="menu__image--gravatar"
                     alt="gravatar avatar"
                     src="https://fr.gravatar.com/userimage/30478323/d53afb6ef01b7644a50b9dad2c973405.jpg?size=200"/>
                <h1 className="menu__title">Guillaume<br/>
                    <span className="menu__subtitle">Javascript Developer</span></h1>
                <ul className="meu__list">
                    <li className="menu__list--item">
                        <a data-scroll href="#home" onClick={this.openMenu}>
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                            <p>
                                <span>About Me</span><br/>
                                <span className="menu__anchor">A little introduction</span>
                            </p>
                        </a>
                    </li>
                    <li className="menu__list--item">
                        <a data-scroll href="#skills" onClick={this.openMenu}>
                            <i className="fa fa-code" aria-hidden="true"></i>
                            <p>
                                <span>Skills</span><br/>
                                <span className="menu__anchor">What I can do</span>
                            </p>
                        </a>
                    </li>
                    <li className="menu__list--item">
                        <a data-scroll href="#projects" onClick={this.openMenu}>
                            <i className="fa fa-picture-o" aria-hidden="true"></i>
                            <p>
                                <span>Projects</span><br/>
                                <span className="menu__anchor">Some of my favorite work</span>
                            </p>
                        </a>
                    </li>
                    <li className="menu__list--item">
                        <a href="assets/GUILLAUMEROUSSELCV.pdf" target="_blank">
                            <i className="fa fa-id-card-o" aria-hidden="true"></i>
                            <p>
                                <span>Resume</span><br/>
                                <span className="menu__anchor">Download the PDF</span>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>;
    }
}

export default Menu;
