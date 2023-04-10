"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[744],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 9696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": () => (/* binding */ assets),
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   "frontMatter": () => (/* binding */ frontMatter),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "toc": () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _home_runner_work_docs_website_docs_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={sidebar_position:1,title:'Moderation Guidelines'};const contentTitle='BTE Moderation Guidelines';const metadata={"unversionedId":"staff/moderation/moderation-guidelines/index","id":"staff/moderation/moderation-guidelines/index","title":"Moderation Guidelines","description":"1.0 PURPOSE","source":"@site/docs/staff/moderation/moderation-guidelines/index.md","sourceDirName":"staff/moderation/moderation-guidelines","slug":"/staff/moderation/moderation-guidelines/","permalink":"/docs/staff/moderation/moderation-guidelines/","draft":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Moderation Guidelines"},"sidebar":"tutorialSidebar","previous":{"title":"Staff (Testing)","permalink":"/docs/staff/"},"next":{"title":"General Rules Specifications","permalink":"/docs/staff/moderation/general-rules-specifications/"}};const assets={};const toc=[{value:'1.0 PURPOSE ',id:'10-purpose',level:2},{value:'2.0 COMMUNITY OVERVIEW',id:'20-community-overview',level:2},{value:'3.0 STAFF HIERARCHY',id:'30-staff-hierarchy',level:2},{value:'Moderation Hierarchy',id:'moderation-hierarchy',level:4},{value:'4.0 STAFF CONDUCT',id:'40-staff-conduct',level:2},{value:'4.1 COMPLIANCE',id:'41-compliance',level:3},{value:'5.0 Moderation',id:'50-moderation',level:2},{value:'5.1 RULES',id:'51-rules',level:3},{value:'Rule 1: All forms of prejudice are prohibited.',id:'rule-1all-forms-of-prejudice-are-prohibited',level:4},{value:'Rule 2: Sending NSFW content is prohibited.',id:'rule-2sending-nsfw-content-is-prohibited',level:4},{value:'Rule 3: Politics and other heavy topics are prohibited.',id:'rule-3politics-and-other-heavy-topics-are-prohibited',level:3},{value:'Rule 4: Discord ToS, Developer ToS and Guidelines must be followed.',id:'rule-4discord-tos-developer-tos-and-guidelines-must-be-followed',level:3}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_docs_website_docs_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"bte-moderation-guidelines"},`BTE Moderation Guidelines`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"10-purpose"},`1.0 PURPOSE `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`This document is an above-all reference needed for moderating in BTE. Subjects addressed include team member conduct, handling difficult situations, moderation commands, moderations standards, and many other topics. We hope that this document will be of great use to you!`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"20-community-overview"},`2.0 COMMUNITY OVERVIEW`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`It is important to remember that BuildTheEarth is a community project, unlike most other Discord servers. If you come from moderation on a traditional Discord server, while many of the skills are the same, one of the most important things you will need is knowledge of our project. It's essential that you read over the information channels and ask questions when you don't know the answer. Our server is an inclusive, non-discriminatory, and PG-13 server.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"30-staff-hierarchy"},`3.0 STAFF HIERARCHY`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The complete Build The Earth staff structure can be found `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.google.com/url?q=https://www.google.com/url?q%3Dhttps://app.milanote.com/1N4MYa15e6msad/bte-staff-organization-chart?p%253DsfH31jITyc6%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1681074155507699%26amp;usg%3DAOvVaw2d76dVvQ4_J7bGP8S0jw5J&sa=D&source=docs&ust=1681074155551854&usg=AOvVaw1iD4N4q_BLwROD5RAgIepy"},`here`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Our staff team works with a tiered hierarchy, but it is essential to remember that no staff is above another. It's simply a system of who has what permissions and who reports to whom.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"moderation-hierarchy"},`Moderation Hierarchy`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Trial Moderator → Moderator → Senior Moderator → Moderation Manager → Administrator`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"40-staff-conduct"},`4.0 STAFF CONDUCT`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Staff members act as the public face of BTE within the Discord. Frequently, members follow the implicit cues on how staff members communicate with the community and each other. It is your responsibility to maintain a certain amount of professionalism and decorum while still having fun. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Try to be aware of your use of language and the tone of voice when addressing community members. Your job is to be of service to the community and it does not place you in a superior position to them. This project is meant for the community, and your behavior should represent that.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`As a member of this team, you are a role model, and as such, it is vital that you act in accordance with this fact. Your conduct on the server should represent what we want our community to be. It is highly recommended that you read `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.google.com/url?q=https://www.google.com/url?q%3Dhttps://discord.com/moderation/4405230698519-110:-Moderator-Etiquette%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1681074155509155%26amp;usg%3DAOvVaw1wu6gkOoNYP0aHmz67n0XO&sa=D&source=docs&ust=1681074155552348&usg=AOvVaw194PW7oiuK6r75InYoI43g"},`this article`),` from the Discord Moderator Academy. While it does not cover everything we expect from our moderators, it is helpful to start.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`You will be working in a team while moderating on our server, and it's crucial that you are a team player. Everyone will make mistakes, and that's okay. However, it's important that once you realize that you made a mistake, it gets fixed and that you are willing to receive feedback. This is so we as a team can grow and learn from our mistakes.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`As briefly mentioned earlier, it's vital that your conduct is representative of what our server represents. While your conduct outside of BTE is not ours to manage, anytime you are representing BTE, you must act according to how you would act within BTE. You are representing BTE anytime you associate yourself with BTE staff outside of BTE, such as on another Discord server.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"41-compliance"},`4.1 COMPLIANCE`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Build The earth uses a strike system within the staff team read more about it `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.google.com/url?q=https://www.google.com/url?q%3Dhttps://docs.google.com/document/d/1YPlIHXve3Ksnjs4M4poSMguP7lTjXvqHLMGTmiB6gnw/edit%2523heading%253Dh.wpi0lo2xxb2b%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1681074155510012%26amp;usg%3DAOvVaw0Q7NZAyeAsTv_ml5oDqDsR&sa=D&source=docs&ust=1681074155552620&usg=AOvVaw2ggDRbO_DzFAKHLY8vIVYf"},`here`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"50-moderation"},`5.0 Moderation`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`All discussion about moderation actions and the usage of moderation commands should be done in #mod-chat`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"51-rules"},`5.1 RULES`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Details about each rule and which Tier violations fall under it can be found `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"docs.buildtheearth.net/docs/staff/moderation/general-rules-specifications"},`here`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-1all-forms-of-prejudice-are-prohibited"},`Rule 1: All forms of prejudice are prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`This includes Racism, Sexism, Ageism, Classism, Homophobia, Transphobia, Xenophobia, and any other form of prejudice.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-2sending-nsfw-content-is-prohibited"},`Rule 2: Sending NSFW content is prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`NSFW content includes sexual, erotic, gore, and any other content that would not be considered PG-13.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Content includes messages, images, videos, audio, and your profile.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Mild and/or Suggestive NSFW content is not allowed but is taken more lightly.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"rule-3politics-and-other-heavy-topics-are-prohibited"},`Rule 3: Politics and other heavy topics are prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Our server is dedicated to building the earth and is not the place for discussing heavy or dividing topics.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`While we sometimes allow political/social conversations they must remain civil and it is up to the moderators' discretion to allow the conversation.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"rule-4discord-tos-developer-tos-and-guidelines-must-be-followed"},`Rule 4: Discord ToS, Developer ToS and Guidelines must be followed.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`This includes but is not limited to the age requirement of 13 (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.google.com/url?q=https://www.google.com/url?q%3Dhttps://support.discord.com/hc/en-us/articles/360040724612%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1681074155514203%26amp;usg%3DAOvVaw2NAabmq1cRQGtyeyNO9srP&sa=D&source=docs&ust=1681074155553519&usg=AOvVaw2Sqeem3hROJBPcOGS-0iyY"},`or your country's minimum age`),`).`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Discord ToS: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.google.com/url?q=https://www.google.com/url?q%3Dhttps://discord.com/terms%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1681074155514549%26amp;usg%3DAOvVaw3EHbWT5mMN34TcDlpVmgCQ&sa=D&source=docs&ust=1681074155553614&usg=AOvVaw3EJaA9H_8PTYb84W_r7GN0"},`https://discord.com/terms`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Developer ToS: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.google.com/url?q=https://www.google.com/url?q%3Dhttps://discord.com/developers/docs/legal%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1681074155514868%26amp;usg%3DAOvVaw10SMOpv0vD66tv-y5BqMOA&sa=D&source=docs&ust=1681074155553704&usg=AOvVaw2GRfpxvgZG7aSwL-lnPYe1"},`https://discord.com/developers/docs/legal`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Developer ToS: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.google.com/url?q=https://www.google.com/url?q%3Dhttps://discord.com/developers/docs/legal%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1681074155514868%26amp;usg%3DAOvVaw10SMOpv0vD66tv-y5BqMOA&sa=D&source=docs&ust=1681074155553704&usg=AOvVaw2GRfpxvgZG7aSwL-lnPYe1"},`https://discord.com/developers/docs/legal`))));};MDXContent.isMDXComponent=true;

/***/ })

}]);