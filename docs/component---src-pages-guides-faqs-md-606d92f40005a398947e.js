(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return l});var n=a(184),i=a.n(n),r=a(0),u=a.n(r),s=a(174),o=a(181);t.default=function(e){var t=e.components,a=i()(e,["components"]);return u.a.createElement(s.MDXTag,{name:"wrapper",Layout:o.a,layoutProps:a,components:t},u.a.createElement(s.MDXTag,{name:"h1",components:t,props:{id:"frequently-asked-questions"}},u.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"h1",props:{href:"#frequently-asked-questions","aria-hidden":!0,class:"anchor"}}),"Frequently Asked Questions"),u.a.createElement(s.MDXTag,{name:"p",components:t},"Feel free to ask questions either on Stack Overflow or in the ",u.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/davidkpiano/xstate/issues"}},"GitHub issues"),". Questions from there will be added here over time."),u.a.createElement("details",null,u.a.createElement("summary",null,"What is a finite-state machine?"),u.a.createElement("br",null),"A finite state machine (FSM) is a mathematical description of the relationships between a finite number of states, and a finite number of events that can cause transitions between states. See [the Wikipedia entry](https://en.wikipedia.org/wiki/Finite-state_machine) for more information."),u.a.createElement("details",null,u.a.createElement("summary",null,"What is a statechart?"),u.a.createElement("br",null),"A statechart is an extension to finite state machines, created by David Harel. They are more flexible than finite state machines because they support:",u.a.createElement("ul",null,u.a.createElement("li",null,"hierarchical (nested) states,"),u.a.createElement("li",null,"orthogonal (parallel) regions,"),u.a.createElement("li",null,"state actions (entry, exit, and transition actions)"),u.a.createElement("li",null,"history (shallow and deep) states.")),"This has the benefit of preventing [state and transition explosion](https://en.wikipedia.org/wiki/UML_state_machine#UML_extensions_to_the_traditional_FSM_formalism), which is a limitation of traditional finite state machines.",u.a.createElement("br",null),"See [the Wikipedia entry](https://en.wikipedia.org/wiki/State_diagram#Harel_statechart) and David Harel's original paper, [Statecharts: a Visual Formalism for Complex Systems](http://www.inf.ed.ac.uk/teaching/courses/seoc/2005_2006/resources/statecharts.pdf) for more information."))};var l={}},168:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return L}),a.d(t,"StaticQuery",function(){return g});var n=a(0),i=a.n(n),r=a(4),u=a.n(r),s=a(167),o=a.n(s);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(170),M=a.n(l);a.d(t,"PageRenderer",function(){return M.a});var c=a(34);a.d(t,"parsePath",function(){return c.a});var L=i.a.createContext({}),g=function(e){return i.a.createElement(L.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},170:function(e,t,a){var n;e.exports=(n=a(173))&&n.default||n},171:function(e,t,a){e.exports={heading:"typography-module--heading--1nwnC",h1:"typography-module--h1--2Esa2",h2:"typography-module--h2--3ie0v",code:"typography-module--code--240F2",anchor:"typography-module--anchor--1uJIO"}},172:function(e){e.exports={data:{site:{siteMetadata:{title:"XState Documentation"}}}}},173:function(e,t,a){"use strict";a.r(t);var n=a(10),i=a.n(n),r=a(0),u=a.n(r),s=a(4),o=a.n(s),l=a(51),M=a(2),c=function(e){var t=e.location,a=M.default.getResourcesForPathnameSync(t.pathname);return u.a.createElement(l.a,i()({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},175:function(e,t,a){e.exports={layout:"layout-module--layout--WT_lX",header:"layout-module--header--7X126",sidebar:"layout-module--sidebar--3qq0Q",content:"layout-module--content--2CPz1"}},176:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNzkuOCA5OC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNzkuOCA5OC41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzYiPgoJCTxwYXRoIGQ9Ik01NS44LDEwLjRMNTUuOCwxMC40aDE5LjVMNTUuNiw0NC42bDAsMEM0OS42LDMzLjksNDkuNywyMC45LDU1LjgsMTAuNHoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwb2x5Z29uIHBvaW50cz0iNzUuNCw4OC4xIDMwLjUsMTAuNCAxMSwxMC40IDMzLjQsNDkuMyAxMSw4OC4xIDMwLjUsODguMSA0My4yLDY2LjIgNTUuOCw4OC4xIiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCTwvZz4KCTxnIGNsYXNzPSJzdDAiPgoJCTxwYXRoIGQ9Ik04OS4xLDU5LjhjMy4yLDIuNyw2LjksNCwxMS4zLDQuMWM1LjItMC4xLDcuOC0yLDcuOS01LjdjMC0zLjEtMS43LTQuOS01LjItNS41Yy0xLjYtMC4yLTMuNC0wLjUtNS4zLTAuOAoJCQljLTMuNC0wLjYtNi0xLjktNy44LTMuOWMtMS44LTIuMS0yLjgtNC42LTIuOC03LjZjMC0zLjYsMS4yLTYuNSwzLjUtOC43YzIuMi0yLjIsNS40LTMuMyw5LjUtMy4zYzQuOSwwLjEsOS4yLDEuNSwxMi45LDQuMgoJCQlsLTMuNCw1LjFjLTMtMi02LjMtMy4xLTkuOC0zLjJjLTEuOSwwLTMuNCwwLjUtNC42LDEuNGMtMS4zLDEtMiwyLjUtMiw0LjRjMCwxLjIsMC40LDIuMywxLjMsMy4yYzAuOSwxLDIuMywxLjcsNC4zLDIKCQkJYzEuMSwwLjIsMi42LDAuNCw0LjUsMC42YzMuNywwLjUsNi41LDEuOSw4LjMsNC4xYzEuOCwyLjIsMi42LDQuNywyLjYsNy43QzExNCw2NiwxMDkuNCw2OS45LDEwMC4zLDcwYy01LjksMC0xMC45LTEuOS0xNS4yLTUuNgoJCQlMODkuMSw1OS44eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+CgkJPHBhdGggZD0iTTEzNS41LDM0LjJoLTEwLjl2LTUuNWgyNy44djUuNWgtMTAuOXYzNS41aC02VjM0LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMTgwLjksNjAuNWgtMTUuMWwtMy4xLDkuMmgtNi40bDE0LjQtNDFoNWwxNC40LDQxSDE4NEwxODAuOSw2MC41eiBNMTc5LjIsNTVsLTUuNy0xNy45aC0wLjFMMTY3LjYsNTVIMTc5LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMjA1LjQsMzQuMmgtMTAuOXYtNS41aDI3Ljh2NS41aC0xMC45djM1LjVoLTZWMzQuMnoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwYXRoIGQ9Ik0yMzQuMiwyOC43aDI1LjR2NS44aC0xOS40djExLjdoMTYuNXY1LjVoLTE2LjV2MTIuMWgxOS40djUuOGgtMjUuNFYyOC43eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},177:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBkPSJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yeiIvPjwvc3ZnPgo8IS0tCkZvbnQgQXdlc29tZSBQcm8gNS40LjIgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20KTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkKLS0+Cg=="},178:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDQyIDExNEg2YTYgNiAwIDAgMS02LTZWODRhNiA2IDAgMCAxIDYtNmg0MzZhNiA2IDAgMCAxIDYgNnYyNGE2IDYgMCAwIDEtNiA2em0wIDE2MEg2YTYgNiAwIDAgMS02LTZ2LTI0YTYgNiAwIDAgMSA2LTZoNDM2YTYgNiAwIDAgMSA2IDZ2MjRhNiA2IDAgMCAxLTYgNnptMCAxNjBINmE2IDYgMCAwIDEtNi02di0yNGE2IDYgMCAwIDEgNi02aDQzNmE2IDYgMCAwIDEgNiA2djI0YTYgNiAwIDAgMS02IDZ6Ii8+PC9zdmc+CjwhLS0KRm9udCBBd2Vzb21lIFBybyA1LjQuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbQpMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKQotLT4K"},179:function(e,t,a){e.exports={logo:"header-module--logo--3gu8x",header:"header-module--header--2Q3RK",github:"header-module--github--2n2t6",menu:"header-module--menu--3bKjy"}},180:function(e,t,a){e.exports={nav:"sidebar-module--nav--dK6KB",items:"sidebar-module--items--3H_1t",item:"sidebar-module--item--3A0ef",topLevel:"sidebar-module--topLevel--3yzSB",link:"sidebar-module--link--2azLL"}},181:function(e,t,a){"use strict";a(76),a(182);var n=a(7),i=a.n(n),r=a(172),u=a(0),s=a.n(u),o=a(4),l=a.n(o),M=a(183),c=a.n(M),L=a(168),g=a(174),m=a(175),y=a.n(m),d=a(171),j=a.n(d),N=(a(185),a(169)),I=a.n(N),p=(a(186),a(187),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.tag,a=e.id;return s.a.createElement(t,{className:I()(j.a.heading,j.a[t]),id:a},s.a.createElement("span",null,this.props.children))},t}(s.a.Component));function h(e){return s.a.createElement("a",Object.assign({},e,{className:I()(j.a.anchor)}))}var C=a(188),S=a.n(C),D=a(176),T=a.n(D),A=a(177),w=a.n(A),x=a(178),E=a.n(x),b=a(179),z=a.n(b),Y=function(e){var t=e.siteTitle,a=e.className,n=e.onToggleMenu;return s.a.createElement("header",{className:I()(a,z.a.header)},s.a.createElement(L.Link,{to:"/",style:{color:"white",textDecoration:"none"},alt:t,className:z.a.logo},s.a.createElement("img",{src:T.a,width:"auto"})),s.a.createElement("div",null,s.a.createElement("a",{href:"https://github.com/davidkpiano/xstate",alt:"XState on GitHub",className:z.a.github},s.a.createElement("img",{src:w.a,width:"auto"})),s.a.createElement("img",{src:E.a,width:"auto",className:z.a.menu,onClick:n})))},f=(a(189),a(77),a(50),a(190),a(49),a(180)),k=a.n(f);console.log(k.a);var v={guides:{title:"Guides",pages:{start:{title:"Getting Started"},installation:{title:"Installation"},states:{title:"States"},transitions:{title:"Transitions"},hierarchical:{title:"Hierarchical States"},parallel:{title:"Parallel States"},actions:{title:"Actions"},guards:{title:"Guards"},context:{title:"Context"},activities:{title:"Activities"},communication:{title:"Communication"},delays:{title:"Delays"},final:{title:"Final States"},history:{title:"History State Nodes"},ids:{title:"Identifying States"},internal:{title:"Internal Transitions"},interpretation:{title:"Interpreting Machines"},typescript:{title:"TypeScript Usage"}}},recipes:{title:"Recipes",pages:{react:{title:"React"},rxjs:{title:"RxJS"}}},api:{title:"API Docs",pages:{api:{title:"TypeScript",link:"/docs/api"},v3:{title:"Version 3.x",link:"/docs-v3"}}}},O=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.renderPages=function(e,t){return s.a.createElement("ul",{className:k.a.items},Object.keys(e).map(function(a){var n=e[a],i=e[a].link||"docs/"+t+"/"+a;return s.a.createElement("li",{className:k.a.item},s.a.createElement(L.Link,{to:i,className:k.a.link},n.title))}))},a.render=function(){var e=this;this.props.visible;return s.a.createElement("nav",{className:k.a.nav},s.a.createElement("ul",{className:k.a.items},Object.keys(v).map(function(t){var a=v[t],n=a.pages,i=a.title,r=a.link,u=void 0===r?"docs/"+t:r;return s.a.createElement("li",{className:I()(k.a.item,k.a.topLevel)},s.a.createElement(L.Link,{to:u,className:k.a.link},i),n&&e.renderPages(n,t))})))},t}(s.a.Component),Q=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={menuToggled:!1},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){S.a.initHighlighting()},a.toggleMenu=function(){this.setState({menuToggled:!this.state.menuToggled})},a.render=function(){var e=this,t=this.props.children;return s.a.createElement(L.StaticQuery,{query:"1044757290",render:function(a){return s.a.createElement("main",{className:y.a.layout},s.a.createElement(c.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"XState is a library for creating state machines and statecharts in JavaScript."},{name:"keywords",content:"sample, something"}]},s.a.createElement("html",{lang:"en"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,700|Source+Code+Pro",rel:"stylesheet"})),s.a.createElement(Y,{className:y.a.header,siteTitle:a.site.siteMetadata.title,onToggleMenu:e.toggleMenu.bind(e)}),s.a.createElement("div",{className:y.a.sidebar,"data-visible":e.state.menuToggled||void 0},s.a.createElement(O,null)),s.a.createElement(g.MDXProvider,{components:{h1:function(e){return s.a.createElement(p,Object.assign({tag:"h1"},e))},h2:function(e){return s.a.createElement(p,Object.assign({tag:"h2"},e))},h3:function(e){return s.a.createElement(p,Object.assign({tag:"h3"},e))},a:function(e){return s.a.createElement(h,e)},inlineCode:function(e){return s.a.createElement("code",{className:j.a.code},e.children)}}},s.a.createElement("main",{className:y.a.content},t)))},data:r})},t}(s.a.Component);Q.propTypes={children:l.a.node.isRequired};t.a=Q}}]);
//# sourceMappingURL=component---src-pages-guides-faqs-md-606d92f40005a398947e.js.map