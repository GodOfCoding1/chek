(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),i=n(4),r=n.n(i),s=n(2),a=n(0),l=function(e){var t=e.profile,n=Object(o.useState)(null),c=Object(s.a)(n,2),i=c[0],r=c[1],l=Object(o.useState)(null),u=Object(s.a)(l,2),d=u[0],j=u[1];return Object(o.useEffect)((function(){if(i){var e=new FileReader;e.onload=function(){var t=e.result;j(t)},e.readAsDataURL(i)}}),[i]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"file",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",onChange:function(e){return r(e.target.files[0])}}),Object(a.jsx)("button",{onClick:function(){var e=JSON.stringify({data:d,email:t.email});console.log(e)},disabled:!d,children:"Upload"})]})},u=n(5),d=function(){var e=Object(o.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(l,{profile:n}):Object(a.jsx)(u.GoogleLogin,{clientId:"853282094760-mf7mr4csosgi0rsognc3trg6fgo8do9t.apps.googleusercontent.com",buttonText:"Login using gmail",onSuccess:function(e){return c(e.profileObj)},onFailure:function(e){return console.log(e)},cookiePolicy:"single_host_origin",isSignedIn:!0})})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.70d7ebb1.chunk.js.map