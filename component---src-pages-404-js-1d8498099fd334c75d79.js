(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{197:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(198),l=t(207);a.default=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("article",{className:"content",style:{textAlign:"center"}},r.a.createElement("h1",{className:"content-title"},"Error 404"),r.a.createElement("section",{className:"content-body"},"Page not found, ",r.a.createElement(s.a,{to:"/"},"return home")," to start over"))))}},198:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),r=t.n(n),s=t(66),l=t.n(s);t.d(a,"a",function(){return l.a});t(202),t(9).default.enqueue;var c=r.a.createContext({});function i(e){var a=e.staticQueryData,t=e.data,n=e.query,s=e.render,l=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,l&&s(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var a=e.data,t=e.query,n=e.render,s=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(i,{data:a,query:t,render:n||s,staticQueryData:e})})}},199:function(e,a){e.exports={siteUrl:"https://chrisparton.net",postsPerPage:12,siteTitleMeta:"ChrisParton.net",siteDescriptionMeta:"The elation and frustration of building software and electronics",shareImageWidth:1e3,shareImageHeight:523,shortTitle:"ChrisParton",siteIcon:"favicon.png",backgroundColor:"#e9e9e9",themeColor:"#15171a"}},202:function(e,a,t){var n;e.exports=(n=t(206))&&n.default||n},205:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"ChrisParton.net",description:"The elation and frustration of building software and electronics.",logo:null,icon:null,cover_image:"http://localhost:2368/content/images/2019/08/chrisparton_net_bg.svg",facebook:null,twitter:"@chrislights_",lang:"en",timezone:"Australia/Sydney",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"}]}}]},allGhostPost:{edges:[{node:{primary_author:{profile_image:"//www.gravatar.com/avatar/6b7434bbe636033b9d4be00df745f7f1?s=250&d=mm&r=x"}}}]}}}},206:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),r=t.n(n),s=t(93);a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null}},207:function(e,a,t){"use strict";t(23),t(13);var n=t(205),r=t(0),s=t.n(r),l=t(200),c=t.n(l),i=t(198),o=(t(213),t(199)),m=t.n(o),u=(t(214),t(215),function(e){var a=e.data,t=e.children,n=e.bodyClass,r=e.isHome,l=a.allGhostSettings.edges[0].node,o=a.allGhostPost.edges[0].node.primary_author.profile_image,u=l.twitter?"https://twitter.com/"+l.twitter.replace(/^@/,""):null,d=l.facebook?"https://www.facebook.com/"+l.facebook.replace(/^\//,""):null;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,null,s.a.createElement("html",{lang:l.lang}),s.a.createElement("style",{type:"text/css"},""+l.codeinjection_styles),s.a.createElement("body",{className:n})),s.a.createElement("div",{className:"viewport"},s.a.createElement("div",{className:"viewport-top"},s.a.createElement("header",{className:"site-head",style:Object.assign({},l.cover_image&&{backgroundImage:"url("+l.cover_image+")"})},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"site-mast"}),r?s.a.createElement("div",{className:"site-banner"},s.a.createElement("img",{className:"banner-profile-image",src:o}),s.a.createElement("h1",{className:"site-banner-title"},l.title),s.a.createElement("p",{className:"site-banner-desc"},l.description)):null,s.a.createElement("nav",{className:"site-nav"},s.a.createElement("div",{className:"site-nav-left"},s.a.createElement(h,{data:l.navigation,navClass:"site-nav-item"})),s.a.createElement("div",{className:"site-nav-right"},l.twitter&&s.a.createElement("a",{href:u,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/twitter.svg",alt:"Twitter"})),l.facebook&&s.a.createElement("a",{href:d,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/facebook.svg",alt:"Facebook"})),s.a.createElement("a",{className:"site-nav-item",href:"https://feedly.com/i/subscription/feed/"+m.a.siteUrl+"/rss/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/rss.svg",alt:"RSS Feed"})))))),s.a.createElement("main",{className:"site-main"},t)),s.a.createElement("div",{className:"viewport-bottom"},s.a.createElement("footer",{className:"site-foot"},s.a.createElement("div",{className:"site-foot-nav container"},s.a.createElement("div",{className:"site-foot-nav-left"},s.a.createElement(i.a,{to:"/"},l.title)," © 2019"),s.a.createElement("div",{className:"site-foot-nav-right"},s.a.createElement(h,{data:l.navigation,navClass:"site-foot-nav-item"})))))))}),d=function(e){return s.a.createElement(i.b,{query:"1281977687",render:function(a){return s.a.createElement(u,Object.assign({data:a},e))},data:n})},g=(t(37),t(216)),v=t(204),f=function(e){var a=e.post,t="/"+a.slug+"/",n=Object(v.readingTime)(a);return s.a.createElement(i.a,{to:t,className:"post-card"},s.a.createElement("header",{className:"post-card-header"},a.feature_image&&s.a.createElement("div",{className:"post-card-image",style:{backgroundImage:"url("+a.feature_image+")"}}),a.tags&&s.a.createElement("div",{className:"post-card-tags"}," ",s.a.createElement(g.Tags,{post:a,visibility:"public",autolink:!1})),a.featured&&s.a.createElement("span",null,"Featured"),s.a.createElement("h2",{className:"post-card-title"},a.title)),s.a.createElement("section",{className:"post-card-excerpt"},a.excerpt),s.a.createElement("footer",{className:"post-card-footer"},s.a.createElement("div",{className:"post-card-footer-left"},s.a.createElement("div",{className:"post-card-avatar"},a.primary_author.profile_image?s.a.createElement("img",{className:"author-profile-image",src:a.primary_author.profile_image,alt:a.primary_author.name}):s.a.createElement("img",{className:"default-avatar",src:"/images/icons/avatar.svg",alt:a.primary_author.name})),s.a.createElement("span",null,a.primary_author.name)),s.a.createElement("div",{className:"post-card-footer-right"},s.a.createElement("div",null,n))))},p=function(e){var a=e.pageContext,t=a.previousPagePath,n=a.nextPagePath,r=a.humanPageNumber,l=a.numberOfPages;return s.a.createElement("nav",{className:"pagination",role:"navigation"},s.a.createElement("div",null,t&&s.a.createElement(i.a,{to:t,rel:"prev"},"Previous")),l>1&&s.a.createElement("div",{className:"pagination-location"},"Page ",r," of ",l),s.a.createElement("div",null,n&&s.a.createElement(i.a,{to:n,rel:"next"},"Next")))},E=(t(132),function(e){var a=e.data,t=e.navClass;return s.a.createElement(s.a.Fragment,null,a.map(function(e,a){return e.url.match(/^\s?http(s?)/gi)?s.a.createElement("a",{className:t,href:e.url,key:a,target:"_blank",rel:"noopener noreferrer"},e.label):s.a.createElement(i.a,{className:t,to:e.url,key:a},e.label)}))});E.defaultProps={navClass:"site-nav-item"};var h=E;t.d(a,"a",function(){return d}),t.d(a,"d",function(){return f}),t.d(a,"c",function(){return p}),t.d(a,"b",function(){return h})}}]);
//# sourceMappingURL=component---src-pages-404-js-1d8498099fd334c75d79.js.map