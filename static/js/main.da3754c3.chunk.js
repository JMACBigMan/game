(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),c=n(4),i=n(1),u={background:"red",border:"2px solid black",fontSize:"50px",fontWeight:"800",cursor:"pointer",outline:"none"},s=function(e){var t=e.value,n=e.onClick;return r.a.createElement("button",{style:u,onClick:n},t)},m={backgroundColor:"red",border:"4px solid black",borderRadius:"10px",width:"350px",height:"350px",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},d=function(e){var t=e.squares,n=e.onClick;return r.a.createElement("div",{style:m},t.map((function(e,t){return r.a.createElement(s,{key:t,value:e,onClick:function(){return n(t)}})})))};function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(i.a)(t[n],3),r=a[0],l=a[1],o=a[2];if(e[r]&&e[r]===e[l]&&e[r]===e[o])return e[r]}return null}console.log(p([null,null,null,"X","X","O",null,null,null]));var v={width:"200px",margin:"20px auto"},f=function(){var e=Object(a.useState)([Array(9).fill(null)]),t=Object(i.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(0),u=Object(i.a)(o,2),s=u[0],m=u[1],f=Object(a.useState)(!0),g=Object(i.a)(f,2),b=g[0],h=g[1],k=p(n[s]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{squares:n[s],onClick:function(e){var t=n.slice(0,s+1),a=t[s],r=Object(c.a)(a);k||r[e]||(r[e]=b?"X":"O",l([].concat(Object(c.a)(t),[r])),m(t.length),h(!b))}}),r.a.createElement("div",{style:v},r.a.createElement("p",null,k?"Winner: "+k:"Next Player "+(b?"X":"O")),n.map((function(e,t){var n=t?"Previous Move#".concat(t):"Start at Beginning";return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return m(e=t),void h(e%2===0);var e}},n," "))}))))};n(12);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Tic Tac Toe"),r.a.createElement("h1",null,r.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.da3754c3.chunk.js.map