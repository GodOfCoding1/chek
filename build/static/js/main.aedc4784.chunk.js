(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{179:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(105),o=n.n(r),i=n(112),s=n(18),u=n(2),d=function(){return Object(u.jsx)("h1",{children:"not found"})},l=n(35),j=n.n(l),h=n(43),b=n(40),m=n(11),p=n(7),f=n(44),x=n.n(f),O=n(210),y=n(212);function g(e){return new Promise((function(t){var n=document.createElement("script");n.src=e,n.onload=function(){t(!0)},n.onerror=function(){t(!1)},document.body.appendChild(n)}))}var v=function(e){var t=e.amount,n=function(){var e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://checkout.razorpay.com/v1/checkout.js");case 2:if(e.sent){e.next=6;break}return alert("Razorpay SDK failed to load. Are you online?"),e.abrupt("return");case 6:x.a.post("".concat("https://chek-shopping-app.herokuapp.com","/payment/razorpay"),{amount:t,currency:"INR"}).then((function(e){console.log(e.data);var t=localStorage.getItem("user"),n={key:e.data.key,currency:e.data.currency,amount:e.data.amount.toString(),order_id:e.data.id,name:"Pay Bill",handler:function(e){window.alert("Payment made successfully.")}};t&&(n.prefill={name:t.name,email:t.email,phone_number:t.cust_ph_num}),new window.Razorpay(n).open()})).catch((function(e){window.alert("Some error occured in connecting to RazorPay"),console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(y.a,{variant:"contained",style:{borderRadius:5},onClick:function(){window.confirm("Are you sure you want to check out?")&&n()},"aria-label":"view",children:"CheckOut"})},w=n(213),k=n(206),D=n(107),S=n.n(D),I=function(e){var t=e.itemData,n=e.index,a=(e.deleteItem,e.handleQuantityChange);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k.a,{w:"100%",backgroundColor:"white",p:20,children:Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(u.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:Object(u.jsxs)("div",{style:{marginLeft:10},children:[Object(u.jsx)(w.a,{variant:"h6",children:Object(u.jsx)("b",{children:t.name})}),Object(u.jsxs)(w.a,{variant:"body1",children:["Price ",t.price]})]})}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{style:{width:"115px"},children:Object(u.jsx)(S.a,{onChange:function(e){a(e,n)},value:t.quantity})})})]})})," ",Object(u.jsx)("hr",{style:{margin:0,width:"90%",color:"white"}})]})},C=n(108),_=n.n(C),P=function(e){var t=e.items,n=e.handleQuantityChange,c=e.deleteItem,r=Object(a.useState)(!1),o=Object(p.a)(r,2),i=o[0],s=o[1],d=Object(a.useState)(0),l=Object(p.a)(d,2),j=l[0],h=l[1];Object(a.useEffect)((function(){console.log(t),t.length>1&&(s(!0),h(t.reduce((function(e,t){return"number"===typeof e?Number(e)+Number(t.price)*t.quantity:Number(e.price)*e.quantity+Number(t.price)*t.quantity})))),1===t.length&&(s(!0),h(Number(t[0].price)*t[0].quantity)),t.length<1&&s(!1)}),[t]);var b=function(){return Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",background:"white",marginTop:20},children:[Object(u.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(u.jsxs)(O.a,{fontSize:14,children:["Total: \u20b9 ",j]})}),Object(u.jsx)(v,{amount:j})]})};return Object(u.jsx)("div",{children:i?Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:20,paddingTop:0,background:"white"},children:[Object(u.jsx)(_.a,{style:{fontSize:40,marginTop:20,marginBottom:20,color:"grey"}}),Object(u.jsx)("hr",{style:{margin:0,width:"90%",color:"white"}}),t.length>0?t.map((function(e,t){return Object(u.jsx)(I,{index:t,itemData:e,handleQuantityChange:n,deleteItem:c},t)})):"",Object(u.jsx)(b,{})]}):""})},R=n(215),q=n(214),z=n(217),B=n(218),N=n(109),T=n.n(N);function E(){return Object(u.jsx)(q.a,{sx:{flexGrow:1},children:Object(u.jsx)(R.a,{position:"static",children:Object(u.jsxs)(z.a,{children:[Object(u.jsx)(B.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(u.jsx)(T.a,{})}),Object(u.jsx)(w.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"CHEK"})]})})})}var A=n(216),F=n(110),L=n(111),Q=n(116),H=n(115),G=n(54),J=n.n(G),K=function(e){Object(Q.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(F.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c)))._onDetected=function(t){e.props.onDetected(t)},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){J.a.init({inputStream:{type:"LiveStream",target:document.querySelector("#barcode-scanner")},locator:{halfSample:!0,patchSize:"large",debug:{showCanvas:!0,showPatches:!1,showFoundPatches:!1,showSkeleton:!1,showLabels:!1,showPatchLabels:!1,showRemainingPatchLabels:!1,boxFromPatches:{showTransformed:!0,showTransformedBox:!0,showBB:!0}}},numOfWorkers:4,decoder:{readers:["code_128_reader"],debug:{drawBoundingBox:!0,showFrequency:!0,drawScanline:!0,showPattern:!0}},locate:!0},(function(e){if(e)return console.log(e);J.a.start()})),J.a.onDetected(this._onDetected)}},{key:"componentWillUnmount",value:function(){J.a.offDetected(this._onDetected)}},{key:"render",value:function(){return Object(u.jsxs)("div",{id:"barcode-scanner",children:[Object(u.jsx)("video",{style:{width:"100%",borderRadius:5},src:""}),Object(u.jsx)("canvas",{style:{display:"none"},className:"drawingBuffer"})]})}}]),n}(a.Component),M=function(e){var t=e.getItemID,n=e.items,c=Object(a.useState)([]),r=Object(p.a)(c,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){var e=n.map((function(e){return e.barID}));i(e)}),[n]),Object(u.jsx)(K,{onDetected:function(e){o.includes(e.codeResult.code)||(i([].concat(Object(m.a)(o),[e.codeResult.code])),t(e.codeResult.code))}})};var W=function(e){var t=e.items,n=e.storeID,a=e.setItemData,c=function(){var e=Object(h.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=14;break}return console.log("data read",t),e.prev=2,e.next=5,x.a.get("".concat("https://chek-shopping-app.herokuapp.com","/item/getItemData"),{headers:{item_id:t,store_id:n}});case 5:c=e.sent,console.log(Object(b.a)(Object(b.a)({},c.data.itemData),{},{barID:t})),a(Object(b.a)(Object(b.a)({},c.data.itemData),{},{barID:t})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),window.alert("Some error occured"),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{style:{margin:20,textAlign:"center"},children:Object(u.jsx)(A.a,{style:{padding:5},children:Object(u.jsx)(M,{items:t,getItemID:c})})})},U=n(219),V=n(220),X=function(e){var t=e.name;return Object(u.jsx)("div",{style:{textAlign:"center",marginTop:20},children:Object(u.jsx)(w.a,{variant:"h5",children:Object(u.jsx)("b",{children:t})})})},Y=function(e){var t=e.match.params.id,n=Object(a.useState)({}),c=Object(p.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)([]),s=Object(p.a)(i,2),d=s[0],l=s[1],f=function(e){l(d.filter((function(t,n){return n!==e})))},O=function(){var e=Object(h.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat("https://chek-shopping-app.herokuapp.com","/store/getStoreData"),{headers:{store_id:t}});case 3:n=e.sent,console.log(n.data.storeData),o(n.data.storeData),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),window.alert("Some error occured"),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){O()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(E,{}),Object(u.jsxs)(U.a,{style:{padding:0},children:[Object(u.jsx)(V.a,{}),Object(u.jsx)(X,{name:r.store_name}),Object(u.jsx)(W,{items:d,setItemData:function(e){d.map((function(e){return e.name})).includes(e.name)||l([].concat(Object(m.a)(d),[Object(b.a)(Object(b.a)({},e),{},{quantity:1})]))},storeID:t}),Object(u.jsx)(P,{handleQuantityChange:function(e,t){if(0!==e){var n=Object(m.a)(d);n[t].quantity=e,l(n)}else f(t)},deleteItem:f,items:d})]})]})},Z=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",component:function(){return Object(u.jsx)("h1",{children:"Home"})}}),Object(u.jsx)(s.a,{exact:!0,path:"/barcode",component:M}),Object(u.jsx)(s.a,{exact:!0,path:"/storeHome/:id",component:Y}),Object(u.jsx)(s.a,{component:d})]})})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root"))}},[[179,1,2]]]);
//# sourceMappingURL=main.aedc4784.chunk.js.map