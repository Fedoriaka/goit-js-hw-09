!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){t.disabled||(t.disabled=!0,e.disabled=!1),document.body.style.backgroundColor=d(),n=setInterval((function(){document.body.style.backgroundColor=d()}),1e3)})),e.addEventListener("click",(function(){e.disabled||(e.disabled=!0,t.disabled=!1),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.54db0107.js.map
