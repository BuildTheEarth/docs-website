"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[6103],{

/***/ 5203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogPostPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(5281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/blogPost.js
var blogPost = __webpack_require__(9460);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js + 4 modules
var BlogLayout = __webpack_require__(9058);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/index.js + 13 modules
var BlogPostItem = __webpack_require__(390);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
var PaginatorNavLink = __webpack_require__(2244);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostPaginator(props){const{nextItem,prevItem}=props;return/*#__PURE__*/react.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,Translate/* translate */.I)({id:'theme.blog.post.paginator.navAriaLabel',message:'Blog post page navigation',description:'The ARIA label for the blog posts pagination'})},prevItem&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.Z,(0,esm_extends/* default */.Z)({},prevItem,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),nextItem&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.Z,(0,esm_extends/* default */.Z)({},nextItem,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:true})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostPage/Metadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostPageMetadata(){const{assets,metadata}=(0,blogPost/* useBlogPost */.C)();const{title,description,date,tags,authors,frontMatter}=metadata;const{keywords}=frontMatter;const image=assets.image??frontMatter.image;return/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:title,description:description,keywords:keywords,image:image},/*#__PURE__*/react.createElement("meta",{property:"og:type",content:"article"}),/*#__PURE__*/react.createElement("meta",{property:"article:published_time",content:date}),authors.some(author=>author.url)&&/*#__PURE__*/react.createElement("meta",{property:"article:author",content:authors.map(author=>author.url).filter(Boolean).join(',')}),tags.length>0&&/*#__PURE__*/react.createElement("meta",{property:"article:tag",content:tags.map(tag=>tag.label).join(',')}));}
// EXTERNAL MODULE: ./src/theme/TOC/index.tsx + 1 modules
var TOC = __webpack_require__(7827);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostPageContent(_ref){let{sidebar,children}=_ref;const{metadata,toc}=(0,blogPost/* useBlogPost */.C)();const{nextItem,prevItem,frontMatter}=metadata;const{hide_table_of_contents:hideTableOfContents,toc_min_heading_level:tocMinHeadingLevel,toc_max_heading_level:tocMaxHeadingLevel}=frontMatter;return/*#__PURE__*/react.createElement(BlogLayout/* default */.Z,{sidebar:sidebar,toc:!hideTableOfContents&&toc.length>0?/*#__PURE__*/react.createElement(TOC/* default */.Z,{toc:toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel}):undefined},/*#__PURE__*/react.createElement(BlogPostItem/* default */.Z,null,children),(nextItem||prevItem)&&/*#__PURE__*/react.createElement(BlogPostPaginator,{nextItem:nextItem,prevItem:prevItem}));}function BlogPostPage(props){const BlogPostContent=props.content;return/*#__PURE__*/react.createElement(blogPost/* BlogPostProvider */.n,{content:props.content,isBlogPostPage:true},/*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.FG,{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.wrapper.blogPages */.k.wrapper.blogPages,ThemeClassNames/* ThemeClassNames.page.blogPostPage */.k.page.blogPostPage)},/*#__PURE__*/react.createElement(BlogPostPageMetadata,null),/*#__PURE__*/react.createElement(BlogPostPageContent,{sidebar:props.sidebar},/*#__PURE__*/react.createElement(BlogPostContent,null))));}

/***/ }),

/***/ 5565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Admonition)
/* harmony export */ });
/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3991);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7479);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const AdmonitionConfigs={note:{iconComponent:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__/* .IconInfoCircle */ .Us8,{size:16}),label:"Note",color:"gray"},tip:{iconComponent:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__/* .IconBulb */ .mhH,{size:16}),label:"Tip",color:"green"},danger:{iconComponent:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__/* .IconFlame */ .WBX,{size:16}),label:"Danger",color:"red"},info:{iconComponent:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__/* .IconInfoCircle */ .Us8,{size:16}),label:"Info",color:"blue"},caution:{iconComponent:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__/* .IconAlertTriangle */ .DpU,{size:16}),label:"Caution",color:"orange"}};// Legacy aliases, undocumented but kept for retro-compatibility
const aliases={secondary:"note",important:"info",success:"tip",warning:"danger"};function getAdmonitionConfig(unsafeType){const type=aliases[unsafeType]??unsafeType;const config=AdmonitionConfigs[type];if(config){return config;}console.warn(`No admonition config found for admonition type "${type}". Using Info as fallback.`);return AdmonitionConfigs.info;}// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children){const items=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);const mdxAdmonitionTitle=items.find(item=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(item)&&item.props?.mdxType==="mdxAdmonitionTitle");const rest=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,items.filter(item=>item!==mdxAdmonitionTitle));return{mdxAdmonitionTitle,rest};}function processAdmonitionProps(props){const{mdxAdmonitionTitle,rest}=extractMDXAdmonitionTitle(props.children);return{...props,title:props.title??mdxAdmonitionTitle,children:rest};}function Admonition(props){const{children,type,title,icon:iconProp}=processAdmonitionProps(props);const typeConfig=getAdmonitionConfig(type);const titleLabel=title||typeConfig.label;console.log(titleLabel);const{iconComponent}=typeConfig;const icon=iconProp??iconComponent;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_2__/* .Alert */ .b,{icon:icon,title:titleLabel,color:typeConfig.color,mb:"md"},children);}

/***/ }),

/***/ 5442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js + 4 modules
var Element = __webpack_require__(3848);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
var codeBlockUtils = __webpack_require__(7016);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6668);
// EXTERNAL MODULE: ./node_modules/@mantine/prism/esm/index.js + 60 modules
var esm = __webpack_require__(9180);
;// CONCATENATED MODULE: ./src/theme/CodeBlock/Content/String.tsx
function CodeBlockString(_ref){let{children,className:blockClassName="",metastring,title:titleProp,showLineNumbers:showLineNumbersProp,language:languageProp}=_ref;const{prism:{defaultLanguage,magicComments}}=(0,useThemeConfig/* useThemeConfig */.L)();const language=languageProp??(0,codeBlockUtils/* parseLanguage */.Vo)(blockClassName)??defaultLanguage;// We still parse the metastring in case we want to support more syntax in the
// future. Note that MDX doesn't strip quotes when parsing metastring:
// "title=\"xyz\"" => title: "\"xyz\""
return/*#__PURE__*/react.createElement(esm/* Prism */.p,{language:language,mb:"md"},children);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2389);
;// CONCATENATED MODULE: ./src/theme/CodeBlock/index.tsx
/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */function maybeStringifyChildren(children){if(react.Children.toArray(children).some(el=>/*#__PURE__*/(0,react.isValidElement)(el))){return children;}// The children is now guaranteed to be one/more plain strings
return Array.isArray(children)?children.join(""):children;}function CodeBlock(_ref){let{children:rawChildren,...props}=_ref;// The Prism theme on SSR is always the default theme but the site theme can
// be in a different mode. React hydration doesn't update DOM styles that come
// from SSR. Hence force a re-render after mounting to apply the current
// relevant styles.
const isBrowser=(0,useIsBrowser/* default */.Z)();const children=maybeStringifyChildren(rawChildren);const CodeBlockComp=typeof children==="string"?CodeBlockString:Element/* default */.Z;return/*#__PURE__*/react.createElement(CodeBlockComp,(0,esm_extends/* default */.Z)({key:String(isBrowser)},props),children);}

/***/ }),

/***/ 9839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IconEdit)
/* harmony export */ });
/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3991);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
function IconEdit(_ref){let{className,...restProps}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__/* .IconPencil */ .TRY,null);}

/***/ }),

/***/ 4403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MDXA)
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4685);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
function MDXA(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_1__/* .Anchor */ .e,props);}

/***/ }),

/***/ 3473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MDXCode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7084);
/* harmony import */ var _theme_CodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5442);
function MDXCode(props){const inlineElements=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];console.log(props);const shouldBeInline=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(props.children).every(el=>typeof el==="string"&&!el.includes("\n")||/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(el)&&inlineElements.includes(el.props?.mdxType));return shouldBeInline?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_2__/* .Code */ .E,null,props.children):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_CodeBlock__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,props);}

/***/ }),

/***/ 7411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MDXHeading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9236);
function MDXHeading(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_1__/* .Title */ .D,{order:headingToNumber(props.as),id:props.id},props.children);}function headingToNumber(h){switch(h){case"h1":return 1;case"h2":return 2;case"h3":return 3;case"h4":return 4;case"h5":return 5;case"h6":return 6;default:1;}}

/***/ }),

/***/ 7827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TOC)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 10 modules
var Box = __webpack_require__(9845);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Group/Group.js + 1 modules
var Group = __webpack_require__(1232);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Text/Text.js + 1 modules
var Text = __webpack_require__(5117);
// EXTERNAL MODULE: ./node_modules/@tabler/icons/icons-react/dist/index.esm.js
var index_esm = __webpack_require__(3991);
;// CONCATENATED MODULE: ./src/components/TOC.tsx
const useStyles=(0,create_styles/* createStyles */.k)(theme=>({link:{...theme.fn.focusStyles(),display:"block",textDecoration:"none",color:theme.colorScheme==="dark"?theme.colors.dark[0]:theme.black,lineHeight:1.2,fontSize:theme.fontSizes.sm,padding:theme.spacing.xs,borderTopRightRadius:theme.radius.sm,borderBottomRightRadius:theme.radius.sm,borderLeft:`1px solid ${theme.colorScheme==="dark"?theme.colors.dark[4]:theme.colors.gray[3]}`,"&:hover":{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[6]:theme.colors.gray[0]}},linkActive:{fontWeight:500,borderLeftColor:theme.colors[theme.primaryColor][theme.colorScheme==="dark"?6:7],color:theme.colors[theme.primaryColor][theme.colorScheme==="dark"?2:7],"&, &:hover":{backgroundColor:theme.colorScheme==="dark"?theme.fn.rgba(theme.colors[theme.primaryColor][9],0.25):theme.colors[theme.primaryColor][0]}}}));function TableOfContents(_ref){let{links,active}=_ref;const{classes,cx}=useStyles();const items=links.map(item=>/*#__PURE__*/react.createElement(Box/* Box */.x,{component:"a",href:item.link,key:item.label,className:cx(classes.link,{[classes.linkActive]:active===item.link}),sx:theme=>({paddingLeft:item.order*theme.spacing.md})},item.label));return/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(Group/* Group */.Z,{mb:"md"},/*#__PURE__*/react.createElement(index_esm/* IconList */.ZdG,{size:18,stroke:1.5}),/*#__PURE__*/react.createElement(Text/* Text */.x,{color:"dimmed",fz:"sm"},"Table of contents")),items);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(412);
;// CONCATENATED MODULE: ./src/theme/TOC/index.tsx
// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME="table-of-contents__link toc-highlight";const LINK_ACTIVE_CLASS_NAME="table-of-contents__link--active";function TOC(_ref){let{className,...props}=_ref;const links=props.toc.map(l=>({label:l.value,link:"#"+l.id,order:l.level}));if(!ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM)return/*#__PURE__*/react.createElement(react.Fragment,null);else return/*#__PURE__*/react.createElement("div",{style:{position:"sticky",top:70}},/*#__PURE__*/react.createElement(TableOfContents,{active:"#"+window.location.href.split("#")[1]||0,links:links}));}

/***/ })

}]);