(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),o=a.n(c),r=(a(13),a(1));a(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{onClick:e.toogleModeRed,className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Red Mode")),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{onClick:e.toggleMode,className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{onClick:e.toogleModePink,className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Pink Mode")))))}s.defaultProps={title:"Set title here",about:"Set about here"};var m=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],o=a[1],s=function(e){return""===e?0:e.trim().split(/\s+/).length};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h2",{style:{color:"dark"===e.mode?"white":"#1f5056"}},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",id:"myBox",value:c,onChange:function(e){o(e.target.value)},rows:"8",style:{backgroundColor:"light"===e.mode?"white":"grey",color:"dark"===e.mode?"white":"#1f5056"}})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toUpperCase();o(t),e.showAlert("Converted to uppercase","success")}},"toUppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toLowerCase();o(t),e.showAlert("Converted to lowercase","success")}},"toLowercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){o(""),e.showAlert("Text has been cleared","success")}},"clearText"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.replace(/a|e|i|o|u/g,"");o(t),e.showAlert("Vowels have been removed","success")}},"deleteVowels"),l.a.createElement("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied","success")}},"copyText"),l.a.createElement("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var t=c.replace(/\s+/g," ").trim();o(t),e.showAlert("Extra spaces removed","success")}},"Remove Extra spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#1f5056"}},l.a.createElement("h1",null,"Your text summary"),l.a.createElement("p",null,s(c)," words and ",c.length," characters"),l.a.createElement("p",null,.008*s(c)," minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,c.length>0?c:"Enter something in the above textbox to preview it")))};var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),u=Object(r.a)(o,2),d=u[0],b=u[1],h=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextArena",about:"About us",mode:a,toggleMode:function(){"dark"===a?(c("light"),document.body.style.backgroundColor="white",h("Light Mode has been enabled","success")):(c("dark"),document.body.style.backgroundColor="rgb(51 68 82)",h("Dark Mode has been enabled","success"))},toogleModePink:function(){"dark"===a?(c("light"),document.body.style.backgroundColor="white",h("Light Mode has been enabled","success")):(c("dark"),document.body.style.backgroundColor="#c769a7",h("Pink Mode has been enabled","success"))},toogleModeRed:function(){"dark"===a?(c("light"),document.body.style.backgroundColor="white",h("Light Mode has been enabled","success")):(c("dark"),document.body.style.backgroundColor="#bd2929",h("Red Mode has been enabled","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container"},l.a.createElement(m,{heading:"Enter text to analyze",mode:a,showAlert:h})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.c22f8daa.chunk.js.map