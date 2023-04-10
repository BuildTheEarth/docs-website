"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[514,486],{

/***/ 8345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(5281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
var searchUtils = __webpack_require__(3320);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(3438);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsVersion.js
var docsVersion = __webpack_require__(4477);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsSidebar.js
var docsSidebar = __webpack_require__(1116);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 21 modules
var Layout = __webpack_require__(6706);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js + 1 modules
var ActionIcon = __webpack_require__(9834);
// EXTERNAL MODULE: ./node_modules/@tabler/icons/icons-react/dist/index.esm.js
var index_esm = __webpack_require__(3991);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(2466);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(5936);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useBackToTopButton.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//** Wires the logic for the back to top button. */function useBackToTopButton(_ref){let{threshold}=_ref;const[shown,setShown]=(0,react.useState)(false);const isFocusedAnchor=(0,react.useRef)(false);const{startScroll,cancelScroll}=(0,scrollUtils/* useSmoothScrollTo */.Ct)();(0,scrollUtils/* useScrollPosition */.RF)((_ref2,lastPosition)=>{let{scrollY:scrollTop}=_ref2;const lastScrollTop=lastPosition?.scrollY;// Component is just being mounted. Not really a scroll event from the user.
// Ignore it.
if(!lastScrollTop){return;}if(isFocusedAnchor.current){// This scroll position change is triggered by navigating to an anchor.
// Ignore it.
isFocusedAnchor.current=false;}else if(scrollTop>=lastScrollTop){// The user has scrolled down to "fight against" the animation. Cancel any
// animation under progress.
cancelScroll();setShown(false);}else if(scrollTop<threshold){// Scrolled to the minimum position; hide the button.
setShown(false);}else if(scrollTop+window.innerHeight<document.documentElement.scrollHeight){setShown(true);}});(0,useLocationChange/* useLocationChange */.S)(locationChangeEvent=>{if(locationChangeEvent.location.hash){isFocusedAnchor.current=true;setShown(false);}});return{shown,scrollToTop:()=>startScroll(0)};}
;// CONCATENATED MODULE: ./src/theme/BackToTopButton/index.tsx
function BackToTopButton(){const theme=(0,MantineProvider/* useMantineTheme */.rZ)();const{shown,scrollToTop}=useBackToTopButton({threshold:10});return/*#__PURE__*/react.createElement(ActionIcon/* ActionIcon */.A,{color:"blue",size:"xl",variant:"default",style:{zIndex:100,position:"fixed",bottom:theme.spacing.xl,right:theme.spacing.xl,opacity:shown?1:0,transition:"opacity ease-out 0.1s"},"aria-label":(0,Translate/* translate */.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),onClick:scrollToTop},/*#__PURE__*/react.createElement(index_esm/* IconChevronUp */.y_Q,null));}
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6550);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Accordion/Accordion.js + 13 modules
var Accordion = __webpack_require__(6222);
;// CONCATENATED MODULE: ./src/components/nav/NavbarItem.tsx
const NavbarItem=props=>{const theme=(0,MantineProvider/* useMantineTheme */.rZ)();return/*#__PURE__*/react.createElement(Accordion/* Accordion */.U,{defaultValue:window.location.pathname.split("/").slice(0,props.depth+1).join("/")+"/"},props.items.map(element=>/*#__PURE__*/react.createElement(Accordion/* Accordion.Item */.U.Item,{value:element.href,style:{border:"none"},key:element.href},/*#__PURE__*/react.createElement(Accordion/* Accordion.Control */.U.Control,{chevron:element.type=="link"&&"ㅤ",style:{backgroundColor:(window.location.pathname+"/").replace("//","/")==element.href?theme.colorScheme=="dark"?theme.colors.dark[5]:theme.colors.gray[1]:undefined},onClick:e=>element.type=="link"?window.location.href=element.href:undefined},element.label),element.type!="link"&&/*#__PURE__*/react.createElement(Accordion/* Accordion.Panel */.U.Panel,null,/*#__PURE__*/react.createElement(NavbarItem,(0,esm_extends/* default */.Z)({},element,{depth:props.depth+1}))))));};/* harmony default export */ const nav_NavbarItem = (NavbarItem);
;// CONCATENATED MODULE: ./src/components/nav/NavbarRoot.tsx
const NavbarRoot=props=>{return/*#__PURE__*/react.createElement(Accordion/* Accordion */.U,{pt:60,defaultValue:window.location.pathname.split("/").slice(0,2+1).join("/")+"/",style:{height:"100vh"}},props.sidebar.map(element=>/*#__PURE__*/react.createElement(Accordion/* Accordion.Item */.U.Item,{value:element.href,style:{border:"none"},key:element.href},/*#__PURE__*/react.createElement(Accordion/* Accordion.Control */.U.Control,{chevron:element.type=="link"&&"ㅤ",onClick:e=>element.type=="link"?window.location.href=element.href:undefined},element.label),element.type!="link"&&/*#__PURE__*/react.createElement(Accordion/* Accordion.Panel */.U.Panel,null,/*#__PURE__*/react.createElement(nav_NavbarItem,(0,esm_extends/* default */.Z)({},element,{depth:3}))))));};/* harmony default export */ const nav_NavbarRoot = (NavbarRoot);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(7524);
;// CONCATENATED MODULE: ./src/theme/DocSidebar/index.tsx
function DocSidebar(props){const windowSize=(0,useWindowSize/* useWindowSize */.i)();// Desktop sidebar visible on hydration: need SSR rendering
const shouldRenderSidebarDesktop=windowSize==="desktop"||windowSize==="ssr";// Mobile sidebar not visible on hydration: can avoid SSR rendering
const shouldRenderSidebarMobile=windowSize==="mobile";return/*#__PURE__*/react.createElement(nav_NavbarRoot,props);}
;// CONCATENATED MODULE: ./src/theme/Icon/Arrow/index.tsx
function IconArrow(props){return/*#__PURE__*/react.createElement(index_esm/* IconArrowRight */.Ec8,null);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"expandButton":"expandButton_m80_","expandButtonIcon":"expandButtonIcon_BlDH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageLayoutSidebarExpandButton(_ref){let{toggleSidebar}=_ref;return/*#__PURE__*/react.createElement("div",{className:styles_module.expandButton,title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonTitle',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonAriaLabel',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar},/*#__PURE__*/react.createElement(IconArrow,{className:styles_module.expandButtonIcon}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Sidebar_styles_module = ({"docSidebarContainer":"docSidebarContainer_b6E3","docSidebarContainerHidden":"docSidebarContainerHidden_b3ry","sidebarViewport":"sidebarViewport_Xe31"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange(_ref){let{children}=_ref;const sidebar=(0,docsSidebar/* useDocsSidebar */.V)();return/*#__PURE__*/react.createElement(react.Fragment,{key:sidebar?.name??'noSidebar'},children);}function DocPageLayoutSidebar(_ref2){let{sidebar,hiddenSidebarContainer,setHiddenSidebarContainer}=_ref2;const{pathname}=(0,react_router/* useLocation */.TH)();const[hiddenSidebar,setHiddenSidebar]=(0,react.useState)(false);const toggleSidebar=(0,react.useCallback)(()=>{if(hiddenSidebar){setHiddenSidebar(false);}setHiddenSidebarContainer(value=>!value);},[setHiddenSidebarContainer,hiddenSidebar]);return/*#__PURE__*/react.createElement("aside",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarContainer */.k.docs.docSidebarContainer,Sidebar_styles_module.docSidebarContainer,hiddenSidebarContainer&&Sidebar_styles_module.docSidebarContainerHidden),onTransitionEnd:e=>{if(!e.currentTarget.classList.contains(Sidebar_styles_module.docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}}},/*#__PURE__*/react.createElement(ResetOnSidebarChange,null,/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(Sidebar_styles_module.sidebarViewport,hiddenSidebar&&Sidebar_styles_module.sidebarViewportHidden)},/*#__PURE__*/react.createElement(DocSidebar,{sidebar:sidebar,path:pathname,onCollapse:toggleSidebar,isHidden:hiddenSidebar}),hiddenSidebar&&/*#__PURE__*/react.createElement(DocPageLayoutSidebarExpandButton,{toggleSidebar:toggleSidebar}))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Main_styles_module = ({"docMainContainer":"docMainContainer_gTbr","docMainContainerEnhanced":"docMainContainerEnhanced_Uz_u","docItemWrapperEnhanced":"docItemWrapperEnhanced_czyv"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageLayoutMain(_ref){let{hiddenSidebarContainer,children}=_ref;const sidebar=(0,docsSidebar/* useDocsSidebar */.V)();return/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.Z)(Main_styles_module.docMainContainer,(hiddenSidebarContainer||!sidebar)&&Main_styles_module.docMainContainerEnhanced)},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('container padding-top--md padding-bottom--lg',Main_styles_module.docItemWrapper,hiddenSidebarContainer&&Main_styles_module.docItemWrapperEnhanced)},children));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_styles_module = ({"docPage":"docPage__5DB","docsWrapper":"docsWrapper_BCFX"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageLayout(_ref){let{children}=_ref;const sidebar=(0,docsSidebar/* useDocsSidebar */.V)();const[hiddenSidebarContainer,setHiddenSidebarContainer]=(0,react.useState)(false);return/*#__PURE__*/react.createElement(Layout/* default */.Z,{wrapperClassName:Layout_styles_module.docsWrapper},/*#__PURE__*/react.createElement(BackToTopButton,null),/*#__PURE__*/react.createElement("div",{className:Layout_styles_module.docPage},sidebar&&/*#__PURE__*/react.createElement(DocPageLayoutSidebar,{sidebar:sidebar.items,hiddenSidebarContainer:hiddenSidebarContainer,setHiddenSidebarContainer:setHiddenSidebarContainer}),/*#__PURE__*/react.createElement(DocPageLayoutMain,{hiddenSidebarContainer:hiddenSidebarContainer},children)));}
// EXTERNAL MODULE: ./src/theme/NotFound.tsx
var NotFound = __webpack_require__(486);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(197);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageMetadata(props){const{versionMetadata}=props;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(SearchMetadata/* default */.Z,{version:versionMetadata.version,tag:(0,searchUtils/* docVersionSearchTag */.os)(versionMetadata.pluginId,versionMetadata.version)}),/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,null,versionMetadata.noIndex&&/*#__PURE__*/react.createElement("meta",{name:"robots",content:"noindex, nofollow"})));}function DocPage(props){const{versionMetadata}=props;const currentDocRouteMetadata=(0,docsUtils/* useDocRouteMetadata */.hI)(props);if(!currentDocRouteMetadata){return/*#__PURE__*/react.createElement(NotFound["default"],null);}const{docElement,sidebarName,sidebarItems}=currentDocRouteMetadata;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(DocPageMetadata,props),/*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.FG,{className:(0,clsx_m/* default */.Z)(// TODO: it should be removed from here
ThemeClassNames/* ThemeClassNames.wrapper.docsPages */.k.wrapper.docsPages,ThemeClassNames/* ThemeClassNames.page.docsDocPage */.k.page.docsDocPage,props.versionMetadata.className)},/*#__PURE__*/react.createElement(docsVersion/* DocsVersionProvider */.q,{version:versionMetadata},/*#__PURE__*/react.createElement(docsSidebar/* DocsSidebarProvider */.b,{name:sidebarName,items:sidebarItems},/*#__PURE__*/react.createElement(DocPageLayout,null,docElement)))));}

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

/***/ 486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorPage)
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8495);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9094);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9236);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6869);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5999);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8146);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1944);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(412);
function ErrorPage(){const theme=(0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__/* .useMantineTheme */ .rZ)();const status={code:404,title:"Not Found",message:"We can't find the page you're looking for. Please check the URL and try again."};if(!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_3__/* ["default"].canUseDOM */ .Z.canUseDOM)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null);else return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .PageMetadata */ .d,{title:(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* .translate */ .I)({id:"theme.NotFound.title",message:"Page Not Found"})}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{fullWidth:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"100%",position:"relative"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[8]:theme.colors.gray[0],background:`url("/images/placeholder.png")`,filter:"brightness(0.5)",width:"100%",height:"calc(100vh - 60px)",marginTop:60}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_6__/* .Center */ .M,{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .D,{style:{color:"#ffffff",fontSize:220},align:"center",order:1},"404"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .D,{style:{color:"#ffffff"},align:"center",order:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},status.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .D,{style:{color:theme.colors.gray[4]},align:"center",order:3},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},status.message),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z,{variant:"outline",size:"xl",style:{color:"white",borderColor:"white",borderWidth:3,marginTop:theme.spacing.xl*1.5},onClick:()=>window.history.back()},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Back"))))))));}

/***/ })

}]);