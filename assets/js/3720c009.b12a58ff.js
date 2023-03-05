"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[751],{

/***/ 7789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ Badge)
});

// UNUSED EXPORTS: _Badge

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 25 modules
var MantineProvider = __webpack_require__(4215);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js
var create_polymorphic_component = __webpack_require__(8427);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Badge/Badge.styles.js


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
const sizes = {
  xs: { fontSize: 9, height: 16 },
  sm: { fontSize: 10, height: 18 },
  md: { fontSize: 11, height: 20 },
  lg: { fontSize: 13, height: 26 },
  xl: { fontSize: 16, height: 32 }
};
const dotSizes = {
  xs: 4,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10
};
function getVariantStyles({ theme, variant, color, size, gradient }) {
  if (variant === "dot") {
    const dotSize = theme.fn.size({ size, sizes: dotSizes });
    return {
      backgroundColor: "transparent",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]}`,
      paddingLeft: theme.fn.size({ size, sizes: theme.spacing }) / 1.5 - dotSize / 2,
      "&::before": {
        content: '""',
        display: "block",
        width: dotSize,
        height: dotSize,
        borderRadius: dotSize,
        backgroundColor: theme.fn.themeColor(color, theme.colorScheme === "dark" ? 4 : theme.fn.primaryShade("light"), true),
        marginRight: dotSize
      }
    };
  }
  const colors = theme.fn.variant({ color, variant, gradient });
  return {
    background: colors.background,
    color: colors.color,
    border: `${variant === "gradient" ? 0 : 1}px solid ${colors.border}`
  };
}
var useStyles = (0,create_styles/* createStyles */.k)((theme, { color, size, radius, gradient, fullWidth, variant }) => {
  const { fontSize, height } = size in sizes ? sizes[size] : sizes.md;
  return {
    leftSection: {
      marginRight: `calc(${theme.spacing.xs}px / 2)`
    },
    rightSection: {
      marginLeft: `calc(${theme.spacing.xs}px / 2)`
    },
    inner: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    root: __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, theme.fn.focusStyles()), theme.fn.fontStyles()), {
      fontSize,
      height,
      WebkitTapHighlightColor: "transparent",
      lineHeight: `${height - 2}px`,
      textDecoration: "none",
      padding: `0 ${theme.fn.size({ size, sizes: theme.spacing }) / 1.5}px`,
      boxSizing: "border-box",
      display: fullWidth ? "flex" : "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: fullWidth ? "100%" : "auto",
      textTransform: "uppercase",
      borderRadius: theme.fn.radius(radius),
      fontWeight: 700,
      letterSpacing: 0.25,
      cursor: "inherit",
      textOverflow: "ellipsis",
      overflow: "hidden"
    }), getVariantStyles({ theme, variant, color, size, gradient }))
  };
});

/* harmony default export */ const Badge_styles = (useStyles);
//# sourceMappingURL=Badge.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 9 modules
var Box = __webpack_require__(7414);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Badge/Badge.js






var Badge_defProp = Object.defineProperty;
var Badge_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Badge_hasOwnProp = Object.prototype.hasOwnProperty;
var Badge_propIsEnum = Object.prototype.propertyIsEnumerable;
var Badge_defNormalProp = (obj, key, value) => key in obj ? Badge_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Badge_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Badge_hasOwnProp.call(b, prop))
      Badge_defNormalProp(a, prop, b[prop]);
  if (Badge_getOwnPropSymbols)
    for (var prop of Badge_getOwnPropSymbols(b)) {
      if (Badge_propIsEnum.call(b, prop))
        Badge_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Badge_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Badge_getOwnPropSymbols)
    for (var prop of Badge_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Badge_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  variant: "light",
  size: "md",
  radius: "xl"
};
const _Badge = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Badge", defaultProps, props), {
    className,
    color,
    variant,
    fullWidth,
    children,
    size,
    leftSection,
    rightSection,
    radius,
    gradient,
    classNames,
    styles,
    unstyled
  } = _a, others = __objRest(_a, [
    "className",
    "color",
    "variant",
    "fullWidth",
    "children",
    "size",
    "leftSection",
    "rightSection",
    "radius",
    "gradient",
    "classNames",
    "styles",
    "unstyled"
  ]);
  const { classes, cx } = Badge_styles({
    size,
    fullWidth,
    color,
    radius,
    variant,
    gradient
  }, { classNames, styles, name: "Badge", unstyled });
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, Badge_spreadValues({
    className: cx(classes.root, className),
    ref
  }, others), leftSection && /* @__PURE__ */ react.createElement("span", {
    className: classes.leftSection
  }, leftSection), /* @__PURE__ */ react.createElement("span", {
    className: classes.inner
  }, children), rightSection && /* @__PURE__ */ react.createElement("span", {
    className: classes.rightSection
  }, rightSection));
});
_Badge.displayName = "@mantine/core/Badge";
const Badge = (0,create_polymorphic_component/* createPolymorphicComponent */.F)(_Badge);


//# sourceMappingURL=Badge.js.map


/***/ }),

/***/ 9861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocTagsListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const translateTagsPageTitle=()=>(0,Translate/* translate */.I)({id:'theme.tags.tagsPageTitle',message:'Tags',description:'The title of the tag list page'});function getTagLetter(tag){return tag[0].toUpperCase();}/**
 * Takes a list of tags (as provided by the content plugins), and groups them by
 * their initials.
 */function listTagsByLetters(tags){const groups={};Object.values(tags).forEach(tag=>{const initial=getTagLetter(tag.label);groups[initial]??=[];groups[initial].push(tag);});return Object.entries(groups)// Sort letters
.sort((_ref,_ref2)=>{let[letter1]=_ref;let[letter2]=_ref2;return letter1.localeCompare(letter2);}).map(_ref3=>{let[letter,letterTags]=_ref3;// Sort tags inside a letter
const sortedTags=letterTags.sort((tag1,tag2)=>tag1.label.localeCompare(tag2.label));return{letter,tags:sortedTags};});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(5281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 19 modules
var Layout = __webpack_require__(1837);
// EXTERNAL MODULE: ./src/theme/Tag/index.tsx
var Tag = __webpack_require__(4316);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_Nnez"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagLetterEntryItem(_ref){let{letterEntry}=_ref;return/*#__PURE__*/react.createElement("article",null,/*#__PURE__*/react.createElement("h2",null,letterEntry.letter),/*#__PURE__*/react.createElement("ul",{className:"padding--none"},letterEntry.tags.map(tag=>/*#__PURE__*/react.createElement("li",{key:tag.permalink,className:styles_module.tag},/*#__PURE__*/react.createElement(Tag/* default */.Z,tag)))),/*#__PURE__*/react.createElement("hr",null));}function TagsListByLetter(_ref2){let{tags}=_ref2;const letterList=listTagsByLetters(tags);return/*#__PURE__*/react.createElement("section",{className:"margin-vert--lg"},letterList.map(letterEntry=>/*#__PURE__*/react.createElement(TagLetterEntryItem,{key:letterEntry.letter,letterEntry:letterEntry})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(197);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocTagsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocTagsListPage(_ref){let{tags}=_ref;const title=translateTagsPageTitle();return/*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.FG,{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.wrapper.docsPages */.k.wrapper.docsPages,ThemeClassNames/* ThemeClassNames.page.docsTagsListPage */.k.page.docsTagsListPage)},/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:title}),/*#__PURE__*/react.createElement(SearchMetadata/* default */.Z,{tag:"doc_tags_list"}),/*#__PURE__*/react.createElement(Layout/* default */.Z,null,/*#__PURE__*/react.createElement("div",{className:"container margin-vert--lg"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("main",{className:"col col--8 col--offset-2"},/*#__PURE__*/react.createElement("h1",null,title),/*#__PURE__*/react.createElement(TagsListByLetter,{tags:tags}))))));}

/***/ }),

/***/ 4316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tag)
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7789);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
function Tag(_ref){let{permalink,label,count}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_1__/* .Badge */ .C,{component:"a",href:permalink},label,count&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,count));}

/***/ })

}]);