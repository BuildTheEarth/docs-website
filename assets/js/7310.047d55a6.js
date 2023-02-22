"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[7310],{

/***/ 9236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ Title)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 25 modules
var MantineProvider = __webpack_require__(4215);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Title/Title.styles.js


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
function getFontSize(size, element, theme) {
  if (typeof size !== "undefined") {
    return size in theme.headings.sizes ? theme.headings.sizes[size].fontSize : size;
  }
  return theme.headings.sizes[element].fontSize;
}
function getLineHeight(size, element, theme) {
  if (typeof size !== "undefined" && size in theme.headings.sizes) {
    return theme.headings.sizes[size].lineHeight;
  }
  return theme.headings.sizes[element].lineHeight;
}
var useStyles = (0,create_styles/* createStyles */.k)((theme, { element, weight, size, inline }) => ({
  root: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    fontFamily: theme.headings.fontFamily,
    fontWeight: weight || theme.headings.sizes[element].fontWeight || theme.headings.fontWeight,
    fontSize: getFontSize(size, element, theme),
    lineHeight: inline ? 1 : getLineHeight(size, element, theme),
    margin: 0
  })
}));

/* harmony default export */ const Title_styles = (useStyles);
//# sourceMappingURL=Title.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Text/Text.js + 1 modules
var Text = __webpack_require__(5117);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Title/Title.js





var Title_defProp = Object.defineProperty;
var Title_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Title_hasOwnProp = Object.prototype.hasOwnProperty;
var Title_propIsEnum = Object.prototype.propertyIsEnumerable;
var Title_defNormalProp = (obj, key, value) => key in obj ? Title_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Title_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Title_hasOwnProp.call(b, prop))
      Title_defNormalProp(a, prop, b[prop]);
  if (Title_getOwnPropSymbols)
    for (var prop of Title_getOwnPropSymbols(b)) {
      if (Title_propIsEnum.call(b, prop))
        Title_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Title_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Title_getOwnPropSymbols)
    for (var prop of Title_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Title_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  order: 1
};
const Title = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Title", defaultProps, props), { className, order, children, unstyled, size, weight, inline } = _a, others = __objRest(_a, ["className", "order", "children", "unstyled", "size", "weight", "inline"]);
  const { classes, cx } = Title_styles({ element: `h${order}`, weight, size, inline }, { name: "Title", unstyled });
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Text/* Text */.x, Title_spreadValues({
    component: `h${order}`,
    ref,
    className: cx(classes.root, className)
  }, others), children);
});
Title.displayName = "@mantine/core/Title";


//# sourceMappingURL=Title.js.map


/***/ }),

/***/ 7818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ packSx)
/* harmony export */ });
function packSx(sx) {
  return Array.isArray(sx) ? sx : [sx];
}


//# sourceMappingURL=pack-sx.js.map


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