(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0/Pd":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("MUpH"),o=n("vOnD"),c=n("kOA+"),d=n.n(c),l=n("ibEc");function s(){var e=Object(i.a)(["\n    margin: 0;\n  "]);return s=function(){return e},e}function m(){var e=Object(i.a)(["\n    border-radius: 0;\n    font-size: 1rem;\n    min-height: auto;\n    min-width: auto;\n    padding: .2rem .5rem;\n    margin-bottom: .7rem;\n  "]);return m=function(){return e},e}function g(){var e=Object(i.a)(["\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 2rem 1rem;\n  "]);return g=function(){return e},e}var u=Object(o.c)(d.a).withConfig({displayName:"styled__PostItemLink",componentId:"sc-1w5cmwb-0"})(["color:var(--texts);display:flex;text-decoration:none;body#grid &{background-color:var(--background);}&:hover{color:var(--highlight);}"]),p=o.c.section.withConfig({displayName:"styled__PostItemWrapper",componentId:"sc-1w5cmwb-1"})(["align-items:center;border-bottom:1px solid var(--borders);display:flex;padding:2rem 3rem;width:100%;body#grid &{border:none;padding:2rem 1rem;flex-direction:column;justify-content:center;}",""],l.a.lessThan("large")(g())),f=o.c.div.withConfig({displayName:"styled__PostItemTag",componentId:"sc-1w5cmwb-2"})(["align-items:center;background:",";border-radius:50%;color:#fff;display:flex;font-size:1.3rem;font-weight:700;justify-content:center;min-height:90px;min-width:90px;text-transform:uppercase;"," body#grid &{margin-bottom:1.5rem;}"],(function(e){return e.background?e.background:"var(--highlight)"}),l.a.lessThan("large")(m())),b=o.c.div.withConfig({displayName:"styled__PostItemInfo",componentId:"sc-1w5cmwb-3"})(["display:flex;flex-direction:column;margin-left:1.5rem;",""],l.a.lessThan("large")(s())),h=o.c.time.withConfig({displayName:"styled__PostItemDate",componentId:"sc-1w5cmwb-4"})(["font-size:0.9rem;"]),w=o.c.h1.withConfig({displayName:"styled__PostItemTitle",componentId:"sc-1w5cmwb-5"})(["font-size:1.6rem;font-weight:700;margin:0.2rem 0 0.5rem;body#grid &{line-height:1.1;margin:0.8rem 0;}"]),y=o.c.p.withConfig({displayName:"styled__PostItemDescription",componentId:"sc-1w5cmwb-6"})(["font-size:1.2rem;font-weight:300;line-height:1.2;"]),v=n("GMSA");t.a=function(e){var t=e.slug,n=e.background,r=e.category,i=e.date,o=e.timeToRead,c=e.title,d=e.description;return a.a.createElement(u,{cover:!0,direction:"right",bg:Object(v.a)(),duration:.6,to:t},a.a.createElement(p,null,a.a.createElement(f,{background:n},r),a.a.createElement(b,null,a.a.createElement(h,null,i,o?" • "+o+" min de leitura":""),a.a.createElement(w,null,c),a.a.createElement(y,null,d))))}},eWDE:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return w}));var r=n("q1tI"),a=n.n(r),i=n("Zttt"),o=n("vrFN"),c=n("0/Pd"),d=n("kOA+"),l=n.n(d),s=n("MUpH"),m=n("vOnD"),g=n("ibEc");function u(){var e=Object(s.a)(["\n    font-size: .8rem;\n    padding: 1rem;\n  "]);return u=function(){return e},e}var p=m.c.section.withConfig({displayName:"styled__PaginationWrapper",componentId:"yo2rsq-0"})(["align-items:center;border-top:1px solid var(--borders);color:var(--texts);display:flex;padding:1.5rem 3rem;justify-content:space-between;"," a{color:var(--texts);text-decoration:none;transition:color 0.5s;&:hover{color:var(--highlight);}}"],g.a.lessThan("large")(u())),f=n("GMSA"),b=function(e){var t=e.isFirst,n=e.isLast,r=e.currentPage,i=e.numPages,o=e.prevPage,c=e.nextPage;return a.a.createElement(p,null,!t&&a.a.createElement(l.a,{to:o,cover:!0,direction:"left",bg:Object(f.a)(),duration:.6},"← página anterior"),a.a.createElement("p",null,r," de ",i),!n&&a.a.createElement(l.a,{to:c,cover:!0,direction:"right",bg:Object(f.a)(),duration:.6},"próxima página →"))},h=m.c.section.withConfig({displayName:"styled__ListWrapper",componentId:"jwa7he-0"})(["body#grid &{background-color:var(--borders);border-bottom:1px solid var(--borders);display:grid;grid-area:posts;grid-gap:1px;grid-template-columns:repeat(auto-fit,minmax(380px,1fr));}"]),w="536191802";t.default=function(e){var t=e.data.allMarkdownRemark.edges,n=e.pageContext,r=n.currentPage,d=n.numPages,l=1===r,s=r===d,m=r-1==1?"/":"/page/"+(r-1),g="/page/"+(r+1);return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Home"}),a.a.createElement(h,null,t.map((function(e){var t=e.node,n=t.fields.slug,r=t.frontmatter,i=r.background,o=r.category,d=r.date,l=r.description,s=r.title,m=t.timeToRead;return a.a.createElement(c.a,{key:n,slug:n,background:i,category:o,date:d,timeToRead:m,title:s,description:l})}))),a.a.createElement(b,{isFirst:l,isLast:s,currentPage:r,numPages:d,prevPage:m,nextPage:g}))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-a76b066fb9d23ed7f61a.js.map