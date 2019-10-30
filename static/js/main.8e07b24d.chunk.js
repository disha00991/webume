(this.webpackJsonpwebume=this.webpackJsonpwebume||[]).push([[0],{199:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),c=a.n(l),i=(a(72),a(3)),s=a(16),o=a(11),m=a(12),u=a(14),p=a(13),d=a(15),h=a(8),E=a.n(h),b=(a(201),a(20)),f=a(53),g=a.n(f),v=[{path:"/",label:"Webume",index:!0},{path:"/resume",label:"Resume"},{path:"/dreams",label:"My Dreams"},{path:"/projects",label:"Projects"},{path:"/contact",label:"Contact"}],y=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"hamburger-container"},r.a.createElement("nav",{className:"main",id:"hambuger-nav"},r.a.createElement("ul",null,a?r.a.createElement("li",{className:"menu close-menu"},r.a.createElement("div",{onClick:function(){return l(!a)},className:"menu-hover"},"\u2715")):r.a.createElement("li",{className:"menu open-menu"},r.a.createElement("div",{onClick:function(){return l(!a)},className:"menu-hover"},"\u2630")))),r.a.createElement(g.a,{right:!0,isOpen:a},r.a.createElement("ul",{className:"hamburger-ul"},v.map((function(e){return r.a.createElement("li",{key:e.label},r.a.createElement(i.b,{to:e.path,onClick:function(){return l(!a)}},r.a.createElement("h3",{className:e.index&&"index-li"},e.label)))})))))},k=function(){return r.a.createElement("header",{id:"header"},r.a.createElement("h1",{className:"index-link"},v.filter((function(e){return e.index})).map((function(e){return r.a.createElement(i.b,{key:e.label,to:e.path},e.label)}))),r.a.createElement("nav",{className:"links"},r.a.createElement("ul",{className:"links-ul"},v.filter((function(e){return!e.index})).map((function(e){return r.a.createElement("li",{key:e.label},r.a.createElement(i.b,{to:e.path},e.label))})))),r.a.createElement(y,null))},j=a(25),N=a(56),w=a.n(N),O=a(57),P=a.n(O),S=a(58),C=a.n(S),M=a(59),A=a.n(M),D=[{link:"https://github.com/disha00991",label:"Github",icon:w.a},{link:"https://www.linkedin.com/in/cslovedisha",label:"LinkedIn",icon:A.a},{link:"https://today5or5never.wordpress.com/",label:"Wordpress",icon:P.a},{link:"https://www.instagram.com/happytrodder/",label:"Instagram",icon:C.a}],x=function(){return r.a.createElement("section",{id:"sidebar"},r.a.createElement("section",{id:"intro"},r.a.createElement(i.b,{to:"/",className:"logo"},r.a.createElement("img",{src:"/webume/images/me.jpg",alt:"My Photo"})),r.a.createElement("header",null,r.a.createElement("h2",null,"Disha Singh"),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:disha.singh00991@gmail.com"},"disha.singh00991@gmail.com")))),r.a.createElement("section",{className:"blurb"},r.a.createElement("h2",null,"Who's She?"),r.a.createElement("p",null,"Hi, I'm Disha. I like appreciating people who build things and get inspired. I am a proud ",r.a.createElement("a",{href:"https://nith.ac.in/"},"NIT, Hamirpur, India")," graduate, and ","the co-founder of 3rd year choreo in ",r.a.createElement("a",{href:"#"},"Dance Club Rhythmeecs"),". After college I was at ",r.a.createElement("a",{href:"https://www.publicissapient.com"},"Publicis Sapient"),", and currently exploring my potential at ",r.a.createElement("a",{href:"www.thb.co.in"},"THB India"),"."),r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,"/resume"!==window.location.pathname?r.a.createElement(i.b,{to:"/resume",className:"button"},"Learn More"):r.a.createElement(i.b,{to:"/about",className:"button"},"About Me")))),r.a.createElement("section",{id:"footer"},r.a.createElement("ul",{className:"icons"},D.map((function(e){return r.a.createElement("li",{key:e.label},r.a.createElement("a",{href:e.link},r.a.createElement(j.a,{icon:e.icon})))}))),r.a.createElement("p",{className:"copyright"},"\xa9 Disha Singh")))},I=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",{id:"wrapper"},r.a.createElement(E.a,{titleTemplate:"%s | Disha Singh",defaultTitle:"Disha Singh"}),r.a.createElement(k,null),r.a.createElement("div",{id:"main"},this.props.children),!this.props.fullPage&&r.a.createElement(x,null))}}]),t}(n.Component);I.defaultProps={children:null,fullPage:!1};var R=I,T=function(){return r.a.createElement(R,null,r.a.createElement("article",{className:"post",id:"index"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,r.a.createElement(i.b,{to:"/"},"About Webume")),r.a.createElement("p",null,"This artistic, responsive, react app was written solely for the purpose of self-branding."))),r.a.createElement("p",null," Welcome to Webume! My Resume, the web way. Let us begin having some adventure by clicking my"," ",r.a.createElement(i.b,{to:"/resume"},"resume"),", "," ",r.a.createElement(i.b,{to:"/dreams"},"some of my PLAN-A dreams"),", "," ",r.a.createElement(i.b,{to:"/projects"},"projects"),", "," ","or ",r.a.createElement(i.b,{to:"/contact"},"contact")," pages."),r.a.createElement("p",null,"Feel free to find bugs and throw at me. Next refresh & the bug will #RIP. Promise! Just as is, this website's source code is desperate to be found and praised ",r.a.createElement("a",{href:"https://github.com/disha00991/webume"},"here"),".")))},W=function(e){var t=e.data;return r.a.createElement("article",{className:"degree-container"},r.a.createElement("header",null,r.a.createElement("h4",{className:"degree"},t.degree),r.a.createElement("p",{className:"school"},r.a.createElement("a",{href:t.link},t.school),", ",t.year)))},B=function(e){var t=e.data;return r.a.createElement("div",{className:"education"},r.a.createElement("div",{className:"link-to",id:"education"}),r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Education")),t.map((function(e){return r.a.createElement(W,{data:e,key:e.school})})))};B.defaultProps={data:[]};var H=B,L=function(e){var t=e.data;return r.a.createElement("article",{className:"jobs-container"},r.a.createElement("header",null,r.a.createElement("h4",null,r.a.createElement("a",{href:t.link},t.company)," - ",t.position),r.a.createElement("p",{className:"daterange"}," ",t.daterange)),r.a.createElement("ul",{className:"points"},t.points.map((function(e){return r.a.createElement("li",{key:e},e)}))))},F=function(e){var t=e.data;return r.a.createElement("div",{className:"experience"},r.a.createElement("div",{className:"link-to",id:"experience"}),r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Experience")),t.map((function(e){return r.a.createElement(L,{data:e,key:e.company})})))};F.defaultProps={data:[]};var J=F,Y=a(22),q=function(e){var t=e.handleClick,a=e.active,n=e.label;return r.a.createElement("button",{className:"skillbutton ".concat(a[n]?"skillbutton-active":""),type:"button",onClick:function(){return t(n)}},n)};function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var _=function(e){var t=e.data,a=e.categories,n=t.category,l=t.compentency,c=t.title,i={background:a.filter((function(e){return n.includes(e.name)})).map((function(e){return e.color}))[0]},s=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(Y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},i,{width:"".concat(String(Math.min(100,Math.max(l/5*100,0))),"%")});return r.a.createElement("div",{className:"skillbar clearfix"},r.a.createElement("div",{className:"skillbar-title",style:i},r.a.createElement("span",null,c)),r.a.createElement("div",{className:"skillbar-bar",style:s}),r.a.createElement("div",{className:"skill-bar-percent"},l," / 5"))};_.defaultProps={categories:[]};var z=_;function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(Y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=function(e){var t=e.categories,a=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return K({},e,Object(Y.a)({},t,!1))}),{All:!0}),skills:a.map((function(e){return Object.assign(e,{category:e.category.sort()})}))}},V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChildClick=function(e){a.setState((function(t){var a=Object.keys(t.buttons).reduce((function(a,n){return K({},a,Object(Y.a)({},n,e===n&&!t.buttons[n]))}),{});return a.All=!Object.keys(t.buttons).some((function(e){return a[e]})),{buttons:a}}))},a.state=Q({categories:e.categories,skills:e.skills}),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Q({categories:e.categories,skills:e.skills}))}},{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,a){return e.state.buttons[a]?a:t}),"All");return this.state.skills.sort((function(e,t){var a=0;return e.compentency>t.compentency?a=-1:e.compentency<t.compentency?a=1:e.category[0]>t.category[0]?a=-1:e.category[0]<t.category[0]?a=1:e.title>t.title?a=1:e.title<t.title&&(a=-1),a})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return r.a.createElement(z,{categories:e.props.categories,data:t,key:t.title})}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return r.a.createElement(q,{label:t,key:t,active:e.state.buttons,handleClick:e.handleChildClick})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"skills"},r.a.createElement("div",{className:"link-to",id:"skills"}),r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Skills"),r.a.createElement("p",null,"Note: I think these sections are silly, but everyone seems to have one.")),r.a.createElement("div",{className:"skill-button-container"},this.getButtons()),r.a.createElement("div",{className:"skill-row-container"},this.getRows()))}}]),t}(n.Component);V.defaultProps={skills:[],categories:[]};var X=function(e){var t=e.data,a=e.last;return r.a.createElement("li",{className:"course-container"},r.a.createElement("a",{href:t.link},r.a.createElement("h4",{className:"course-number"},t.number,":"),r.a.createElement("p",{className:"course-name"},t.title)),!a&&r.a.createElement("div",{className:"course-dot"},r.a.createElement("p",{className:"course-name"}," \u2022")))};X.defaultProps={last:!1};var Z=X,$=function(e){var t,a=e.data;return r.a.createElement("div",{className:"courses"},r.a.createElement("div",{className:"link-to",id:"courses"}),r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Selected Courses")),r.a.createElement("ul",{className:"course-list"},(t=a).sort((function(e,t){var a=0;return e.university>t.university?a=-1:e.unversity<t.university?a=1:e.number>t.number?a=1:e.number<t.number&&(a=-1),a})).map((function(e,a){return r.a.createElement(Z,{data:e,key:e.title,last:a===t.length-1})}))))};$.defaultProps={data:[]};var ee=function(){return r.a.createElement("div",{className:"references"},r.a.createElement("div",{className:"link-to",id:"references"}),r.a.createElement("div",{className:"title"},r.a.createElement(i.b,{to:"/contact"},r.a.createElement("h3",null,"References are available upon request"))))},te=[{school:"National Institute of Technoogy Hamirpur",degree:"B.Tech Computer Science & Engineering",link:"https://nith.ac.in",year:2017}],ae=[{company:"THB Technology | Healthcare | Big Data Analytics",position:"Software Developer",link:"www.thb.co.in",daterange:"September 2019 - Present",points:["Developing"]},{company:"Publicis Sapient",position:"Associate Developer 1",link:"https://www.publicissapient.com",daterange:"October 2017 - August 2019",points:[]},{company:"Bhabha Atomic Research Center (BARC)",position:"Intern",link:"http://www.barc.gov.in/",daterange:"June 2013 - September 2013",points:[]},{company:"Rhythmeecz Dance Club NITH",position:"Co-ordinator",link:"https://www.instagram.com/rhythmeecz_nith/",daterange:"October 2013 - March 2017",points:[]}],ne=["Education","Experience","References"],re=function(){return r.a.createElement(R,null,r.a.createElement(E.a,{title:"Resume"}),r.a.createElement("article",{className:"post",id:"resume"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,r.a.createElement(i.b,{to:"resume"},"Resume")),r.a.createElement("div",{className:"link-container"},ne.map((function(e){return r.a.createElement("h4",{key:e},r.a.createElement("a",{href:"#".concat(e.toLowerCase())},e))}))))),r.a.createElement(H,{data:te}),r.a.createElement(J,{data:ae}),r.a.createElement(ee,null)))},le=a(2),ce=a(60),ie=a.n(ce),se=a(61),oe=a.n(se),me=(a(166),a(62)),ue=a.n(me),pe=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(ue.a,{type:"Oval",color:"#36a2a1",height:this.props.height,width:this.props.width})}}]),t}(r.a.Component),de=function(e){var t=Object(le.a)({},e);return r.a.createElement(i.b,t)},he=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={count:0,markdown:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch(oe.a).then((function(e){return e.text()})).then((function(t){var a=t.split(/\s+/).map((function(e){return e.replace(/\W/g,"")})).filter((function(e){return e.length})).length;e.setState({markdown:t,count:a})}))}},{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement(E.a,{title:"Dreams"}),r.a.createElement("article",{className:"post",id:"about"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"My Not-So-Unrealistic Dreams"),r.a.createElement("p",null,"(in about ",this.state.count," words)"),!this.state.markdown&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"They're so many, it's taking time to load!",r.a.createElement("div",{style:{display:"inline-block",marginLeft:"15px"}},r.a.createElement(pe,{height:40,width:40})))," "))),this.state.markdown&&r.a.createElement(ie.a,{source:this.state.markdown,renderers:{Link:de},escapeHtml:!1})))}}]),t}(r.a.Component),Ee=a(43),be=a(63),fe=a.n(be),ge=a(64),ve=a.n(ge),ye=function(e){var t=e.data;return r.a.createElement("div",{className:"cell-container"},r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h3",null,r.a.createElement("span",null,t.title)),r.a.createElement("span",{className:"published"},t.subtitle),r.a.createElement("time",{className:"published"},fe()(t.date).format("MMMM, YYYY"))),r.a.createElement("span",{className:"image"},r.a.createElement("img",{src:ve.a.resolve("/webume",t.image),alt:t.title})),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,t.desc))))},ke=[{title:"Attrition Analysis",subtitle:"2019 Howathon @ Publicis Sapient",link:"",image:"/images/projects/attrition.jpg",date:"2019-03-01",desc:""},{title:"Cricket Match Predictor",subtitle:"Self assigned ML project",link:"",image:"/images/projects/match_prediction.jpg",date:"2019-02-01",desc:""},{title:"Trade Management System",subtitle:"Microservices based Full-stack Training culmination Project @ Publicis Sapient",link:"",image:"/images/projects/trade.jpg",date:"2019-02-01",desc:""},{title:"Tiled-display system",subtitle:"End to end javascript WebApp for casting video on video wall",link:"",image:"/images/projects/video_wall.jpg",date:"2016-06-15",desc:""},{title:"Sentiment Analysis of Product Review Blogs",subtitle:"NLP based project for extracting opinion from subjective resources",link:"",image:"/images/projects/opinion.jpg",date:"2017-03-15",desc:""},{title:"EAMMH & Leach Protocols",subtitle:"Perfomance comparision of Networking Protocols",link:"",image:"/images/projects/routing.jpg",date:"2016-07-15",desc:""},{title:"8085 Microprocessor Simulation",subtitle:"A SystemC based simulation of the aged 8085 processor",link:"",image:"/images/projects/8085.jpg",date:"2015-03-28",desc:""}],je=function(){return r.a.createElement(R,null,r.a.createElement(E.a,{title:"Projects"}),r.a.createElement("article",{className:"post",id:"projects"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,r.a.createElement(i.b,{to:"/projects"},"Projects")),r.a.createElement("p",null,"A selection of projects that I think are worth your time"))),r.a.createElement(Ee.a,null,ke.map((function(e){return r.a.createElement(Ee.a.Item,null,r.a.createElement(ye,{data:e,key:e.title}))})))))},Ne=["Some new idea to save the world?","My grandson in 2065 admiring his Granny's old website?","Go Ahead, mail me quick!","But since you're not gender biased, Femail me quicker :D","I'll reply even if I'm the COO of some company 10 yrs later :)","Waiting for your mail!","*Thanks*"],we=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(Ne[a]),s=Object(b.a)(c,2),o=s[0],m=s[1],u=Object(n.useState)(Ne[a].length),p=Object(b.a)(u,2),d=p[0],h=p[1],f=Object(n.useState)(!0),g=Object(b.a)(f,2),v=g[0],y=g[1];return function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}return function(){}}),[t])}((function(){var e=a,t=d;d-50>=Ne[a].length&&(e+=1,t=0),e===Ne.length?y(!1):(m(Ne[e].slice(0,t)),l(e),h(t+1))}),v?50:null),r.a.createElement(R,null,r.a.createElement(E.a,{title:"Contact"}),r.a.createElement("article",{className:"post",id:"contact"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,r.a.createElement(i.b,{to:"/contact"},"Contact")))),r.a.createElement("div",{className:"email-at"},r.a.createElement("div",{className:"inline-container",style:{color:"red"},onMouseEnter:function(){return y(!1)},onMouseLeave:function(){return a<Ne.length&&y(!0)}},r.a.createElement("p",null,o)),r.a.createElement("p",null,"My formal mails usually arrive at"," ",r.a.createElement("a",{href:"mailto:disha.singh00991@gmail.com",style:{color:"teal"}},"disha.singh00991@gmail.com")),r.a.createElement("p",null,"My informal mails drop by here:"," ",r.a.createElement("a",{href:"mailto:directionstar86@gmail.com",style:{color:"teal"}},"umpgyani directionstar86@gmail.com"))),r.a.createElement("ul",{className:"icons"},D.map((function(e){return r.a.createElement("li",{key:e.label},r.a.createElement("a",{href:e.link},r.a.createElement(j.a,{icon:e.icon})))})))))},Oe=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement(E.a,{title:"404"}),r.a.createElement("h1",null,"Page Not Found."),r.a.createElement("p",null,"Return to ",r.a.createElement(i.b,{to:"/"},"Homepage"),"."))};a(199);var Pe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{basename:"/webume"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:T}),r.a.createElement(s.a,{path:"/resume",component:re}),r.a.createElement(s.a,{path:"/dreams",component:he}),r.a.createElement(s.a,{path:"/projects",component:je}),r.a.createElement(s.a,{path:"/contact",component:we}),r.a.createElement(s.a,{component:Oe,status:404}))))};c.a.render(r.a.createElement(Pe,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a.p+"static/media/dreams.23f6ec3e.md"},67:function(e,t,a){e.exports=a(200)},72:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.8e07b24d.chunk.js.map