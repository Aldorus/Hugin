import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import "font-awesome/css/font-awesome.css";

// shim layer with setTimeout fallback
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

const test = /bot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex/i.test(navigator.userAgent);
if (test) {
    console.log('the user agent is a crawler!');
    document.body.classList.add('crawler');
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);



