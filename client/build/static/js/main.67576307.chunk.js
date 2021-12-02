(this["webpackJsonpthoughts-app-client"]=this["webpackJsonpthoughts-app-client"]||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(21),s=n.n(a),o=(n(28),n(10)),i=n(2),u=n(0),l=function(){return Object(u.jsx)("header",{className:"bg-secondary mb-4 py-2 flex-row align-center",children:Object(u.jsxs)("div",{className:"container flex-row justify-space-between-lg justify-center align-center",children:[Object(u.jsx)(o.b,{to:"/",style:{fontWeight:700},className:"text-light",children:Object(u.jsx)("h1",{children:"Deep Thoughts"})})," "]})})},h=function(){return Object(u.jsx)("footer",{className:"w-100 mt-auto bg-secondary p-4",children:Object(u.jsx)("div",{className:"container",children:"\xa92021 by Lernantino"})})},j=n(4),b=n.n(j),d=n(23),f=n(8),p=n(9),m=function(e){var t=e.thoughts,n=e.title;return t.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:n}),t&&t.map((function(e){return Object(u.jsxs)("div",{className:"card mb-3",children:[Object(u.jsxs)("p",{className:"card-header",children:[Object(u.jsxs)(o.b,{to:"/profile/".concat(e.username),style:{fontWeight:700},className:"text-light",children:[e.username,"'s thought on"," ",new Date(parseInt(e.createdAt)).toString()]})," "]}),e.thought&&Object(u.jsx)("p",{className:"px-2 mt-2",children:e.thought}),e.image&&Object(u.jsx)("p",{className:"px-2",children:Object(u.jsx)("img",{className:"mt-3 ml-4 thought-image",src:e.image,alt:"S3 bucket response"})})]},e.createdAt)}))]}):Object(u.jsx)("h3",{children:"No Thoughts Yet"})},g=n(16),x=n(14),O=function(){var e=Object(c.useState)({username:"",thought:"",image:""}),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),s=Object(p.a)(a,2),o=s[0],i=s[1],l=Object(c.useRef)(null),h=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(Object(x.a)(Object(x.a)({},n),{},{image:t}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(f.a)(b.a.mark((function e(t){var c,r,a,s,o,i,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://g2iyl7jbgb.execute-api.us-east-2.amazonaws.com/Prod/api/pre-url");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t.preventDefault(),r=l.current.files[0],e.prev=3,e.next=6,c();case 6:a=e.sent,s=a.uploadURL,o=a.publicURL,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:return e.next=16,h(o);case 16:return i=e.sent,e.prev=17,e.next=20,fetch(s,{method:"PUT",body:r});case 20:u=e.sent,console.log("result: ",u),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(17),console.error(e.t1);case 27:return i&&(console.log("publicURL: ",o),console.log("formState: ",n)),e.abrupt("return",n);case 29:case"end":return e.stop()}}),e,null,[[3,11],[17,24]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e){e.target.value.length<=280&&(r(Object(x.a)(Object(x.a)({},n),{},Object(g.a)({},e.target.name,e.target.value))),i(e.target.value.length))};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:"m-0 ".concat(280===o?"text-error":""),children:["Character Count: ",o,"/280"]}),Object(u.jsxs)("form",{className:"flex-row justify-center justify-space-between-md align-stretch",onSubmit:function(e){e.preventDefault(),function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return t=e.sent,console.log(t.json),console.log("Submit: ",n),e.next=7,t.json();case 7:e.sent;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),r({username:"",thought:"",image:""}),i(0)},children:[Object(u.jsx)("input",{placeholder:"Name",name:"username",value:n.username,className:"form-input col-12 ",onChange:d}),Object(u.jsx)("textarea",{placeholder:"Here's a new thought...",name:"thought",value:n.thought,className:"form-input col-12 ",onChange:d}),Object(u.jsxs)("label",{className:"form-input col-12  p-1",children:["Add an image to your thought:",Object(u.jsx)("input",{type:"file",ref:l,className:"form-input p-2 "}),Object(u.jsx)("button",{className:"btn ",onClick:j,type:"submit",children:"Upload"})]}),Object(u.jsx)("button",{className:"btn col-12 ",type:"submit",children:"Submit"})]})]})},v=function(){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(p.a)(a,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(f.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://g2iyl7jbgb.execute-api.us-east-2.amazonaws.com/Prod/api/users/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(Object(d.a)(n)),r(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){}),[o]),Object(u.jsx)("main",{children:Object(u.jsxs)("div",{className:"flex-row justify-space-between",children:[Object(u.jsx)("div",{className:"col-12 mb-3",children:Object(u.jsx)(O,{})}),Object(u.jsx)("div",{className:"col-12 mb-3 ",children:n?Object(u.jsx)(m,{thoughts:o,setThoughts:i,title:"Some Feed for Thought(s)..."}):Object(u.jsx)("div",{children:"Loading..."})})]})})},w=function(){return Object(u.jsx)("div",{children:"Oops, we couldn't find that page."})},y=function(e){var t=Object(i.f)().username,n=Object(c.useState)(!1),r=Object(p.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)([{username:t,createdAt:"",thought:"",image:""}]),l=Object(p.a)(o,2),h=l[0],j=l[1];return Object(c.useEffect)((function(){(function(){var e=Object(f.a)(b.a.mark((function e(){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,j(c),s(!0),console.log("thoughts: ",h),console.log("data: ",c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"flex-row mb-3",children:Object(u.jsxs)("h2",{className:"bg-dark text-secondary p-3 display-inline-block",children:["Viewing ",t?"".concat(t,"'s"):"your"," profile."]})}),Object(u.jsx)("div",{className:"flex-row justify-space-between mb-3",children:Object(u.jsx)("div",{className:"col-12 mb-3 col-lg-9",children:a?Object(u.jsx)(m,{thoughts:h,title:"".concat(t,"'s thoughts...")}):Object(u.jsx)("div",{children:"Loading..."})})})]})};var N=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"flex-column justify-flex-start min-100-vh",children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",component:v}),Object(u.jsx)(i.a,{exact:!0,path:"/profile/:username",component:y}),Object(u.jsx)(i.a,{component:w})]})}),Object(u.jsx)(h,{})]})})},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.67576307.chunk.js.map