import React from "react";
import "./close.scss";

class Close extends React.Component {

    render = () => {
        return <svg className="component__close-component" width="40" height="40">
                <rect width="30" height="2" x="5" y="19"></rect>
                <rect width="30" height="2" x="5" y="19"></rect>
            </svg>;
    };
}

export default Close;
