(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{167:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var A=i.a.createContext({}),s=function(e){var t=i.a.useContext(A),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return i.a.createElement(A.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,A=u(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,p=b["".concat(a,".").concat(f)]||b[f]||l[f]||o;return r?i.a.createElement(p,c(c({ref:t},A),{},{components:r})):i.a.createElement(p,c({ref:t},A))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var A=2;A<o;A++)a[A]=r[A];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},183:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAMAAABUFvrSAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IB2cksfwAAAb9QTFRF////////////////8fHx7+/v6Ofn4+Pj4N/g39/f1tXV09bS0tXS0tXR0dTR0dTQ0NTQ0NPPz9PPztLOztHNzdHNzdHMz8/PzdDMzNDMzNDLzM/Ly8/Ly8/Ky87Kys3Jyc3Jyc3Iy8rLyMzIyMzHx8vHxsrGycjIxsrFxcnFyMfHxcnExMnExMjDw8jDxMfDw8fCwsfCwcXAwMXAwMW/wMS/v8S+v8O+vsO+vsK9vcK9vcK8v7+/vMG8vMG7vMC8u8C7u8C6ur+6ur+5ub65ub64uL23t7y2urm5tru1tbq0tLqztLmzs7iysrixtbW1srexsbewsbawsLavsLWvr7Wur7SusLOvrrStrrOtr7KvrbOsrLKrr6+vq7GqrKuro6Ghn6OenqCdn5+fnp2dn5aalpmWmJaXk5iTkZSRkZORkY+Pj4+PiYyJjoeLhIaEhIWEgoWChIGCgICAfX98fH98eXx5dnN0cHJvcHBwbmxsY19hYGBgXV5dUFFQUFBQQ0RDQEBAPj8+Pzc5NTY1MjMxMDAwMS0uLS0tKSkpKCkoKCgoKicnJCQkIx8gICAgGxsbEBAQDg4ODQ4NAAAAi/BQCAAAAAN0Uk5TAAoO5yEBUwAAA49JREFUeNq1lo930lYUx7Pdsg5pjdF0DiixTNyyKpVhtToY2lGKxeJaHU4HpWrdZplOV7STDfnRbdGyLTTy/YN3XkJoGqBn4nwHzjvn+3gfbr73vvvCvYu3MjgOSCUTsfPhKTkwIXndbq/vWEAOhmdic8lUevnrm9lsLv/6A+CQSsYjZ0Oy3ycK/IjLNXJQEMf9cmg6EmfkzM1sbiAyh2Q8ciZ4QhL5x7UWe4hW7RF/xBc4Ff48nkxdvZ65ZYa8uc2WtzftjJ46OCQiZ4IBj1DY2TVoZ11w+0+GI3PJxaXr7ZDvN4B6qVQHGvethD46OMTOBgNuvgJAKxej0WJZA1A5/YH/1HQssZBeNkK+8wpVJxGRs4pXFkI/HRzOh054GFcrOsgYaxrQOO0OhGZm51N6yPl8A2UiAtgyGrsAXR+enBy26eAQliWhAihO6gyHAlQEnxyOJBbS125kc7lNVA+YYKqi46eu31ZVVb28R2fgqeNiAVAcRHvJ60f8wXOzyStLmVu53DYs/+vEtrmf6ZPq77/9oqo/WnUGln38DrSjtGc4NOzw43L4i0TqKvMCdaaWoRtCdXT212noO/UnonvqC6vOwIGxx0CRbGMNeCQGQhfiC+lrDFwi3QnDi9IuuERD/6h/EQ2r6nsWnYEnDtegOYii1Xq9aEwPiEhDTTjGvFhcvrEvmL56GdXB79vAEt9iDxjVK7i+ok9l9titg76T05fmryxn9rWCLt/+hGhVVe1WeEeBB0QKms5oc02B4lxprulejHjlcGw+tZTJmskzArYl756qbmz8rf5gT57HBUTZnqKxtW13FHC5PzbBm6hSn3Ij2mDl9uuQvdz+E9h6QEpdB+Sj1dUDNn2PFY6jzaIChU12KwY50u3ktbPWSV4JLV7qJC+fv9MAlHJJsTehPrpebhVo1Cm3lbo+URM1YSJ47kuj3AZpm4Gxgu5FrwPy2YW5hbTRhV6/0X+qH2nn/kd6EPDUcfFuryZUEP1TM7PJRb0JDQLGU0l4DiiWNuTU26b08xtd0wCeeQ9ZG72jqAF/8J6neFMwnrgPPbddTfyH39t+aZwPGN/uBeoFxhOvcNd6mRYEj50Lan+oWzcXu8F4Jol8wbz+13lR6vbBbJs9FowW0hOMP7/1jR3mR12uUV4Qx7/Z6jatjxHGUt+IAWw9vCh5PR6vdPHhVq9s9IvY9L4v+P9+K3znLXH/BS/TEND+y7DLAAAAAElFTkSuQmCC"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return A}));var n=r(3),i=(r(0),r(167));const o={id:"attribution",title:"Attribution",sidebar_label:"Attribution"},a={unversionedId:"Hobbies/attribution",id:"Hobbies/attribution",isDocsHomePage:!1,title:"Attribution",description:"Everything here is copyrighted by me (Jot Powers) and licensed under a Creative Commons Attribution-ShareAlike 4.0 International License",source:"@site/docs/Hobbies/attribution.md",slug:"/Hobbies/attribution",permalink:"/ds2/Hobbies/attribution",version:"current",sidebar_label:"Attribution"},c=[],u={toc:c};function A(e){let{components:t,...o}=e;return Object(i.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Everything here is copyrighted by me (Jot Powers) and licensed under a ",Object(i.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"Creative Commons Attribution-ShareAlike 4.0 International License")),Object(i.b)("p",null,Object(i.b)("img",{alt:"License image",src:r(183).default})))}A.isMDXComponent=!0}}]);