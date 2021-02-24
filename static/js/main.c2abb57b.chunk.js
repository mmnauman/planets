(this.webpackJsonpplanetsfinder=this.webpackJsonpplanetsfinder||[]).push([[0],{70:function(n,e,t){},71:function(n,e,t){"use strict";t.r(e);var a,r,i=t(0),o=t(34),c=t.n(o),s=t(17),l=t(41),d=t(21),u=t.n(d),p=t(35),x=t(12),j=t(8),b=t(2),f=t(9),m=t(1),h=function(n){var e=n.savedPlanets,t=n.RemoveFavourite,r=f.a.div(a||(a=Object(j.a)(["\n  max-width: 900px;\n  margin: 40px auto!important;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(100px, 1fr));\n  justify-content: center;\n  gap: 50px;\n  align-items: stretch;\n  div{\n    box-shadow: 0px 0px 2px 1px #000;\n    align-items: center;\n    font-size: 1.2em;\n    flex-basis: 200px;\n    text-align: center;\n    padding: 20px;\n  }\n\ndiv button{\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px;\n  outline: none!important;\n  cursor: pointer;\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n  border: 2px solid;\n\n}\n\ndiv button:hover{\n  background-color: #d86570;\n}\n  \n  .Added i{\n    color: red;\n  }\n  \n  "])));return Object(m.jsx)(r,{children:e.map((function(n){return Object(m.jsxs)("div",{id:n.id,children:[Object(m.jsx)("h2",{children:n.name}),Object(m.jsx)("button",{onClick:function(){t(n)},children:"Remove From Favourites"})]},n.id)}))})},g=t(10),O=f.a.nav(r||(r=Object(j.a)(["\n  width: 100%;\n  height: 60px;\n  background-color: #000;\n  color: #fff;\n\n ul {\n   height: 100%;\n   list-style:none;\n   display: flex;\n   gap: 50px;\n   align-content: center;\n   justify-content: center;\n   box-sizing: border-box;\n   align-items: center;\n } \n\n ul li a{\n   text-decoration: none;\n   color: #fff;\n }\n\n .active{\n   color: red\n }\n\n"])));var v,y=function(){return Object(m.jsx)(O,{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(g.b,{exact:!0,activeClassName:"active",to:"/planets",children:"HOME"})}),Object(m.jsx)("li",{children:Object(m.jsx)(g.b,{exact:!0,to:"/planets/favouritePlanets",children:"FAVOURITES"})}),Object(m.jsx)("li",{children:Object(m.jsx)(g.b,{exact:!0,to:"/planets/about",children:"ABOUT"})})]})})},w=function(n){var e=n.searchHandler,t=n.value;return Object(m.jsx)("input",{type:"text",autoComplete:"true",value:t,onChange:function(n){e(n)},placeholder:"Search Planets"})},S=t(39),k=t.n(S),A=f.a.div(v||(v=Object(j.a)(["\nmax-width: 900px;\nmargin: 40px auto!important;\nul {\n  height: 100vh;\n  display: grid;\n  list-style: none;\n  grid-template-columns: repeat(4, minmax(100px, 1fr));\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n}\nli{\n  box-shadow: 0px 0px 2px 1px #000;\n  display: grid;\n  justify-content: center;\n  height: 150px;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 1.2em;\n}\n\nli span{\n  text-align: center;\n  font-size: 1.4em;\n  cursor: pointer;\n}\n\ninput{\n  height: 40px;\n  padding-left: 10px;\n  width: 100%;\n  margin-bottom: 20px;\n  font-size: 16px;\n}\n\n.Added i{\n  color: red;\n}\n\n.PlanetsCount{\n  font-size: 1.4em;\n  text-align: center;\n  color: #2e2e2e\n}\n\n.resetAll{\n  background: none;\n  outline: none;\n  border: none;\n  font-size: 1em;\n  color: blue;\n  cursor: pointer;\n  margin: 0 10px;\n}\n\n.resetAll:hover{\n  text-decoration: underline;\n}\n\n"])));var F,N,z=function(n){var e=n.planets,t=n.onSave,a=Object(i.useState)([]),r=Object(x.a)(a,2),o=(r[0],r[1]),c=Object(i.useState)(""),s=Object(x.a)(c,2),l=s[0],d=s[1];Object(i.useEffect)((function(){var n=JSON.parse(localStorage.getItem("SP"))||e;o(n)}),[o]);var u=[];if(l){var p=new RegExp(k()(l),"i");u=e.filter((function(n){return p.test(n.name)})),console.log(u)}else u=e,console.log(u);return Object(m.jsxs)(A,{children:[Object(m.jsx)(w,{value:l,searchHandler:function(n){d(n.target.value)}}),l&&Object(m.jsxs)("p",{className:"PlanetsCount",children:["Now Showing ",u.length," of ",e.length," Total",Object(m.jsx)("button",{onClick:function(){d("")},className:"resetAll",children:"Show All"})]}),Object(m.jsx)("ul",{children:u.map((function(n){return Object(m.jsxs)("li",{children:[n.name,Object(m.jsx)("span",{className:!0===n.isFavourite?"Added":"Removed",id:n.id,onClick:function(e){t(e,n)},onMouseMove:function(n){!function(n){"Added"===n.target.parentElement.className?n.target.parentElement.title="Remove From Favourites":n.target.parentElement.title="Add To Favourites"}(n)},children:Object(m.jsx)("i",{className:"fas fa-heart"})})]},n.id)}))})]})},C=t(40),E=t.n(C),P=f.a.div(F||(F=Object(j.a)(["\n    background-color: #000;\n    color: #fff;\n    width: 100%;\n    display: grid;\n    align-items: center;\n    max-width: 900px;\n    margin: 10% auto!important;\n    height: 200px;\n    text-align: center;\n    padding: 20px;\n    font-size: 1.3em;\n\n#author{\n    font-size: 2.2em;\n    display: block;\n    margin: 20px 0px;\n}\n\n\n"]))),R=function(){return Object(m.jsx)(P,{children:Object(m.jsxs)("p",{children:["Created By",Object(m.jsx)("span",{id:"author",children:"MM Nauman"})]})})},M=f.a.div(N||(N=Object(j.a)(["\n  *{\n    margin: 0px;\n    padding: 0px;\n  }\n  body{\n    margin: 0px!important;\n  }\n.Added{\n  color: red;\n}\n\n"])));var I=function(){var n=Object(i.useState)([]),e=Object(x.a)(n,2),t=e[0],a=e[1],r=Object(i.useState)([]),o=Object(x.a)(r,2),c=o[0],d=o[1],j=Object(i.useState)(""),f=Object(x.a)(j,2);f[0],f[1],Object(i.useEffect)((function(){function n(){return(n=Object(p.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.get("https://assignment-machstatz.herokuapp.com/planet");case 2:e=n.sent,t=e.data,console.log(t),a(t);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]);var g=function(n,e){console.log(n.target,e),e.isFavourite=!0,!0===e.isFavourite?n.target.closest("span").className="Added":n.target.closest("span").className="removed";var t=c.includes(e)?c.filter((function(n){return e.isFavourite=!1,n!==e})):[].concat(Object(l.a)(c),[e]);d(t),localStorage.setItem("SP",JSON.stringify(t))},O=function(n){return n.isFavourite=!1,console.log(n),d((function(e){return e.filter((function(e){return n.id!==e.id}))}))};return Object(m.jsxs)(M,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(b.a,{exact:!0,path:"/planets",render:function(n){return Object(m.jsx)(z,Object(s.a)(Object(s.a)({},n),{},{onSave:g,planets:t}))}}),Object(m.jsx)(b.a,{path:"/planets/favouritePlanets",render:function(n){return Object(m.jsx)(h,Object(s.a)(Object(s.a)({RemoveFavourite:O},n),{},{savedPlanets:c}))}}),Object(m.jsx)(b.a,{exact:!0,path:"/planets/about",component:R})]})};t(70);c.a.render(Object(m.jsx)(g.a,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.c2abb57b.chunk.js.map