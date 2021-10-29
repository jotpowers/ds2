(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),i=(n(0),n(163)),r={id:"sign",title:"Innovation Lab Sign",sidebar_label:"Innovation Lab Sign"},s={unversionedId:"Hobbies/sign/sign",id:"Hobbies/sign/sign",isDocsHomePage:!1,title:"Innovation Lab Sign",description:"Test sign",source:"@site/docs/Hobbies/sign/sign.md",slug:"/Hobbies/sign/sign",permalink:"/ds2/Hobbies/sign/sign",version:"current",sidebar_label:"Innovation Lab Sign",sidebar:"someSidebar",previous:{title:"Tshirt Sorter",permalink:"/ds2/Hobbies/tshirts/tshirts"},next:{title:"Lock-n-Key",permalink:"/ds2/Hobbies/lock-n-key/lock-n-key"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Design",id:"design",children:[{value:"LEDs",id:"leds",children:[]},{value:"Controller",id:"controller",children:[]},{value:"Acrylic",id:"acrylic",children:[]},{value:"Aluminum channel",id:"aluminum-channel",children:[]}]},{value:"Creation",id:"creation",children:[{value:"Acrylic",id:"acrylic-1",children:[]},{value:"Pi",id:"pi",children:[]}]}],c={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"Test sign",src:n(268).default}),"\n",Object(i.b)("em",{parentName:"p"},"(Don't worry, this isn't the finished sign)")),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,'At our office back in the times where we did crazy things, like go to the office, we had our "Innovation Lab".  This was an former conference room turned into a general purpose room where we would get together to brainstorm, talk and occassionally get patents.  I think about 50% of the people came for the free pizza, which was certainly one of my prime motivations.'),Object(i.b)("p",null,"The sign outside the lab though was pathetic.  So, I put together a proposal to build a suitable sign.  I'd gotten pretty comfortable with engraving acrylic, and had an idea, so off I went."),Object(i.b)("h2",{id:"design"},"Design"),Object(i.b)("p",null,"First I needed to get the artwork.  This was reasonably easy because the company already had it, so getting it as SVG took a few emails, but nothing outrages.  I knew I wanted something edge lit, and spent some time thinking about it and estimating sizes.  In the end I decided I wanted something that looked suspended and clean. "),Object(i.b)("p",null,Object(i.b)("img",{alt:"Modeled overview",src:n(269).default})),Object(i.b)("h3",{id:"leds"},"LEDs"),Object(i.b)("p",null,"The intial design tradeoffs were about the width of the acrylic versus the availability of aluminum channel to hold it and the width of the LEDs.  I knew I wanted indvidually addressable RGB so that I can do as many cool patterns as possible.  We had used ",Object(i.b)("a",{parentName:"p",href:"https://smile.amazon.com/gp/product/B07FVR6W71/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"},"these Alitove WS2812B")," for the Infinity Snare Drum (yes, I should write that up), so I had some familiarity with them."),Object(i.b)("h3",{id:"controller"},"Controller"),Object(i.b)("p",null,"Now, I could have done this with an Arduino, but I knew I could potentially want web control and a bunch of other things, so I decided to go with a ",Object(i.b)("a",{parentName:"p",href:"https://www.adafruit.com/product/3410"},"Raspberry Pi Zero W"),".  This would also likely force me to spend more time in python, which is a good thing.  In hindsight I would have gotten the one that had the header already soldered on, because describing my soldering skills and ",Object(i.b)("em",{parentName:"p"},"questionable")," is generous.  But, I got it done."),Object(i.b)("h3",{id:"acrylic"},"Acrylic"),Object(i.b)("p",null,"I've had really good luck with the cast acrylic I get from ",Object(i.b)("a",{parentName:"p",href:"https://portplastics.com"},"Port Plastics"),", so I ordered two sheets from there."),Object(i.b)("h3",{id:"aluminum-channel"},"Aluminum channel"),Object(i.b)("p",null,"I started off by looking at Lowe's and Home Depot for what they had available.  My hope is to use all of these same supplies for other related signs for the lab as well, so overbuying a little bit isn't a challenge.  The channel they had that fit the best was 10mm x 10mm inner dimensions.  That worked for width, but was extremely tight for height, but I thought I could get it to work."),Object(i.b)("p",null,"This close up of the channel shows you some of the complexity."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Channel closeup detail",src:n(270).default})),Object(i.b)("p",null,"You need the screws to be low enough to be able to hang the acrylic, but not so low that you don't have enough aluminum to support it, or the acrylic holes are too fragile."),Object(i.b)("p",null,"The half circle you see there represents the profile of LED strip.  In the end, it should all ",Object(i.b)("em",{parentName:"p"},"just barely")," work, and I don't have that kind of precision.   So, I went to ",Object(i.b)("a",{parentName:"p",href:"https://www.az-metals.net/"},"AZ Metals")," to see what they had, and they had 20mm x 20mm channel for the same cost as the smaller channel."),Object(i.b)("h2",{id:"creation"},"Creation"),Object(i.b)("h3",{id:"acrylic-1"},"Acrylic"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Design"),Object(i.b)("li",{parentName:"ul"},"Acrylic cutting/engraving")),Object(i.b)("h3",{id:"pi"},"Pi"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"auto wifi\nuses the autohotspot packages\nI can't tell you how long I looked for something to do this")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.raspberryconnect.com/projects/65-raspberrypi-hotspot-accesspoints/157-raspberry-pi-auto-wifi-hotspot-switch-internet"},"https://www.raspberryconnect.com/projects/65-raspberrypi-hotspot-accesspoints/157-raspberry-pi-auto-wifi-hotspot-switch-internet")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"python")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Test sign in pattern mode",src:n(271).default})),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"The sign running through the test patterns")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Test sign in meeting mode",src:n(272).default})),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},'"Meeting mode".  You pass it the number of minutes and it turns on red and then counts down to green until it is out of time and flashes obnoxiously.  The idea was to have this on behind you during video calls to add some time awareness for the meeting.')))}b.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),h=o,p=u["".concat(r,".").concat(h)]||u[h]||d[h]||i;return n?a.a.createElement(p,s(s({ref:t},c),{},{components:n})):a.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},268:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/lab-banner-b30f28c6fec6a1be0169c67c02fd5faf.jpg"},269:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/overview-1638b8c55a009f12c43b280dacae2f8f.png"},270:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/channel-detail-26287b9b64981e75b5dd31bd0786e870.png"},271:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/test-pattern-a047b90d268c7f091735cb22f7f6b6c3.gif"},272:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/meeting-mode-f226eae406b1279c66b8b17f12712df5.gif"}}]);