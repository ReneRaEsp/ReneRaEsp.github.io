(this.webpackJsonpcotizador=this.webpackJsonpcotizador||[]).push([[0],{15:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a,c,r,o,i,l,s,j=t(1),b=t.n(j),d=t(8),u=t.n(d),h=(t(15),t(4)),O=t(2),p=t(3),x=t(0),g=p.a.header(a||(a=Object(O.a)(["\n  background-color: #26C6DA;\n  padding: 10px;\n  font-weight: bold;\n  color: #FFFF;\n"]))),m=p.a.h1(c||(c=Object(O.a)(["\n  font-size: 2rem;\n  margin: 0;\n  font-family: 'Slabo 27px', serif;\n  text-align: center;\n"]))),v=function(e){var n=e.titulo;return Object(x.jsx)(g,{children:Object(x.jsxs)(m,{children:[" ",n," "]})})},f=t(5),y=t(7);var S,w,C=p.a.div(r||(r=Object(O.a)(["\n  display: flex;\n  margin-bottom: 1rem;\n  justify-content: space-between;\n  align-items: center;\n"]))),F=p.a.select(o||(o=Object(O.a)(["\n  width: 60%;\n  height: 2rem;\n  border: none;\n  background: rgba(72, 190, 200, 0.47);\n  border-radius: 3px;\n"]))),k=p.a.button(i||(i=Object(O.a)(["\n  width: 100%;\n  background: rgba(12, 200, 163, 0.9);\n  height: 2rem;\n  border: none;\n  cursor: pointer;\n  margin: auto;\n  color: white;\n  font-weight: bold;\n  transition: 1s;\n  &:hover {\n    background: rgb(40, 160, 140);\n    border-radius: 10px;\n  }\n"]))),z=p.a.p(l||(l=Object(O.a)(["\n    color: red;\n"]))),D=p.a.p(s||(s=Object(O.a)(["\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    font-weight: bold;\n    padding-top: 1rem;\n    height: 2rem;\n    width: 100%;\n    border: 2px solid rgb(40, 160, 140);\n    color: rgb(40, 160, 140);\n"]))),P=function(e){var n=e.guardarResumen,t=Object(j.useState)({marca:"",year:"",plan:""}),a=Object(h.a)(t,2),c=a[0],r=a[1],o=Object(j.useState)(!1),i=Object(h.a)(o,2),l=i[0],s=i[1],b=Object(j.useState)(!1),d=Object(h.a)(b,2),u=d[0],O=d[1],p=Object(j.useState)(0),g=Object(h.a)(p,2),m=g[0],v=g[1],S=c.marca,w=c.year,P=c.plan,A=function(e){r(Object(y.a)(Object(y.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))};return Object(x.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==S.trim()&&""!==w.trim()&&""!==P.trim()){s(!1);var t=2e3,a=function(e){return(new Date).getFullYear()-e}(c.year);t+=t*(3*a)/100,console.log(t);var r=function(e){var n=0;return"usa"===e?n=15:"asiatico"===e?n=5:"europeo"===e&&(n=30),n}(c.marca);t+=t*r/100,console.log(t);var o=function(e){var n=0;return"basico"===e?n=20:"completo"===e&&(n=50),n}(c.plan);v(t+=t*o/100),n({resultado:t,datos:c}),O(!0)}else s(!0)},children:[Object(x.jsxs)(C,{children:[Object(x.jsx)("label",{children:" Marca: "}),Object(x.jsxs)(F,{name:"marca",value:S,onChange:A,children:[Object(x.jsx)("option",{value:"",children:"-- Seleccione --"}),Object(x.jsx)("option",{value:"usa",children:" USA "}),Object(x.jsx)("option",{value:"europeo",children:" Europeo "}),Object(x.jsx)("option",{value:"asiatico",children:" Asiatico "})]})]}),Object(x.jsxs)(C,{children:[Object(x.jsx)("label",{children:" A\xf1o: "}),Object(x.jsxs)(F,{name:"year",value:w,onChange:A,children:[Object(x.jsx)("option",{value:"",children:"-- Seleccione --"}),Object(x.jsx)("option",{value:"2021",children:" 2021 "}),Object(x.jsx)("option",{value:"2020",children:" 2020 "}),Object(x.jsx)("option",{value:"2019",children:" 2019 "}),Object(x.jsx)("option",{value:"2018",children:" 2018 "}),Object(x.jsx)("option",{value:"2017",children:" 2017 "}),Object(x.jsx)("option",{value:"2016",children:" 2016 "}),Object(x.jsx)("option",{value:"2015",children:" 2015 "}),Object(x.jsx)("option",{value:"2014",children:" 2014 "}),Object(x.jsx)("option",{value:"2013",children:" 2013 "}),Object(x.jsx)("option",{value:"2012",children:" 2012 "}),Object(x.jsx)("option",{value:"2011",children:" 2011 "}),Object(x.jsx)("option",{value:"2010",children:" 2010 "})]})]}),Object(x.jsxs)(C,{children:[Object(x.jsx)("label",{children:" Plan: "})," ",Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"radio",name:"plan",value:"basico",checked:"basico"===P,onChange:A}),"Basico",Object(x.jsx)("input",{type:"radio",name:"plan",value:"completo",checked:"completo"===P,onChange:A}),"Completo"]}),l?Object(x.jsx)(z,{children:" Debe llenar todos los campos "}):null,Object(x.jsx)(k,{type:"submit",children:" Cotizar "}),u?Object(x.jsxs)(D,{children:[" Su presupuesto es de ",m," "]}):null]})},A=function(e){var n=e.datos,t=n.marca,a=n.year,c=n.plan;return""===t||""===a||""===c?null:Object(x.jsxs)(j.Fragment,{children:[Object(x.jsx)("h2",{children:" Resumen de Cotizaci\xf3n "}),Object(x.jsxs)("p",{children:["Marca: ",t," "]}),Object(x.jsxs)("p",{children:["Year: ",a," "]}),Object(x.jsxs)("p",{children:["Plan: ",c," "]})]})},B=function(e){var n=e.resultado;return 0===n?null:Object(x.jsx)(j.Fragment,{children:Object(x.jsxs)("h3",{children:["Presupuesto: ",n," "]})})},M=p.a.div(S||(S=Object(O.a)(["\n  background: #fff;\n  padding: 3rem;\n"]))),R=p.a.div(w||(w=Object(O.a)(["\n  width: 50%;\n  align-self: center;\n  margin: auto;\n  margin-top: 2rem;\n"])));var E=function(){var e=Object(j.useState)({resultado:0,datos:{marca:"",year:"",plan:""}}),n=Object(h.a)(e,2),t=n[0],a=n[1],c=t.datos,r=t.resultado;return Object(x.jsxs)(R,{children:[Object(x.jsx)(v,{titulo:"Cotizador de Seguros"}),Object(x.jsxs)(M,{children:[Object(x.jsx)(P,{guardarResumen:a}),Object(x.jsx)(A,{datos:c}),Object(x.jsx)(B,{resultado:r})]})]})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))};u.a.render(Object(x.jsx)(b.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root")),I()}},[[20,1,2]]]);
//# sourceMappingURL=main.09c91c4a.chunk.js.map