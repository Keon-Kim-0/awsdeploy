(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(3),i=n.n(o),s=(n(12),n(4)),a=n(5),u=n(7),l=n(6),f=(n(13),n(0)),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).state={flower:{}},c.getFlower(),c}return Object(a.a)(n,[{key:"getFlower",value:function(){var t=this;fetch("/flower").then((function(t){return t.json()})).then((function(e){t.setState({flower:e})}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:this.state.flower.name}),Object(f.jsx)("p",{children:this.state.flower.colour})]})}}]),n}(c.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),o(t),i(t)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.8af0e99d.chunk.js.map