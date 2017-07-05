import React from "react";
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return <div className="component__footer screen__full-screen" id="contacts-help">
            <div className="wrapper__fixed">
                <div className="footer__tips">
                    <div><img src="/assets/64628.png" role="presentation"/></div>
                    <span>And of course, you can contact me on these platforms to discuss development, new project or
                            everything else.</span>
                </div>
            </div>
        </div>;
    }
}

export default Footer;
