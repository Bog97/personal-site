(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(6),c=a.n(r),o=(a(27),a(29),a(7)),i=a(8),m=a(10),u=a(9),s=a(11),E=(a(31),a(40)),h=a(38),b=a(39),p=a(21),d=a(12),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[]},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a("data/projects.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container mb-5 p-5"},l.a.createElement("h1",{className:"mb-5"},"PROJECTS:"),this.state.data.map(function(e,t){return l.a.createElement(d.a,{key:t},l.a.createElement(d.b,null,l.a.createElement(d.d,null,l.a.createElement("a",{href:e.link},e.name)),l.a.createElement(d.c,null,e.description)))}))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Welcome to my Website!"),l.a.createElement("p",null,"This is an assignment that shows I know how to use React-Router!"),l.a.createElement("p",null,"Press on the links above to view more information about me."))}}]),t}(n.Component);function j(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"mb-5"},l.a.createElement("em",null,"ABOUT ME:")),l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,"I like web development and am enjoying this course, but it can be quite time consuming"),l.a.createElement("li",null,"I am a senior in Electrical Engineering here at UW and am excited to graduate"),l.a.createElement("li",null,"I ",l.a.createElement("strong",null,"really")," want to learn more server side development after this course"),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null,"That is all")))}var w=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",null,l.a.createElement(h.a,{to:"/"},"Home"),l.a.createElement(h.a,{to:"/about"},"About"),l.a.createElement(h.a,{to:"/projects"},"Projects")),l.a.createElement(b.a,{path:"/about",component:j}),l.a.createElement(b.a,{path:"/projects",component:f}),l.a.createElement(b.a,{exact:!0,path:"/",component:v}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.6fcdb979.chunk.js.map