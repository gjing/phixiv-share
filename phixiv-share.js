// ==UserScript==
// @name         Phixiv Share
// @namespace    https://github.com/gjing/phixiv-share
// @version      1.0
// @description  Add Phixiv Share button to pixiv
// @author       gjing
// @match        https://www.pixiv.net/*
// @run-at       document-idle
// @license      MIT
// ==/UserScript==
(function() {
    'use strict';
      const intv = setInterval(function() {
      const nav_bar = document.getElementsByClassName("sc-181ts2x-0");
      if (nav_bar.length == 0) {
          return false;
      }
      clearInterval(intv);
      load_icon()
    }, 100);
  
    function load_icon() {
      const link = window.location.href.replace("pixiv", "phixiv");
      const element = document.getElementsByClassName("sc-181ts2x-0")[0];
      const div_string = '<div class="sc-181ts2x-7"><button type="button" class="y35SzDmKENoCKvur"><span class="Gi9zOhEDaI9fmUNA">PHIX</span></button></div>';
      const div = document.createElement('div');
      div.innerHTML = div_string;
      div.style.paddingRight = '10px';
      div.onclick = function() {
        navigator.clipboard.writeText(link);
      }
      element.appendChild(div);
    }
})();