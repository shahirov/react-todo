(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/components/footer/clear-button/clear-button.module.css":function(e,o,t){e.exports={"clear-completed":"clear-button-module__clear-completed--1-IuG"}},"./src/components/footer/filters/filters.module.css":function(e,o,t){e.exports={filters:"filters-module__filters--1mqUy",filter:"filters-module__filter--3jzPM",selected:"filters-module__selected--1KnlQ"}},"./src/components/footer/footer.module.css":function(e,o,t){e.exports={footer:"footer-module__footer--3w8-d"}},"./src/components/footer/todo-count/todo-count.module.css":function(e,o,t){e.exports={"todo-count":"todo-count-module__todo-count--1G6C3"}},"./src/components/header/first-heading/first-heading.module.css":function(e,o,t){e.exports={title:"first-heading-module__title--3cZAG"}},"./src/components/header/item-add-input/item-add-input.module.css":function(e,o,t){e.exports={"new-todo":"item-add-input-module__new-todo--1X9GO"}},"./src/components/main/main.module.css":function(e,o,t){e.exports={main:"main-module__main--2k8l8"}},"./src/components/main/todo-item/todo-item.css":function(e,o,t){},"./src/components/main/toggle-all-button/toggle-all-input.module.css":function(e,o,t){e.exports={"toggle-all":"toggle-all-input-module__toggle-all--2eBkp"}},"./src/index.css":function(e,o,t){},"./src/index.jsx":function(e,o,t){"use strict";t.r(o);var n=t("./node_modules/react/index.js"),r=t.n(n),l=t("./node_modules/react-dom/index.js"),a=t.n(l),s=(t("./src/index.css"),t("./node_modules/core-js/modules/es.symbol.js"),t("./node_modules/core-js/modules/es.symbol.description.js"),t("./node_modules/core-js/modules/es.symbol.iterator.js"),t("./node_modules/core-js/modules/es.array.concat.js"),t("./node_modules/core-js/modules/es.array.every.js"),t("./node_modules/core-js/modules/es.array.filter.js"),t("./node_modules/core-js/modules/es.array.find-index.js"),t("./node_modules/core-js/modules/es.array.for-each.js"),t("./node_modules/core-js/modules/es.array.from.js"),t("./node_modules/core-js/modules/es.array.iterator.js"),t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.date.to-string.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),t("./node_modules/core-js/modules/es.object.keys.js"),t("./node_modules/core-js/modules/es.object.to-string.js"),t("./node_modules/core-js/modules/es.regexp.to-string.js"),t("./node_modules/core-js/modules/es.string.iterator.js"),t("./node_modules/core-js/modules/web.dom-collections.for-each.js"),t("./node_modules/core-js/modules/web.dom-collections.iterator.js"),t("./node_modules/prop-types/index.js")),c=t.n(s),i=t("./src/components/header/first-heading/first-heading.module.css"),u=t.n(i),d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:u.a.title},"todos"))},m=t("./src/components/header/item-add-input/item-add-input.module.css"),f=t.n(m),p=function(e){var o=e.onTodoAdd;return r.a.createElement("input",{type:"text",className:f.a["new-todo"],onKeyDown:function(e){return o(e)},placeholder:"What needs to be done?"})};p.propTypes={onTodoAdd:c.a.func.isRequired};var g=p,b=function(e){var o=e.onTodoAdd;return r.a.createElement("header",{className:"header"},r.a.createElement(d,null),r.a.createElement(g,{onTodoAdd:o}))};b.propTypes={onTodoAdd:c.a.func.isRequired};var y=b,j=t("./src/components/main/main.module.css"),v=t.n(j),h=(t("./src/components/main/todo-item/todo-item.css"),function(e){var o=e.todo,t=e.onToggleClick,n=e.onDeleteClick,l=o.id,a=o.label,s=o.completed;return r.a.createElement("li",{className:s?"completed":""},r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",className:"toggle",onClick:function(){return t(l)}}),r.a.createElement("label",null,a),r.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(l)}})))});h.defaultProps={todo:{}},h.propTypes={todo:c.a.shape({id:c.a.number.isRequired,label:c.a.string.isRequired,completed:c.a.bool.isRequired}),onToggleClick:c.a.func.isRequired,onDeleteClick:c.a.func.isRequired};var E=h,_=function(e){var o=e.todos,t=e.onToggleClick,n=e.onDeleteClick,l=o.map((function(e){return r.a.createElement(E,{key:e.id,todo:e,onToggleClick:t,onDeleteClick:n})}));return r.a.createElement("ul",{className:"todo-list"},l)};_.defaultProps={todos:[]},_.propTypes={todos:c.a.arrayOf(c.a.shape({id:c.a.number.isRequired,label:c.a.string.isRequired,completed:c.a.bool.isRequired})),onToggleClick:c.a.func.isRequired,onDeleteClick:c.a.func.isRequired};var C=_,k=t("./src/components/main/toggle-all-button/toggle-all-input.module.css"),T=t.n(k),q=function(e){var o=e.onToggleAll;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"toggle-all",className:T.a["toggle-all"],type:"checkbox",onChange:function(){return o()}}),r.a.createElement("label",{htmlFor:"toggle-all"}))};q.propTypes={onToggleAll:c.a.func.isRequired};var w=q,O=function(e){var o=e.todos,t=e.onToggleClick,n=e.onDeleteClick,l=e.onToggleAll;return r.a.createElement("main",{className:v.a.main},r.a.createElement(w,{onToggleAll:l}),r.a.createElement(C,{todos:o,onToggleClick:t,onDeleteClick:n}))};O.defaultProps={todos:[]},O.propTypes={todos:c.a.arrayOf(c.a.shape({id:c.a.number.isRequired,label:c.a.string.isRequired,completed:c.a.bool.isRequired})),onToggleClick:c.a.func.isRequired,onDeleteClick:c.a.func.isRequired,onToggleAll:c.a.func.isRequired};var R=O,x=(t("./node_modules/core-js/modules/es.array.some.js"),t("./src/components/footer/footer.module.css")),A=t.n(x),N=t("./src/components/footer/todo-count/todo-count.module.css"),P=t.n(N),D=function(e){var o=e.todos.filter((function(e){return!e.completed})).length;return r.a.createElement("span",{className:P.a["todo-count"]},r.a.createElement("strong",null,o),r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,o>1?"items":"item"),r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"left"))};D.defaultProps={todos:[]},D.propTypes={todos:c.a.arrayOf(c.a.shape({id:c.a.number.isRequired,label:c.a.string.isRequired,completed:c.a.bool.isRequired}))};var S=D,F=(t("./node_modules/core-js/modules/es.function.name.js"),t("./src/components/footer/filters/filters.module.css")),I=t.n(F),G=function(e){var o=e.filter,t=e.onFilterChange,n=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"completed",label:"Completed"}].map((function(e){var n=e.name,l=e.label,a=o===n?I.a.selected:"";return r.a.createElement("li",{key:n,className:I.a.filter},r.a.createElement("a",{href:"#/",className:a,onClick:function(e){return t(e,n)}},l))}));return r.a.createElement("ul",{className:I.a.filters},n)};G.defaultProps={filter:"all"},G.propTypes={filter:c.a.string,onFilterChange:c.a.func.isRequired};var J=G,B=t("./src/components/footer/clear-button/clear-button.module.css"),K=t.n(B),z=function(e){var o=e.onClearCompleted;return r.a.createElement("button",{type:"button",className:K.a["clear-completed"],onClick:o},"Clear completed")};z.propTypes={onClearCompleted:c.a.func.isRequired};var M=z,Q=function(e){var o=e.todos,t=e.onClearCompleted,n=e.filter,l=e.onFilterChange,a=o.some((function(e){return!0===e.completed}))?r.a.createElement(M,{onClearCompleted:t}):null;return r.a.createElement("footer",{className:A.a.footer},r.a.createElement(S,{todos:o}),r.a.createElement(J,{filter:n,onFilterChange:l}),a)};Q.defaultProps={todos:[],filter:"all"},Q.propTypes={todos:c.a.arrayOf(c.a.shape({id:c.a.number.isRequired,label:c.a.string.isRequired,completed:c.a.bool.isRequired})),onClearCompleted:c.a.func.isRequired,onFilterChange:c.a.func.isRequired,filter:c.a.string};var U=Q;function W(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function X(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function Z(e){return function(e){if(Array.isArray(e)){for(var o=0,t=new Array(e.length);o<e.length;o++)t[o]=e[o];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function H(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,l=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!o||t.length!==o);n=!0);}catch(c){r=!0,l=c}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return t}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L=function(){var e=JSON.parse(localStorage.getItem("todos"))||[],o=H(Object(n.useState)(e),2),t=o[0],l=o[1],a=H(Object(n.useState)("all"),2),s=a[0],c=a[1],i=function(e){localStorage.setItem("todos",JSON.stringify(e))},u=function(e){l((function(o){var t=Z(o),n=t.findIndex((function(o){return o.id===e})),r=function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?W(t,!0).forEach((function(o){X(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(t).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}({},t[n]);return r.completed=!r.completed,t[n]=r,i(t),t}))},d=function(e){l((function(o){var t=o.map((function(o){var t=o.id,n=o.label;return{completed:e,id:t,label:n}}));return i(t),t}))},m=function(){var e=t.every((function(e){return!0===e.completed}));d(!e)},f=function(e,o){switch(o){case"active":return e.filter((function(e){return!e.completed}));case"completed":return e.filter((function(e){return e.completed}));default:return e}}(t,s);return r.a.createElement("div",null,r.a.createElement(y,{onTodoAdd:function(o){return function(o){var n=o.target;if("Enter"===o.key&&n.value){var r={id:t.length+1,label:n.value,completed:!1};l((function(e){return[].concat(Z(e),[r])})),n.value="",e.push(r),i(e)}}(o)}}),t.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{todos:f,onToggleClick:function(e){return u(e)},onDeleteClick:function(e){return function(e){l((function(o){var t=o.filter((function(o){return o.id!==e}));return i(t),t}))}(e)},onToggleAll:m}),r.a.createElement(U,{todos:f,filter:s,onClearCompleted:function(){l((function(e){var o=e.filter((function(e){return!e.completed}));return i(o),o}))},onFilterChange:function(e,o){return function(e,o){e.preventDefault(),c(o)}(e,o)}})):null)};a.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[["./src/index.jsx",2,0]]]);
//# sourceMappingURL=main.503000c4.chunk.js.map