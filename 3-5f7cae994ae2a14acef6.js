(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{198:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(66),l=a.n(i);a.d(t,"a",function(){return l.a});a(202),a(9).default.enqueue;var o=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||i,staticQueryData:e})})}},199:function(e,t){e.exports={siteUrl:"https://gatsby.ghost.org",postsPerPage:12,siteTitleMeta:"Ghost Gatsby Starter",siteDescriptionMeta:"A starter template to build amazing static websites with Ghost and Gatsby",shareImageWidth:1e3,shareImageHeight:523,shortTitle:"Ghost",siteIcon:"favicon.png",backgroundColor:"#e9e9e9",themeColor:"#15171A"}},201:function(e,t,a){"use strict";a(206),a(23),a(13);var n=a(207),r=a(0),i=a.n(r),l=a(200),o=a.n(l),c=a(198),s=a(213),m=a.n(s),g=a(199),d=a.n(g),u=(a(214),function(e){var t=e.data,a=e.children,n=e.bodyClass,r=e.isHome,l=t.allGhostSettings.edges[0].node,s=l.twitter?"https://twitter.com/"+l.twitter.replace(/^@/,""):null,g=l.facebook?"https://www.facebook.com/"+l.facebook.replace(/^\//,""):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null,i.a.createElement("html",{lang:l.lang}),i.a.createElement("style",{type:"text/css"},""+l.codeinjection_styles),i.a.createElement("body",{className:n})),i.a.createElement("div",{className:"viewport"},i.a.createElement("div",{className:"viewport-top"},i.a.createElement("header",{className:"site-head",style:Object.assign({},l.cover_image&&{backgroundImage:"url("+l.cover_image+")"})},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-mast"},i.a.createElement("div",{className:"site-mast-left"},i.a.createElement(c.a,{to:"/"},l.logo?i.a.createElement("img",{className:"site-logo",src:l.logo,alt:l.title}):i.a.createElement(m.a,{fixed:t.file.childImageSharp.fixed,alt:l.title}))),i.a.createElement("div",{className:"site-mast-right"},l.twitter&&i.a.createElement("a",{href:s,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/twitter.svg",alt:"Twitter"})),l.facebook&&i.a.createElement("a",{href:g,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/facebook.svg",alt:"Facebook"})),i.a.createElement("a",{className:"site-nav-item",href:"https://feedly.com/i/subscription/feed/"+d.a.siteUrl+"/rss/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/rss.svg",alt:"RSS Feed"})))),r?i.a.createElement("div",{className:"site-banner"},i.a.createElement("h1",{className:"site-banner-title"},l.title),i.a.createElement("p",{className:"site-banner-desc"},l.description)):null,i.a.createElement("nav",{className:"site-nav"},i.a.createElement("div",{className:"site-nav-left"},i.a.createElement(y,{data:l.navigation,navClass:"site-nav-item"})),i.a.createElement("div",{className:"site-nav-right"},i.a.createElement(c.a,{className:"site-nav-button",to:"/about"},"About"))))),i.a.createElement("main",{className:"site-main"},a)),i.a.createElement("div",{className:"viewport-bottom"},i.a.createElement("footer",{className:"site-foot"},i.a.createElement("div",{className:"site-foot-nav container"},i.a.createElement("div",{className:"site-foot-nav-left"},i.a.createElement(c.a,{to:"/"},l.title)," © 2019 — Published with ",i.a.createElement("a",{className:"site-foot-nav-item",href:"https://ghost.org",target:"_blank",rel:"noopener noreferrer"},"Ghost")),i.a.createElement("div",{className:"site-foot-nav-right"},i.a.createElement(y,{data:l.navigation,navClass:"site-foot-nav-item"})))))))}),p=function(e){return i.a.createElement(c.b,{query:"2417764204",render:function(t){return i.a.createElement(u,Object.assign({data:t},e))},data:n})},h=(a(37),a(215)),f=a(203),E=function(e){var t=e.post,a="/"+t.slug+"/",n=Object(f.readingTime)(t);return i.a.createElement(c.a,{to:a,className:"post-card"},i.a.createElement("header",{className:"post-card-header"},t.feature_image&&i.a.createElement("div",{className:"post-card-image",style:{backgroundImage:"url("+t.feature_image+")"}}),t.tags&&i.a.createElement("div",{className:"post-card-tags"}," ",i.a.createElement(h.Tags,{post:t,visibility:"public",autolink:!1})),t.featured&&i.a.createElement("span",null,"Featured"),i.a.createElement("h2",{className:"post-card-title"},t.title)),i.a.createElement("section",{className:"post-card-excerpt"},t.excerpt),i.a.createElement("footer",{className:"post-card-footer"},i.a.createElement("div",{className:"post-card-footer-left"},i.a.createElement("div",{className:"post-card-avatar"},t.primary_author.profile_image?i.a.createElement("img",{className:"author-profile-image",src:t.primary_author.profile_image,alt:t.primary_author.name}):i.a.createElement("img",{className:"default-avatar",src:"/images/icons/avatar.svg",alt:t.primary_author.name})),i.a.createElement("span",null,t.primary_author.name)),i.a.createElement("div",{className:"post-card-footer-right"},i.a.createElement("div",null,n))))},v=function(e){var t=e.pageContext,a=t.previousPagePath,n=t.nextPagePath,r=t.humanPageNumber,l=t.numberOfPages;return i.a.createElement("nav",{className:"pagination",role:"navigation"},i.a.createElement("div",null,a&&i.a.createElement(c.a,{to:a,rel:"prev"},"Previous")),l>1&&i.a.createElement("div",{className:"pagination-location"},"Page ",r," of ",l),i.a.createElement("div",null,n&&i.a.createElement(c.a,{to:n,rel:"next"},"Next")))},b=(a(132),function(e){var t=e.data,a=e.navClass;return i.a.createElement(i.a.Fragment,null,t.map(function(e,t){return e.url.match(/^\s?http(s?)/gi)?i.a.createElement("a",{className:a,href:e.url,key:t,target:"_blank",rel:"noopener noreferrer"},e.label):i.a.createElement(c.a,{className:a,to:e.url,key:t},e.label)}))});b.defaultProps={navClass:"site-nav-item"};var y=b;a.d(t,"a",function(){return p}),a.d(t,"d",function(){return E}),a.d(t,"c",function(){return v}),a.d(t,"b",function(){return y})},202:function(e,t,a){var n;e.exports=(n=a(209))&&n.default||n},205:function(e,t,a){"use strict";a(23);var n=a(228),r=a(0),i=a.n(r),l=a(198),o=a(210),c=a.n(o),s=a(199),m=a.n(s),g=(a(13),a(37),a(234)),d=a(200),u=a.n(d),p=a(204),h=a.n(p),f=a(52),E=a.n(f),v=function(e){var t=[];return t.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+e.twitter.replace(/^@/,"")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook.replace(/^\//,"")+"/":null),t=h.a.compact(t),{name:e.name||null,sameAsArray:t.length?'["'+h.a.join(t,'", "')+'"]':null,image:e.profile_image||null,facebookUrl:e.facebook?"https://www.facebook.com/"+e.facebook.replace(/^\//,"")+"/":null}};v.defaultProps={fetchAuthorData:!1},v.PropTypes={primaryAuthor:E.a.shape({name:E.a.string.isRequired,profile_image:E.a.string,website:E.a.string,twitter:E.a.string,facebook:E.a.string}).isRequired};var b=v,y=function(e){var t=e.image;return t?i.a.createElement(u.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:t}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"og:image:width",content:m.a.shareImageWidth}),i.a.createElement("meta",{property:"og:image:height",content:m.a.shareImageHeight})):null},w=a(203),_=function(e){var t=e.data,a=e.settings,n=e.canonical,r=t;a=a.allGhostSettings.edges[0].node;var l=b(r.primary_author),o=h.a.map(Object(w.tags)(r,{visibility:"public",fn:function(e){return e}}),"name"),s=o[0]||"",g=r.feature_image?r.feature_image:h.a.get(a,"cover_image",null),d=a.logo||m.a.siteIcon?c.a.resolve(m.a.siteUrl,a.logo||m.a.siteIcon):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,r.meta_title||r.title),i.a.createElement("meta",{name:"description",content:r.meta_description||r.excerpt}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:r.og_title||r.meta_title||r.title}),i.a.createElement("meta",{property:"og:description",content:r.og_description||r.excerpt||r.meta_description}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{property:"article:published_time",content:r.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:r.updated_at}),o.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}),l.facebookUrl&&i.a.createElement("meta",{property:"article:author",content:l.facebookUrl}),i.a.createElement("meta",{name:"twitter:title",content:r.twitter_title||r.meta_title||r.title}),i.a.createElement("meta",{name:"twitter:description",content:r.twitter_description||r.excerpt||r.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:n}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:l.name}),s&&i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),s&&i.a.createElement("meta",{name:"twitter:data2",content:s}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+l.name+'",\n                            '+(l.image?l.sameAsArray?'"image": "'+l.image+'",':'"image": "'+l.image+'"':"")+"\n                            "+(l.sameAsArray?'"sameAs": '+l.sameAsArray:"")+"\n                        },\n                        "+(o.length?'"keywords": "'+h.a.join(o,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+n+'",\n                        "datePublished": "'+r.published_at+'",\n                        "dateModified": "'+r.updated_at+'",\n                        '+(g?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+g+'",\n                                "width": "'+m.a.shareImageWidth+'",\n                                "height": "'+m.a.shareImageHeight+'"\n                            },':"")+'\n                        "publisher": {\n                            "@type": "Organization",\n                            "name": "'+a.title+'",\n                            "logo": {\n                                "@type": "ImageObject",\n                                "url": "'+d+'",\n                                "width": 60,\n                                "height": 60\n                            }\n                        },\n                        "description": "'+(r.meta_description||r.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.a.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(y,{image:g}))},A=function(e){return i.a.createElement(l.b,{query:"1004981455",render:function(t){return i.a.createElement(_,Object.assign({settings:t},e))},data:g})},N=a(249),k=function(e){var t=e.data,a=e.settings,n=e.canonical,r=e.title,l=e.description,o=e.image,s=e.type;a=a.allGhostSettings.edges[0].node;var g=c.a.resolve(m.a.siteUrl,a.logo||m.a.siteIcon),d=o||t.feature_image||h.a.get(a,"cover_image",null);return d=d?c.a.resolve(m.a.siteUrl,d):null,l=l||t.meta_description||t.description||m.a.siteDescriptionMeta||a.description,r=(r||t.meta_title||t.name||t.title)+" - "+a.title,i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,r),i.a.createElement("meta",{name:"description",content:l}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:r}),i.a.createElement("meta",{property:"og:description",content:l}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{name:"twitter:title",content:r}),i.a.createElement("meta",{name:"twitter:description",content:l}),i.a.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "'+s+'",\n                        "url": "'+n+'",\n                        '+(d?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+d+'",\n                                "width": "'+m.a.shareImageWidth+'",\n                                "height": "'+m.a.shareImageHeight+'"\n                            },':"")+'\n                        "publisher": {\n                            "@type": "Organization",\n                            "name": "'+a.title+'",\n                            "logo": {\n                                "@type": "ImageObject",\n                                "url": "'+g+'",\n                                "width": 60,\n                                "height": 60\n                            }\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.a.siteUrl+'"\n                        },\n                        "description": "'+l+'"\n                    }\n                ')),i.a.createElement(y,{image:d}))},j=function(e){return i.a.createElement(l.b,{query:"3093436507",render:function(t){return i.a.createElement(k,Object.assign({settings:t},e))},data:N})},S=a(250),P=function(e){var t=e.data,a=e.settings,n=e.canonical;a=a.allGhostSettings.edges[0].node;var r=b(t),l=r.image||h.a.get(a,"cover_image",null),o=t.name+" - "+a.title,c=t.bio||m.a.siteDescriptionMeta||a.description;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,o),i.a.createElement("meta",{name:"description",content:c}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"profile"}),i.a.createElement("meta",{property:"og:title",content:o}),i.a.createElement("meta",{property:"og:description",content:c}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{name:"twitter:title",content:o}),i.a.createElement("meta",{name:"twitter:description",content:c}),i.a.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Person",\n                        "name": "'+t.name+'",\n                        '+(r.sameAsArray?'"sameAs": '+r.sameAsArray+",":"")+'\n                        "url": "'+n+'",\n                        '+(l?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+l+'",\n                                "width": "'+m.a.shareImageWidth+'",\n                                "height": "'+m.a.shareImageHeight+'"\n                            },':"")+'\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.a.siteUrl+'"\n                        },\n                        "description": "'+c+'"\n                    }\n                ')),i.a.createElement(y,{image:l}))},I=function(e){return i.a.createElement(l.b,{query:"4112685740",render:function(t){return i.a.createElement(P,Object.assign({settings:t},e))},data:S})},x=function(e){var t=e.data,a=e.settings,n=e.title,r=e.description,l=e.image,o=e.location,s=c.a.resolve(m.a.siteUrl,o.pathname),g=t.ghostPost,d=t.ghostTag,u=t.ghostAuthor,p=t.ghostPage;return a=a.allGhostSettings.edges[0].node,g?i.a.createElement(A,{data:g,canonical:s}):d?i.a.createElement(j,{data:d,canonical:s,type:"Series"}):u?i.a.createElement(I,{data:u,canonical:s}):p?i.a.createElement(j,{data:p,canonical:s,type:"WebSite"}):(n=n||m.a.siteTitleMeta||a.title,r=r||m.a.siteDescriptionMeta||a.description,l=(l=l||a.cover_image||null)?c.a.resolve(m.a.siteUrl,l):null,i.a.createElement(j,{data:{},canonical:s,title:n,description:r,image:l,type:"WebSite"}))};x.defaultProps={data:{}};var G=function(e){return i.a.createElement(l.b,{query:"2233248733",render:function(t){return i.a.createElement(x,Object.assign({settings:t},e))},data:n})};a.d(t,"a",function(){return G})},207:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"ChrisParton.net",description:"The elation and frustration of building software and electronics.",logo:null,icon:null,cover_image:"http://localhost:2368/content/images/2019/08/chrisparton_net_bg.svg",facebook:null,twitter:"@chrislights_",lang:"en",timezone:"Australia/Sydney",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"}]}}]},file:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoElEQVQ4y61V6UpCQRj1dYLUSqP06r2WV8slC1fELW2RDHqPFqJFRYmw5RGCsCQtBSl6pLTTzHiviEV61R+HmWFmzpz5vjPfqPSC2Cb4nhBaKr1gpR1MBta2SmLGWMp4SRQv/iIcVZ28929CHW9l7bzF1oU8J/flNQMJ5YVz5mWoF81daDkLm1MbeDbXR/q/QrrBIDrgiyXhj6cQTGxj1Rti6nzRJDi7q0s6kJBu0hgFrIWiKL+84qn6hnrzA0fnOQgODx4rVQQSW0x1TyiGiyFndzI1phU3G0/pDTAS5ZRo6BhSzJB4iR4fDs+yOL7IE3VZnFzmcZorEhTI9YNsjSJC+0YA2asS8te3KJTuGHJkXLy5h9MfhpaERbFtaGLolekBGoMAzuZkV1ZkGxofero7GMFDuYLG+yeSmQOWiFqjiedaHd7oJrPP0EmhljASNeFUGvH0PiyudZhJYmK7GUR29kiSFNim19jTxBrTCybMmpY6Y9KnUGzs/qfX++wUP71JF4eRoOOlcHUKrDi5AsvqIS+2pG9gHLRIkSWt9esHk33LmVXII3sAAAAASUVORK5CYII=",width:30,height:30,src:"/static/1f5512e171759c8fa66fde174ad5e09e/5d6f9/ghost-icon.png",srcSet:"/static/1f5512e171759c8fa66fde174ad5e09e/5d6f9/ghost-icon.png 1x,\n/static/1f5512e171759c8fa66fde174ad5e09e/bbdf9/ghost-icon.png 1.5x,\n/static/1f5512e171759c8fa66fde174ad5e09e/43244/ghost-icon.png 2x"}}}}}},209:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(102);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},228:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"ChrisParton.net",description:"The elation and frustration of building software and electronics."}}]}}}},234:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"ChrisParton.net",description:"The elation and frustration of building software and electronics.",logo:null,icon:null,cover_image:"http://localhost:2368/content/images/2019/08/chrisparton_net_bg.svg",facebook:null,twitter:"@chrislights_",lang:"en",timezone:"Australia/Sydney",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"}]}}]}}}},249:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"ChrisParton.net",description:"The elation and frustration of building software and electronics.",logo:null,icon:null,cover_image:"http://localhost:2368/content/images/2019/08/chrisparton_net_bg.svg",facebook:null,twitter:"@chrislights_",lang:"en",timezone:"Australia/Sydney",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"}]}}]}}}},250:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"ChrisParton.net",description:"The elation and frustration of building software and electronics.",logo:null,icon:null,cover_image:"http://localhost:2368/content/images/2019/08/chrisparton_net_bg.svg",facebook:null,twitter:"@chrislights_",lang:"en",timezone:"Australia/Sydney",codeinjection_head:null,codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"}]}}]}}}}}]);
//# sourceMappingURL=3-5f7cae994ae2a14acef6.js.map