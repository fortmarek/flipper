(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(145)),o=n(147),c=n(150),l={id:"react-native",title:"Set up your React Native App",sidebar_label:"Automatic Setup"},u={unversionedId:"getting-started/react-native",id:"getting-started/react-native",isDocsHomePage:!1,title:"Set up your React Native App",description:"Starting with React Native 0.62, after generating your project with react-native init, the Flipper integration is ready out of the box for debug builds:",source:"@site/../docs/getting-started/react-native.mdx",slug:"/getting-started/react-native",permalink:"/docs/getting-started/react-native",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/getting-started/react-native.mdx",version:"current",sidebar_label:"Automatic Setup",sidebar:"setup",previous:{title:"Adding Flipper to iOS apps",permalink:"/docs/getting-started/ios-native"},next:{title:"Manually set up your React Native Android App",permalink:"/docs/getting-started/react-native-android"}},p=[{value:"Using the latest Flipper SDK",id:"using-the-latest-flipper-sdk",children:[]},{value:"Manual Setup",id:"manual-setup",children:[]}],s={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Starting with React Native 0.62, after generating your project with ",Object(a.b)("inlineCode",{parentName:"p"},"react-native init"),", the Flipper integration is ready out of the box for debug builds:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"For Android, start the Flipper Desktop application, and start your project using ",Object(a.b)("inlineCode",{parentName:"li"},"yarn android"),". Your application will appear in Flipper."),Object(a.b)("li",{parentName:"ul"},"For iOS, run ",Object(a.b)("inlineCode",{parentName:"li"},"pod install")," once in the ",Object(a.b)("inlineCode",{parentName:"li"},"ios")," directory of your project. After that, run ",Object(a.b)("inlineCode",{parentName:"li"},"yarn ios")," and start Flipper. Your application will show up in Flipper.")),Object(a.b)("p",null,"By default, the following plugins will be available:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Layout Inspector"),Object(a.b)("li",{parentName:"ul"},"Network"),Object(a.b)("li",{parentName:"ul"},"Databases"),Object(a.b)("li",{parentName:"ul"},"Images"),Object(a.b)("li",{parentName:"ul"},"Shared Preferences"),Object(a.b)("li",{parentName:"ul"},"Crash Reporter"),Object(a.b)("li",{parentName:"ul"},"React DevTools"),Object(a.b)("li",{parentName:"ul"},"Metro Logs")),Object(a.b)("p",null,"Additional plugins can be installed through the plugin manager."),Object(a.b)("p",null,"To create your own plugins and integrate with Flipper using JavaScript, check out our ",Object(a.b)(c.a,{to:Object(o.a)("/docs/tutorial/react-native"),mdxType:"Link"},"writing plugins for React Native")," tutorial!"),Object(a.b)("h3",{id:"using-the-latest-flipper-sdk"},"Using the latest Flipper SDK"),Object(a.b)("p",null,"By default React Native might ship with an outdated Flipper SDK. To make sure you are using the latest version, determine the latest released version of Flipper by running ",Object(a.b)("inlineCode",{parentName:"p"},"npm info flipper"),"."),Object(a.b)("p",null,"Android:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Bump the ",Object(a.b)("inlineCode",{parentName:"li"},"FLIPPER_VERSION")," variable in ",Object(a.b)("inlineCode",{parentName:"li"},"android/gradle.properties"),", for example: ",Object(a.b)("inlineCode",{parentName:"li"},"FLIPPER_VERSION=0.69.0"),"."),Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"./gradlew clean")," in the ",Object(a.b)("inlineCode",{parentName:"li"},"android")," directory.")),Object(a.b)("p",null,"iOS:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Call ",Object(a.b)("inlineCode",{parentName:"li"},"use_flipper")," with a specific version in ",Object(a.b)("inlineCode",{parentName:"li"},"ios/Podfile"),", for example: ",Object(a.b)("inlineCode",{parentName:"li"},"use_flipper!({ 'Flipper' => '0.69.0' })"),"."),Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"pod install")," in the ",Object(a.b)("inlineCode",{parentName:"li"},"ios")," directory.")),Object(a.b)("h2",{id:"manual-setup"},"Manual Setup"),Object(a.b)("p",null,"If you are not using a default React Native template or cannot use the upgrade tool,\nyou can find instructions for how to integate Flipper into your projects in these guides:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:Object(o.a)("/docs/getting-started/react-native-android")},"React Native for Android")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:Object(o.a)("/docs/getting-started/react-native-ios")},"React Native for iOS"))))}b.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,f=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return n?i.a.createElement(f,c(c({ref:t},u),{},{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},146:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(20);t.default=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},147:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(146),i=n(148);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,l=a.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+p:p}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},148:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},150:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(11),o=n(148),c=n(9),l=Object(r.createContext)({collectLink:function(){}}),u=n(147),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,s,b=e.isNavLink,d=e.to,f=e.href,O=e.activeClassName,v=e.isActive,m=e["data-noBrokenLinkCheck"],j=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),g=Object(u.b)().withBaseUrl,h=Object(r.useContext)(l),y=d||f,w=Object(o.a)(y),N=null==y?void 0:y.replace("pathname://",""),C=void 0!==N?function(e){return e.startsWith("/")}(n=N)?g(n):n:void 0,k=Object(r.useRef)(!1),S=b?a.e:a.c,P=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&w&&window.docusaurus.prefetch(C),function(){P&&s&&s.disconnect()}}),[C,P,w]);var x=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,R=!C||!w||x;return C&&w&&!x&&!m&&h.collectLink(C),R?i.a.createElement("a",Object.assign({href:C},y&&!w&&{target:"_blank",rel:"noopener noreferrer"},j)):i.a.createElement(S,Object.assign({},j,{onMouseEnter:function(){k.current||(window.docusaurus.preload(C),k.current=!0)},innerRef:function(e){var t,n;P&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(C)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:C||""},b&&{isActive:v,activeClassName:O}))}}}]);