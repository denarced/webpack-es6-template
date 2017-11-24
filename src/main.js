import jq from "jquery";

import {sum} from "./sum";
import mainSass from "./main.scss";

jq(document).ready(() => {
    let s = sum(33, 2);
    jq("#message").text("JQuery changed this text to say: 33 + 2 = " + s);
});
