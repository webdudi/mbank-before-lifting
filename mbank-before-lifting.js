// ==UserScript==
// @name         mBank old style
// @namespace    https://webdudi.pl/
// @version      0.2
// @description  Return to the old style of transactional service
// @author       webdudi.pl
// @match        https://online.mbank.pl/pl
// @grant        none
// ==/UserScript==

var elementsArray = [].slice.call(document.getElementsByClassName("lifting"));
for (var i = 0; i < elementsArray.length; i++) {
    elementsArray[i].classList.remove("lifting");
}

setTimeout(function(){
    document.getElementById('feedback-survey').getElementsByClassName('trigger-label')[0].style.top = "40px";
    document.getElementById('feedback-survey').getElementsByClassName('trigger-label')[0].style.right = "16px";
}, 0);
