(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(129),i=n(132),c=n(4),o=n.n(c),m=l.b.div.withConfig({displayName:"gridItem__Item",componentId:"ri2z3w-0"})(["border-radius:2px;min-width:.4rem;min-height:.4rem;background-color:",";",";"],function(e){return e.colour},function(e){return e.code}),d=function(e){var t=e.code,n=e.colour;return r.a.createElement(m,{className:"grid__item",code:t,colour:n})};d.propTypes={code:o.a.array,colour:o.a.string},d.defaultProps={code:null,colour:null};var u=d,s=n(131),g=l.b.div.withConfig({displayName:"gridContainer__DefaultGrid",componentId:"qa78q1-0"})(["display:grid;grid-template-columns:repeat(3,auto);grid-template-rows:repeat(3,auto);grid-gap:.2rem;padding:.2rem;border:1px solid #aaa;border-radius:2px;width:3rem;height:3rem;margin-right:.6rem;flex-shrink:0;",""],function(e){return function(e){for(var t=[],n=1;n<9;n++){var a=n+1;t.push("\n      .grid__item:nth-of-type("+a+") {\n        background-color: "+Object(s.b)(a/25,e)+"\n        // background-color: "+Object(s.a)(40*a,"#BF3F3F")+"\n      }\n    ")}return t}(e.theme.one)}),p=Object(l.b)(g).withConfig({displayName:"gridContainer__StyledGrid",componentId:"qa78q1-1"})([".grid__item:nth-of-type(1){background-color:","}",";",";"],function(e){return Object(s.b)(1/45,e.theme.one)},function(e){return e.code},function(e){return e.styleOverride}),E=function(e){var t=e.className,n=e.code,a=e.styleOverride;return r.a.createElement(p,{className:t,code:n,styleOverride:a},function(){for(var e=[],t=0;t<9;t++)e.push(r.a.createElement(u,{key:t}));return e}())};E.propTypes={code:o.a.array,styleOverride:o.a.string},E.defaultProps={code:null,styleOverride:null};var f=E,h=l.b.h1.withConfig({displayName:"header__HeaderText",componentId:"c1tafs-0"})(["font-size:3rem;font-weight:bold;color:",";font-family:monospace;display:inline-block;"],function(e){return e.theme.one}),y=Object(l.b)(f).withConfig({displayName:"header__InlineGridContainer",componentId:"c1tafs-1"})(["display:inline-grid;vertical-align:top;margin-left:1rem;"]),w=function(){return r.a.createElement("header",null,r.a.createElement(h,null,"display: grid;"),r.a.createElement(y,null),r.a.createElement("p",null,r.a.createElement("strong",null,"Align")," = block axis"),r.a.createElement("p",null,r.a.createElement("strong",null,"Justify")," = inline/row axis"),r.a.createElement("p",null,"Rows ",r.a.createElement("sub",null,"x")," columns for shorthand declarations"))},b=Object(l.b)(g).withConfig({displayName:"gridContainerFirst__GridFirst",componentId:"sc-161pe0l-0"})(["grid-template-columns:2fr 1fr 1fr;grid-template-rows:2fr 1fr 1fr;",";"],function(e){return e.styleOverride}),v=function(e){var t=e.code;return r.a.createElement(b,null,r.a.createElement(u,{code:t,colour:"black"}),function(){for(var e=[],t=0;t<8;t++)e.push(r.a.createElement(u,{key:t}));return e}())};v.propTypes={code:o.a.array.isRequired};var I=v,_=l.b.article.withConfig({displayName:"declaration__Container",componentId:"xewnn5-0"})(["display:flex;align-items:center;padding:.1rem 0 .1rem .5rem;background-color:#eee;border-left:2px solid ",";&:first-of-type{margin-top:1rem;}"],function(e){return e.theme.one}),C=l.b.code.withConfig({displayName:"declaration__Code",componentId:"xewnn5-1"})(["display:inline-block;line-height:1rem;"]),x=function(e){var t=e.children,n=e.code,a=(e.isDefault,e.styleItem),l=e.styleOverride;return r.a.createElement(_,null,a?r.a.createElement(I,{code:n,styleOverride:l}):r.a.createElement(f,{code:n,styleOverride:l}),r.a.createElement("div",null,r.a.createElement("p",null,n.map(function(e,t){return r.a.createElement(C,{key:t},e)})),t))};x.propTypes={children:o.a.node,code:o.a.array.isRequired,styleItem:o.a.bool},x.defaultProps={children:null,styleItem:!1};var k=x,S=l.b.div.withConfig({displayName:"description__Div",componentId:"q5botz-0"})(["p{line-height:1.2rem;}b{font-weight:600;}code{margin-top:0.5rem;font-size:1.1rem;color:",";}"],function(e){return e.theme.one}),N=function(e){return r.a.createElement(S,null,e.children,e.signature&&r.a.createElement("code",null,e.signature))};N.propTypes={default:o.a.string,signature:o.a.string};var z=N,O=(n(147),n(149)),j=n.n(O),D=l.b.h3.withConfig({displayName:"property__Header",componentId:"sc-8k02jx-0"})(["font-weight:bold;font-size:1.4rem;margin-bottom:.5rem;text-transform:uppercase;font-weight:bold;"]),T=l.b.a.withConfig({displayName:"property__Link",componentId:"sc-8k02jx-1"})(["margin-left:.6rem;text-decoration:none;color:",";transition:color 250ms;font-size:1rem;vertical-align:top;&:hover{color:",";}"],function(e){return e.theme.five},function(e){return e.theme.one}),q=function(e){var t=e.children,n=e.header,a=e.link;return r.a.createElement("section",null,r.a.createElement(D,null,n,r.a.createElement(T,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/"+(a||j()(n))},"MDN")),t)};q.propTypes={children:o.a.node.isRequired,header:o.a.string.isRequired,link:o.a.string},q.defaultProps={link:null};var G=q,A=l.b.section.withConfig({displayName:"section__StyledSection",componentId:"kerei0-0"})(["margin:2rem 0;"]),F=l.b.div.withConfig({displayName:"section__SectionGrid",componentId:"kerei0-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:2.2rem 1.2rem;@media (max-width:25rem){grid-template-columns:1fr;}"]),P=l.b.h2.withConfig({displayName:"section__Header",componentId:"kerei0-2"})(["font-weight:bold;margin-bottom:1rem;font-size:2rem;text-transform:uppercase;display:inline-block;color:",";&:hover{a{opacity:1;}}a{color:",";font-size:1.4rem;margin-left:10px;vertical-align:top;cursor:pointer;text-decoration:none;opacity:0;transition:opacity 250ms;}"],function(e){return e.theme.four},function(e){return e.theme.five}),R=function(e){var t=e.children,n=e.header,a=e.id;return r.a.createElement(A,null,n&&r.a.createElement(P,null,n,r.a.createElement("a",{id:a,href:"#"+a},"#")),r.a.createElement(F,null,t))};R.propTypes={children:o.a.node.isRequired,header:o.a.string,id:o.a.string},R.defaultProps={header:"",id:""};var U=R,H=l.b.code.withConfig({displayName:"main__Code",componentId:"sc-1yj1zs7-0"})(["display:block;"]),L=Object(l.b)(H).withConfig({displayName:"main__AlternateCode",componentId:"sc-1yj1zs7-1"})(["font-style:italic;"]),W="grid-template-columns: repeat(2, auto);",B="grid-template-rows: repeat(2, auto);",J=function(){return r.a.createElement("main",null,r.a.createElement(U,{header:""},r.a.createElement(G,{header:"grid template"},r.a.createElement(z,null,r.a.createElement("p",null,"Defines the explicit track sizes of the grid")),r.a.createElement(k,{code:["grid-template-columns: 1fr 20px 1fr;"]}),r.a.createElement(k,{code:["grid-template-rows: 1fr repeat(2, 2fr);"]})),r.a.createElement(G,{header:"grid gap"},r.a.createElement(z,{signature:"grid-gap: <row-gap> <column-gap>?"},r.a.createElement("p",null,"Defines gutter size between grid items")),r.a.createElement(k,{code:["grid-gap: 20%;"]}),r.a.createElement(k,{code:["grid-gap: 1px 5px;"]}))),r.a.createElement(U,{header:"Container alignment",id:"container-align"},r.a.createElement(G,{header:"Place content"},r.a.createElement(z,{signature:"place-content: <align-content> <justify-content>?"},r.a.createElement("p",null,"Aligns/justifies the grid itself (when the grid is smaller than its container)")),r.a.createElement(k,{code:["place-content: start end;"]}),r.a.createElement(k,{code:["place-content: center;"]}),r.a.createElement(k,{code:["place-content: end start;"]})),r.a.createElement(G,{header:"Place items"},r.a.createElement(z,{signature:"place-items: <align-items> <justify-items>?"},r.a.createElement("p",null,"Defines the default ",r.a.createElement("b",null,"align-self")," and ",r.a.createElement("b",null,"justify-self")," of grid items within their grid tracks")),r.a.createElement(k,{code:["place-items: start end;"]}),r.a.createElement(k,{code:["place-items: center;"]}),r.a.createElement(k,{code:["place-items: end start;"]}))),r.a.createElement(U,{header:"Item alignment",id:"item-align"},r.a.createElement(G,{header:"Place self"},r.a.createElement(z,{signature:"place-self: <align-self> <justify-self>?"},r.a.createElement("p",null,"Aligns/justifies the grid item within its grid track")),r.a.createElement(k,{code:["place-self: start end;"],styleItem:!0}),r.a.createElement(k,{code:["place-self: center;"],styleItem:!0}),r.a.createElement(k,{code:["place-self: end start;"],styleItem:!0}))),r.a.createElement(U,{header:"Item placement",id:"item-place"},r.a.createElement(G,{header:"grid row"},r.a.createElement(z,{signature:"grid-row: <grid-row-start> [/ <grid-row-end>]?"}),r.a.createElement(k,{code:["grid-row: 1 / 3;"],styleItem:!0}),r.a.createElement(k,{code:["grid-row: 1 / span 3;"],styleItem:!0},r.a.createElement(L,null,"grid-row: span 3;")),r.a.createElement(k,{code:["grid-row-start: 2; grid-row-end: 3;"],styleItem:!0})),r.a.createElement(G,{header:"grid column"},r.a.createElement(z,{signature:"grid-column: <grid-column-start> [/ <grid-column-end>]?"}),r.a.createElement(k,{code:["grid-column: 1 / 3;"],styleItem:!0}),r.a.createElement(k,{code:["grid-column: 1 / span 3;"],styleItem:!0},r.a.createElement(L,null,"grid-column: span 3;")),r.a.createElement(k,{code:["grid-column-start: 2; grid-column-end: 3;"],styleItem:!0})),r.a.createElement(G,{header:"grid area"},r.a.createElement(z,{signature:"grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end"}),r.a.createElement(k,{code:["grid-area: 1 / 1 / 3 / 3;"],styleItem:!0}),r.a.createElement(k,{code:["grid-area: 2 / 2 / span 2 / span 2;"],styleItem:!0}))),r.a.createElement(U,{header:"Auto alignment / placement",id:"auto-align"},r.a.createElement(G,{header:"grid auto flow"},r.a.createElement(z,{signature:"grid-auto-flow: [ row | column ] || dense"},r.a.createElement("p",null,"Defines auto placement for grid items that aren't explicitly placed")),r.a.createElement(k,{code:["grid-auto-flow: row;"]}),r.a.createElement(k,{code:["grid-auto-flow: dense;"]})),r.a.createElement(G,{header:"grid auto rows"},r.a.createElement(z,{signature:"grid-auto-rows: <track-size>+"},r.a.createElement("p",null,"Defines size of implicit grid tracks")),r.a.createElement(k,{styleOverride:B,code:["grid-auto-rows: 5px;"]}),r.a.createElement(k,{styleOverride:B,code:["grid-auto-rows: 1fr;"]})),r.a.createElement(G,{header:"grid auto columns"},r.a.createElement(z,{signature:"grid-auto-rows: <track-size>+"},r.a.createElement("p",null,"Defines size of implicit grid tracks")),r.a.createElement(k,{styleOverride:W+"grid-auto-flow: column;",code:["grid-auto-columns: 5px;"]}),r.a.createElement(k,{styleOverride:W+"grid-auto-flow: column;",code:["grid-auto-columns: 1fr;"]}))))},M=l.b.table.withConfig({displayName:"IE__Table",componentId:"dzzdvw-0"})(["margin-top:1rem;th{padding-bottom:0.5rem;font-weight:bold;}tr:nth-of-type(even){}td{padding:0.25rem 0.5rem;}"]),K=function(){return r.a.createElement("main",null,r.a.createElement(P,null,"IE10/IE11"),r.a.createElement("p",null,"The specs have more changes than are listed here, e.g. changes to values and syntax."),r.a.createElement("p",null,"IE10/IE11 requires explicit placement of all items, there is no auto placement (and also no ",r.a.createElement("code",null,"auto"),"-related declarations)"),r.a.createElement(M,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"CSS Grid Level 1"),r.a.createElement("th",null,"IE10/IE11"),r.a.createElement("th",null,"Notes"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"grid-template-columns"),r.a.createElement("td",null,"-ms-grid-columns"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-template-rows"),r.a.createElement("td",null,"-ms-grid-rows"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-template-areas"),r.a.createElement("td",null,"-"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-row"),r.a.createElement("td",null,"-"),r.a.createElement("td",null,"See ",r.a.createElement("code",null,"-ms-grid-row")," and ",r.a.createElement("code",null,"-ms-grid-row-span"))),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-column"),r.a.createElement("td",null,"-"),r.a.createElement("td",null,"See ",r.a.createElement("code",null,"-ms-grid-column")," and ",r.a.createElement("code",null,"-ms-grid-column-span"))),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-row-start"),r.a.createElement("td",null,"-ms-grid-row"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-column-start"),r.a.createElement("td",null,"-ms-grid-column"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-row-end"),r.a.createElement("td",null,"-"),r.a.createElement("td",null,"Defined by the -ms-grid-row-span property")),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-column-end"),r.a.createElement("td",null,"-"),r.a.createElement("td",null,"Defined by the -ms-grid-column-span property")),r.a.createElement("tr",null,r.a.createElement("td",null,"-"),r.a.createElement("td",null,"-ms-grid-column-span"),r.a.createElement("td",null,"Used as cannot span with ",r.a.createElement("code",null,"grid-column")," or ",r.a.createElement("code",null))),r.a.createElement("tr",null,r.a.createElement("td",null,"-"),r.a.createElement("td",null,"-ms-grid-row-span"),r.a.createElement("td",null,"Used as cannot span with ",r.a.createElement("code",null,"grid-column")," or ",r.a.createElement("code",null))),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-area"),r.a.createElement("td",null,"-"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-gap"),r.a.createElement("td",null,"-"),r.a.createElement("td",null,"No gap properties exist",r.a.createElement("br",null),"Can be emulated by using a different grid track and placing items around the gaps")),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-auto-columns"),r.a.createElement("td",null,"-"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-auto-rows"),r.a.createElement("td",null,"-"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"grid-auto-flow"),r.a.createElement("td",null,"-"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"align-self"),r.a.createElement("td",null,"-ms-grid-column-align"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"justify-self"),r.a.createElement("td",null,"-ms-grid-row-align"),r.a.createElement("td",null)))))},Q=(n(150),{one:"#5D001E",two:"#E3E2DF",three:"#E3AFBC",four:"#9A1750",five:"#EE4C7C"}),V=l.b.div.withConfig({displayName:"pages__FooterLinks",componentId:"sc-1wyn5lw-0"})(["display:flex;flex-wrap:wrap;margin-top:.8rem;align-items:center;a{display:flex;justify-content:center;text-decoration:none;color:",";line-height:2rem;margin-right:.5rem;font-weight:600;border-bottom:1px solid ",";;transition:color 250ms,border-color 250ms;&:hover{color:",";border-color:",";}}"],function(e){return e.theme.four},function(e){return e.theme.four},function(e){return e.theme.five},function(e){return e.theme.five});t.default=function(){return r.a.createElement(l.a,{theme:Q},r.a.createElement("div",null,r.a.createElement(i.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,"CSS Grid"),r.a.createElement("meta",{name:"description",content:"A visual guide for helping you remember CSS Grid"})),r.a.createElement(w,null),r.a.createElement(J,null),r.a.createElement(K,null),r.a.createElement(V,null,r.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"},"CSS Grid @ MDN"),r.a.createElement("a",{href:"https://www.w3.org/TR/css-grid-1/"},"CSS Grid @ W3"),r.a.createElement("a",{href:"https://www.w3.org/TR/css-align-3/"},"CSS Box Alignment @ W3"),r.a.createElement("a",{href:"https://caniuse.com/#feat=css-grid"},"Can I Use"))))}},150:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-9201c2a73e299d4946b8.js.map