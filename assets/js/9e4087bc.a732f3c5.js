"use strict";(self.webpackChunkhello_red=self.webpackChunkhello_red||[]).push([[2711],{4750:(e,r,t)=>{t.r(r),t.d(r,{default:()=>m});t(6540);var a=t(6289),n=t(539),s=t(1082),i=t(8569),c=t(5318),l=t(9303),o=t(4848);function d(e){let{year:r,posts:t}=e;const n=(0,i.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{as:"h3",id:r,children:r}),(0,o.jsx)("ul",{children:t.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(a.A,{to:e.metadata.permalink,children:[(r=e.metadata.date,n.format(new Date(r)))," - ",e.metadata.title]})},e.metadata.date);var r}))})]})}function h(e){let{years:r}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(d,{...e})},r)))})})})}function m(e){let{archive:r}=e;const t=(0,n.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,n.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=function(e){const r=e.reduce(((e,r)=>{const t=r.metadata.date.split("-")[0],a=e.get(t)??[];return e.set(t,[r,...a])}),new Map);return Array.from(r,(e=>{let[r,t]=e;return{year:r,posts:t}}))}(r.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.be,{title:t,description:a}),(0,o.jsxs)(c.A,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.A,{as:"h1",className:"hero__title",children:t}),(0,o.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,o.jsx)("main",{children:i.length>0&&(0,o.jsx)(h,{years:i})})]})]})}},8569:(e,r,t)=>{t.d(r,{i:()=>n});var a=t(797);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:r}}=(0,a.A)(),t=function(){const{i18n:{currentLocale:e,localeConfigs:r}}=(0,a.A)();return r[e].calendar}();return new Intl.DateTimeFormat(r,{calendar:t,...e})}}}]);