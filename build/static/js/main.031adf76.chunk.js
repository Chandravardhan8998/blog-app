(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{41:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),r=n.n(s),i=n(14),a=n.n(i),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))},l=n(3),j=n(10),d=n(7),u=n(13),b=n.n(u),O=n(16),h=n(15),m=n(29);function x(e){var t=e.children,n=Object(m.a)(e,["children"]);return Object(c.jsx)("td",Object(h.a)(Object(h.a)({},n),{},{className:"border p-2 text-center",children:t}))}function f(e){var t=e.children,n=e.color,s=void 0===n?"#aaa":n;return Object(c.jsx)("tr",{style:{background:s},children:t})}function p(e){var t=e.id,n=e.title,r=e.description,i=e.onDelete,a=e.onEdit,o=Object(s.useState)(!1),d=Object(l.a)(o,2),u=d[0],b=d[1];return Object(c.jsx)(s.Fragment,{children:Object(c.jsxs)(f,{color:"#eee",children:[Object(c.jsx)(x,{children:Object(c.jsx)(j.b,{to:"/post?id=".concat(+t),children:t})}),Object(c.jsx)(x,{children:n}),Object(c.jsx)(x,{children:r}),Object(c.jsx)(x,{onClick:a,children:"edit"}),Object(c.jsx)(x,{onClick:i,children:"delete"}),Object(c.jsx)(x,{onClick:function(){return b(!u)},children:u?"Unlike":"Like"})]})})}function v(){return Object(c.jsx)("thead",{children:Object(c.jsxs)(f,{children:[Object(c.jsx)(x,{children:"Id"}),Object(c.jsx)(x,{children:"Title"}),Object(c.jsx)(x,{children:"Description"}),Object(c.jsx)(x,{children:"Action"}),Object(c.jsx)(x,{children:"Action"}),Object(c.jsx)(x,{children:"Action"})]})})}function g(e){var t=e.num,n=e.onClick;return Object(c.jsx)("li",{className:"page-item ",children:Object(c.jsx)("button",{className:"page-link bg-dark text-light",onClick:n,children:t})})}var y=function(e){for(var t=e.postPerPage,n=e.totalPosts,s=e.paginate,r=e.increasePosts,i=e.decreasePosts,a=[],o=1;o<=Math.ceil(n/t);o++)a.push(o);return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-4",children:[Object(c.jsx)("button",{className:"btn btn-primary m-1",onClick:function(){r(3)},children:"+3"}),Object(c.jsx)("button",{className:"btn btn-primary m-1",onClick:function(){i(3)},children:"-3"})]}),Object(c.jsx)("div",{className:"col-8",children:Object(c.jsx)("ul",{className:"pagination p-3 m-1 ",children:a.map((function(e){return Object(c.jsx)(g,{num:e,onClick:function(){return s(e)}},e)}))})})]})})};function S(e){var t=e.title,n=e.helperText,s=e.children;return Object(c.jsx)("div",{className:"jumbotron jumbotron-fluid p-3",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"display-4",children:t}),Object(c.jsx)("p",{className:"lead",children:n}),s]})})}var N=n(6);n(41);function I(){return Object(c.jsx)("div",{class:"lds-hourglass"})}function w(e){var t=e.title,n=e.children;return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("label",{htmlFor:t,className:"label p-1",children:t})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col",children:n})})]})}var P=n(20),k=function(){if(void 0==typeof window)return!1;if(localStorage.getItem("userId")){var e=JSON.parse(localStorage.getItem("userId"));return e>0&&e<11&&(console.log(e),e)}return!1},C=function(e,t){return Math.floor(Math.random()*(t-e)+e)};n(42);function E(e){var t=e.ShowHide,n=e.onCloseModal,r=e.onSubmit,i=e.title,a=void 0===i?"":i,o=e.userId,j=e.body,d=void 0===j?"":j,u=Object(s.useState)(""),b=Object(l.a)(u,2),O=b[0],h=b[1],m=Object(s.useState)(""),x=Object(l.a)(m,2),f=x[0],p=x[1];return Object(s.useEffect)((function(){a&&d&&(h(a),p(d))}),[a,d]),Object(c.jsxs)(P.a,{show:t,onHide:n,children:[Object(c.jsx)(P.a.Header,{children:"Make A Post"}),Object(c.jsx)(P.a.Body,{children:Object(c.jsxs)("form",{onSubmit:function(e){r(e,{title:O,body:f,id:C(500,1e3),userId:o}),p(""),h("")},children:[Object(c.jsx)(w,{title:"Title",children:Object(c.jsx)("input",{className:"form-control",type:"text",placeholder:"Title",value:O,onChange:function(e){return h(e.target.value)},id:"Title"})}),Object(c.jsx)(w,{title:"Body",children:Object(c.jsx)("input",{required:!0,id:"Body",className:"form-control",type:"text",placeholder:"Body",value:f,onChange:function(e){return p(e.target.value)}})}),Object(c.jsx)(w,{title:"Body",children:Object(c.jsx)("input",{required:!0,className:"btn btn-primary btn-block",type:"submit",value:"Post"})})]})})]})}function T(e){var t=e.ShowModal,n=void 0!==t&&t,r=e.onCloseModal,i=e.userId,a=void 0===i?null:i,o=e.title,j=void 0===o?"Posts":o,d=Object(s.useState)(!1),u=Object(l.a)(d,2),h=u[0],m=u[1],x=Object(s.useState)([]),f=Object(l.a)(x,2),g=f[0],w=f[1],P=Object(s.useState)(!0),k=Object(l.a)(P,2),C=k[0],T=k[1],D=Object(s.useState)(1),F=Object(l.a)(D,2),M=F[0],A=F[1],L=Object(s.useState)(5),B=Object(l.a)(L,2),H=B[0],R=B[1],q=Object(s.useState)(""),U=Object(l.a)(q,1)[0],_=Object(s.useState)(""),G=Object(l.a)(_,1)[0],J=M*H,W=J-H,Y=g.slice(W,J),z=Object(N.c)((function(e){return e.posts.posts}));return Object(s.useEffect)((function(){m(n),T(!0),function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a?(t=z.filter((function(e){return e.userId===+a})),w(t),T(!1)):(w(z),T(!1));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[z,h,n,a]),C?Object(c.jsx)(I,{}):Object(c.jsxs)("div",{children:[Object(c.jsx)(S,{title:j}),Object(c.jsxs)("table",{className:a?"":"m-3",children:[Object(c.jsx)(v,{}),Object(c.jsx)("tbody",{children:Y.map((function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p,{onEdit:function(){},description:e.body,id:e.id,title:e.title,onDelete:function(){w((function(){return g.filter((function(t){return t.id!==e.id}))}))}},e.id)})}))})]}),Object(c.jsx)(y,{postPerPage:H,totalPosts:g.length,paginate:function(e){A(e)},increasePosts:function(e){return R(H+ +e)},decreasePosts:function(e){return R(H-+e)}}),Object(c.jsx)(E,{ShowHide:h,onCloseModal:r,userId:a,onSubmit:function(e,t){e.preventDefault();var n=g;console.log("OLD",n),n.push({title:t.title,body:t.body,id:t.id,userId:t.userId}),console.log("NEW",{title:t.title,body:t.body,id:t.id,userId:t.userId}),w(n),r(),m(!1)},body:G,title:U})]})}var D="REGISTER",F="LOGIN",M="LOGOUT",A="FETCH_USER",L=function(e,t){localStorage.setItem("email",e),localStorage.setItem("userId",t)},B=function(e){var t=e.email;return function(e){var n=Math.floor(10*Math.random())+1;return L(t,n),console.log(t,n),window.location.href="/dashboard",e({type:D,email:t,userId:n})}},H=function(){return function(e){if(!k())return e({type:A,userId:null,email:null});var t=localStorage.getItem("userId"),n=localStorage.getItem("email");e({type:A,userId:t,email:n})}};function R(){var e=Object(N.b)(),t=Object(s.useState)(!1),n=Object(l.a)(t,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){i(k())}),[]),Object(c.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark nav-fill shadow",children:[Object(c.jsx)(j.b,{to:"/",className:"navbar-brand",children:Object(c.jsx)("b",{children:"Home"})}),r?Object(c.jsxs)(s.Fragment,{children:[Object(c.jsx)(j.c,{className:"navbar-text",to:"/dashboard",children:"Dashboard"}),Object(c.jsx)("button",{onClick:function(){localStorage.clear(),e({type:M}),window.location.href="/"},className:"btn btn-danger mx-3",to:"/dashboard",children:"Logout"})]}):Object(c.jsxs)(s.Fragment,{children:[Object(c.jsx)(j.c,{className:"navbar-text m-1",to:"/register",children:"Register"}),Object(c.jsx)(j.c,{className:"navbar-text m-1",to:"/login",children:"Login"})]})]})}function q(e){var t=e.isAuth;return Object(c.jsxs)("div",{children:[Object(c.jsx)(R,{isAuth:t}),Object(c.jsx)(T,{title:"My Posts",userId:null})]})}function U(e){var t=e.onSubmit,n=e.title,r=(e.userType,Object(s.useState)("")),i=Object(l.a)(r,2),a=i[0],o=i[1],j=Object(s.useState)(""),d=Object(l.a)(j,2),u=d[0],b=d[1],O=function(e){e.preventDefault(),a&&u&&t({email:a,password:u})};return Object(c.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"80vh"},children:Object(c.jsxs)("form",{className:"shadow p-4 bg-dark text-light rounded",onSubmit:function(e){return O(e)},children:[Object(c.jsx)("h3",{className:"py-3",style:{textAlign:"center"},children:n}),Object(c.jsx)(w,{title:"Email",children:Object(c.jsx)("input",{id:"Email",type:"email",minLength:8,maxLength:32,value:a,onChange:function(e){o(e.target.value)},placeholder:"Email",required:!0,className:"form-control"})}),Object(c.jsx)(w,{title:"Password",children:Object(c.jsx)("input",{className:"form-control",id:"Password",required:!0,min:6,max:32,type:"password",value:u,onChange:function(e){b(e.target.value)},placeholder:"Password"})}),Object(c.jsx)(w,{children:Object(c.jsx)("input",{className:"btn btn-primary p-2 my-2 btn-block form-control",type:"submit",value:"Submit"})})]})})}function _(){var e=Object(N.b)();return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsx)(R,{}),Object(c.jsx)(U,{title:"Login",onSubmit:function(t){e(B(t))}})]})}function G(){var e=Object(N.b)();return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsx)(R,{}),Object(c.jsx)(U,{title:"Register",onSubmit:function(t){e(B(t))}})]})}function J(e){var t=e.postId,n=e.name,s=e.body,r=e.email,i=e.id,a=e.onDelete;return Object(c.jsxs)(f,{color:"#eee",children:[Object(c.jsx)(x,{children:i}),Object(c.jsx)(x,{children:t}),Object(c.jsx)(x,{children:r}),Object(c.jsx)(x,{children:n}),Object(c.jsx)(x,{children:s}),Object(c.jsx)(x,{onClick:a,children:"Delete"})]})}function W(){return Object(c.jsx)("thead",{className:"thead-dark",children:Object(c.jsxs)(f,{children:[Object(c.jsx)(x,{children:"Id"}),Object(c.jsx)(x,{children:"Post Id"}),Object(c.jsx)(x,{children:"Email"}),Object(c.jsx)(x,{children:"Title"}),Object(c.jsx)(x,{children:"Description"}),Object(c.jsx)(x,{children:"Action"})]})})}var Y="FETCH_POSTS",z="SET_POSTS",K="SET_COMMENTS",Q=function(){return function(){var e=Object(O.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/comments");case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return e.next=8,n.json();case 8:c=e.sent,t({type:K,comments:c}),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()};function V(e){var t=e.title,n=void 0===t?"Comments":t,r=Object(N.b)(),i=Object(s.useState)([]),a=Object(l.a)(i,2),o=a[0],j=a[1],d=Object(s.useState)(!0),u=Object(l.a)(d,2),b=u[0],O=u[1],h=Object(s.useState)(1),m=Object(l.a)(h,2),x=m[0],f=m[1],p=Object(s.useState)(5),v=Object(l.a)(p,2),g=v[0],w=v[1],P=x*g,k=P-g,C=o.slice(k,P),E=Object(N.c)((function(e){return e.posts.posts})),T=Object(N.c)((function(e){return e.posts.comments})),D=Object(N.c)((function(e){return e.auth.userId}));return r(Q()),Object(s.useEffect)((function(){console.log(D);var e=E.filter((function(e){return+e.userId===+D}));e=e.map((function(e){return e.id}));var t=T.filter((function(t){return e.includes(+t.postId)}));j(t),console.log(t),O(!1)}),[r,E]),b?Object(c.jsx)(I,{}):Object(c.jsxs)("div",{children:[Object(c.jsx)(S,{title:n}),Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)(W,{}),Object(c.jsx)("tbody",{children:C.map((function(e){var t=e.body,n=e.email,s=e.name,r=e.postId,i=e.id;return Object(c.jsx)(J,{body:t,email:n,name:s,postId:r,id:i,onDelete:function(){j((function(){return o.filter((function(e){return e.id!==i}))}))}},i)}))})]})}),Object(c.jsx)(y,{postPerPage:g,totalPosts:o.length,paginate:function(e){f(e)},increasePosts:function(e){return w(g+ +e)},decreasePosts:function(e){return w(g-+e)}})]})}function X(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(N.c)((function(e){return e.auth.userId}));return Object(c.jsxs)("div",{children:[Object(c.jsx)(R,{}),Object(c.jsx)(S,{title:"Dashboard",children:Object(c.jsx)("button",{onClick:function(){console.log("click"),r(!0)},className:"btn btn-primary m-1",children:"Create Post"})}),Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-5",children:Object(c.jsx)(T,{title:"My Posts",userId:i,ShowModal:n,onCloseModal:function(){r(!1)}})}),Object(c.jsx)("div",{className:"col-7",children:Object(c.jsx)(V,{title:"Comments On Your Posts"})})]})})]})}function Z(e){var t=e.postId,n=e.onCommentsSubmit,r=Object(s.useState)([]),i=Object(l.a)(r,2),a=i[0],o=i[1],j=Object(s.useState)(""),d=Object(l.a)(j,2),u=d[0],b=d[1],O=Object(s.useState)(""),h=Object(l.a)(O,2),m=h[0],x=h[1],f=Object(s.useState)(Object(N.c)((function(e){return e.auth.email}))),p=Object(l.a)(f,1)[0];return Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-5",children:Object(c.jsxs)("form",{className:"shadow p-3 mb-5 mx-3",onSubmit:function(e){e.preventDefault(),n(a),o([])},children:[Object(c.jsx)(S,{title:"Enter Comments"}),Object(c.jsx)(w,{title:"Title",children:Object(c.jsx)("input",{className:"form-control",id:"Title",type:"text",onChange:function(e){return b(e.target.value)},placeholder:"Title",value:u})}),Object(c.jsx)(w,{title:"Body",children:Object(c.jsx)("input",{className:"form-control",id:"Body",placeholder:"Body",type:"text",onChange:function(e){return x(e.target.value)},value:m})}),Object(c.jsxs)(w,{children:[Object(c.jsx)("button",{className:"btn btn-primary m-1 btn-block",onClick:function(e){if(e.preventDefault(),m||u){var n={postId:t,id:C(501,1e3),name:u,body:m,email:p},c=a;c.push(n),o(c),x(""),b("")}else alert("FIll Both Fields")},children:"One More +"}),Object(c.jsx)("input",{className:"btn btn-success btn-block m-1",value:"Comment",type:"submit"})]})]})}),Object(c.jsx)("div",{className:"col-7",children:!!a.length&&Object(c.jsxs)("table",{children:[Object(c.jsx)(W,{}),a.map((function(e){return Object(c.jsx)(J,{body:e.body,email:e.email,id:e.id,name:e.name,onDelete:function(){return o(a.filter((function(t){return t.id!==e.id})))},postId:e.postId})}))]})})]})})}function $(e){var t=e.title,n=e.body;return Object(c.jsxs)("div",{className:"card m-2 p-3 shadow",style:{width:"90%"},children:[Object(c.jsx)(S,{title:"Post",helperText:"Do Comment and share"}),Object(c.jsx)("h5",{className:"card-title",children:t}),Object(c.jsx)("p",{className:"card-text",children:n})]})}function ee(e){var t=e.id,n=Object(N.b)(),r=Object(s.useState)({}),i=Object(l.a)(r,2),a=i[0],o=i[1],j=Object(s.useState)([]),d=Object(l.a)(j,2),u=d[0],b=d[1],O=Object(s.useState)(!0),h=Object(l.a)(O,2),m=h[0],x=h[1],f=Object(N.c)((function(e){return e.posts})),p=f.posts,v=f.comments;n(Q()),n(H()),Object(s.useEffect)((function(){x(!0);var e=p&&p.filter((function(e){return e.id===+t}));o(e[0]);var n=v.filter((function(e){return e.postId===+t}));b(n),x(!1)}),[n,p]);var g=Object(s.useState)(1),S=Object(l.a)(g,2),w=S[0],P=S[1],k=Object(s.useState)(5),C=Object(l.a)(k,2),E=C[0],T=C[1],D=w*E,F=D-E,M=u.slice(F,D);return m?Object(c.jsx)(I,{}):Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(c.jsx)("div",{className:"col-3",children:!!a&&Object(c.jsx)($,{body:a.body,title:a.title})}),Object(c.jsx)("div",{className:"col-9",children:u.length?Object(c.jsxs)("table",{className:"m-2",children:[Object(c.jsx)(W,{}),Object(c.jsxs)("tbody",{children:[M.map((function(e){return Object(c.jsx)(J,{body:e.body,email:e.email,name:e.name,postId:e.postId,id:e.id,onDelete:function(){b((function(){return u.filter((function(t){return t.id!==e.id}))}))}},e.id)})),Object(c.jsx)(y,{postPerPage:E,totalPosts:u.length,paginate:function(e){P(e)},increasePosts:function(e){return T(E+ +e)},decreasePosts:function(e){return T(E-+e)}})]})]}):Object(c.jsx)("h1",{className:"text-center p-1 bg-dark text-light",children:"No Comments To Show"})})]})}),Object(c.jsx)(Z,{postId:t,onCommentsSubmit:function(e){var t=u;console.log(t);var n=t.concat(e);console.log(n),b(n)}})]})}function te(){var e=Object(s.useState)(new URL(window.location.href).searchParams.get("id")),t=Object(l.a)(e,1)[0];return Object(c.jsxs)("div",{children:[Object(c.jsx)(R,{}),Object(c.jsx)(ee,{id:+t})]})}function ne(){var e=Object(N.b)();e(H()),e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/posts");case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return c=localStorage.getItem("userId"),e.next=9,n.json();case 9:s=e.sent,console.log(c),console.log(s.filter((function(e){return e.userId===c}))),t({type:z,posts:s,myPosts:s.filter((function(e){return e.userId===c}))}),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(0),e.t0;case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}());var t=Object(s.useState)(!1),n=Object(l.a)(t,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){i(!!k())}),[]),Object(c.jsx)(j.a,{children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/",exact:!0,render:function(){return Object(c.jsx)(q,{isAuth:r})}}),Object(c.jsx)(d.a,{path:"/register",render:function(){return r?Object(c.jsx)("h1",{children:Object(c.jsx)(j.b,{to:"/dashboard",children:" Access Denied "})}):Object(c.jsx)(G,{})}}),Object(c.jsx)(d.a,{path:"/login",render:function(){return r?Object(c.jsx)("h1",{children:Object(c.jsx)(j.b,{to:"/dashboard",children:" Access Denied "})}):Object(c.jsx)(_,{})}}),Object(c.jsx)(d.a,{path:"/dashboard",render:function(){return r?Object(c.jsx)(X,{}):Object(c.jsx)("h1",{children:Object(c.jsx)(j.b,{to:"/login",children:" Access Denied Login First "})})}}),Object(c.jsx)(d.a,{path:"/post",render:function(){return r?Object(c.jsx)(te,{}):Object(c.jsx)("h1",{children:Object(c.jsx)(j.b,{to:"/login",children:" Access Denied Login First "})})}})]})})}var ce={userId:null,email:null,isAuth:!1},se={posts:[],comments:[],myPosts:[],myComments:[]},re=n(17),ie=n(28),ae=re.d,oe=Object(re.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:case F:return{userId:t.userId,email:t.email,isAuth:!!t.userId};case M:return ce;case A:return console.log("here in store",t),{userId:t.userId,email:t.email,isAuth:!!t.userId};default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(h.a)(Object(h.a)({},e),{},{posts:t.posts});case z:return Object(h.a)(Object(h.a)({},e),{},{posts:t.posts,myPosts:t.myPosts});case K:return Object(h.a)(Object(h.a)({},e),{},{comments:t.comments});default:return e}}}),le=Object(re.e)(oe,ae(Object(re.a)(ie.a)));a.a.render(Object(c.jsx)(N.a,{store:le,children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(ne,{})})}),document.getElementById("root")),o()}},[[44,1,2]]]);
//# sourceMappingURL=main.031adf76.chunk.js.map