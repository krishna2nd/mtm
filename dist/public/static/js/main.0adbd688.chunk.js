(this["webpackJsonpms-task-manager-ui"]=this["webpackJsonpms-task-manager-ui"]||[]).push([[1],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(26),o=n.n(a),c=n(40),l=n(39),s=n(37),u=n(2),d=n(133),m=n(129),f=n(38),b=n(21),h=function(e){return r.a.createElement(r.a.Fragment,null,e.routes.map((function(e){return r.a.createElement(b.b,{path:e.key,exact:!0,component:e.component,key:e.key})})),r.a.createElement(b.a,{to:l.a.Tags}))},p=Object(s.a)((function(e){return e.map((function(e){var t=e.name,n=e.key;return{name:t,key:n,icon:e.icon,url:"",link:n}}))})),g=Object(f.b)((function(e){return e.main}),(function(e){return{onAddClick:function(){return e({type:"onAddClick"})},onEditClick:function(){return e({type:"onEditClick"})},onDeleteClick:function(){return e({type:"onDeleteClick"})},onRouteChange:function(){return e({type:"onRouteChange"})}}}))(Object(b.f)((function(e){var t=Object(i.useState)(l.a.Tags),a=Object(c.a)(t,2),o=a[0],s=a[1],f=Object(i.useState)([]),b=Object(c.a)(f,2),g=b[0],O=b[1],y=Object(i.useState)("Tags"),E=Object(c.a)(y,2),v=E[0],k=E[1];Object(i.useEffect)((function(){Promise.all([Promise.all([n.e(0),n.e(4)]).then(n.bind(null,180)),Promise.all([n.e(0),n.e(5)]).then(n.bind(null,181)),Promise.all([n.e(0),n.e(7),n.e(6)]).then(n.bind(null,182))]).then((function(e){return O(e.map((function(e){return e.default})))}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:Object(u.E)({textAlign:"center",borderBottom:"1px solid",borderColor:u.d.neutralQuaternaryAlt})},r.a.createElement("h1",null,"Microsoft Tag Manager")),r.a.createElement("main",{className:Object(u.E)({display:"flex",height:"100vh",overflow:"hidden"})},r.a.createElement("aside",{className:Object(u.E)({flexBasis:"12%",borderRight:"1px solid",borderColor:u.d.neutralQuaternaryAlt})},r.a.createElement(d.a,{groups:[{links:p(g)}],selectedKey:o,onLinkClick:function(t,n){e.history.push(n.link),s(n.link),k(n.name),e.onRouteChange()}})),r.a.createElement("div",{className:Object(u.E)({flex:1,borderBottom:"1px solid",borderColor:u.d.neutralQuaternaryAlt})},r.a.createElement("h2",{className:Object(u.E)({paddingLeft:"34px"})},v),r.a.createElement(m.a,{items:[{key:"addRow",text:"Add",iconProps:{iconName:"Add"},onClick:function(){e.onAddClick()}},{key:"editRow",text:"Edit",disabled:!e.hasSelectedItem,iconProps:{iconName:"Edit"},onClick:function(){e.onEditClick()}},{key:"deleteRow",text:"Delete",disabled:!e.hasSelectedItem,iconProps:{iconName:"Trash"},onClick:function(){e.onDeleteClick()}}]}),r.a.createElement(h,{routes:g,setSelectedRoute:function(t){s(t),e.onRouteChange()}}))))}))),O=n(128),y=n(65),E=n(35),v=n(42);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={isAddPanelVisible:!1,isEditPanelVisible:!1,isDeleteConfirmationDialogVisible:!1,hasSelectedItem:!1},D=n(46);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e,t){return e},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S;return function(n,i){switch(i.type){case"onItemSelection":return P({},n,{selectedItem:new e(i.payload)});case"onRouteChange":case"onResetItemSelection":return P({},n,{selectedItem:new e});case"onAddClick":return P({},n,{panelData:new e,isPanelOpen:!0});case"onEditClick":return P({},n,{panelData:new e(n.selectedItem),isPanelOpen:!0});case"onPanelDismiss":return P({},n,{isPanelOpen:!1});case"onDeleteClick":return P({},n,{isDeleteConfirmationDialogVisible:!0});case"onDeleteDialogDismiss":return P({},n,{isDeleteConfirmationDialogVisible:!1});default:return t(n,i)}}},x={selectedItem:new D.a,panelData:new D.a,isPanelOpen:!1,isDeleteConfirmationDialogVisible:!1},A=n(47),N={selectedItem:new A.a,panelData:new A.a,isPanelOpen:!1,isDeleteConfirmationDialogVisible:!1},R=n(41),T={selectedItem:new R.a,panelData:new R.a,isPanelOpen:!1,isDeleteConfirmationDialogVisible:!1},_=Object(E.c)(Object(E.b)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"onAddClick":return j({},e,{isAddPanelVisible:!0});case"onEditClick":return j({},e,{isEditPanelVisible:!0});case"onItemSelection":return j({},e,{hasSelectedItem:!0});case"onRouteChange":case"onResetItemSelection":return j({},e,{hasSelectedItem:!1});default:return e}},tags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return I(D.a)(e,t)},triggers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return I(A.a)(e,t)},variables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return I(R.a)(e,t)}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__({name:"MTM"}));Object(O.a)(),document.title="Microsoft Task Manager";n(100),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return i.createElement(f.a,{store:_},i.createElement(y.a,null,i.createElement(g,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,t,n){"use strict";var i,r;n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),function(e){e.Triggers="/triggers",e.Variables="/variables",e.Tags="/"}(i||(i={})),function(e){e[e.NotYetStarted=0]="NotYetStarted",e[e.Loading=1]="Loading",e[e.Completed=2]="Completed",e[e.Failed=3]="Failed"}(r||(r={}))},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var i=n(31),r=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(i.a)(this,e),this.body="",this.name="",this.type="",this.id=-1,Object.assign(this,t)},a=[{key:"function",text:"FUNCTION"},{key:"custom",text:"CUSTOM"},{key:"data_layer",text:"DATA_LAYER"},{key:"cookie",text:"COOKIE"}]},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(31),r=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(i.a)(this,e),this.name="",this.body="",this.triggers=[],this.id=-1,Object.assign(this,t)}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(31),r=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(i.a)(this,e),this.name="",this.type="",this.body="",this.id=-1,Object.assign(this,t)}},90:function(e,t,n){e.exports=n(101)}},[[90,2,3]]]);
//# sourceMappingURL=main.0adbd688.chunk.js.map