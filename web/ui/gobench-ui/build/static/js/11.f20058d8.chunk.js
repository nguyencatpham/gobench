(this["webpackJsonpgobench-ui"]=this["webpackJsonpgobench-ui"]||[]).push([[11],{632:function(e,a,t){},677:function(e,a,t){"use strict";t.r(a);var n=t(64),c=t(13),l=t(131),i=t(0),r=t.n(i),s=t(684),o=t(142),m=t(686),u=t(38),g=t(648),d=t.n(g),h=t(649),p=(t(637),t(638),t(28)),E=(t(632),s.a.Item);a.default=Object(p.i)(Object(u.c)((function(e){var a=e.application,t=e.dispatch;return{loading:a.loading,clone:a.clone,dispatch:t}}))((function(e){var a=e.loading,t=e.clone,u=e.dispatch,g=s.a.useForm(),b=Object(l.a)(g,1)[0],f=Object(p.g)(),v=Object(i.useState)(""),N=Object(l.a)(v,2),O=N[0],j=N[1],S=Object(i.useState)(""),y=Object(l.a)(S,2),F=y[0],C=y[1],z=Object(i.useState)(""),k=Object(l.a)(z,2),q=k[0],A=k[1],V=Object(i.useState)(""),w=Object(l.a)(V,2),_=w[0],T=w[1];Object(i.useEffect)((function(){!b.getFieldValue("name")&&t&&(b.setFieldsValue(Object(c.a)({},t)),j(t.name),C(t.scenario),A(t.gomod),T(t.gosum))}));var x=function(e,a){switch(b.setFieldsValue(Object(n.a)({},e,a)),e){case"name":j(a);break;case"scenario":C(a);break;case"gomod":A(a);break;case"gosum":T(a)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement(s.a,{layout:"vertical",hideRequiredMark:!0,onFinish:function(e){e.gomod||(e.gomod=""),e.gosum||(e.gosum=""),u({type:"application/CREATE",payload:e})},onFinishFailed:function(e){console.log("Failed:",e)},className:"mb-4",form:b},r.a.createElement("div",{className:"card-header row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"cui__utils__heading mb-0"},r.a.createElement("h3",null,"Create new Application")),r.a.createElement("div",{className:"text-muted"},"Tips: You can clone another application and run again!")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"text-right"},r.a.createElement(o.a,{type:"primary",size:"large",htmlType:"submit",loading:a},r.a.createElement("strong",null,"Create")),r.a.createElement(o.a,{size:"large",style:{marginLeft:5},onClick:function(){return f.push("/applications")}},r.a.createElement("strong",null,"Cancel"))))),r.a.createElement("div",{className:"card-body"},r.a.createElement(E,{name:"name",rules:[{required:!0,message:"Application name is required"}]},r.a.createElement("h4",{className:"mb-2"},r.a.createElement("strong",null,"Application Name")),r.a.createElement(m.a,{value:O,onChange:function(e){return x("name",e.target.value)},placeholder:"Please input the application name."})),r.a.createElement(E,{name:"scenario",rules:[{required:!0,message:"Scenario is required"}]},r.a.createElement("h4",{className:"mb-2"},r.a.createElement("strong",null,"Scenario")),r.a.createElement("div",{className:"editor-container"},r.a.createElement(d.a,{value:F,onValueChange:function(e){return x("scenario",e)},highlight:function(e){return Object(h.highlight)(e||"",h.languages.go,"go")},padding:16,tabSize:4,insertSpaces:!0,className:"editor",autoFocus:!0,style:{fontFamily:'"Arial", "Open Sans", monospace',fontSize:14}}))),r.a.createElement(E,{name:"gomod",rules:[{required:!1}]},r.a.createElement("h4",{className:"mb-2"},r.a.createElement("strong",null,"gomod")),r.a.createElement("div",{className:"editor-container"},r.a.createElement(d.a,{value:q,onValueChange:function(e){return x("gomod",e)},highlight:function(e){return Object(h.highlight)(e||"",h.languages.go,"go")},padding:16,tabSize:4,insertSpaces:!0,className:"editor",style:{fontFamily:'"Arial", "Open Sans", monospace',fontSize:14}}))),r.a.createElement(E,{name:"gosum",rules:[{required:!1}]},r.a.createElement("h4",{className:"mb-2"},r.a.createElement("strong",null,"gosum")),r.a.createElement("div",{className:"editor-container"},r.a.createElement(d.a,{value:_,onValueChange:function(e){return x("gosum",e)},highlight:function(e){return Object(h.highlight)(e||"",h.languages.go,"go")},padding:16,tabSize:4,insertSpaces:!0,className:"editor",style:{fontFamily:'"Arial", "Open Sans", monospace',fontSize:14}}))))))))})))}}]);
//# sourceMappingURL=11.f20058d8.chunk.js.map