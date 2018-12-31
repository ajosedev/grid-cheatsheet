(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{128:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(131),l=r(4),o=r.n(l),c=r(133),d=r(134),m=Object(i.b)(c.a).withConfig({displayName:"gridContainerFirst__GridFirst",componentId:"sc-161pe0l-0"})(["grid-template-columns:2fr 1fr 1fr;grid-template-rows:2fr 1fr 1fr;",";"],function(e){return e.styleOverride}),s=function(e){var t=e.code;return n.a.createElement(m,null,n.a.createElement(d.a,{code:t,colour:"black"}),function(){for(var e=[],t=0;t<8;t++)e.push(n.a.createElement(d.a,{key:t}));return e}())};s.propTypes={code:o.a.array.isRequired};var u=s,p=i.b.article.withConfig({displayName:"declaration__Container",componentId:"xewnn5-0"})(["display:flex;align-items:center;padding:.1rem 0 .1rem .5rem;background-color:#eee;border-left:2px solid ",";&:first-of-type{margin-top:1rem;}"],function(e){return e.theme.one}),g=i.b.code.withConfig({displayName:"declaration__Code",componentId:"xewnn5-1"})(["display:inline-block;line-height:1rem;"]),f=function(e){var t=e.children,r=e.code,a=(e.isDefault,e.styleItem),i=e.styleOverride;return n.a.createElement(p,null,a?n.a.createElement(u,{code:r,styleOverride:i}):n.a.createElement(c.b,{code:r,styleOverride:i}),n.a.createElement("div",null,n.a.createElement("p",null,r.map(function(e,t){return n.a.createElement(g,{key:t},e)})),t))};f.propTypes={children:o.a.node,code:o.a.array.isRequired,styleItem:o.a.bool},f.defaultProps={children:null,styleItem:!1};var h=f,E=i.b.div.withConfig({displayName:"description__Div",componentId:"q5botz-0"})(["p{line-height:1.2rem;}b{font-weight:600;}code{margin-top:0.5rem;font-size:1.1rem;color:",";}"],function(e){return e.theme.one}),y=function(e){return n.a.createElement(E,null,e.children,e.signature&&n.a.createElement("code",null,e.signature))};y.propTypes={default:o.a.string,signature:o.a.string};var w=y,b=(r(136),r(137)),v=r.n(b),_=i.b.h3.withConfig({displayName:"property__Header",componentId:"sc-8k02jx-0"})(["font-weight:bold;font-size:1.4rem;margin-bottom:.5rem;text-transform:uppercase;font-weight:bold;"]),I=i.b.a.withConfig({displayName:"property__Link",componentId:"sc-8k02jx-1"})(["margin-left:.6rem;text-decoration:none;color:",";transition:color 250ms;font-size:1rem;vertical-align:top;&:hover{color:",";}"],function(e){return e.theme.five},function(e){return e.theme.one}),k=function(e){var t=e.children,r=e.header,a=e.link;return n.a.createElement("section",null,n.a.createElement(_,null,r,n.a.createElement(I,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/"+(a||v()(r))},"MDN")),t)};k.propTypes={children:o.a.node.isRequired,header:o.a.string.isRequired,link:o.a.string},k.defaultProps={link:null};var x=k,C=r(132),O=i.b.code.withConfig({displayName:"main__Code",componentId:"sc-2of0wy-0"})(["display:block;"]),N=Object(i.b)(O).withConfig({displayName:"main__AlternateCode",componentId:"sc-2of0wy-1"})(["font-style:italic;"]),j="grid-template-columns: repeat(2, auto);",z="grid-template-rows: repeat(2, auto);";t.default=function(){return n.a.createElement("main",null,n.a.createElement(C.b,{header:""},n.a.createElement(x,{header:"grid template"},n.a.createElement(w,null,n.a.createElement("p",null,"Defines the explicit track sizes of the grid")),n.a.createElement(h,{code:["grid-template-columns: 1fr 20px 1fr;"]}),n.a.createElement(h,{code:["grid-template-rows: 1fr repeat(2, 2fr);"]})),n.a.createElement(x,{header:"grid gap"},n.a.createElement(w,{signature:"grid-gap: <row-gap> <column-gap>?"},n.a.createElement("p",null,"Defines gutter size between grid items")),n.a.createElement(h,{code:["grid-gap: 20%;"]}),n.a.createElement(h,{code:["grid-gap: 1px 5px;"]}))),n.a.createElement(C.b,{header:"Container alignment",id:"container-align"},n.a.createElement(x,{header:"Place content"},n.a.createElement(w,{signature:"place-content: <align-content> <justify-content>?"},n.a.createElement("p",null,"Aligns/justifies the grid itself (when the grid is smaller than its container)")),n.a.createElement(h,{code:["place-content: start end;"]}),n.a.createElement(h,{code:["place-content: center;"]}),n.a.createElement(h,{code:["place-content: end start;"]})),n.a.createElement(x,{header:"Place items"},n.a.createElement(w,{signature:"place-items: <align-items> <justify-items>?"},n.a.createElement("p",null,"Defines the default ",n.a.createElement("b",null,"align-self")," and ",n.a.createElement("b",null,"justify-self")," of grid items within their grid tracks")),n.a.createElement(h,{code:["place-items: start end;"]}),n.a.createElement(h,{code:["place-items: center;"]}),n.a.createElement(h,{code:["place-items: end start;"]}))),n.a.createElement(C.b,{header:"Item alignment",id:"item-align"},n.a.createElement(x,{header:"Place self"},n.a.createElement(w,{signature:"place-self: <align-self> <justify-self>?"},n.a.createElement("p",null,"Aligns/justifies the grid item within its grid track")),n.a.createElement(h,{code:["place-self: start end;"],styleItem:!0}),n.a.createElement(h,{code:["place-self: center;"],styleItem:!0}),n.a.createElement(h,{code:["place-self: end start;"],styleItem:!0}))),n.a.createElement(C.b,{header:"Item placement",id:"item-place"},n.a.createElement(x,{header:"grid row"},n.a.createElement(w,{signature:"grid-row: <grid-row-start> [/ <grid-row-end>]?"}),n.a.createElement(h,{code:["grid-row: 1 / 3;"],styleItem:!0}),n.a.createElement(h,{code:["grid-row: 1 / span 3;"],styleItem:!0},n.a.createElement(N,null,"grid-row: span 3;")),n.a.createElement(h,{code:["grid-row-start: 2; grid-row-end: 3;"],styleItem:!0})),n.a.createElement(x,{header:"grid column"},n.a.createElement(w,{signature:"grid-column: <grid-column-start> [/ <grid-column-end>]?"}),n.a.createElement(h,{code:["grid-column: 1 / 3;"],styleItem:!0}),n.a.createElement(h,{code:["grid-column: 1 / span 3;"],styleItem:!0},n.a.createElement(N,null,"grid-column: span 3;")),n.a.createElement(h,{code:["grid-column-start: 2; grid-column-end: 3;"],styleItem:!0})),n.a.createElement(x,{header:"grid area"},n.a.createElement(w,{signature:"grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end"}),n.a.createElement(h,{code:["grid-area: 1 / 1 / 3 / 3;"],styleItem:!0}),n.a.createElement(h,{code:["grid-area: 2 / 2 / span 2 / span 2;"],styleItem:!0}))),n.a.createElement(C.b,{header:"Auto alignment / placement",id:"auto-align"},n.a.createElement(x,{header:"grid auto flow"},n.a.createElement(w,{signature:"grid-auto-flow: [ row | column ] || dense"},n.a.createElement("p",null,"Defines auto placement for grid items that aren't explicitly placed")),n.a.createElement(h,{code:["grid-auto-flow: row;"]}),n.a.createElement(h,{code:["grid-auto-flow: dense;"]})),n.a.createElement(x,{header:"grid auto rows"},n.a.createElement(w,{signature:"grid-auto-rows: <track-size>+"},n.a.createElement("p",null,"Defines size of implicit grid tracks")),n.a.createElement(h,{styleOverride:z,code:["grid-auto-rows: 5px;"]}),n.a.createElement(h,{styleOverride:z,code:["grid-auto-rows: 1fr;"]})),n.a.createElement(x,{header:"grid auto columns"},n.a.createElement(w,{signature:"grid-auto-rows: <track-size>+"},n.a.createElement("p",null,"Defines size of implicit grid tracks")),n.a.createElement(h,{styleOverride:j+"grid-auto-flow: column;",code:["grid-auto-columns: 5px;"]}),n.a.createElement(h,{styleOverride:j+"grid-auto-flow: column;",code:["grid-auto-columns: 1fr;"]}))))}},132:function(e,t,r){"use strict";r.d(t,"a",function(){return m});var a=r(0),n=r.n(a),i=r(4),l=r.n(i),o=r(131),c=o.b.section.withConfig({displayName:"section__StyledSection",componentId:"kerei0-0"})(["margin:2rem 0;"]),d=o.b.div.withConfig({displayName:"section__SectionGrid",componentId:"kerei0-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:2.2rem 1.2rem;@media (max-width:25rem){grid-template-columns:1fr;}"]),m=o.b.h2.withConfig({displayName:"section__Header",componentId:"kerei0-2"})(["font-weight:bold;margin-bottom:1rem;font-size:2rem;text-transform:uppercase;display:inline-block;color:",";&:hover{a{opacity:1;}}a{color:",";font-size:1.4rem;margin-left:10px;vertical-align:top;cursor:pointer;text-decoration:none;opacity:0;transition:opacity 250ms;}"],function(e){return e.theme.four},function(e){return e.theme.five}),s=function(e){var t=e.children,r=e.header,a=e.id;return n.a.createElement(c,null,r&&n.a.createElement(m,null,r,n.a.createElement("a",{id:a,href:"#"+a},"#")),n.a.createElement(d,null,t))};s.propTypes={children:l.a.node.isRequired,header:l.a.string,id:l.a.string},s.defaultProps={header:"",id:""},t.b=s},133:function(e,t,r){"use strict";r.d(t,"a",function(){return m});var a=r(0),n=r.n(a),i=r(4),l=r.n(i),o=r(131),c=r(134),d=r(138),m=o.b.div.withConfig({displayName:"gridContainer__DefaultGrid",componentId:"qa78q1-0"})(["display:grid;grid-template-columns:repeat(3,auto);grid-template-rows:repeat(3,auto);grid-gap:.2rem;padding:.2rem;border:1px solid #aaa;border-radius:2px;width:3rem;height:3rem;margin-right:.6rem;flex-shrink:0;",""],function(e){return function(e){for(var t=[],r=1;r<9;r++){var a=r+1;t.push("\n      .grid__item:nth-of-type("+a+") {\n        background-color: "+Object(d.b)(a/25,e)+"\n        // background-color: "+Object(d.a)(40*a,"#BF3F3F")+"\n      }\n    ")}return t}(e.theme.one)}),s=Object(o.b)(m).withConfig({displayName:"gridContainer__StyledGrid",componentId:"qa78q1-1"})([".grid__item:nth-of-type(1){background-color:","}",";",";"],function(e){return Object(d.b)(1/45,e.theme.one)},function(e){return e.code},function(e){return e.styleOverride}),u=function(e){var t=e.className,r=e.code,a=e.styleOverride;return n.a.createElement(s,{className:t,code:r,styleOverride:a},function(){for(var e=[],t=0;t<9;t++)e.push(n.a.createElement(c.a,{key:t}));return e}())};u.propTypes={code:l.a.array,styleOverride:l.a.string},u.defaultProps={code:null,styleOverride:null},t.b=u},134:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(4),l=r.n(i),o=r(131).b.div.withConfig({displayName:"gridItem__Item",componentId:"ri2z3w-0"})(["border-radius:2px;min-width:.4rem;min-height:.4rem;background-color:",";",";"],function(e){return e.colour},function(e){return e.code}),c=function(e){var t=e.code,r=e.colour;return n.a.createElement(o,{className:"grid__item",code:t,colour:r})};c.propTypes={code:l.a.array,colour:l.a.string},c.defaultProps={code:null,colour:null},t.a=c}}]);
//# sourceMappingURL=component---src-pages-main-js-f16a84c951dd86d077e9.js.map