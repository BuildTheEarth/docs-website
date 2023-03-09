"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[237],{

/***/ 9960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ exports_Link)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(8780);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(3919);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(412);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/LinksCollector.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const createStatefulLinksCollector=()=>{// Set to dedup, as it's not useful to collect multiple times the same link
const allLinks=new Set();return{collectLink:link=>{allLinks.add(link);},getCollectedLinks:()=>[...allLinks]};};const Context=/*#__PURE__*/react.createContext({collectLink:()=>{// No-op for client. We only use the broken links checker server-side.
}});const useLinksCollector=()=>(0,react.useContext)(Context);function LinksCollectorProvider(_ref){let{children,linksCollector}=_ref;return/*#__PURE__*/React.createElement(Context.Provider,{value:linksCollector},children);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4996);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
const shouldAddBaseUrlAutomatically=to=>to.startsWith('/');function Link(_ref,forwardedRef){let{isNavLink,to,href,activeClassName,isActive,'data-noBrokenLinkCheck':noBrokenLinkCheck,autoAddBaseUrl=true,...props}=_ref;const{siteConfig:{trailingSlash,baseUrl}}=(0,useDocusaurusContext/* default */.Z)();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.C)();const linksCollector=useLinksCollector();const innerRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(forwardedRef,()=>innerRef.current);// IMPORTANT: using to or href should not change anything
// For example, MDX links will ALWAYS give us the href props
// Using one prop or the other should not be used to distinguish
// internal links (/docs/myDoc) from external links (https://github.com)
const targetLinkUnprefixed=to||href;function maybeAddBaseUrl(str){return autoAddBaseUrl&&shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str;}const isInternal=(0,isInternalUrl/* default */.Z)(targetLinkUnprefixed);// pathname:// is a special "protocol" we use to tell Docusaurus link
// that a link is not "internal" and that we shouldn't use history.push()
// this is not ideal but a good enough escape hatch for now
// see https://github.com/facebook/docusaurus/issues/3309
// note: we want baseUrl to be appended (see issue for details)
// TODO read routes and automatically detect internal/external links?
const targetLinkWithoutPathnameProtocol=targetLinkUnprefixed?.replace('pathname://','');// TODO we should use ReactRouter basename feature instead!
// Automatically apply base url in links that start with /
let targetLink=typeof targetLinkWithoutPathnameProtocol!=='undefined'?maybeAddBaseUrl(targetLinkWithoutPathnameProtocol):undefined;if(targetLink&&isInternal){targetLink=(0,lib.applyTrailingSlash)(targetLink,{trailingSlash,baseUrl});}const preloaded=(0,react.useRef)(false);const LinkComponent=isNavLink?react_router_dom/* NavLink */.OL:react_router_dom/* Link */.rU;const IOSupported=ExecutionEnvironment/* default.canUseIntersectionObserver */.Z.canUseIntersectionObserver;const ioRef=(0,react.useRef)();const handleRef=el=>{innerRef.current=el;if(IOSupported&&el&&isInternal){// If IO supported and element reference found, set up Observer.
ioRef.current=new window.IntersectionObserver(entries=>{entries.forEach(entry=>{if(el===entry.target){// If element is in viewport, stop observing and run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){ioRef.current.unobserve(el);ioRef.current.disconnect();if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}}});});// Add element to the observer.
ioRef.current.observe(el);}};const onInteractionEnter=()=>{if(!preloaded.current&&targetLink!=null){window.docusaurus.preload(targetLink);preloaded.current=true;}};(0,react.useEffect)(()=>{// If IO is not supported. We prefetch by default (only once).
if(!IOSupported&&isInternal){if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}// When unmounting, stop intersection observer from watching.
return()=>{if(IOSupported&&ioRef.current){ioRef.current.disconnect();}};},[ioRef,targetLink,IOSupported,isInternal]);const isAnchorLink=targetLink?.startsWith('#')??false;const isRegularHtmlLink=!targetLink||!isInternal||isAnchorLink;if(!isRegularHtmlLink&&!noBrokenLinkCheck){linksCollector.collectLink(targetLink);}return isRegularHtmlLink?/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
react.createElement("a",(0,esm_extends/* default */.Z)({ref:innerRef,href:targetLink},targetLinkUnprefixed&&!isInternal&&{target:'_blank',rel:'noopener noreferrer'},props)):/*#__PURE__*/react.createElement(LinkComponent,(0,esm_extends/* default */.Z)({},props,{onMouseEnter:onInteractionEnter,onTouchStart:onInteractionEnter,innerRef:handleRef,to:targetLink// Avoid "React does not recognize the `activeClassName` prop on a DOM
// element"
},isNavLink&&{isActive,activeClassName}));}/* harmony default export */ const exports_Link = (/*#__PURE__*/react.forwardRef(Link));

/***/ }),

/***/ 8802:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));// Trailing slash handling depends in some site configuration options
function applyTrailingSlash(path,options){const{trailingSlash,baseUrl}=options;if(path.startsWith('#')){// Never apply trailing slash to an anchor link
return path;}// TODO deduplicate: also present in @docusaurus/utils
function addTrailingSlash(str){return str.endsWith('/')?str:`${str}/`;}function removeTrailingSlash(str){return str.endsWith('/')?str.slice(0,-1):str;}function handleTrailingSlash(str,trailing){return trailing?addTrailingSlash(str):removeTrailingSlash(str);}// undefined = legacy retrocompatible behavior
if(typeof trailingSlash==='undefined'){return path;}// The trailing slash should be handled before the ?search#hash !
const[pathname]=path.split(/[#?]/);// Never transform '/' to ''
// Never remove the baseUrl trailing slash!
// If baseUrl = /myBase/, we want to emit /myBase/index.html and not
// /myBase.html! See https://github.com/facebook/docusaurus/issues/5077
const shouldNotApply=pathname==='/'||pathname===baseUrl;const newPathname=shouldNotApply?pathname:handleTrailingSlash(pathname,trailingSlash);return path.replace(pathname,newPathname);}exports["default"]=applyTrailingSlash;

/***/ }),

/***/ 8780:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports, "__esModule", ({value:true}));exports.applyTrailingSlash=exports.blogPostContainerID=void 0;exports.blogPostContainerID='post-content';var applyTrailingSlash_1=__webpack_require__(8802);Object.defineProperty(exports, "applyTrailingSlash", ({enumerable:true,get:function(){return __importDefault(applyTrailingSlash_1).default;}}));

/***/ }),

/***/ 8146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8495);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9094);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5117);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2445);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5800);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2644);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2263);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4065);
const Page=props=>{const{siteConfig}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();const matches=(0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMediaQuery */ .a)("(min-width: 900px)");const theme=(0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__/* .useMantineTheme */ .rZ)();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[8]:theme.white,width:"calc(100vw - (100vw - 100%))",minHeight:"100vh",display:"flex",flexDirection:"column"}},!props.disabled?.header&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{links:siteConfig.themeConfig.navbar?.items.map(i=>({label:i.label,link:i.to})),title:siteConfig.themeConfig.navbar.title}),props.head&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"100%",height:props.head.large?"100vh":"20vh",position:"relative"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[8]:theme.colors.gray[0],background:`url(${props.head?.image})`,filter:props.head?.filter||"brightness(0.8)",width:"100%",height:"100%",marginTop:props.disabled?.header?0:60}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_6__/* .Center */ .M,{style:{width:"100%",height:"100%",position:"absolute",top:props.disabled?.header?0:60,left:0}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1",{style:{color:"#ffffff",fontSize:"48px",zIndex:"99"}},props.head?.title,props.head?.subtitle&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .x,{style:{fontWeight:"normal"}},props.head?.subtitle))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{position:"absolute",bottom:"0",width:"100%",height:"100px",background:"linear-gradient(180deg,transparent,rgba(0, 0, 0, 0.26))"}}))),props.children&&(props.fullWidth?props.children:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_8__/* .Container */ .W,{size:"xl",style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[7]:"#ffffff",boxShadow:"none",marginTop:theme.spacing.xl*2+(props.disabled?.header?0:60),marginBottom:theme.spacing.xl*2,padding:!matches?`${theme.spacing.xs*3}px`:`${theme.spacing.xl*3}px`,paddingBottom:!matches?`${theme.spacing.xs*1.5}px`:`${theme.spacing.xl*1.5}px`,paddingTop:!matches?`${theme.spacing.xs*1}px`:`${theme.spacing.xl*1}px`,flex:1,width:"100%",position:"relative",...props.style}},props.children)),!props.disabled?.footer&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Footer__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,{links:[{link:"/faq",label:"FAQ"},{link:"/contact",label:"Contact"},{link:"/about",label:"About us"}]}));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ 6945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/pack-sx/pack-sx.js
var pack_sx = __webpack_require__(7818);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js
var create_polymorphic_component = __webpack_require__(8427);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 9 modules
var Box = __webpack_require__(7414);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/BackgroundImage/BackgroundImage.js





var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  radius: 0
};
const _BackgroundImage = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("BackgroundImage", defaultProps, props), { src, radius, sx } = _a, others = __objRest(_a, ["src", "radius", "sx"]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, __spreadProps(__spreadValues({}, others), {
    ref,
    sx: [
      (theme) => __spreadProps(__spreadValues({}, theme.fn.focusStyles()), {
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "block",
        width: "100%",
        border: 0,
        textDecoration: "none",
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        backgroundImage: `url(${src})`,
        borderRadius: theme.fn.radius(radius)
      }),
      ...(0,pack_sx/* packSx */.R)(sx)
    ]
  }));
});
_BackgroundImage.displayName = "@mantine/core/BackgroundImage";
const BackgroundImage = (0,create_polymorphic_component/* createPolymorphicComponent */.F)(_BackgroundImage);


//# sourceMappingURL=BackgroundImage.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Center/Center.js
var Center = __webpack_require__(9094);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Title/Title.js + 1 modules
var Title = __webpack_require__(9236);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Button/Button.js + 4 modules
var Button = __webpack_require__(6869);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var exports_ExecutionEnvironment = __webpack_require__(412);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var exports_Link = __webpack_require__(9960);
// EXTERNAL MODULE: ./src/components/Page.tsx
var Page = __webpack_require__(8146);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var exports_useDocusaurusContext = __webpack_require__(2263);
;// CONCATENATED MODULE: ./src/pages/index.tsx
function HomepageHeader(){const{siteConfig}=useDocusaurusContext();if(ExecutionEnvironment.canUseDOM){//@ts-ignore
if(window.netlifyIdentity){//@ts-ignore
window.netlifyIdentity.on("init",user=>{if(!user){//@ts-ignore
window.netlifyIdentity.on("login",()=>{document.location.href="/admin/";});}});}}return/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("header",{className:clsx("hero hero--primary")},/*#__PURE__*/React.createElement("div",{className:"container"},/*#__PURE__*/React.createElement("h1",{className:"hero__title"},siteConfig.title),/*#__PURE__*/React.createElement("p",{className:"hero__subtitle"},siteConfig.tagline),/*#__PURE__*/React.createElement("div",null,/*#__PURE__*/React.createElement(Link,{className:"button button--secondary button--lg",to:"/docs/intro"},"Docusaurus Tutorial - 5min \u23F1\uFE0F")))));}function Home(){const theme=(0,MantineProvider/* useMantineTheme */.rZ)();const{siteConfig}=(0,exports_useDocusaurusContext/* default */.Z)();return/*#__PURE__*/react.createElement(Page/* default */.Z,{fullWidth:true},/*#__PURE__*/react.createElement(BackgroundImage,{src:"/images/placeholder.png",style:{height:"100vh",width:"100%"},mb:"0"},/*#__PURE__*/react.createElement(Center/* Center */.M,{style:{width:"100%",height:"100%",backgroundColor:"#00000044",padding:16}},/*#__PURE__*/react.createElement(Title/* Title */.D,{style:{color:"#ffffff",fontSize:64},align:"center",order:1},siteConfig.title,/*#__PURE__*/react.createElement("br",null),/*#__PURE__*/react.createElement(Button/* Button */.z,{variant:"outline",size:"xl",style:{color:"white",borderColor:"white",borderWidth:3,marginTop:theme.spacing.xl*1.5},onClick:()=>window.location.href=siteConfig.themeConfig.navbar.items[0].to},siteConfig.tagline)))));}

/***/ })

}]);