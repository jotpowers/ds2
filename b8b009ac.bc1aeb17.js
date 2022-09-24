(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),o=(a(0),a(165));const l={id:"tax-equalization",title:"Tax Equalization",sidebar_label:"Tax Equalization"},r={unversionedId:"College-Grads/tax-equalization",id:"College-Grads/tax-equalization",isDocsHomePage:!1,title:"Tax Equalization",description:"Tax Equalization",source:"@site/docs/College-Grads/tax-equalization.md",slug:"/College-Grads/tax-equalization",permalink:"/ds2/College-Grads/tax-equalization",version:"current",sidebar_label:"Tax Equalization"},i=[{value:"Base assumptions",id:"base-assumptions",children:[{value:"W-2",id:"w-2",children:[]},{value:"Tax rates",id:"tax-rates",children:[]}]},{value:"Maths",id:"maths",children:[]},{value:"Actual W-2",id:"actual-w-2",children:[]},{value:"Hypothetical W-2",id:"hypothetical-w-2",children:[]},{value:"Calculations",id:"calculations",children:[]}],u={toc:i};function s(e){let{components:t,...l}=e;return Object(o.b)("wrapper",Object(n.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"tax-equalization"},"Tax Equalization"),Object(o.b)("h1",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"I was part of a program where we were lucky enough to be able to work internationally for six months.  However, one of the challenges with that is the recognition that you're now dealing with the complications of international taxes, or taxes at a location that are different from your home location.  Relocation is supposed to be tax neutral.  You should neither owe or be owed more due to your relocation.  In my experience, the tax accountants ability to be able to explain how this is calculated, can be described as inadequate at best.  At worst it's gross incompetence.  If you're lucky they'll explain how A - B = C."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note:"),"  There is also a basic ",Object(o.b)("a",{target:"_blank",href:a(302).default},"spreadsheet available"),"."),Object(o.b)("h1",{id:"united-states"},"United States"),Object(o.b)("h2",{id:"base-assumptions"},"Base assumptions"),Object(o.b)("p",null,"In order for this to work we have to come up with some basic make-believe numbers that we'll work with."),Object(o.b)("h3",{id:"w-2"},"W-2"),Object(o.b)("p",null,"The W-2 will have the following numbers you care about:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Salary: $100,000"),Object(o.b)("li",{parentName:"ul"},"Relocation Taxable Gross-Up: $15,000"),Object(o.b)("li",{parentName:"ul"},"Relo Gross Up Offset: $10,000")),Object(o.b)("h3",{id:"tax-rates"},"Tax rates"),Object(o.b)("p",null,"We'll assume you live in the U.S. with a tax rate of 20%.  You're also domiciled in the state of Taxlandia with a tax rate of 5%."),Object(o.b)("h2",{id:"maths"},"Maths"),Object(o.b)("p",null,"We're going to assume that you paid $0 in taxes.  Primarily, because what you paid doesn't really matter, and it just adds one level of maths.  What you care about is what you have to pay or are owed."),Object(o.b)("h2",{id:"actual-w-2"},"Actual W-2"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"W-2"),Object(o.b)("th",{parentName:"tr",align:null},"$100,000"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"20%"),Object(o.b)("td",{parentName:"tr",align:null},"$20,000")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"5%"),Object(o.b)("td",{parentName:"tr",align:null},"$5,000")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Total liability"),Object(o.b)("td",{parentName:"tr",align:null},"$25,000")))),Object(o.b)("p",null,"But this includes that taxable gross-up.  If we remove it, what do we get?"),Object(o.b)("h2",{id:"hypothetical-w-2"},"Hypothetical W-2"),Object(o.b)("p",null,"Your hypothetical W-2 is simply your actual W-2 minus Relocation Taxable Gross-Up.  ($100,000 - $15,000)"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Hypothetical W-2"),Object(o.b)("th",{parentName:"tr",align:null},"$85,000"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"20%"),Object(o.b)("td",{parentName:"tr",align:null},"$17,000")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"5%"),Object(o.b)("td",{parentName:"tr",align:null},"$4,250")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Total liability"),Object(o.b)("td",{parentName:"tr",align:null},"$21,250")))),Object(o.b)("h2",{id:"calculations"},"Calculations"),Object(o.b)("p",null,"Difference is $3,750, so that's what your company owes you in tax equalization, right?"),Object(o.b)("p",null,"Wrong!"),Object(o.b)("p",null,"You'll notice that at nowhere in here have we used the Relo Gross Up Offset.  This is the amount of money that your company actually paid you, and it's different than the Relocation Taxable Gross-Up.  That difference is the amount of money that your company paid directly to the government. "),Object(o.b)("p",null,"In our case:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Taxes paid to the government = Relocation Taxable Gross-Up - Relo Gross Up Offset "),Object(o.b)("li",{parentName:"ul"},"$5,000 = $15,000 - $10,000")),Object(o.b)("p",null,"That amount gets applied to the taxes owed.  So now the math is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Total tax liability - Hypothetical tax liability - Taxes paid to the government by your company = What you are owed/owe "),Object(o.b)("li",{parentName:"ul"},"$25,000 - $21,250 - $5,000 = -$1,250 (that you pay your company)")),Object(o.b)("p",null,"Congratulations, you owe your company $1,250"),Object(o.b)("p",null,"Obviously if the Taxes paid to the government are less than the difference between your Total tax liability and the Hypothetical tax liability, your company would pay you.  For instance if we change our numbers to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Relocation Taxable Gross-Up: $15,000"),Object(o.b)("li",{parentName:"ul"},"Relo Gross Up Offset: $14,000")),Object(o.b)("p",null,"Suddenly Taxes paid to the government = $1,000"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"$25,000 - $21,250 - $1,000 = $2,750 (that your company would pay you)")),Object(o.b)("h1",{id:"united-kingdom"},"United Kingdom"),Object(o.b)("p",null,"Most of this is specific to my experiences.  It could be that it isn't relevant for you, but I'm leaving here on the off chance a random Google search landed you here and it was useful."),Object(o.b)("p",null,"Your accountant will have you register for self-assessment and inform HMRC that you've left the UK for tax purposes, even if you only intend to do a single rotation overseas."),Object(o.b)("p",null,"They will then instruct payroll to withhold from your salary the normal amount in \"hypothetical\" tax contributions, and your company will settle any tax obligations you have in the UK and overseas using that amount. Any gains/losses are kept by your company, and you personally shouldn't have to do a great deal. The alternative option is that payroll withholds nothing (i.e. you get paid gross) and you later settle up whatever is required. Quite frankly this idea terrifies me, and when it started happening unexpectedly I couldn't transfer the money back fast enough. So keep an eye out for that.\nMake sure you keep accurate records of your whereabouts in the some sort Travel Tracker - I recommend recording all your travel in your diary (with something like TripIt) and updating your accountant every month or so."),Object(o.b)("p",null,"Pro-tips:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start working on this ASAP after April. Leaving it until later in the year will only cause misery."),Object(o.b)("li",{parentName:"ul"},"As you've probably never done self-assessment before, make sure you push-back on your accountant to explain anything you don't understand in the online tax planner and make them explain things over the phone in detail if necessary. The tax planner uses seemingly innocuous questions that aren't, and lots of Suspiciously Capitalised Words that probably mean something very important. None of these will have helpful descriptions. (Do you have a Home in the UK? Even though you've been told you've left the UK and are no longer Resident? Do you have a Home overseas? Does company-paid temporary accommodation count as a Home? Why is Home capitalised? Who knows!)"),Object(o.b)("li",{parentName:"ul"},"Make sure you have the last 12 months worth of payslips available and P60s for the last three years.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Note"),":  I actually don't know what it means, but someone added it who did know, so a good idea to be aware of."))),Object(o.b)("li",{parentName:"ul"},"You will need to provide detailed pension and student loan contributions, although these can be calculated from your payslips if necessary.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Note"),":  I actually don't know what it means, but someone added it who did know, so a good idea to be aware of.")))))}s.isMDXComponent=!0},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=c(a),d=n,h=b["".concat(r,".").concat(d)]||b[d]||p[d]||l;return a?o.a.createElement(h,i(i({ref:t},s),{},{components:a})):o.a.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},302:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/tax-equal-fe011a64fa4b313d0d19a1679df80ca4.xlsx"}}]);