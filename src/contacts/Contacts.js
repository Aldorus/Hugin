import React from "react";
import "./contacts.scss";

class Contacts extends React.Component {

    render() {
        return (
            <div className="component__contacts" id="contacts" ref={(rel) => {
                this.rel = rel;
            }}>
                <div className="contacts__links">
                    <a className="contacts__links--item contacts__link--resume"
                       href="assets/GUILLAUMEROUSSELCV.pdf"
                       target="_blank">CV</a>
                    <a className="contacts__links--item"
                       href="http://fr.linkedin.com/pub/guillaume-roussel/3b/351/b7b"
                       target="_blank">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a className="contacts__links--item" href="https://twitter.com/#!/RG_exod" target="_blank">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a className="contacts__links--item" href="https://github.com/aldorus" target="_blank">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contacts;
