"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[9514],{

/***/ 6279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DocSidebar)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js + 10 modules
var Mobile = __webpack_require__(7816);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Accordion/Accordion.js + 13 modules
var Accordion = __webpack_require__(6222);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/nav/NavbarItem.tsx
const NavbarItem=props=>{return/*#__PURE__*/react.createElement(Accordion/* Accordion */.U,null,props.items.map(element=>/*#__PURE__*/react.createElement(Accordion/* Accordion.Item */.U.Item,{value:element.href},/*#__PURE__*/react.createElement(Accordion/* Accordion.Control */.U.Control,{chevron:element.type=="link"&&"ㅤ",onClick:e=>element.type=="link"?window.location.href=element.href:undefined},element.label),element.type!="link"&&/*#__PURE__*/react.createElement(Accordion/* Accordion.Panel */.U.Panel,null,/*#__PURE__*/react.createElement(NavbarItem,element)))));};/* harmony default export */ const nav_NavbarItem = (NavbarItem);
;// CONCATENATED MODULE: ./src/components/nav/NavbarRoot.tsx
const NavbarRoot=props=>{return/*#__PURE__*/react.createElement(Accordion/* Accordion */.U,{mt:120,defaultValue:props.path},props.sidebar.map(element=>/*#__PURE__*/react.createElement(Accordion/* Accordion.Item */.U.Item,{value:element.href},/*#__PURE__*/react.createElement(Accordion/* Accordion.Control */.U.Control,{chevron:element.type=="link"&&"ㅤ",onClick:e=>element.type=="link"?window.location.href=element.href:undefined},element.label),element.type!="link"&&/*#__PURE__*/react.createElement(Accordion/* Accordion.Panel */.U.Panel,null,/*#__PURE__*/react.createElement(nav_NavbarItem,element)))));};/* harmony default export */ const nav_NavbarRoot = (NavbarRoot);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(7524);
;// CONCATENATED MODULE: ./src/theme/DocSidebar/index.tsx
function DocSidebar(props){const windowSize=(0,useWindowSize/* useWindowSize */.i)();// Desktop sidebar visible on hydration: need SSR rendering
const shouldRenderSidebarDesktop=windowSize==="desktop"||windowSize==="ssr";// Mobile sidebar not visible on hydration: can avoid SSR rendering
const shouldRenderSidebarMobile=windowSize==="mobile";console.log(props);return/*#__PURE__*/react.createElement(react.Fragment,null,shouldRenderSidebarDesktop&&/*#__PURE__*/react.createElement(nav_NavbarRoot,props),shouldRenderSidebarMobile&&/*#__PURE__*/react.createElement(Mobile/* default */.Z,props));}

/***/ }),

/***/ 4818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IconArrow)
/* harmony export */ });
/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3991);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
function IconArrow(props){console.log(props);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__/* .IconArrowRight */ .Ec8,null);}

/***/ }),

/***/ 4697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ErrorPage)
});

// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 25 modules
var MantineProvider = __webpack_require__(4215);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Center/Center.js
var Center = __webpack_require__(9094);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Title/Title.js + 1 modules
var Title = __webpack_require__(9236);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Button/Button.js + 4 modules
var Button = __webpack_require__(6869);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Text/Text.js + 1 modules
var Text = __webpack_require__(5117);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Container/Container.js + 1 modules
var Container = __webpack_require__(2445);
// EXTERNAL MODULE: ./src/components/Footer.tsx
var Footer = __webpack_require__(5800);
// EXTERNAL MODULE: ./src/components/Header.tsx + 12 modules
var Header = __webpack_require__(2644);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-media-query/use-media-query.js
var use_media_query = __webpack_require__(4065);
;// CONCATENATED MODULE: ./src/components/Page.tsx
const Page=props=>{const matches=(0,use_media_query/* useMediaQuery */.a)("(min-width: 900px)");const theme=(0,MantineProvider/* useMantineTheme */.rZ)();return/*#__PURE__*/react.createElement("div",{style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[8]:theme.white,width:"calc(100vw - (100vw - 100%))",minHeight:"100vh",display:"flex",flexDirection:"column"}},!props.disabled?.header&&/*#__PURE__*/react.createElement(Header/* default */.Z,{links:[]}),props.head&&/*#__PURE__*/react.createElement("div",{style:{width:"100%",height:"20vh",position:"relative"}},/*#__PURE__*/react.createElement("div",{style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[8]:theme.colors.gray[0],background:`url(${props.head?.image})`,filter:props.head?.filter||"brightness(0.8)",width:"100%",height:"100%",marginTop:props.disabled?.header?0:60}}),/*#__PURE__*/react.createElement(Center/* Center */.M,{style:{width:"100%",height:"100%",position:"absolute",top:props.disabled?.header?0:60,left:0}},/*#__PURE__*/react.createElement("h1",{style:{color:"#ffffff",fontSize:"48px",zIndex:"99"}},props.head?.title,props.head?.subtitle&&/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Text/* Text */.x,{style:{fontWeight:"normal"}},props.head?.subtitle))),/*#__PURE__*/react.createElement("div",{style:{position:"absolute",bottom:"0",width:"100%",height:"100px",background:"linear-gradient(180deg,transparent,rgba(0, 0, 0, 0.26))"}}))),props.fullWidth?props.children:/*#__PURE__*/react.createElement(Container/* Container */.W,{size:"xl",style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[7]:"#ffffff",boxShadow:"none",marginTop:theme.spacing.xl*2+(props.disabled?.header?0:60),marginBottom:theme.spacing.xl*2,padding:!matches?`${theme.spacing.xs*3}px`:`${theme.spacing.xl*3}px`,paddingBottom:!matches?`${theme.spacing.xs*1.5}px`:`${theme.spacing.xl*1.5}px`,paddingTop:!matches?`${theme.spacing.xs*1}px`:`${theme.spacing.xl*1}px`,flex:1,width:"100%",position:"relative",...props.style}},props.children),!props.disabled?.footer&&/*#__PURE__*/react.createElement(Footer/* default */.Z,{links:[{link:"/faq",label:"FAQ"},{link:"/contact",label:"Contact"},{link:"/about",label:"About us"}]}));};/* harmony default export */ const components_Page = (Page);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(412);
;// CONCATENATED MODULE: ./src/theme/NotFound.tsx
function ErrorPage(){const theme=(0,MantineProvider/* useMantineTheme */.rZ)();const status={code:404,title:"Not Found",message:"We can't find the page you're looking for. Please check the URL and try again."};if(!ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM)return/*#__PURE__*/react.createElement(react.Fragment,null);else return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:(0,Translate/* translate */.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),/*#__PURE__*/react.createElement(components_Page,{fullWidth:true},/*#__PURE__*/react.createElement("div",{style:{width:"100%",position:"relative"}},/*#__PURE__*/react.createElement("div",{style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[8]:theme.colors.gray[0],background:`url("/images/placeholder.png")`,filter:"brightness(0.5)",width:"100%",height:"calc(100vh - 60px)",marginTop:60}}),/*#__PURE__*/react.createElement(Center/* Center */.M,{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(Title/* Title */.D,{style:{color:"#ffffff",fontSize:220},align:"center",order:1},"404"),/*#__PURE__*/react.createElement(Title/* Title */.D,{style:{color:"#ffffff"},align:"center",order:1},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},status.title)),/*#__PURE__*/react.createElement(Title/* Title */.D,{style:{color:theme.colors.gray[4]},align:"center",order:3},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},status.message),/*#__PURE__*/react.createElement("br",null),/*#__PURE__*/react.createElement(Button/* Button */.z,{variant:"outline",size:"xl",style:{color:"white",borderColor:"white",borderWidth:3,marginTop:theme.spacing.xl*1.5},onClick:()=>window.history.back()},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Back"))))))));}

/***/ })

}]);