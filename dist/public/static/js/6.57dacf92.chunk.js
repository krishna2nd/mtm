(this["webpackJsonpms-task-manager-ui"]=this["webpackJsonpms-task-manager-ui"]||[]).push([[6],{138:function(e,t,n){"use strict";var r="".concat("","/triggers"),a="".concat("","/tags"),c="".concat("","/variables"),o=function(e){return"".concat(r,"/").concat(e)},i=function(e){return"".concat(a,"/").concat(e)},u=function(e){return"".concat(c,"/").concat(e)},l=n(43),s=n(45),f=n(44);n.d(t,"a",(function(){return y})),n.d(t,"d",(function(){return O})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"f",(function(){return j}));var d={"Content-Type":"application/json"},m=function(e,t){return fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return new t(e)}))}))},b=function(e,t){return delete t.id,fetch(e,{method:"PUT",headers:d,body:JSON.stringify(t)})},p=function(e,t){return fetch(e,{method:"POST",headers:d,body:JSON.stringify(t)})},y=function(){return m(a,l.a)},O=function(e){return-1===e.id?b(a,e):p(i(e.id),e)},h=function(){return m(r,f.a)},g=function(e){return-1===e.id?b(r,e):p(o(e.id),e)},v=function(){return m(c,s.a)},j=function(e){return-1===e.id?b(c,e):p(u(e.id),e)}},139:function(e,t,n){"use strict";var r=n(167),a=n(162),c=n(169),o=n(147),i=n(2),u=n(152),l=n(0),s=n(38),f=function(e){return l.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.createElement(a.a,{onClick:e.isActionInProgress?void 0:e.onSaveClick,styles:{root:{width:110}},disabled:!e.isFormValid},e.isActionInProgress?l.createElement(c.a,{size:o.a.small,label:"Saving...",labelPosition:"left",styles:{label:{color:i.d.white,fontSize:i.e.medium,fontWeight:i.f.semibold}}}):"Save"),l.createElement(u.a,{onClick:e.onCancelClick},"Cancel"))};t.a=Object(s.b)(null,(function(e){return{onCancelClick:function(){return e({type:"onCancelClick"})}}}))((function(e){return l.createElement(r.a,{isOpen:!0,closeButtonAriaLabel:"Close",headerText:e.headerText,onDismiss:e.onCancelClick,onRenderFooterContent:function(){return f(e)}},e.content)}))},140:function(e,t,n){"use strict";var r=n(41),a=n(164),c=n(165),o=n(142),i=n(151),u=n(37),l=n(0),s=n(38);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=Object(u.a)((function(e){return e.map((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({key:t.toString(),maxWidth:300,minWidth:e.minColumnWidth||300,isResizable:!0},e)}))}));t.a=Object(s.b)(null,(function(e){return{setSelectedItem:function(t){return e({type:"onItemSelection",payload:t})},resetSelectedItems:function(){return e({type:"onResetItemSelection"})}}}))((function(e){var t=new a.a({onSelectionChanged:function(){var n=t.getSelection()[0];n?e.setSelectedItem(n):e.resetSelectedItems()}});return l.createElement(c.a,{items:e.items,className:"table-border",columns:d(e.columns),layoutMode:o.e.fixedColumns,selectionPreservedOnEmptyClick:!0,selectionMode:i.b.single,selection:t})}))},141:function(e,t,n){"use strict";var r=n(168),a=n(0),c=n.n(a),o=200;function i(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var a=this,c=arguments,o=function(){r||e.apply(a,c)},i=r&&!t;clearTimeout(t),t=setTimeout(o,n),i&&e.apply(a,c)}}t.a=function(e){return c.a.createElement(r.a,Object.assign({},e,{onChange:i((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.onValueChange&&e.onValueChange(n)}))}))}},173:function(e,t,n){"use strict";n.r(t);var r=n(40),a=n(0),c=n.n(a),o=n(39),i=n(38),u=n(139),l=n(141),s=n(166),f=n(138),d=function(e){var t=Object(a.useState)(e.name),n=Object(r.a)(t,2),i=n[0],d=n[1],m=Object(a.useState)(e.type),b=Object(r.a)(m,2),p=b[0],y=b[1],O=Object(a.useState)(e.body),h=Object(r.a)(O,2),g=h[0],v=h[1],j=Object(a.useState)(o.b.NotYetStarted),C=Object(r.a)(j,2),S=C[0],E=C[1],k=c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{value:i,label:"Name",onValueChange:d,required:!0}),c.a.createElement(s.a,{placeholder:"Select Type",label:"Select Type",options:[{key:"function",text:"FUNCTION"},{key:"custom",text:"CUSTOM"},{key:"data_layer",text:"DATA_LAYER"},{key:"cookie",text:"COOKIE"}],onChange:function(e,t){y(t.text)}}),c.a.createElement(l.a,{value:g,label:"Body",onValueChange:v,rows:4,multiline:!0,required:!0}));return c.a.createElement(u.a,{headerText:-1===e.id?"Add Variables":"Edit Variables",onSaveClick:function(){E(o.b.Loading);var t={name:i,type:p,body:g,id:e.id};Object(f.f)(t).then((function(){return E(o.b.Completed)})).catch((function(){return E(o.b.Failed)}))},content:k,isFormValid:!0,isActionInProgress:S===o.b.Loading})},m=n(140),b=[{name:"Name",fieldName:"name"},{name:"Type",fieldName:"type"},{name:"Body",fieldName:"body"}];t.default={name:"Variables",component:Object(i.b)((function(e){return e.variables}))((function(e){var t=Object(a.useState)([]),n=Object(r.a)(t,2),o=n[0],i=n[1];return Object(a.useEffect)((function(){Object(f.c)().then(i)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{items:o,columns:b}),e.isPanelOpen&&c.a.createElement(d,e.selectedItem))})),icon:"Variable",key:o.a.Variables}}}]);
//# sourceMappingURL=6.57dacf92.chunk.js.map