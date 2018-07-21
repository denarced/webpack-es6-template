// @format

import "babel-polyfill";
import React from "react";
import { render } from "react-dom";

import { sum } from "./sum";

class App extends React.Component {
    render() {
        let a = 3,
            b = 4;
        /* jshint ignore:start */
        return (
            <div>
                {a} + {b} = {a + b}
            </div>
        );
        /* jshint ignore:end */
    }
}

/* jshint ignore:start */
render(<App />, document.getElementById("app"));
/* jshint ignore:end */
