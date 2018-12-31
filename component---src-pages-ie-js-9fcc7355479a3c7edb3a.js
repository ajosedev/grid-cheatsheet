(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{127:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(131),m=n(135),c=n(132),d=r.b.table.withConfig({displayName:"IE__Table",componentId:"sc-1b4dsk0-0"})(["\n  margin-top: 1rem;\n\n  th {\n    padding-bottom: 0.5rem;\n    font-weight: bold;\n  }\n  tr:nth-of-type(even) {\n    background-color: ",";\n  }\n  td {\n    padding: 0.25rem 0.5rem;\n  }\n"],function(e){return Object(m.b)(.6,e.theme.four)});t.default=function(){return a.a.createElement("main",null,a.a.createElement(c.a,null,"IE10/IE11"),a.a.createElement("p",null,"The specs have more changes than are listed here, e.g. changes to values and syntax."),a.a.createElement("p",null,"IE10/IE11 requires explicit placement of all items, there is no auto placement (and also no ",a.a.createElement("code",null,"auto"),"-related declarations)"),a.a.createElement(d,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"CSS Grid Level 1"),a.a.createElement("th",null,"IE10/IE11"),a.a.createElement("th",null,"Notes"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"grid-template-columns"),a.a.createElement("td",null,"-ms-grid-columns"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-template-rows"),a.a.createElement("td",null,"-ms-grid-rows"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-template-areas"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-row"),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"See ",a.a.createElement("code",null,"-ms-grid-row")," and ",a.a.createElement("code",null,"-ms-grid-row-span"))),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-column"),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"See ",a.a.createElement("code",null,"-ms-grid-column")," and ",a.a.createElement("code",null,"-ms-grid-column-span"))),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-row-start"),a.a.createElement("td",null,"-ms-grid-row"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-column-start"),a.a.createElement("td",null,"-ms-grid-column"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-row-end"),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"Defined by the -ms-grid-row-span property")),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-column-end"),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"Defined by the -ms-grid-column-span property")),a.a.createElement("tr",null,a.a.createElement("td",null,"-"),a.a.createElement("td",null,"-ms-grid-column-span"),a.a.createElement("td",null,"Used as cannot span with ",a.a.createElement("code",null,"grid-column")," or ",a.a.createElement("code",null))),a.a.createElement("tr",null,a.a.createElement("td",null,"-"),a.a.createElement("td",null,"-ms-grid-row-span"),a.a.createElement("td",null,"Used as cannot span with ",a.a.createElement("code",null,"grid-column")," or ",a.a.createElement("code",null))),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-area"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-gap"),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"No gap properties exist",a.a.createElement("br",null),"Can be emulated by using a different grid track and placing items around the gaps")),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-auto-columns"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-auto-rows"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"grid-auto-flow"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"align-self"),a.a.createElement("td",null,"-ms-grid-column-align"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"justify-self"),a.a.createElement("td",null,"-ms-grid-row-align"),a.a.createElement("td",null)))))}},132:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var l=n(0),a=n.n(l),r=n(4),m=n.n(r),c=n(131),d=c.b.section.withConfig({displayName:"section__StyledSection",componentId:"kerei0-0"})(["\n  margin: 2rem 0;\n"]),u=c.b.div.withConfig({displayName:"section__SectionGrid",componentId:"kerei0-1"})(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 2.2rem 1.2rem;\n\n  @media (max-width: 25rem) {\n    grid-template-columns: 1fr;\n  }\n"]),i=c.b.h2.withConfig({displayName:"section__Header",componentId:"kerei0-2"})(["\n  font-weight: bold;\n  margin-bottom: 1rem;\n  font-size: 2rem;\n  text-transform: uppercase;\n  display: inline-block;\n  color: ",";\n\n  &:hover {\n    a { opacity: 1; }\n  }\n  a {\n    color: ",";\n    font-size: 1.4rem;\n    margin-left: 10px;\n    vertical-align: top;\n    cursor: pointer;\n    text-decoration: none;\n    opacity: 0;\n    transition: opacity 250ms;\n  }\n"],function(e){return e.theme.four},function(e){return e.theme.five}),o=function(e){var t=e.children,n=e.header,l=e.id;return a.a.createElement(d,null,n&&a.a.createElement(i,null,n,a.a.createElement("a",{id:l,href:"#"+l},"#")),a.a.createElement(u,null,t))};o.propTypes={children:m.a.node.isRequired,header:m.a.string,id:m.a.string},o.defaultProps={header:"",id:""},t.b=o}}]);
//# sourceMappingURL=component---src-pages-ie-js-9fcc7355479a3c7edb3a.js.map