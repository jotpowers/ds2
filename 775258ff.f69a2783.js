(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(f,i(i({ref:t},c),{},{components:n})):r.a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},194:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/intro-to-investing-7e3ef70fc0bcfcb7d3ba97c3d18b047f.xlsx"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(128)),l={id:"value",title:"Calculating Value",sidebar_label:"Calculating Value"},i={unversionedId:"College-Grads/value",id:"College-Grads/value",isDocsHomePage:!1,title:"Calculating Value",description:"How to Determine Value",source:"@site/docs/College-Grads/value.md",slug:"/College-Grads/value",permalink:"/ds2/docs/College-Grads/value",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/College-Grads/value.md",version:"current",sidebar_label:"Calculating Value"},u=[{value:"Rate of Return (a.k.a. Return)",id:"rate-of-return-aka-return",children:[]},{value:"Annualized Return (a.k.a. Compounded Annual Growth Rate (CAGR))",id:"annualized-return-aka-compounded-annual-growth-rate-cagr",children:[]},{value:"Time Value of Money (TVM)",id:"time-value-of-money-tvm",children:[]},{value:"Net Present Value (NPV)",id:"net-present-value-npv",children:[]},{value:"Internal Rate of Return (IRR)",id:"internal-rate-of-return-irr",children:[]},{value:"Capitalization Rates (Cap Rates)",id:"capitalization-rates-cap-rates",children:[]}],c={toc:u};function s(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"how-to-determine-value"},"How to Determine Value"),Object(o.b)("p",null,"It turns out there are a lot of different ways to evaluate how well an investment does.  To be completely honest, I find many of them to be fairly confusing, so I\u2019m going to try to clarify all of these for myself (and hopefully others).  In order to do that, I\u2019ll try to use the same amount all of the time to see how they are different.  If you're one of those people who feels more comfortable playing with the numbers in Excel, ",Object(o.b)("a",{target:"_blank",href:n(194).default},"I have created a workbook")," that has all of these calculations as well, so that you can go be a dirty number fiddler."),Object(o.b)("h2",{id:"rate-of-return-aka-return"},"Rate of Return (a.k.a. Return)"),Object(o.b)("p",null,"The simplest calculation.  Given how much money you invested, how much money did you make?  This is the same as calculating any other percentage"),Object(o.b)("p",null,"(Actual \u2013 Standard)/(Standard) or in investment terms (Current Value \u2013 Original Value)/(Original Value)"),Object(o.b)("p",null,"E.g.  $100 invested for 5 years, and at the end it was worth $110.  (110 \u2013 100) / 100 = .1 or 10%"),Object(o.b)("h2",{id:"annualized-return-aka-compounded-annual-growth-rate-cagr"},"Annualized Return (a.k.a. Compounded Annual Growth Rate (CAGR))"),Object(o.b)("p",null,"Knowing your total return is useful, but often you want to be able see how you did per year.  So, the obvious answer is to simply divide it by the number of years.  "),Object(o.b)("p",null,"E.g.  $100 invested for 5 years, and at the end it was worth $110.  Rate of Return is 10% (from above).  10% / 5 years = 2%."),Object(o.b)("p",null,"Regrettably this is wrong, and the reason is that it fails to take into account the compounding of money.   I\u2019m going to break it down into pieces just to make it easier to follow."),Object(o.b)("p",null,"First, calculate how much money you have, as a percentage, of your original investment."),Object(o.b)("p",null,"$110 / $100 = 1.1"),Object(o.b)("p",null,"Then, add in the compounding part"),Object(o.b)("p",null,"1.1 ^ ( 1 / 5  Years) = 1.019"),Object(o.b)("p",null,"Because this includes your original investment, you need to remove your initial money (or 100% which is also 1)."),Object(o.b)("p",null,"1.019 \u2013 1 = .019 which is 1.9%"),Object(o.b)("p",null,"So, when calculated with compounding your rate of return is actually slightly less than the simple number."),Object(o.b)("h2",{id:"time-value-of-money-tvm"},"Time Value of Money (TVM)"),Object(o.b)("p",null,"Before we can dig into some of the more complicated calculations, there are a couple of critical things to understand.  TVM is one of those.  TVM simply states that money that you have right now, is more valuable than money you might have in the future. "),Object(o.b)("p",null,"If you have $100 right now, you could invest it and get 10%, and in one year it would be worth $110.  But if you get that $100 in one year, then it\u2019s still only $100, which means it is not as valuable, because $110 is greater than $100, even for very large values of $100."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"finish this")),Object(o.b)("h2",{id:"net-present-value-npv"},"Net Present Value (NPV)"),Object(o.b)("p",null,"TBD"),Object(o.b)("h2",{id:"internal-rate-of-return-irr"},"Internal Rate of Return (IRR)"),Object(o.b)("p",null,"TBD"),Object(o.b)("h2",{id:"capitalization-rates-cap-rates"},"Capitalization Rates (Cap Rates)"),Object(o.b)("p",null,"TBD"))}s.isMDXComponent=!0}}]);