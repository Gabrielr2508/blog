(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n("q1tI")),o=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],c=!1;function m(e,t){var n=t.onNewComment,r=t.language,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var i in a)e.page[i]=a[i];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var f=function(e){function t(){return l(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return u.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return i.default.createElement("div",t,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!c){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),c=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){m(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){m(this,t)},this.addDisqusScript())}}]),t}(i.default.Component);f.displayName="DisqusThread",f.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},f.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=f},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return B}));var r=n("q1tI"),a=n.n(r),i=n("Zttt"),o=n("vrFN"),s=n("MUpH"),l=n("vOnD"),d=n("kOA+"),u=n.n(d),c=n("ibEc");function m(){var e=Object(s.a)(["\n    padding: 2rem 1rem;\n    line-height: 1.3;\n    font-size: .9rem;\n  "]);return m=function(){return e},e}var f=l.c.section.withConfig({displayName:"styled__RecommendedWrapper",componentId:"n81uje-0"})(["border-bottom:1px solid var(--borders);border-top:1px solid var(--borders);background:var(--mediumBackground);display:flex;",""],c.a.lessThan("large")(m())),p=Object(l.c)(u.a).withConfig({displayName:"styled__RecommendedLink",componentId:"n81uje-1"})(['align-items:center;background:var(--mediumBackground);color:var(--highlight);display:flex;padding:3rem;text-decoration:none;transition:background 0.5s;width:50%;&:hover{background:var(--borders);}&.previous{border-right:1px solid var(--borders);}&.next{border-left:1px solid var(--borders);justify-content:flex-end;}&.previous:before{content:"\\2190";margin-right:0.5rem;}&.next:after{content:"\\2192";margin-left:0.5rem;}']),g=n("GMSA"),h=function(e){var t=e.next,n=e.previous;return a.a.createElement(f,{style:{justifyContent:t?n?"center":"flex-end":"flex-start"}},n&&a.a.createElement(p,{to:n.fields.slug,className:"previous",cover:!0,direction:"left",bg:Object(g.a)(),duration:.6},n.frontmatter.title),t&&a.a.createElement(p,{to:t.fields.slug,className:"next",cover:!0,direction:"right",bg:Object(g.a)(),duration:.6},t.frontmatter.title))},b=n("RPjP"),v=n.n(b);function y(){var e=Object(s.a)(["\n    font-size: 1.375rem;\n  "]);return y=function(){return e},e}function w(){var e=Object(s.a)(["\n    padding: 3rem 1.4rem 0;\n    max-width: 100%;\n  "]);return w=function(){return e},e}var j=l.c.section.withConfig({displayName:"styled__CommentsWrapper",componentId:"sc-18i4vss-0"})(["margin:auto;max-width:70rem;padding:3rem 6.4rem 3rem;",' iframe[src*="ads-iframe"]{display:none;}#disqus_thread{a{color:var(--highlight) !important;}}'],c.a.lessThan("large")(w())),_=l.c.h2.withConfig({displayName:"styled__CommentsTitle",componentId:"sc-18i4vss-1"})(["color:var(--postColor);font-size:2.1rem;font-weight:700;padding-bottom:2rem;",""],c.a.lessThan("large")(y())),x=function(e){var t=e.url,n=e.title,r="https://gabrielr2508.github.io"+t;return a.a.createElement(j,null,a.a.createElement(_,null,"Comentários"),a.a.createElement(v.a,{shortname:"gabrielr2508",identifier:r,title:n,url:r}))};function O(){var e=Object(s.a)(["\n      padding: 0;\n    "]);return O=function(){return e},e}function C(){var e=Object(s.a)(["\n      font-size: 1.125rem;\n    "]);return C=function(){return e},e}function k(){var e=Object(s.a)(["\n      font-size: 1.375rem;\n    "]);return k=function(){return e},e}function E(){var e=Object(s.a)(["\n      font-size: 1.875rem;\n    "]);return E=function(){return e},e}function T(){var e=Object(s.a)(["\n      padding: 0 1rem;\n    "]);return T=function(){return e},e}function z(){var e=Object(s.a)(["\n      padding: 0 1rem;\n      word-break: break-word;\n    "]);return z=function(){return e},e}function N(){var e=Object(s.a)(["\n    padding: 2rem 0;\n    max-width: 100%;\n  "]);return N=function(){return e},e}function P(){var e=Object(s.a)(["\n    padding: 0 1rem;\n  "]);return P=function(){return e},e}function q(){var e=Object(s.a)(["\n    font-size: 1.6rem;\n    line-height: 1.3;\n    padding: 0 1rem;\n  "]);return q=function(){return e},e}function I(){var e=Object(s.a)(["\n    font-size: 2.8rem;\n    line-height: 1.1;\n    padding: 0 1rem;\n  "]);return I=function(){return e},e}function D(){var e=Object(s.a)(["\n    padding: 3rem 0 0;\n    max-width: 100%;\n  "]);return D=function(){return e},e}var S=l.c.header.withConfig({displayName:"styled__PostHeader",componentId:"sc-1cishmr-0"})(["color:var(--postColor);margin:auto;max-width:70rem;padding:5rem 5rem 0;",""],c.a.lessThan("large")(D())),R=l.c.h1.withConfig({displayName:"styled__PostTitle",componentId:"sc-1cishmr-1"})(["font-size:4rem;font-weight:700;padding:0 1.4rem;margin:1rem auto;",""],c.a.lessThan("large")(I())),M=l.c.h2.withConfig({displayName:"styled__PostDescription",componentId:"sc-1cishmr-2"})(["font-size:2rem;font-weight:200;padding:0 1.4rem;",""],c.a.lessThan("large")(q())),L=l.c.p.withConfig({displayName:"styled__PostDate",componentId:"sc-1cishmr-3"})(["font-size:1.1rem;font-weight:100;padding:0 1.4rem;",""],c.a.lessThan("large")(P())),U=l.c.section.withConfig({displayName:"styled__MainContent",componentId:"sc-1cishmr-4"})(["margin:auto;max-width:70rem;padding:2rem 5rem;"," p,h1,h2,h3,h4,ul,ol,.tags,iframe,.button-post{color:var(--postColor);font-size:1.25rem;font-weight:300;line-height:1.7;letter-spacing:0.069rem;padding:0 1.4rem;","}p{margin:0 auto 1.6rem;}h1,h2,h3,h4,h5{margin:2.4rem auto 1rem;}ul,ol{list-style:disc;padding-left:2.5rem;margin:0 auto 1.6rem;}li{padding:0.625rem 0;& > ul{margin-bottom:0;}}p,li{code{word-wrap:break-word;}}img{display:block;max-width:100%;margin:1.875rem auto;}iframe{padding:0 1.6rem 1.6rem;width:100%;","}blockquote{color:var(--postColor);border-left:0.3rem solid var(--highlight);padding:0 1.875rem;margin:3.125rem auto;}hr{border:1px solid var(--borders);margin:3rem auto;}#twitter-widget-0,.instagram-media,.twitter-tweet{margin:20px auto !important;}h1,h2,h3,h4,h5{font-weight:800;letter-spacing:0.069rem;line-height:1.4;}h1{font-size:2.8rem;","}h2{font-size:2.1rem;","}h3{font-size:1.6rem;","}h4{font-size:1.4rem;}h5{font-size:1.2rem;}strong{font-weight:700;}.gatsby-resp-image-background-image{z-index:2;opacity:1 !important;}.gatsby-resp-image-image{box-shadow:none !important;transition:opacity 0.2s;&.lazyload{opacity:0;}&.lazyloaded{opacity:1;z-index:3;}}.gatsby-highlight{padding:0 1.6rem 1.6rem;","}.instagram-media{margin:1rem auto !important;}a{border-bottom:1px dashed var(--highlight);color:var(--highlight);text-decoration:none;transition:opacity 0.5s;svg{color:var(--postColor);}&:hover{opacity:0.8;}}"],c.a.lessThan("large")(N()),c.a.lessThan("large")(z()),c.a.lessThan("large")(T()),c.a.lessThan("large")(E()),c.a.lessThan("large")(k()),c.a.lessThan("large")(C()),c.a.lessThan("large")(O())),B="2783677043";t.default=function(e){var t=e.data,n=e.pageContext,r=t.markdownRemark,s=n.nextPost,l=n.previousPost;return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:r.frontmatter.title,description:r.frontmatter.description,image:r.frontmatter.image.childImageSharp.fluid.src}),a.a.createElement(S,null,a.a.createElement(L,null,r.frontmatter.date," • ",r.timeToRead," min de leitura"),a.a.createElement(R,null,r.frontmatter.title),a.a.createElement(M,null,r.frontmatter.description)),a.a.createElement(U,null,a.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}})),a.a.createElement(h,{next:s,previous:l}),a.a.createElement(x,{url:r.fields.slug,title:r.frontmatter.title}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d966a5c63b91429be417.js.map