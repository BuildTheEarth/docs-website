"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[924],{

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

/***/ 7068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocTagDocListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(pf=>pluralForms.includes(pf));}// Hardcoded english/fallback implementation
const EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:count=>count===1?'one':'other'};function createLocalePluralForms(locale){const pluralRules=new Intl.PluralRules(locale);return{locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:count=>pluralRules.select(count)};}/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */function useLocalePluralForms(){const{i18n:{currentLocale}}=(0,useDocusaurusContext/* default */.Z)();return (0,react.useMemo)(()=>{try{return createLocalePluralForms(currentLocale);}catch(err){console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){const separator='|';const parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}if(parts.length>localePluralForms.pluralForms.length){console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);}const pluralForm=localePluralForms.select(count);const pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other)
// instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */function usePluralForm(){const localePluralForm=useLocalePluralForms();return{selectMessage:(count,pluralMessages)=>selectPluralMessage(pluralMessages,count,localePluralForm)};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(5281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 18 modules
var Layout = __webpack_require__(4204);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(197);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocTagDocListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useNDocsTaggedPlural(){const{selectMessage}=usePluralForm();return count=>selectMessage(count,(0,Translate/* translate */.I)({id:'theme.docs.tagDocListPageTitle.nDocsTagged',description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One doc tagged|{count} docs tagged'},{count}));}function DocItem(_ref){let{doc}=_ref;return/*#__PURE__*/react.createElement("article",{className:"margin-vert--lg"},/*#__PURE__*/react.createElement(Link/* default */.Z,{to:doc.permalink},/*#__PURE__*/react.createElement("h2",null,doc.title)),doc.description&&/*#__PURE__*/react.createElement("p",null,doc.description));}function DocTagDocListPage(_ref2){let{tag}=_ref2;const nDocsTaggedPlural=useNDocsTaggedPlural();const title=(0,Translate/* translate */.I)({id:'theme.docs.tagDocListPageTitle',description:'The title of the page for a docs tag',message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:nDocsTaggedPlural(tag.count),tagName:tag.label});return/*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.FG,{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.wrapper.docsPages */.k.wrapper.docsPages,ThemeClassNames/* ThemeClassNames.page.docsTagDocListPage */.k.page.docsTagDocListPage)},/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:title}),/*#__PURE__*/react.createElement(SearchMetadata/* default */.Z,{tag:"doc_tag_doc_list"}),/*#__PURE__*/react.createElement(Layout/* default */.Z,null,/*#__PURE__*/react.createElement("div",{className:"container margin-vert--lg"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("main",{className:"col col--8 col--offset-2"},/*#__PURE__*/react.createElement("header",{className:"margin-bottom--xl"},/*#__PURE__*/react.createElement("h1",null,title),/*#__PURE__*/react.createElement(Link/* default */.Z,{href:tag.allTagsPath},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),/*#__PURE__*/react.createElement("section",{className:"margin-vert--lg"},tag.items.map(doc=>/*#__PURE__*/react.createElement(DocItem,{key:doc.id,doc:doc}))))))));}

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

/***/ })

}]);