import {changeHeaderState} from "./components/changeNavState";


window.onscroll = function() {
    changeHeaderState();
};

window.onload = function() {
    changeHeaderState();
};