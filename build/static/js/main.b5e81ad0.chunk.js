(this["webpackJsonpunimelb-subject-tree"]=this["webpackJsonpunimelb-subject-tree"]||[]).push([[0],{226:function(e,t,a){},581:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(46),r=a.n(n),i=a(87),s=(a(226),a(20)),o=a(18),l=a(624),d=a(22),b=a(4);var j=function(){var e=Object(d.a)(l.a)((function(e){return{color:e.theme.palette.getContrastText("#ffffff"),backgroundColor:"#ffffff","&:hover":{backgroundColor:"#bdbdbd"}}}));return Object(b.jsxs)("div",{className:"wrapper2",children:[Object(b.jsx)("h2",{className:"body",children:"Site is maintained by Bowen. Shoutout to kasie for random ideas"}),Object(b.jsx)("h2",{className:"body",children:"Built using React + Material UI"}),Object(b.jsx)(e,{variant:"contained",href:"/#",children:"Go back"})]})},u=a(627),h=a(628);var f=function(e){var t=e.isOpen,a=Object(d.a)(l.a)((function(e){return{color:e.theme.palette.getContrastText("#ffffff"),backgroundColor:"#ffffff","&:hover":{backgroundColor:"#bdbdbd"}}}));return 0===e.dataSource.length&&(t=!1),Object(b.jsx)("div",{children:Object(b.jsx)(u.a,{id:"search-popup",open:t,anchorEl:document.getElementById("bruh"),placement:"auto-start",children:Object(b.jsx)(h.a,{sx:{border:"1px solid grey",p:1,bgcolor:"background.paper",marginTop:10,marginLeft:-15,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",maxHeight:"55vh",overflow:"auto"},boxShadow:3,children:e.dataSource.map((function(e){return Object(b.jsx)(a,{href:"/#/subject/"+e,target:"_blank",children:e})}))})})})},O=a(208),p=a.n(O),x=a(619),m=a(57),v=a.n(m),g=a(79),w=a.n(g),k=Object(c.createContext)(null);var y=function(e){var t=e.baseurl,a=Object(c.useState)({dataSource:[]}),n=Object(s.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)(!1),j=Object(s.a)(o,2),u=j[0],h=j[1],O=Object(c.useState)(null),m=Object(s.a)(O,2),g=m[0],y=m[1],N=Object(c.useContext)(k),C=Object(s.a)(N,2),S=C[0],P=C[1];function T(e,t){var a=[];return t.length>9||e.forEach((function(e){for(var c=!0,n=0;n<t.length;n++)if(e[n]!==t[n]){c=!1;break}c&&a.push(e)})),a}Object(c.useEffect)((function(){v.a.get(t+"/api/code/all").then((function(e){y(e.data)}))}),[]);var B=Object(d.a)(l.a)((function(e){return{color:e.theme.palette.getContrastText("#ffffff"),backgroundColor:"#ffffff","&:hover":{backgroundColor:"#bdbdbd"}}}));return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{dataSource:r.dataSource,isOpen:u}),Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsxs)("div",{className:"image",children:[Object(b.jsx)("img",{src:"https://i.pinimg.com/originals/9c/a8/d3/9ca8d301a7e109449bf480a11c09d4cc.png",width:150,height:150}),Object(b.jsx)("h1",{className:"logo",children:"Subject Tree"})]})}),null==g&&Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)(w.a,{type:"spinningBubbles",color:"white"})}),Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("h1",{className:"loading",children:"Page loading... Please wait"})})]}),null!=g&&Object(b.jsx)(p.a,{id:"bruh",dataSource:r.dataSource,placeholder:"Enter subject codes (or subject names)",onChange:function(e){""!==e?(i({dataSource:T(g,e.toLowerCase())}),h(!0)):h(!1)},onRequestSearch:function(e){/[a-zA-Z0-9]/.test(e)?e.length>40?alert("Search is too long"):window.open("/#/search/"+e,"_self"):alert("Empty search values are not allowed")},style:{margin:"0 auto",maxWidth:800,height:60,marginTop:50,border:"1px solid black"}}),null!=g&&Object(b.jsxs)(x.a,{spacing:25,direction:"row",alignItems:"center",justifyContent:"center",marginTop:7,children:[Object(b.jsx)(B,{variant:"contained",href:"https://handbook.unimelb.edu.au/search",target:"_blank",children:"Official Handbook"}),Object(b.jsx)(B,{variant:"contained",href:"/#/about",children:"About"}),Object(b.jsx)(B,{variant:"contained",onClick:function(){return P(!S)},children:S?"Play music: ON":"Play music: OFF"})]})]})},N=a(12),C=a.n(N),S=a(96),P=a(209),T=a(210),B=a.n(T);var E=function(e){var t=Object(c.useState)(null),a=Object(s.a)(t,2),n=a[0],r=a[1],i=Object(c.useContext)(k),j=Object(s.a)(i,2),u=j[0],h=j[1],f=[];function O(e){return p.apply(this,arguments)}function p(){return p=Object(P.a)(C.a.mark((function t(a){var c,n,r,i,s,o;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()(e.baseurl+"/api/search/"+a);case 2:if(c=t.sent,n=c.data,f.push(n.code),(r={}).name=n.name+" ("+n.code+")",!(null!=n.childs&&n.childs.length>0)){t.next=22;break}r.children=[],i=0,s=0;case 11:if(!(s<n.childs.length)){t.next=21;break}if(f.includes(n.childs[s])){t.next=18;break}return t.next=15,O(n.childs[s]);case 15:o=t.sent,r.children.push(o),i++;case 18:s++,t.next=11;break;case 21:0===i&&(r.children=null);case 22:return t.abrupt("return",r);case 23:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}var x=Object(o.g)().code,m=Object(c.useState)(null),g=Object(s.a)(m,2),y=g[0],N=g[1];return Object(c.useEffect)((function(){v.a.get(e.baseurl+"/api/search/"+x).then((function(e){N(e.data)}))}),[]),Object(b.jsx)("div",{children:function(e){var t=Object(d.a)(l.a)((function(e){return{color:e.theme.palette.getContrastText("#ffffff"),backgroundColor:"#ffffff","&:hover":{backgroundColor:"#bdbdbd"}}}));if(null==e)return Object(b.jsx)("div",{});if(null==n)return O(e.code).then((function(e){r(e)})),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("h1",{className:"subjectHead",children:e.name+" ("+e.code+")"})}),Object(b.jsx)("div",{className:"wrapperSubjectHandbook",children:Object(b.jsx)(t,{variant:"contained",href:"https://handbook.unimelb.edu.au/2022/subjects/"+e.code,target:"_blank",children:"Official Handbook Link"})}),Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("h3",{className:"loading",children:"Building tree... Please be patient, subject tree may be extremely large :)"})}),Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)(w.a,{type:"spinningBubbles",color:"white"})})]});var a={x:200,y:300},c={width:a.x,height:a.y,x:10,y:0},i=Object(b.jsx)(B.a,{pathFunc:"diagonal",data:n,orientation:"vertical",separation:{siblings:2.5},enableLegacyTransitions:!0,initialDepth:1,translate:{x:window.innerWidth/2,y:window.innerHeight/15},renderCustomNodeElement:function(e){return function(e){var t=e.nodeDatum,a=e.toggleNode,c=e.foreignObjectProps;return Object(b.jsxs)("g",{children:[Object(b.jsx)("circle",{r:15,fill:t.children?"white":"black",onClick:a}),Object(b.jsx)("foreignObject",Object(S.a)(Object(S.a)({},c),{},{children:Object(b.jsx)("div",{children:Object(b.jsx)("h3",{style:{color:"white",fontFamily:"Avenir Next Cyr Thin"},children:t.name})})}))]})}(Object(S.a)(Object(S.a)({},e),{},{foreignObjectProps:c}))}});return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("h1",{className:"subjectHead",children:e.name+" ("+e.code+")"})}),Object(b.jsxs)("div",{className:"wrapperSubjectHandbook",children:[Object(b.jsx)(t,{variant:"contained",href:"https://handbook.unimelb.edu.au/2022/subjects/"+e.code,target:"_blank",children:"Official Handbook Link"}),Object(b.jsx)(t,{variant:"contained",onClick:function(){window.location.reload()},children:"Reset Subject Tree"}),Object(b.jsx)(t,{variant:"contained",href:"/#",children:"Back to Main Page"}),Object(b.jsx)(t,{variant:"contained",onClick:function(){return h(!u)},children:u?"Play music: ON":"Play music: OFF"})]}),Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("h4",{className:"loading",children:"Click on the white nodes to view further possible subject paths!"})}),Object(b.jsx)("div",{style:{width:"100vw",height:"73vh",backgroundColor:"transparent"},children:i})]})}(y)})},F=a(626),H=a(621),L=a(620),A=a(622);var I=function(e){return Object(b.jsx)(F.a,{sx:{width:"100%",maxWidth:700,bgcolor:"background.paper",overflow:"auto",maxHeight:"75vh"},children:null!=e.dataSource&&e.dataSource.map((function(e){return Object(b.jsx)(H.a,{children:Object(b.jsx)(L.a,{component:"a",href:window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/#/subject/"+e.obj.code,children:Object(b.jsx)(A.a,{primary:e.obj.name,secondary:e.obj.code})})})}))})};var _=function(e){var t=Object(o.g)().name,a=Object(c.useState)(null),n=Object(s.a)(a,2),r=n[0],i=n[1],j=Object(c.useState)(null),u=Object(s.a)(j,2),h=u[0],f=u[1],O=Object(c.useContext)(k),p=Object(s.a)(O,2),x=p[0],m=p[1],g=Object(d.a)(l.a)((function(e){return{color:e.theme.palette.getContrastText("#ffffff"),backgroundColor:"#ffffff","&:hover":{backgroundColor:"#bdbdbd"}}}));return Object(c.useEffect)((function(){v.a.get(e.baseurl+"/api/code/all_codes").then((function(a){4===t.length&&a.data.includes(t.toLowerCase())||t.length>4&&/[A-Za-z]{4}[0-9]{1,5}/.test(t)&&a.data.includes(t.toLowerCase().slice(0,4))?v.a.get(e.baseurl+"/api/code/match/"+t).then((function(e){f(!0),i(e.data)})):v.a.get(e.baseurl+"/api/match/"+t).then((function(e){f(!1),i(e.data)}))}))}),[]),Object(b.jsx)("div",{children:function(e){return null==e?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("h1",{className:"searchTitle",children:"Searching..."})}),Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)(w.a,{type:"spinningBubbles",color:"white"})})]}):0===e.length?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsxs)("h1",{className:"searchTitle",children:["Search results for: ",t]})}),Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("h1",{className:"searchTitle",children:"No search results returned :("})}),Object(b.jsxs)("div",{className:"wrapperButtons",children:[Object(b.jsx)(g,{variant:"contained",onClick:function(){return m(!x)},children:x?"Play music: ON":"Play music: OFF"}),Object(b.jsx)(g,{variant:"contained",href:"/#",children:"Back to Main Page"})]})]}):!0===h?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsxs)("h1",{className:"searchTitle",children:["Search results for: ",t," (subject code detected)"]})}),Object(b.jsxs)("div",{className:"wrapperButtons",children:[Object(b.jsx)(g,{variant:"contained",onClick:function(){return m(!x)},children:x?"Play music: ON":"Play music: OFF"}),Object(b.jsx)(g,{variant:"contained",href:"/#",children:"Back to Main Page"})]}),Object(b.jsx)("div",{className:"wrapper",style:{marginTop:30},children:Object(b.jsx)(I,{dataSource:e})})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsxs)("h1",{className:"searchTitle",children:["Search results for: ",t]})}),Object(b.jsxs)("div",{className:"wrapperButtons",children:[Object(b.jsx)(g,{variant:"contained",onClick:function(){return m(!x)},children:x?"Play music: ON":"Play music: OFF"}),Object(b.jsx)(g,{variant:"contained",href:"/#",children:"Back to Main Page"})]}),Object(b.jsx)("div",{className:"wrapper",style:{marginTop:30},children:Object(b.jsx)(I,{dataSource:e})})]})}(r)})},z=a(211),M=a.n(z),D=a.p+"static/media/wiitheme.d4e6ded8.mp3",R=a(134),W=a.n(R);var q=function(){var e="https://unimelb-subject-tree-backend.ts.r.appspot.com",t=Object(c.useState)(!1),a=Object(s.a)(t,2),n=a[0],r=a[1];return Object(b.jsx)("div",{style:{backgroundImage:"linear-gradient(to right, #4880EC, #019CAD)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"repeat",width:"100vw",height:"100vh"},children:Object(b.jsxs)(k.Provider,{value:[n,r],children:[Object(b.jsx)(W.a,{url:D,playStatus:n?W.a.status.PLAYING:W.a.status.PAUSED,volume:15,loop:!0}),Object(b.jsx)(M.a,{options:{fpsLimit:60,interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.2,size:40},push:{quantity:4},repulse:{distance:200,duration:.2}}},particles:{color:{value:"#ffffff"},links:{color:"#dad7d7",distance:150,enable:!0,opacity:.3,width:1},collisions:{enable:!1},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:1.3,straight:!1},number:{density:{enable:!0,value_area:800},value:40},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",element:Object(b.jsx)(y,{baseurl:e})}),Object(b.jsx)(o.a,{path:"/about",element:Object(b.jsx)(j,{})}),Object(b.jsx)(o.a,{path:"/subject/:code",element:Object(b.jsx)(E,{baseurl:e})}),Object(b.jsx)(o.a,{path:"/search/:name",element:Object(b.jsx)(_,{baseurl:e})})]})]})})};r.a.render(Object(b.jsx)(i.a,{basename:"/",children:Object(b.jsx)(q,{})}),document.getElementById("root"))}},[[581,1,2]]]);
//# sourceMappingURL=main.b5e81ad0.chunk.js.map