import React from "react";
import "./sponsors.scss";

class Sponsors extends React.Component {
    render() {
        return <div className="component__sponsors screen " id="sponsors">
            <div className="screen__wrapper">
                <div className="sponsors__title">
                    <h1>I loved to work with them</h1>
                    <h2>Some companies I've been involved with</h2>
                </div>
                <ul>
                    <li><a href="https://valtech.ca/" target="_blank">
                        Valtech</a></li>
                    <li><a href="http://www.infotel.com/" target="_blank">Infotel</a></li>
                    <li><a href="http://kiwapp.ocito.com/" target="_blank">Kiwapp</a></li>
                </ul>
            </div>
        </div>
    };
}

export default Sponsors;
