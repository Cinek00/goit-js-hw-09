const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.body;let d,o=!1;e.addEventListener("click",(()=>{o||(o=!0,e.disabled=!0,d=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),t.addEventListener("click",(()=>{o&&(clearInterval(d),o=!1,e.disabled=!1)}));
//# sourceMappingURL=01-color-switcher.2efd16b2.js.map