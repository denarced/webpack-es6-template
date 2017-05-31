import jq from "jquery";
import mainSass from "./main.scss";

jq(document).ready(() => {
    jq("#message").text("JQuery changed this text.");
});
