(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"courses":[{"id":1,"name":"Node.js ","modules":[{"id":1,"title":"REST API","status":"In progress"},{"id":2,"title":"PostgreSQL","status":"Complete"},{"id":3,"title":"MongoDB","status":"Submitted"},{"id":4,"title":"Websockets","status":"Ready to submitted"},{"id":5,"title":"Websockets","status":"Complete"},{"id":6,"title":"MongoDB","status":"In progress"},{"id":7,"title":"New Module","status":"Ready to submitted"},{"id":8,"title":"Module 58","status":"Ready to submitted"},{"id":11,"title":"New Module","status":"In progress"},{"id":12,"title":"PostgreSQL","status":"Complete"},{"id":13,"title":"PostgreSQL","status":"Complete"},{"id":14,"title":"Module","status":"Submitted"},{"id":15,"title":"Module","status":"In progress"},{"id":16,"title":"PostgreSQL","status":"In progress"},{"id":17,"title":"New Module","status":"Ready to submitted"},{"id":18,"title":"Module","status":"Ready to submitted"}]},{"id":2,"name":"React","modules":[{"id":1,"title":"useEffect","status":"Complete"},{"id":2,"title":"componentDidMount","status":"Submitted"},{"id":3,"title":"componentWillUnmount","status":"In progress"},{"id":4,"title":"constructor","status":"Complete"},{"id":5,"title":"this.setState()","status":"Complete"},{"id":6,"title":"React.lazy","status":"Complete"}]},{"id":3,"name":"Redux","modules":[{"id":1,"title":"Redux Toolkit ","status":"In progress"},{"id":2,"title":"compose(...functions)","status":"Complete"}]},{"id":4,"name":"Css","modules":[{"id":1,"title":"Grid Layout","status":"In progress"},{"id":2,"title":"Layout with Flexbox","status":"Submitted"},{"id":3,"title":"BEM","status":"In progress"},{"id":4,"title":"New Module","status":"In progress"}]}]}')},25:function(e,t,s){},27:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var c,i=s(0),a=s.n(i),n=s(7),d=s.n(n),r=(s(25),s(9)),o=s.n(r),u=s(12),l=(s(27),s(2)),j=s(20),p=s(1),m=function(e){var t=[];return e.courses.forEach((function(s){var c={id:s.id,name:s.name,modules:[],activeId:s.id+e.status};s.modules.forEach((function(t){t.status===e.status&&c.modules.push({id:t.id,title:t.title,status:t.status})})),0!==c.modules.length&&t.push(c)})),Object(p.jsx)("div",{className:"cards",children:t.map((function(t){return Object(p.jsxs)("div",{className:e.activeId===t.activeId?"card active":"card",onClick:function(){e.selectCard(t.id,t.activeId)},children:[Object(p.jsxs)("div",{className:"title",children:[" ",t.name]}),Object(p.jsx)("div",{className:"card-items",children:t.modules.map((function(s){return Object(p.jsx)("div",{className:e.activeModuleId===s.id+"."+t.id?"card-item active":"card-item",onClick:function(c){c.stopPropagation(),e.selectModuleAndCard(s.id+"."+t.id,t.id,t.activeId)},children:Object(p.jsx)("div",{className:"item-title",children:s.title})},s.id)}))})]},t.id)}))})},b=s(3),v="SELECT_CARD",O="SELECT_MODULE",h="SELECT_MODULE_AND_CARD",f="CLOSING_POP_UP",x="UPDATE_SEARCH_TEXT",g="SET_COURSES_PAGE",I="SET_IS_LOADING",C={courses:[],isLoading:!0,searchText:"",selectedCourseId:null,activeId:"",activeModuleId:null,isPopUp:!1},N=function(e){return{type:O,moduleId:e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(l.a)(Object(l.a)({},e),{},{courses:t.data});case I:return Object(l.a)(Object(l.a)({},e),{},{isLoading:t.data});case v:return Object(l.a)(Object(l.a)({},e),{},{selectedCourseId:t.id,activeId:t.activeId,activeModuleId:null,isPopUp:!0});case h:return Object(l.a)(Object(l.a)({},e),{},{activeModuleId:t.moduleId,selectedCourseId:t.cardId,activeId:t.activeId,isPopUp:!0});case O:return Object(l.a)(Object(l.a)({},e),{},{activeModuleId:t.moduleId,activeId:""});case f:return Object(l.a)(Object(l.a)({},e),{},{isPopUp:!1});case x:return Object(l.a)(Object(l.a)({},e),{},{searchText:t.text});default:return e}},M=Object(b.b)((function(e){var t=e.coursePage.courses,s=e.coursePage.searchText.toLowerCase();return{courses:t.filter((function(e){return!!e.name.toLowerCase().includes(s)||e.modules.some((function(e){return e.title.toLowerCase().includes(s)}))})),selectCourseId:e.coursePage.selectedCourseId,activeId:e.coursePage.activeId,activeModuleId:e.coursePage.activeModuleId,isPopUp:e.coursePage.isPopUp}}),(function(e){return{selectCard:function(t,s){e(function(e,t){return{type:v,id:e,activeId:t}}(t,s))},selectModuleAndCard:function(t,s,c){e(function(e,t,s){return{type:h,moduleId:e,cardId:t,activeId:s}}(t,s,c))},selectModule:function(t){e(N(t))}}}))((function(e){var t=e.courses,s=[];t.forEach((function(e){e.modules.forEach((function(e){s.push(e.status)}))}));var c=function(e){var t,s=[],c=Object(j.a)(e);try{for(c.s();!(t=c.n()).done;){var i=t.value;s.includes(i)||s.push(i)}}catch(a){c.e(a)}finally{c.f()}return s}(s);return Object(p.jsx)("div",{className:e.isPopUp?"cards-wrapper":"cards-wrapper active",children:c.map((function(t){return Object(p.jsxs)("div",{className:"cards-block",children:[Object(p.jsx)("div",{className:"status",children:t}),Object(p.jsx)(m,Object(l.a)({status:t,courses:e.courses,selectCard:e.selectCard,selectCourseId:e.selectCourseId,activeId:e.activeId,selectModuleAndCard:e.selectModuleAndCard,activeModuleId:e.activeModuleId},e))]},t)}))})})),y=Object(b.b)((function(e){return{courses:e.coursePage.courses,selectCourseId:e.coursePage.selectedCourseId,activeModuleId:e.coursePage.activeModuleId,isPopUp:e.coursePage.isPopUp}}),(function(e){return{selectModule:function(t){e(N(t))},closingPopUp:function(){e({type:f})}}}))((function(e){var t;return e.selectCourseId?(e.courses.forEach((function(s){s.id===e.selectCourseId&&(t=s)})),Object(p.jsxs)("div",{className:e.isPopUp?"pop-up active":"pop-up",children:[Object(p.jsx)("span",{onClick:function(){e.closingPopUp()},className:"icon",children:" \u2716 "}),Object(p.jsx)("div",{className:"title",children:t.name}),Object(p.jsx)("div",{className:"card-items",children:t.modules.map((function(s){var c=s.id+"."+t.id;return Object(p.jsxs)("div",{className:e.activeModuleId===c?"card-item active":"card-item",onClick:function(){e.selectModule(c)},children:[Object(p.jsx)("div",{className:"item-title",children:s.title}),Object(p.jsx)("div",{className:"item-status",children:s.status})]},s.id)}))})]})):Object(p.jsx)("div",{})})),S=Object(b.b)((function(e){return{searchText:e.coursePage.searchText}}),{updateSearchText:function(e){return{type:x,text:e}}})((function(e){var t=a.a.createRef();return Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("input",{onChange:function(){var s=t.current.value;e.updateSearchText(s)},ref:t,value:e.searchText,className:"input",type:"text",placeholder:"Search"}),Object(p.jsxs)("div",{className:"total-items",children:[Object(p.jsx)("div",{children:"Total items"}),Object(p.jsx)("div",{children:"(83)"})]})]})})),E=s(14),L=s(15),T=s(16).a.div(c||(c=Object(L.a)(["\n  display: inline-block;\n  width: 100%;\n  min-height: 100%;\n  animation: pulse 1.2s ease-in infinite;\n\n  @keyframes pulse {\n    0% {\n      background-color: rgba(165, 165, 165, .1);\n    }\n    50% {\n      background-color: rgba(165, 165, 165, .3);\n    }\n    100% {\n      background-color: rgba(165, 165, 165, .1)\n    }\n  }\n"]))),w=function(e){return Object(p.jsx)(T,{})},A=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{className:"total-items",children:Object(p.jsx)(w,{})})]}),Object(p.jsx)("div",{className:"App-body",children:Object(p.jsx)("div",{className:"content",children:Object(p.jsx)("div",{className:"cards-wrapper active",children:["","","",""].map((function(e,t){return Object(p.jsxs)("div",{className:"cards-block",children:[Object(p.jsx)("div",{className:"status loadingStatus",children:Object(p.jsx)(w,{})}),Object(p.jsx)("div",{className:"cards",children:["",""].map((function(e,t){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"title loadingTitle",children:Object(p.jsx)(w,{})}),Object(p.jsx)("div",{className:"card-items",children:["","",""].map((function(e,t){return Object(p.jsx)("div",{className:"loadingModule",children:Object(p.jsx)("div",{className:"item-title loading-item-title",children:Object(p.jsx)(w,{})})},t)}))})]},t)}))})]},t)}))})})})]})};var U=Object(b.b)((function(e){return{courses:e.coursePage.courses,isLoading:e.coursePage.isLoading}}),{setIsLoading:function(e){return{type:I,data:e}},setCoursesPage:function(e){return{type:g,data:e}}})((function(e){return Object(i.useEffect)((function(){var t=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{setTimeout((function(){e.setCoursesPage(E.courses),e.setIsLoading(!1)}),2e3)}catch(s){}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();0===e.courses.length&&t()}),[]),e.isLoading?Object(p.jsx)(A,{}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(S,{}),Object(p.jsx)("div",{className:"App-body",children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)(M,{}),Object(p.jsx)(y,{})]})})]})})),k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),c(e),i(e),a(e),n(e)}))},_=s(6),R=Object(_.b)({coursePage:P}),D=Object(_.c)(R);window.__store__=D;var B=D,F=function(e){d.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b.a,{store:B,children:Object(p.jsx)(U,{})})}),document.getElementById("root"))};F(B.getState()),B.subscribe(F),k()}},[[36,1,2]]]);
//# sourceMappingURL=main.ec469558.chunk.js.map