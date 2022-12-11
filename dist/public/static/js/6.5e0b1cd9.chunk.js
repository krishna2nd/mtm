(this["webpackJsonpms-task-manager-ui"]=this["webpackJsonpms-task-manager-ui"]||[]).push([[6],{137:function(e,t,n){"use strict";var a=n(178),r=n(148),o=n(169),i=n(177),c=n(147),l=n(2),s=n(156),u=n(0),m=n.n(u),d=n(38),f=function(e){return m.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},m.a.createElement(o.a,{onClick:e.isActionInProgress?void 0:e.onSaveClick,styles:{root:{width:110}},disabled:!e.isFormValid},e.isActionInProgress?m.a.createElement(i.a,{size:c.a.small,label:"Saving...",labelPosition:"left",styles:{label:{color:l.d.white,fontSize:l.e.medium,fontWeight:l.f.semibold}}}):"Save"),m.a.createElement(s.a,{onClick:e.onPanelDismiss,styles:{root:{borderColor:l.d.neutralQuaternary}}},"Cancel"))};t.a=Object(d.b)(null,(function(e){return{onPanelDismiss:function(){return e({type:"onPanelDismiss"})}}}))((function(e){return m.a.createElement(a.a,{isOpen:!0,type:r.a.medium,styles:{main:{padding:"10px 20px"}},closeButtonAriaLabel:"Close",headerText:e.headerText,onDismiss:e.onPanelDismiss,onRenderFooterContent:function(){return f(e)}},e.content)}))},138:function(e,t,n){"use strict";var a=n(40),r=n(173),o=n(146),i=n(155),c=n(169),l=n(156),s=n(0),u=n.n(s),m=function(e){return e.isVisible?u.a.createElement(r.a,{hidden:!1,dialogContentProps:{type:o.a.normal,title:"Are you sure?",subText:"Deleting will permanently remove this item."},modalProps:{styles:{main:{maxWidth:450}},isBlocking:!0}},u.a.createElement(i.a,null,u.a.createElement(c.a,{onClick:e.onConfirm,text:"Yes"}),u.a.createElement(l.a,{onClick:e.onCancel,text:"No"}))):null},d=n(42),f=n(170),b=n(172),p=n(2),y=n(141),g=n(154),h=n(37),v=n(38);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var C=Object(h.a)((function(e){return e.map((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({key:t.toString(),maxWidth:e.maxColumnWidth||300,columnActionsMode:y.b.disabled,minWidth:200,isResizable:!0},e)}))})),j=Object(v.b)(null,(function(e){return{setSelectedItem:function(t){return e({type:"onItemSelection",payload:t})},resetSelectedItems:function(){return e({type:"onResetItemSelection"})}}}))((function(e){var t=new f.a({onSelectionChanged:function(){var n=t.getSelection()[0];n?e.setSelectedItem(n):e.resetSelectedItems()}});return u.a.createElement(b.a,{items:e.items,className:Object(p.E)({border:"0px solid",borderColor:p.d.neutralQuaternaryAlt}),columns:C(e.columns),layoutMode:y.e.fixedColumns,selectionPreservedOnEmptyClick:!0,selectionMode:g.b.single,selection:t})})),E=n(39);t.a=Object(v.b)(null,(function(e){return{onDeleteDialogDismiss:function(){return e({type:"onDeleteDialogDismiss"})},onPanelDismiss:function(){return e({type:"onPanelDismiss"})}}}))((function(e){var t=e.apiService,n=e.columns,r=e.onDeleteDialogDismiss,o=e.onPanelDismiss,i=e.renderPanel,c=e.state,l=Object(s.useState)([]),d=Object(a.a)(l,2),f=d[0],b=d[1],p=Object(s.useState)(E.b.NotYetStarted),y=Object(a.a)(p,2),g=y[0],h=y[1],v=function(){t.getList().then(b)};return Object(s.useEffect)((function(){v()}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement(j,{items:f,columns:n}),c.isPanelOpen&&i(c.panelData,(function(e){h(E.b.Loading),t.saveItem(e).then((function(){return h(E.b.Completed)})).then(v).catch((function(){return h(E.b.Failed)})).finally(o)}),g),u.a.createElement(m,{onConfirm:function(){t.deleteItem(c.selectedItem.id).then(v),r()},onCancel:r,isVisible:c.isDeleteConfirmationDialogVisible}))}))},139:function(e,t,n){"use strict";var a="".concat("","/triggers"),r="".concat("","/tags"),o="".concat("","/variables"),i=n(46),c=n(47),l=n(41);n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}));var s={"Content-Type":"application/json"},u=function(e,t,n){return{getList:function(){return function(e,t){return fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return new t(e)}))}))}(e,n)},deleteItem:function(e){return n=t(e),fetch(n,{method:"DELETE",headers:s});var n},saveItem:function(n){return-1===n.id?function(e,t){return delete t.id,fetch(e,{method:"PUT",headers:s,body:JSON.stringify(t)})}(e,n):function(e,t){return fetch(e,{method:"POST",headers:s,body:JSON.stringify(t)})}(t(n.id),n)}}},m=u(r,(function(e){return"".concat(r,"/").concat(e)}),i.a),d=u(a,(function(e){return"".concat(a,"/").concat(e)}),c.a),f=u(o,(function(e){return"".concat(o,"/").concat(e)}),l.a)},140:function(e,t,n){"use strict";var a=n(175),r=n(2),o=n(0),i=n.n(o),c=10;function l(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=this,o=arguments,i=function(){a||e.apply(r,o)},c=a&&!t;clearTimeout(t),t=setTimeout(i,n),c&&e.apply(r,o)}}t.a=function(e){return i.a.createElement(a.a,Object.assign({},e,{autoComplete:"off",styles:{root:{padding:"8px 0"},fieldGroup:{borderColor:r.d.neutralTertiaryAlt}},spellCheck:!1,onChange:l((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.onValueChange&&e.onValueChange(n)}))}))}},182:function(e,t,n){"use strict";n.r(t);var a=n(138),r=n(39),o=n(41),i=n(0),c=n.n(i),l=n(38),s=n(139),u=n(40),m=n(137),d=n(140),f=n(174),b=n(2),p=function(e){var t=Object(i.useState)(e.name),n=Object(u.a)(t,2),a=n[0],l=n[1],s=Object(i.useState)(e.type),p=Object(u.a)(s,2),y=p[0],g=p[1],h=Object(i.useState)(e.body),v=Object(u.a)(h,2),O=v[0],C=v[1],j=c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{value:a,label:"Name",onValueChange:l,required:!0}),c.a.createElement(f.a,{placeholder:"Select one",label:"Type",selectedKey:y,options:o.b,styles:{title:{borderColor:b.d.neutralTertiaryAlt}},onChange:function(e,t){g(t.key.toString())},required:!0}),c.a.createElement(d.a,{value:O,label:"Body",onValueChange:C,rows:4,multiline:!0}));return c.a.createElement(m.a,{headerText:-1===e.id?"Add Variables":"Edit Variables",onSaveClick:function(){var t={name:a,type:y,body:O,id:e.id};e.saveItem(t)},content:j,isActionInProgress:e.saveStatus===r.b.Loading,isFormValid:Boolean(a)&&Boolean(y)})},y=[{name:"Name",fieldName:"name"},{name:"Type",onRender:function(e){return(o.b.find((function(t){return t.key===e.type}))||{text:"-"}).text}},{name:"Body",fieldName:"body"}],g=function(e,t,n){return c.a.createElement(p,Object.assign({},e,{saveItem:t,saveStatus:n}))};t.default={name:"Variables",component:Object(l.b)((function(e){return e.variables}))((function(e){return c.a.createElement(a.a,{renderPanel:g,apiService:s.c,state:e,columns:y})})),icon:"Variable",key:r.a.Variables}}}]);
//# sourceMappingURL=6.5e0b1cd9.chunk.js.map