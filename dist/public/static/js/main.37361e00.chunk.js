(this["webpackJsonpms-task-manager-ui"]=this["webpackJsonpms-task-manager-ui"]||[]).push([[1],{102:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(26),o=n.n(a),c=(n(96),n(76),n(129)),l=n(65),s=n(38),u=n(35),d=n(41);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={isAddPanelVisible:!1,isEditPanelVisible:!1,isDeleteConfirmationDialogVisible:!1,hasSelectedItem:!1},p=n(43);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e,t){return e},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O;return function(n,r){switch(r.type){case"onItemSelection":return b({},n,{selectedItem:new e(r.payload)});case"onRouteChange":case"onResetItemSelection":return b({},n,{selectedItem:new e});case"onAddClick":return b({},n,{panelData:new e,isPanelOpen:!0});case"onEditClick":return b({},n,{panelData:new e(n.selectedItem),isPanelOpen:!0});case"onCancelClick":return b({},n,{isPanelOpen:!1});default:return t(n,r)}}},y={selectedItem:new p.a,panelData:new p.a,isPanelOpen:!1},k=n(44),w={selectedItem:new k.a,panelData:new k.a,isPanelOpen:!1},E=n(45),j={selectedItem:new E.a,panelData:new E.a,isPanelOpen:!1},P=Object(u.c)(Object(u.b)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"onAddClick":return f({},e,{isAddPanelVisible:!0});case"onEditClick":return f({},e,{isEditPanelVisible:!0});case"onDeleteClick":return f({},e,{isDeleteConfirmationDialogVisible:!0});case"onItemSelection":return f({},e,{hasSelectedItem:!0});case"onRouteChange":case"onResetItemSelection":return f({},e,{hasSelectedItem:!1});default:return h}},tags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return v(p.a)(e,t)},triggers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;return v(k.a)(e,t)},variables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return v(E.a)(e,t)}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__({name:"MTM"})),C=n(40),D=n(37),S=n(134),I=n(130),N=n(21),R=n(39),T=function(e){return r.createElement(r.Fragment,null,e.routes.map((function(e){return r.createElement(N.b,{path:e.key,exact:!0,component:e.component,key:e.key})})),r.createElement(N.a,{to:R.a.Tags}))},_=Object(D.a)((function(e){return e.map((function(e){var t=e.name,n=e.key;return{name:t,key:n,icon:e.icon,url:"",link:n}}))})),A=Object(s.b)((function(e){return e.main}),(function(e){return{onAddClick:function(){return e({type:"onAddClick"})},onEditClick:function(){return e({type:"onEditClick"})},onDeleteClick:function(){return e({type:"onDeleteClick"})},onRouteChange:function(){return e({type:"onRouteChange"})}}}))(Object(N.f)((function(e){var t=r.useState(R.a.Tags),i=Object(C.a)(t,2),a=i[0],o=i[1],c=r.useState([]),l=Object(C.a)(c,2),s=l[0],u=l[1],d=r.useState("Tags"),m=Object(C.a)(d,2),f=m[0],h=m[1];r.useEffect((function(){0===s.length&&Promise.all([Promise.all([n.e(0),n.e(4)]).then(n.bind(null,171)),Promise.all([n.e(0),n.e(5)]).then(n.bind(null,172)),Promise.all([n.e(0),n.e(7),n.e(6)]).then(n.bind(null,173))]).then((function(e){return u(e.map((function(e){return e.default})))}))}),[s]);return r.createElement("main",{className:"container"},r.createElement("aside",{className:"nav-list-container"},r.createElement(S.a,{groups:[{links:_(s)}],selectedKey:a,onLinkClick:function(t,n){e.history.push(n.link),o(n.link),h(n.name),e.onRouteChange()}})),r.createElement("div",{className:"page-container"},r.createElement("h2",{className:"header-padding"},f),r.createElement(I.a,{items:[{key:"addRow",text:"Add",iconProps:{iconName:"Add"},onClick:function(){return e.onAddClick()}},{key:"editRow",text:"Edit",disabled:!e.hasSelectedItem,iconProps:{iconName:"Edit"},onClick:function(){return e.onEditClick()}},{key:"deleteRow",text:"Delete",disabled:!e.hasSelectedItem,iconProps:{iconName:"Trash"},onClick:function(){return e.onDeleteClick()}}]}),r.createElement(T,{routes:s,setSelectedRoute:function(t){o(t),e.onRouteChange()}})))})));Object(c.a)();var V=function(){return r.createElement(s.a,{store:P},r.createElement(l.a,null,r.createElement("header",null,r.createElement("h1",{className:"header"},"Microsoft Tag Manager")),r.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,t,n){"use strict";var r,i;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),function(e){e.Triggers="/triggers",e.Variables="/variables",e.Tags="/"}(r||(r={})),function(e){e[e.NotYetStarted=0]="NotYetStarted",e[e.Loading=1]="Loading",e[e.Completed=2]="Completed",e[e.Failed=3]="Failed"}(i||(i={}))},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(31),i=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(this,e),this.name="",this.body="",this.triggers=[],this.id=-1,Object.assign(this,t)}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(31),i=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(this,e),this.name="",this.type="",this.body="",this.id=-1,Object.assign(this,t)}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(31),i=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(this,e),this.body="",this.name="",this.type="",this.id=-1,Object.assign(this,t)}},76:function(e,t,n){},91:function(e,t,n){e.exports=n(102)},96:function(e,t,n){}},[[91,2,3]]]);
//# sourceMappingURL=main.37361e00.chunk.js.map