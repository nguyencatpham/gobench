(this["webpackJsonpgobench-ui"]=this["webpackJsonpgobench-ui"]||[]).push([[9],{573:function(e,t,a){"use strict";var c=a(0),n=Object(c.createContext)({});t.a=n},583:function(e,t,a){"use strict";var c=a(5),n=a(1),r=a(23),o=a(0),i=a(9),l=a.n(i),s=a(573),u=a(77),p=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};var f=["xs","sm","md","lg","xl","xxl"],d=o.forwardRef((function(e,t){var a,i=o.useContext(u.b),d=i.getPrefixCls,b=i.direction,m=o.useContext(s.a),O=m.gutter,j=m.wrap,g=m.supportFlexGap,v=e.prefixCls,h=e.span,y=e.order,x=e.offset,E=e.push,w=e.pull,C=e.className,N=e.children,P=e.flex,R=e.style,S=p(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),A=d("col",v),k={};f.forEach((function(t){var a,o={},i=e[t];"number"===typeof i?o.span=i:"object"===Object(r.a)(i)&&(o=i||{}),delete S[t],k=Object(n.a)(Object(n.a)({},k),(a={},Object(c.a)(a,"".concat(A,"-").concat(t,"-").concat(o.span),void 0!==o.span),Object(c.a)(a,"".concat(A,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),Object(c.a)(a,"".concat(A,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),Object(c.a)(a,"".concat(A,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),Object(c.a)(a,"".concat(A,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),Object(c.a)(a,"".concat(A,"-rtl"),"rtl"===b),a))}));var G=l()(A,(a={},Object(c.a)(a,"".concat(A,"-").concat(h),void 0!==h),Object(c.a)(a,"".concat(A,"-order-").concat(y),y),Object(c.a)(a,"".concat(A,"-offset-").concat(x),x),Object(c.a)(a,"".concat(A,"-push-").concat(E),E),Object(c.a)(a,"".concat(A,"-pull-").concat(w),w),a),C,k),I={};if(O&&O[0]>0){var L=O[0]/2;I.paddingLeft=L,I.paddingRight=L}if(O&&O[1]>0&&!g){var B=O[1]/2;I.paddingTop=B,I.paddingBottom=B}return P&&(I.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),"auto"!==P||!1!==j||I.minWidth||(I.minWidth=0)),o.createElement("div",Object(n.a)({},S,{style:Object(n.a)(Object(n.a)({},I),R),className:G,ref:t}),N)}));d.displayName="Col",t.a=d},590:function(e,t,a){"use strict";var c,n=a(1),r=a(5),o=a(23),i=a(7),l=a(0),s=a(9),u=a.n(s),p=a(77),f=a(573),d=a(68),b=a(117),m=a(69),O=function(){return Object(m.a)()&&window.document.documentElement},j=function(){var e=l.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return l.useEffect((function(){n(function(){if(!O())return!1;if(void 0!==c)return c;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),c=1===e.scrollHeight,document.body.removeChild(e),c}())}),[]),a},g=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},v=(Object(d.a)("top","middle","bottom","stretch"),Object(d.a)("start","end","center","space-around","space-between"),l.forwardRef((function(e,t){var a,c=e.prefixCls,s=e.justify,d=e.align,m=e.className,O=e.style,v=e.children,h=e.gutter,y=void 0===h?0:h,x=e.wrap,E=g(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=l.useContext(p.b),C=w.getPrefixCls,N=w.direction,P=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),R=Object(i.a)(P,2),S=R[0],A=R[1],k=j(),G=l.useRef(y);l.useEffect((function(){var e=b.a.subscribe((function(e){var t=G.current||0;(!Array.isArray(t)&&"object"===Object(o.a)(t)||Array.isArray(t)&&("object"===Object(o.a)(t[0])||"object"===Object(o.a)(t[1])))&&A(e)}));return function(){return b.a.unsubscribe(e)}}),[]);var I=C("row",c),L=function(){var e=[0,0];return(Array.isArray(y)?y:[y,0]).forEach((function(t,a){if("object"===Object(o.a)(t))for(var c=0;c<b.b.length;c++){var n=b.b[c];if(S[n]&&void 0!==t[n]){e[a]=t[n];break}}else e[a]=t||0})),e}(),B=u()(I,(a={},Object(r.a)(a,"".concat(I,"-no-wrap"),!1===x),Object(r.a)(a,"".concat(I,"-").concat(s),s),Object(r.a)(a,"".concat(I,"-").concat(d),d),Object(r.a)(a,"".concat(I,"-rtl"),"rtl"===N),a),m),z={},D=L[0]>0?L[0]/-2:void 0,F=L[1]>0?L[1]/-2:void 0;if(D&&(z.marginLeft=D,z.marginRight=D),k){var H=Object(i.a)(L,2);z.rowGap=H[1]}else F&&(z.marginTop=F,z.marginBottom=F);var M=l.useMemo((function(){return{gutter:L,wrap:x,supportFlexGap:k}}),[L,x,k]);return l.createElement(f.a.Provider,{value:M},l.createElement("div",Object(n.a)({},E,{className:B,style:Object(n.a)(Object(n.a)({},z),O),ref:t}),v))})));v.displayName="Row";t.a=v},592:function(e,t,a){"use strict";var c=a(0),n={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"}}]},name:"caret-up",theme:"outlined"},r=a(21),o=function(e,t){return c.createElement(r.a,Object.assign({},e,{ref:t,icon:n}))};o.displayName="CaretUpOutlined";t.a=c.forwardRef(o)},593:function(e,t,a){"use strict";var c=a(0),n={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"},r=a(21),o=function(e,t){return c.createElement(r.a,Object.assign({},e,{ref:t,icon:n}))};o.displayName="CaretDownOutlined";t.a=c.forwardRef(o)},628:function(e,t,a){"use strict";a.r(t);var c=a(126),n=a(0),r=a.n(n),o=a(38),i=a(593),l=a(592),s=a(590).a,u=a(583).a,p=a(27),f=a(45),d=Object(n.lazy)((function(){return a.e(19).then(a.bind(null,622))}));t.default=Object(p.i)(Object(o.c)((function(e){var t=e.application,a=e.dispatch;return{detail:t.detail,graphs:t.graphs,dispatch:a}}))((function(e){var t=e.group,a=e.graphs,o=void 0===a?[]:a,p=e.timestamp,b=e.expandDefault,m=void 0!==b&&b,O=e.dispatch,j=Object(n.useState)(!m),g=Object(c.a)(j,2),v=g[0],h=g[1],y=Object(n.useState)([]),x=Object(c.a)(y,2),E=x[0],w=x[1],C=o.some((function(e){return e.groupId===t.id}));return Object(n.useEffect)((function(){t&&!v&&o.every((function(e){return e.groupId!==t.id}))&&O({type:"application/GRAPHS",payload:{id:t.id}})}),[t,v]),Object(n.useEffect)((function(){C&&w(o.filter((function(e){return e.groupId===t.id})))}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"application-group"},r.a.createElement("div",{className:"group"},r.a.createElement("div",{className:"group-header clickable",onClick:function(){return h(!v)}},r.a.createElement("h3",{title:E.id||"",className:"group-title"},Object(f.get)(t,"name","")),r.a.createElement("span",{className:"collapse-button"},v?r.a.createElement(i.a,null):r.a.createElement(l.a,null))),r.a.createElement("div",{className:"group-graphs ".concat(v?"collapse":"")},!v&&r.a.createElement(s,{gutter:[16,16]},E.length>0?E.map((function(e,t){return r.a.createElement(u,{key:e.id||t,xs:24,sm:24,md:24,lg:12,xl:8},r.a.createElement(d,{graph:e,timestamp:p}))})):r.a.createElement("p",{className:"text-center"},"Cannot load graphs."))))))})))}}]);
//# sourceMappingURL=9.433ef2d4.chunk.js.map