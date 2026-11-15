// ==UserScript==
// @name         500 Casino - Hide Location Popup
// @author       rose
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hides the Location Restricted popup if visible
// @match        *://csgo500.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    function removeRestriction() {
        const popup = document.querySelector('.auth-container');

        if (popup && popup.querySelector('.restricted')) {
            popup.remove();
        }
    }

    // Check immediately
    removeRestriction();

    // Detect dynamically added popups
    const observer = new MutationObserver(removeRestriction);

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
