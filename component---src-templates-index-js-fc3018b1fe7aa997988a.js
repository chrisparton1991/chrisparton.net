(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{196:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return o});var n=a(0),r=a.n(n),i=a(207),l=a(212);t.default=function(e){var t=e.data,a=e.location,n=e.pageContext,o=t.allGhostPost.edges;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{location:a}),r.a.createElement(i.a,{isHome:!0,bodyClass:"cp-index-page"},r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"post-feed"},o.map(function(e){var t=e.node;return r.a.createElement(i.d,{key:t.id,post:t})})),r.a.createElement(i.c,{pageContext:n}))))};var o="643024065"},198:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(66),l=a.n(i);a.d(t,"a",function(){return l.a});a(202),a(9).default.enqueue;var o=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||i,staticQueryData:e})})}},199:function(e,t){e.exports={siteUrl:"https://chrisparton.net",postsPerPage:12,siteTitleMeta:"ChrisParton.net",siteDescriptionMeta:"The elation and frustration of building software and electronics",shareImageWidth:1e3,shareImageHeight:523,shortTitle:"ChrisParton",siteIcon:"favicon.png",backgroundColor:"#e9e9e9",themeColor:"#15171a"}},202:function(e,t,a){var n;e.exports=(n=a(206))&&n.default||n},205:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"ChrisParton.net",description:"The elation and frustration of building software and electronics.",logo:null,icon:null,cover_image:"http://localhost:2368/content/images/2019/08/chrisparton_net_bg.svg",facebook:null,twitter:"@chrislights_",lang:"en",timezone:"Australia/Sydney",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"}]}}]},allGhostPost:{edges:[{node:{primary_author:{profile_image:"//www.gravatar.com/avatar/6b7434bbe636033b9d4be00df745f7f1?s=250&d=mm&r=x"}}}]}}}},206:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(93);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},207:function(e,t,a){"use strict";a(23),a(13);var n=a(205),r=a(0),i=a.n(r),l=a(200),o=a.n(l),c=a(198),s=(a(213),a(199)),m=a.n(s),u=(a(214),a(215),function(e){var t=e.data,a=e.children,n=e.bodyClass,r=e.isHome,l=t.allGhostSettings.edges[0].node,s=t.allGhostPost.edges[0].node.primary_author.profile_image,u=l.twitter?"https://twitter.com/"+l.twitter.replace(/^@/,""):null,g=l.facebook?"https://www.facebook.com/"+l.facebook.replace(/^\//,""):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null,i.a.createElement("html",{lang:l.lang}),i.a.createElement("style",{type:"text/css"},""+l.codeinjection_styles),i.a.createElement("body",{className:n})),i.a.createElement("div",{className:"viewport"},i.a.createElement("div",{className:"viewport-top"},i.a.createElement("header",{className:"site-head",style:Object.assign({},l.cover_image&&{backgroundImage:"url("+l.cover_image+")"})},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-mast"}),r?i.a.createElement("div",{className:"site-banner"},i.a.createElement("img",{className:"banner-profile-image",src:s}),i.a.createElement("h1",{className:"site-banner-title"},l.title),i.a.createElement("p",{className:"site-banner-desc"},l.description)):null,i.a.createElement("nav",{className:"site-nav"},i.a.createElement("div",{className:"site-nav-left"},i.a.createElement(v,{data:l.navigation,navClass:"site-nav-item"})),i.a.createElement("div",{className:"site-nav-right"},l.twitter&&i.a.createElement("a",{href:u,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/twitter.svg",alt:"Twitter"})),l.facebook&&i.a.createElement("a",{href:g,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/facebook.svg",alt:"Facebook"})),i.a.createElement("a",{className:"site-nav-item",href:"https://feedly.com/i/subscription/feed/"+m.a.siteUrl+"/rss/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/rss.svg",alt:"RSS Feed"})))))),i.a.createElement("main",{className:"site-main"},a)),i.a.createElement("div",{className:"viewport-bottom"},i.a.createElement("footer",{className:"site-foot"},i.a.createElement("div",{className:"site-foot-nav container"},i.a.createElement("div",{className:"site-foot-nav-left"},i.a.createElement(c.a,{to:"/"},l.title)," © 2019"),i.a.createElement("div",{className:"site-foot-nav-right"},i.a.createElement(v,{data:l.navigation,navClass:"site-foot-nav-item"})))))))}),g=function(e){return i.a.createElement(c.b,{query:"1281977687",render:function(t){return i.a.createElement(u,Object.assign({data:t},e))},data:n})},d=(a(37),a(216)),p=a(204),h=function(e){var t=e.post,a="/"+t.slug+"/",n=Object(p.readingTime)(t);return i.a.createElement(c.a,{to:a,className:"post-card"},i.a.createElement("header",{className:"post-card-header"},t.feature_image&&i.a.createElement("div",{className:"post-card-image",style:{backgroundImage:"url("+t.feature_image+")"}}),t.tags&&i.a.createElement("div",{className:"post-card-tags"}," ",i.a.createElement(d.Tags,{post:t,visibility:"public",autolink:!1})),t.featured&&i.a.createElement("span",null,"Featured"),i.a.createElement("h2",{className:"post-card-title"},t.title)),i.a.createElement("section",{className:"post-card-excerpt"},t.excerpt),i.a.createElement("footer",{className:"post-card-footer"},i.a.createElement("div",{className:"post-card-footer-left"},i.a.createElement("div",{className:"post-card-avatar"},t.primary_author.profile_image?i.a.createElement("img",{className:"author-profile-image",src:t.primary_author.profile_image,alt:t.primary_author.name}):i.a.createElement("img",{className:"default-avatar",src:"/images/icons/avatar.svg",alt:t.primary_author.name})),i.a.createElement("span",null,t.primary_author.name)),i.a.createElement("div",{className:"post-card-footer-right"},i.a.createElement("div",null,n))))},f=function(e){var t=e.pageContext,a=t.previousPagePath,n=t.nextPagePath,r=t.humanPageNumber,l=t.numberOfPages;return i.a.createElement("nav",{className:"pagination",role:"navigation"},i.a.createElement("div",null,a&&i.a.createElement(c.a,{to:a,rel:"prev"},"Previous")),l>1&&i.a.createElement("div",{className:"pagination-location"},"Page ",r," of ",l),i.a.createElement("div",null,n&&i.a.createElement(c.a,{to:n,rel:"next"},"Next")))},E=(a(132),function(e){var t=e.data,a=e.navClass;return i.a.createElement(i.a.Fragment,null,t.map(function(e,t){return e.url.match(/^\s?http(s?)/gi)?i.a.createElement("a",{className:a,href:e.url,key:t,target:"_blank",rel:"noopener noreferrer"},e.label):i.a.createElement(c.a,{className:a,to:e.url,key:t},e.label)}))});E.defaultProps={navClass:"site-nav-item"};var v=E;a.d(t,"a",function(){return g}),a.d(t,"d",function(){return h}),a.d(t,"c",function(){return f}),a.d(t,"b",function(){return v})},208:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"ChrisParton.net",description:"The elation and frustration of building software and electronics."}}]}}}},209:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"ChrisParton.net",description:"The elation and frustration of building software and electronics.",logo:null,icon:null,cover_image:"http://localhost:2368/content/images/2019/08/chrisparton_net_bg.svg",facebook:null,twitter:"@chrislights_",lang:"en",timezone:"Australia/Sydney",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"}]}}]}}}},210:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"ChrisParton.net",description:"The elation and frustration of building software and electronics.",logo:null,icon:null,cover_image:"http://localhost:2368/content/images/2019/08/chrisparton_net_bg.svg",facebook:null,twitter:"@chrislights_",lang:"en",timezone:"Australia/Sydney",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"}]}}]}}}},211:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"ChrisParton.net",description:"The elation and frustration of building software and electronics.",logo:null,icon:null,cover_image:"http://localhost:2368/content/images/2019/08/chrisparton_net_bg.svg",facebook:null,twitter:"@chrislights_",lang:"en",timezone:"Australia/Sydney",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"}]}}]}}}},212:function(e,t,a){"use strict";a(23);var n=a(208),r=a(0),i=a.n(r),l=a(198),o=a(203),c=a.n(o),s=a(199),m=a.n(s),u=(a(13),a(37),a(209)),g=a(200),d=a.n(g),p=a(201),h=a.n(p),f=a(50),E=a.n(f),v=function(e){var t=[];return t.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+e.twitter.replace(/^@/,"")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook.replace(/^\//,"")+"/":null),t=h.a.compact(t),{name:e.name||null,sameAsArray:t.length?'["'+h.a.join(t,'", "')+'"]':null,image:e.profile_image||null,facebookUrl:e.facebook?"https://www.facebook.com/"+e.facebook.replace(/^\//,"")+"/":null}};v.defaultProps={fetchAuthorData:!1},v.PropTypes={primaryAuthor:E.a.shape({name:E.a.string.isRequired,profile_image:E.a.string,website:E.a.string,twitter:E.a.string,facebook:E.a.string}).isRequired};var y=v,b=function(e){var t=e.image;return t?i.a.createElement(d.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:t}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"og:image:width",content:m.a.shareImageWidth}),i.a.createElement("meta",{property:"og:image:height",content:m.a.shareImageHeight})):null},w=a(204),_=function(e){var t=e.data,a=e.settings,n=e.canonical,r=t;a=a.allGhostSettings.edges[0].node;var l=y(r.primary_author),o=h.a.map(Object(w.tags)(r,{visibility:"public",fn:function(e){return e}}),"name"),s=o[0]||"",u=r.feature_image?r.feature_image:h.a.get(a,"cover_image",null),g=a.logo||m.a.siteIcon?c.a.resolve(m.a.siteUrl,a.logo||m.a.siteIcon):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null,i.a.createElement("title",null,r.meta_title||r.title),i.a.createElement("meta",{name:"description",content:r.meta_description||r.excerpt}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:r.og_title||r.meta_title||r.title}),i.a.createElement("meta",{property:"og:description",content:r.og_description||r.excerpt||r.meta_description}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{property:"article:published_time",content:r.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:r.updated_at}),o.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}),l.facebookUrl&&i.a.createElement("meta",{property:"article:author",content:l.facebookUrl}),i.a.createElement("meta",{name:"twitter:title",content:r.twitter_title||r.meta_title||r.title}),i.a.createElement("meta",{name:"twitter:description",content:r.twitter_description||r.excerpt||r.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:n}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:l.name}),s&&i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),s&&i.a.createElement("meta",{name:"twitter:data2",content:s}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+l.name+'",\n                            '+(l.image?l.sameAsArray?'"image": "'+l.image+'",':'"image": "'+l.image+'"':"")+"\n                            "+(l.sameAsArray?'"sameAs": '+l.sameAsArray:"")+"\n                        },\n                        "+(o.length?'"keywords": "'+h.a.join(o,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+n+'",\n                        "datePublished": "'+r.published_at+'",\n                        "dateModified": "'+r.updated_at+'",\n                        '+(u?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+u+'",\n                                "width": "'+m.a.shareImageWidth+'",\n                                "height": "'+m.a.shareImageHeight+'"\n                            },':"")+'\n                        "publisher": {\n                            "@type": "Organization",\n                            "name": "'+a.title+'",\n                            "logo": {\n                                "@type": "ImageObject",\n                                "url": "'+g+'",\n                                "width": 60,\n                                "height": 60\n                            }\n                        },\n                        "description": "'+(r.meta_description||r.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.a.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(b,{image:u}))},N=function(e){return i.a.createElement(l.b,{query:"1004981455",render:function(t){return i.a.createElement(_,Object.assign({settings:t},e))},data:u})},k=a(210),P=function(e){var t=e.data,a=e.settings,n=e.canonical,r=e.title,l=e.description,o=e.image,s=e.type;a=a.allGhostSettings.edges[0].node;var u=c.a.resolve(m.a.siteUrl,a.logo||m.a.siteIcon),g=o||t.feature_image||h.a.get(a,"cover_image",null);return g=g?c.a.resolve(m.a.siteUrl,g):null,l=l||t.meta_description||t.description||m.a.siteDescriptionMeta||a.description,r=r||t.meta_title||t.name||t.title,i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null,i.a.createElement("title",null,r),i.a.createElement("meta",{name:"description",content:l}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:r}),i.a.createElement("meta",{property:"og:description",content:l}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{name:"twitter:title",content:r}),i.a.createElement("meta",{name:"twitter:description",content:l}),i.a.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "'+s+'",\n                        "url": "'+n+'",\n                        '+(g?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+g+'",\n                                "width": "'+m.a.shareImageWidth+'",\n                                "height": "'+m.a.shareImageHeight+'"\n                            },':"")+'\n                        "publisher": {\n                            "@type": "Organization",\n                            "name": "'+a.title+'",\n                            "logo": {\n                                "@type": "ImageObject",\n                                "url": "'+u+'",\n                                "width": 60,\n                                "height": 60\n                            }\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.a.siteUrl+'"\n                        },\n                        "description": "'+l+'"\n                    }\n                ')),i.a.createElement(b,{image:g}))},j=function(e){return i.a.createElement(l.b,{query:"3093436507",render:function(t){return i.a.createElement(P,Object.assign({settings:t},e))},data:k})},x=a(211),A=function(e){var t=e.data,a=e.settings,n=e.canonical;a=a.allGhostSettings.edges[0].node;var r=y(t),l=r.image||h.a.get(a,"cover_image",null),o=t.name+" - "+a.title,c=t.bio||m.a.siteDescriptionMeta||a.description;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null,i.a.createElement("title",null,o),i.a.createElement("meta",{name:"description",content:c}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"profile"}),i.a.createElement("meta",{property:"og:title",content:o}),i.a.createElement("meta",{property:"og:description",content:c}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{name:"twitter:title",content:o}),i.a.createElement("meta",{name:"twitter:description",content:c}),i.a.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Person",\n                        "name": "'+t.name+'",\n                        '+(r.sameAsArray?'"sameAs": '+r.sameAsArray+",":"")+'\n                        "url": "'+n+'",\n                        '+(l?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+l+'",\n                                "width": "'+m.a.shareImageWidth+'",\n                                "height": "'+m.a.shareImageHeight+'"\n                            },':"")+'\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.a.siteUrl+'"\n                        },\n                        "description": "'+c+'"\n                    }\n                ')),i.a.createElement(b,{image:l}))},I=function(e){return i.a.createElement(l.b,{query:"4112685740",render:function(t){return i.a.createElement(A,Object.assign({settings:t},e))},data:x})},C=function(e){var t=e.data,a=e.settings,n=e.title,r=e.description,l=e.image,o=e.location,s=c.a.resolve(m.a.siteUrl,o.pathname),u=t.ghostPost,g=t.ghostTag,d=t.ghostAuthor,p=t.ghostPage;return a=a.allGhostSettings.edges[0].node,u?i.a.createElement(N,{data:u,canonical:s}):g?i.a.createElement(j,{data:g,canonical:s,type:"Series"}):d?i.a.createElement(I,{data:d,canonical:s}):p?i.a.createElement(j,{data:p,canonical:s,type:"WebSite"}):(n=n||m.a.siteTitleMeta||a.title,r=r||m.a.siteDescriptionMeta||a.description,l=(l=l||a.cover_image||null)?c.a.resolve(m.a.siteUrl,l):null,i.a.createElement(j,{data:{},canonical:s,title:n,description:r,image:l,type:"WebSite"}))};C.defaultProps={data:{}};var O=function(e){return i.a.createElement(l.b,{query:"2233248733",render:function(t){return i.a.createElement(C,Object.assign({settings:t},e))},data:n})};a.d(t,"a",function(){return O})}}]);
//# sourceMappingURL=component---src-templates-index-js-fc3018b1fe7aa997988a.js.map