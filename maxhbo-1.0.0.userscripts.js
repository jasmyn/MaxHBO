// ==UserScript==
// @author          JAZ
// @name            MaxHBO
// @namespace       hbomax.com
// @include         *://play.hbomax.com/*
// @description     Toggles the play/seek bar on HBOMax (Firefox only)
// @version         1.0.0
// @runs-at         context-menu
// @require         https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// ==/UserScript==


(() => {
	function getIdx() {
	  for (i = 0; i < document.getElementsByClassName('default').length; i++) {
	    if (document.getElementsByClassName('default')[i].style['height'] == '50px') {
	      // console.log(`MaxHBO found index: ${i}`)
	      return i
	    }
	  }
	}
	GM_registerMenuCommand('HBOMax Toggle UI', () => {
		let idx = getIdx()
		let theRightDefault = document.getElementsByClassName('default')[idx]
		if (theRightDefault.style.display == '') {
			theRightDefault.style.display = 'none'
		}
		else if (theRightDefault.style.display == 'none') {
			theRightDefault.style.display = 'block'
		}
		else if (theRightDefault.style.display == 'block') {
			theRightDefault.style.display = 'none'
		}
	}, 'h')
})()