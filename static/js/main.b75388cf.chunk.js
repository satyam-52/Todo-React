(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),o=c(7),a=c.n(o),i=(c(13),c(3)),l=(c(14),c(8)),r=c(0),d=function(e){var t=e.inputText,c=e.setInputText,s=e.todos,n=e.setTodos,o=e.setStatus;return Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"search-bar",children:[Object(r.jsx)("input",{value:t,onChange:function(e){console.log(e.target.value),c(e.target.value)},type:"text",className:"todo-input"}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),n([].concat(Object(l.a)(s),[{text:t,completed:!1,id:1e3*Math.random()}])),c("")},className:"todo-button",type:"submit",children:Object(r.jsx)("i",{className:"fas fa-plus-square"})})]}),Object(r.jsx)("div",{className:"select",children:Object(r.jsxs)("select",{onChange:function(e){o(e.target.value)},name:"todos",className:"filter-todo",children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"completed",children:"Completed"}),Object(r.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},j=c(6),u=function(e){var t=e.text,c=e.setTodos,s=e.todos,n=e.todo;return Object(r.jsxs)("div",{className:"todo",children:[Object(r.jsx)("li",{className:"todo-item ".concat(n.completed?"completed":""),children:t}),Object(r.jsx)("button",{onClick:function(){c(s.map((function(e){return e.id===n.id?Object(j.a)(Object(j.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn",children:Object(r.jsx)("i",{className:"fas fa-check"})}),Object(r.jsx)("button",{onClick:function(){c(s.filter((function(e){return n.id!==e.id})))},className:"trash-btn",children:Object(r.jsx)("i",{className:"fas fa-trash"})})]})},b=function(e){var t=e.todos,c=e.setTodos,s=e.filteredTodos;return Object(r.jsx)("div",{className:"todo-container",children:Object(r.jsx)("ul",{className:"todo-list",children:s.map((function(e){return Object(r.jsx)(u,{todo:e,setTodos:c,todos:t,text:e.text},e.id)}))})})};var f=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],o=Object(s.useState)([]),a=Object(i.a)(o,2),l=a[0],j=a[1],u=Object(s.useState)("all"),f=Object(i.a)(u,2),O=f[0],h=f[1],x=Object(s.useState)([]),m=Object(i.a)(x,2),p=m[0],v=m[1];return Object(s.useEffect)((function(){switch(O){case"completed":v(l.filter((function(e){return!0===e.completed})));break;case"uncompleted":v(l.filter((function(e){return!1===e.completed})));break;default:v(l)}}),[l,O]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Satyam's Todo List"})}),Object(r.jsx)(d,{inputText:c,todos:l,setTodos:j,setInputText:n,setStatus:h,filteredTodos:p}),Object(r.jsx)(b,{filteredTodos:p,todos:l,setTodos:j}),Object(r.jsxs)("footer",{children:[Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"https://github.com/satyam-52",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("i",{class:"fab fa-github fa-2x"})})}),Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/satyamdua-18101999/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("i",{class:"fab fa-linkedin-in fa-2x"})})})]})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),o(e),a(e)}))};a.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.b75388cf.chunk.js.map