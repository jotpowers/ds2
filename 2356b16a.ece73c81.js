(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{154:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,d=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return r?o.a.createElement(d,s(s({ref:t},b),{},{components:r})):o.a.createElement(d,s({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var b=2;b<i;b++)a[b]=r[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},181:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAMAAABUFvrSAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IB2cksfwAAAb9QTFRF////////////////8fHx7+/v6Ofn4+Pj4N/g39/f1tXV09bS0tXS0tXR0dTR0dTQ0NTQ0NPPz9PPztLOztHNzdHNzdHMz8/PzdDMzNDMzNDLzM/Ly8/Ly8/Ky87Kys3Jyc3Jyc3Iy8rLyMzIyMzHx8vHxsrGycjIxsrFxcnFyMfHxcnExMnExMjDw8jDxMfDw8fCwsfCwcXAwMXAwMW/wMS/v8S+v8O+vsO+vsK9vcK9vcK8v7+/vMG8vMG7vMC8u8C7u8C6ur+6ur+5ub65ub64uL23t7y2urm5tru1tbq0tLqztLmzs7iysrixtbW1srexsbewsbawsLavsLWvr7Wur7SusLOvrrStrrOtr7KvrbOsrLKrr6+vq7GqrKuro6Ghn6OenqCdn5+fnp2dn5aalpmWmJaXk5iTkZSRkZORkY+Pj4+PiYyJjoeLhIaEhIWEgoWChIGCgICAfX98fH98eXx5dnN0cHJvcHBwbmxsY19hYGBgXV5dUFFQUFBQQ0RDQEBAPj8+Pzc5NTY1MjMxMDAwMS0uLS0tKSkpKCkoKCgoKicnJCQkIx8gICAgGxsbEBAQDg4ODQ4NAAAAi/BQCAAAAAN0Uk5TAAoO5yEBUwAAA49JREFUeNq1lo930lYUx7Pdsg5pjdF0DiixTNyyKpVhtToY2lGKxeJaHU4HpWrdZplOV7STDfnRbdGyLTTy/YN3XkJoGqBn4nwHzjvn+3gfbr73vvvCvYu3MjgOSCUTsfPhKTkwIXndbq/vWEAOhmdic8lUevnrm9lsLv/6A+CQSsYjZ0Oy3ycK/IjLNXJQEMf9cmg6EmfkzM1sbiAyh2Q8ciZ4QhL5x7UWe4hW7RF/xBc4Ff48nkxdvZ65ZYa8uc2WtzftjJ46OCQiZ4IBj1DY2TVoZ11w+0+GI3PJxaXr7ZDvN4B6qVQHGvethD46OMTOBgNuvgJAKxej0WJZA1A5/YH/1HQssZBeNkK+8wpVJxGRs4pXFkI/HRzOh054GFcrOsgYaxrQOO0OhGZm51N6yPl8A2UiAtgyGrsAXR+enBy26eAQliWhAihO6gyHAlQEnxyOJBbS125kc7lNVA+YYKqi46eu31ZVVb28R2fgqeNiAVAcRHvJ60f8wXOzyStLmVu53DYs/+vEtrmf6ZPq77/9oqo/WnUGln38DrSjtGc4NOzw43L4i0TqKvMCdaaWoRtCdXT212noO/UnonvqC6vOwIGxx0CRbGMNeCQGQhfiC+lrDFwi3QnDi9IuuERD/6h/EQ2r6nsWnYEnDtegOYii1Xq9aEwPiEhDTTjGvFhcvrEvmL56GdXB79vAEt9iDxjVK7i+ok9l9titg76T05fmryxn9rWCLt/+hGhVVe1WeEeBB0QKms5oc02B4lxprulejHjlcGw+tZTJmskzArYl756qbmz8rf5gT57HBUTZnqKxtW13FHC5PzbBm6hSn3Ij2mDl9uuQvdz+E9h6QEpdB+Sj1dUDNn2PFY6jzaIChU12KwY50u3ktbPWSV4JLV7qJC+fv9MAlHJJsTehPrpebhVo1Cm3lbo+URM1YSJ47kuj3AZpm4Gxgu5FrwPy2YW5hbTRhV6/0X+qH2nn/kd6EPDUcfFuryZUEP1TM7PJRb0JDQLGU0l4DiiWNuTU26b08xtd0wCeeQ9ZG72jqAF/8J6neFMwnrgPPbddTfyH39t+aZwPGN/uBeoFxhOvcNd6mRYEj50Lan+oWzcXu8F4Jol8wbz+13lR6vbBbJs9FowW0hOMP7/1jR3mR12uUV4Qx7/Z6jatjxHGUt+IAWw9vCh5PR6vdPHhVq9s9IvY9L4v+P9+K3znLXH/BS/TEND+y7DLAAAAAElFTkSuQmCC"},224:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/sunset_04090501_final-cfc80742864dd7171ff2c1db3f5b98c1.jpg"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),i=(r(0),r(154)),a={id:"hobby-overview",title:"Overview",sidebar_label:"Overview"},s={unversionedId:"Hobbies/hobby-overview",id:"Hobbies/hobby-overview",isDocsHomePage:!1,title:"Overview",description:"A hobby photo from before panos were a thing",source:"@site/docs/Hobbies/README.md",slug:"/Hobbies/hobby-overview",permalink:"/ds2/docs/Hobbies/hobby-overview",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"References",permalink:"/ds2/docs/Personal-Growth/references"},next:{title:"Light Up Name Badge",permalink:"/ds2/docs/Hobbies/name-badge"}},c=[{value:"License",id:"license",children:[]}],b={toc:c};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"A hobby photo from before panos were a thing",src:r(224).default})),Object(i.b)("h1",{id:"hobbies"},"Hobbies"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"Note"),":  If you're reading this via straight Github, it is also now available in an easier to read format at ",Object(i.b)("a",{parentName:"p",href:"https://jotpowers.github.io/ds/docs/introduction"},"jotpowers.github.io"),".  You can thank Vidit for opening ",Object(i.b)("a",{parentName:"p",href:"https://github.com/jotpowers/College-Grads/issues/1"},"this issue"),". If you're reading this via Github Pages, then the bare repo is available ",Object(i.b)("a",{parentName:"p",href:"https://github.com/jotpowers/Hobbies"},"here"),".")),Object(i.b)("p",null,'This is the repo for documenting the various things I have created because I find them interesting.  Most of them tend to be "Design & Fabricate" but there is some variety.  Some have required code,some of them are only code, and most have no code.'),Object(i.b)("p",null,"I make no commitments to the elegance of the code or the quality of the comments.  Mostly, these were all for me to have a little fun."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"lock-n-key/lock-n-key"},"Lock and Key"),':  A novel system of creating a "key" out of resin that can be used to create secure locks.  Patent pending, not because it is likely to get manufactured, but because the company I work for believes it has some interesting intellectual property aspects.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"Intubation-Box"},"Intubation box"),": How to build an intubation box as Personal Protective Equipment (PPE) for doctors "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/ds2/docs/Hobbies/tshirts/tshirts"},"Tshirt sorter"),":  How to sort my tshirts.  Really."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/ds2/docs/Hobbies/shipping-box"},"Shipping box"),":  A parametric folding cardboard box.")),Object(i.b)("h2",{id:"license"},"License"),Object(i.b)("p",null,"This work is licensed under a\n",Object(i.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"Creative Commons Attribution-ShareAlike 4.0 International License")),Object(i.b)("p",null,Object(i.b)("img",{alt:"License image",src:r(181).default})))}l.isMDXComponent=!0}}]);