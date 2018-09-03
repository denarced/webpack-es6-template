// @format

import "babel-polyfill";
import React from "react";
import { render } from "react-dom";

import { sum } from "sum";

class App extends React.Component {
    render() {
        let a = 3,
            b = 4;
        return (
            <div>
                {a} + {b} = {sum(a, b)}
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));
