(this["webpackJsonpunimelb-subject-tree"]=this["webpackJsonpunimelb-subject-tree"]||[]).push([[0],{225:function(e,t,a){},581:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(46),r=a.n(n),s=a(86),i=(a(225),a(18)),o=a(623),l=a(21),d=a(4);var b=function(){var e=Object(l.a)(o.a)((function(e){return{color:e.theme.palette.getContrastText("#ffffff"),backgroundColor:"#ffffff","&:hover":{backgroundColor:"#bdbdbd"}}}));return Object(d.jsxs)("div",{className:"wrapper2",children:[Object(d.jsx)("h2",{className:"body",children:"Site is maintained by Bowen"}),Object(d.jsx)("h2",{className:"body",children:"Built using React + Material UI"}),Object(d.jsx)(e,{variant:"contained",href:"/",children:"Go back"})]})},u=a(22),j=a(626),h=a(627);var f=function(e){var t=e.isOpen,a=Object(l.a)(o.a)((function(e){return{color:e.theme.palette.getContrastText("#ffffff"),backgroundColor:"#ffffff","&:hover":{backgroundColor:"#bdbdbd"}}}));return 0===e.dataSource.length&&(t=!1),Object(d.jsx)("div",{children:Object(d.jsx)(j.a,{id:"search-popup",open:t,anchorEl:document.getElementById("bruh"),placement:"auto-start",children:Object(d.jsx)(h.a,{sx:{border:"1px solid grey",p:1,bgcolor:"background.paper",marginTop:10,marginLeft:-15,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",maxHeight:"55vh",overflow:"auto"},boxShadow:3,children:e.dataSource.map((function(e){return Object(d.jsx)(a,{href:"/#/subject/"+e,target:"_blank",children:e})}))})})})},p=a(207),O=a.n(p),x=a(618),m=a(57),g=a.n(m),v=a(131),w=a.n(v),k=a.p+"static/media/wiitheme.d4e6ded8.mp3";var y=function(e){var t=e.baseurl,a=Object(c.useState)({dataSource:[]}),n=Object(u.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(!1),b=Object(u.a)(i,2),j=b[0],h=b[1],p=Object(c.useState)(null),m=Object(u.a)(p,2),v=m[0],y=m[1],N=Object(c.useState)(!1),S=Object(u.a)(N,2),C=S[0],T=S[1];function E(e,t){var a=[];return t.length>9||e.forEach((function(e){for(var c=!0,n=0;n<t.length;n++)if(e[n]!==t[n]){c=!1;break}c&&a.push(e)})),a}Object(c.useEffect)((function(){g.a.get(t+"/api/code/all").then((function(e){y(e.data)}))}),[]);var H=Object(l.a)(o.a)((function(e){return{color:e.theme.palette.getContrastText("#ffffff"),backgroundColor:"#ffffff","&:hover":{backgroundColor:"#bdbdbd"}}}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(w.a,{url:k,playStatus:C?w.a.status.PLAYING:w.a.status.PAUSED,volume:15,loop:!0}),Object(d.jsx)(f,{dataSource:r.dataSource,isOpen:j}),Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"image",children:[Object(d.jsx)("img",{src:"https://i.pinimg.com/originals/9c/a8/d3/9ca8d301a7e109449bf480a11c09d4cc.png",width:150,height:150}),Object(d.jsx)("h1",{className:"logo",children:"Subject Tree"})]})}),null==v&&Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("h1",{className:"loading",children:"Page loading... Please wait"})}),null!=v&&Object(d.jsx)(O.a,{id:"bruh",dataSource:r.dataSource,placeholder:"Enter subject codes (or subject names)",onChange:function(e){""!==e?(s({dataSource:E(v,e.toLowerCase())}),h(!0)):h(!1)},onRequestSearch:function(e){/[a-zA-Z0-9]/.test(e)?e.length>40?alert("Search is too long"):window.open("/#/search/"+e,"_self"):alert("Empty search values are not allowed")},style:{margin:"0 auto",maxWidth:800,height:60,marginTop:50,border:"1px solid black"}}),null!=v&&Object(d.jsxs)(x.a,{spacing:25,direction:"row",alignItems:"center",justifyContent:"center",marginTop:7,children:[Object(d.jsx)(H,{variant:"contained",href:"https://handbook.unimelb.edu.au/search",target:"_blank",children:"Official Handbook"}),Object(d.jsx)(H,{variant:"contained",href:"/#/about",children:"About"}),Object(d.jsx)(H,{variant:"contained",onClick:function(){return T(!C)},children:C?"Play music: ON":"Play music: OFF"})]})]})},N=a(12),S=a.n(N),C=a(95),T=a(208),E=a(209),H=a.n(E);var P=function(e){var t=Object(c.useState)(null),a=Object(u.a)(t,2),n=a[0],r=a[1],s=[];function b(e){return j.apply(this,arguments)}function j(){return j=Object(T.a)(S.a.mark((function t(a){var c,n,r,i,o,l;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g()(e.baseurl+"/api/search/"+a);case 2:if(c=t.sent,n=c.data,s.push(n.code),(r={}).name=n.name+" ("+n.code+")",!(null!=n.childs&&n.childs.length>0)){t.next=22;break}r.children=[],i=0,o=0;case 11:if(!(o<n.childs.length)){t.next=21;break}if(s.includes(n.childs[o])){t.next=18;break}return t.next=15,b(n.childs[o]);case 15:l=t.sent,r.children.push(l),i++;case 18:o++,t.next=11;break;case 21:0===i&&(r.children=null);case 22:return t.abrupt("return",r);case 23:case"end":return t.stop()}}),t)}))),j.apply(this,arguments)}var h=Object(i.g)().code,f=Object(c.useState)(null),p=Object(u.a)(f,2),O=p[0],x=p[1];return Object(c.useEffect)((function(){g.a.get(e.baseurl+"/api/search/"+h).then((function(e){x(e.data)}))}),[]),Object(d.jsx)("div",{children:function(e){var t=Object(l.a)(o.a)((function(e){return{color:e.theme.palette.getContrastText("#ffffff"),backgroundColor:"#ffffff","&:hover":{backgroundColor:"#bdbdbd"}}}));if(null==e)return Object(d.jsx)("div",{});if(null==n)return b(e.code).then((function(e){r(e)})),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("h1",{className:"subjectHead",children:e.name+" ("+e.code+")"})}),Object(d.jsx)("div",{className:"wrapperSubjectHandbook",children:Object(d.jsx)(t,{variant:"contained",href:"https://handbook.unimelb.edu.au/2022/subjects/"+e.code,target:"_blank",children:"Official Handbook Link"})}),Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("h3",{className:"loading",children:"Building tree... Please be patient, subject tree may be extremely large :)"})})]});var a={x:200,y:300},c={width:a.x,height:a.y,x:10,y:0},s=Object(d.jsx)(H.a,{pathFunc:"diagonal",data:n,orientation:"vertical",separation:{siblings:2.5},enableLegacyTransitions:!0,initialDepth:1,translate:{x:window.innerWidth/2,y:window.innerHeight/15},renderCustomNodeElement:function(e){return function(e){var t=e.nodeDatum,a=e.toggleNode,c=e.foreignObjectProps;return Object(d.jsxs)("g",{children:[Object(d.jsx)("circle",{r:15,fill:t.children?"white":"black",onClick:a}),Object(d.jsx)("foreignObject",Object(C.a)(Object(C.a)({},c),{},{children:Object(d.jsx)("div",{children:Object(d.jsx)("h3",{style:{color:"white",fontFamily:"Avenir Next Cyr Thin"},children:t.name})})}))]})}(Object(C.a)(Object(C.a)({},e),{},{foreignObjectProps:c}))}});return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("h1",{className:"subjectHead",children:e.name+" ("+e.code+")"})}),Object(d.jsxs)("div",{className:"wrapperSubjectHandbook",children:[Object(d.jsx)(t,{variant:"contained",href:"https://handbook.unimelb.edu.au/2022/subjects/"+e.code,target:"_blank",children:"Official Handbook Link"}),Object(d.jsx)(t,{variant:"contained",onClick:function(){window.location.reload()},children:"Reset Subject Tree"})]}),Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("h4",{className:"loading",children:"Click on the white nodes to view further possible subject paths!"})}),Object(d.jsx)("div",{style:{width:"100vw",height:"73vh",backgroundColor:"transparent"},children:s})]})}(O)})},L=a(625),A=a(620),I=a(619),_=a(621);var z=function(e){return Object(d.jsx)(L.a,{sx:{width:"100%",maxWidth:700,bgcolor:"background.paper",overflow:"auto",maxHeight:"75vh"},children:null!=e.dataSource&&e.dataSource.map((function(e){return Object(d.jsx)(A.a,{children:Object(d.jsx)(I.a,{component:"a",href:window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/#/subject/"+e.obj.code,children:Object(d.jsx)(_.a,{primary:e.obj.name,secondary:e.obj.code})})})}))})};var B=function(e){var t=Object(i.g)().name,a=Object(c.useState)(null),n=Object(u.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)(null),l=Object(u.a)(o,2),b=l[0],j=l[1];return Object(c.useEffect)((function(){g.a.get(e.baseurl+"/api/code/all_codes").then((function(a){4===t.length&&a.data.includes(t.toLowerCase())||t.length>4&&/[A-Za-z]{4}[0-9]{1,5}/.test(t)&&a.data.includes(t.toLowerCase().slice(0,4))?g.a.get(e.baseurl+"/api/code/match/"+t).then((function(e){j(!0),s(e.data)})):g.a.get(e.baseurl+"/api/match/"+t).then((function(e){j(!1),s(e.data)}))}))}),[]),Object(d.jsx)("div",{children:function(e){return null==e?Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("h1",{className:"searchTitle",children:"Searching..."})}):0===e.length?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("h1",{className:"searchTitle",children:["Search results for: ",t]})}),Object(d.jsx)("div",{className:"wrapper",style:{marginTop:50},children:Object(d.jsx)("h1",{className:"searchTitle",children:"No search results returned :("})})]}):!0===b?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("h1",{className:"searchTitle",children:["Search results for: ",t," (subject code detected)"]})}),Object(d.jsx)("div",{className:"wrapper",style:{marginTop:50},children:Object(d.jsx)(z,{dataSource:e})})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("h1",{className:"searchTitle",children:["Search results for: ",t]})}),Object(d.jsx)("div",{className:"wrapper",style:{marginTop:50},children:Object(d.jsx)(z,{dataSource:e})})]})}(r)})},D=a(210),R=a.n(D);var F=function(){var e="https://unimelb-subject-tree-backend.ts.r.appspot.com";return Object(d.jsxs)("div",{style:{backgroundImage:"linear-gradient(to right, #4880EC, #019CAD)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",height:"100vh"},children:[Object(d.jsx)(R.a,{options:{fpsLimit:60,interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.2,size:40},push:{quantity:4},repulse:{distance:200,duration:.2}}},particles:{color:{value:"#ffffff"},links:{color:"#dad7d7",distance:150,enable:!0,opacity:.3,width:1},collisions:{enable:!1},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:1.3,straight:!1},number:{density:{enable:!0,value_area:800},value:40},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",element:Object(d.jsx)(y,{baseurl:e})}),Object(d.jsx)(i.a,{path:"/about",element:Object(d.jsx)(b,{})}),Object(d.jsx)(i.a,{path:"/subject/:code",element:Object(d.jsx)(P,{baseurl:e})}),Object(d.jsx)(i.a,{path:"/search/:name",element:Object(d.jsx)(B,{baseurl:e})})]})]})};r.a.render(Object(d.jsx)(s.a,{basename:"/",children:Object(d.jsx)(F,{})}),document.getElementById("root"))}},[[581,1,2]]]);
//# sourceMappingURL=main.47fe3090.chunk.js.map