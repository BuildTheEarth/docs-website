"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[43],{

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

/***/ 8274:
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
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={sidebar_position:1,title:'Moderation Guidelines'};const contentTitle='BTE Moderation Guidelines';const metadata={"unversionedId":"intro/staff/moderation/moderation-guidelines/index","id":"intro/staff/moderation/moderation-guidelines/index","title":"Moderation Guidelines","description":"1.0 PURPOSE","source":"@site/docs/intro/staff/moderation/moderation-guidelines/index.md","sourceDirName":"intro/staff/moderation/moderation-guidelines","slug":"/intro/staff/moderation/moderation-guidelines/","permalink":"/docs/intro/staff/moderation/moderation-guidelines/","draft":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Moderation Guidelines"},"sidebar":"tutorialSidebar","previous":{"title":"Guidelines update by GreenDevil97","permalink":"/docs/intro/staff/moderation/general-rules-specifications-edited/"},"next":{"title":"Staff Strike System","permalink":"/docs/intro/staff/moderation/staff-strike-system/"}};const assets={};const toc=[{value:'1.0 PURPOSE ',id:'10-purpose',level:2},{value:'2.0 COMMUNITY OVERVIEW',id:'20-community-overview',level:2},{value:'3.0 STAFF HIERARCHY',id:'30-staff-hierarchy',level:2},{value:'Moderation Hierarchy',id:'moderation-hierarchy',level:3},{value:'4.0 STAFF CONDUCT',id:'40-staff-conduct',level:2},{value:'4.1 COMPLIANCE',id:'41-compliance',level:3},{value:'5.0 Moderation',id:'50-moderation',level:2},{value:'5.1 RULES',id:'51-rules',level:3},{value:'Rule 1: All forms of prejudice are prohibited.',id:'rule-1all-forms-of-prejudice-are-prohibited',level:4},{value:'Rule 2: Sending NSFW content is prohibited.',id:'rule-2sending-nsfw-content-is-prohibited',level:4},{value:'Rule 3: Politics and other heavy topics are prohibited.',id:'rule-3politics-and-other-heavy-topics-are-prohibited',level:4},{value:'Rule 4: Discord ToS, Developer ToS and Guidelines must be followed.',id:'rule-4discord-tos-developer-tos-and-guidelines-must-be-followed',level:4},{value:'Rule 5: Criminal behavior or criminal discussion is prohibited.',id:'rule-5criminal-behavior-or-criminal-discussion-is-prohibited',level:4},{value:'Rule 6: Disrupting the chat is prohibited.',id:'rule-6disrupting-the-chat-is-prohibited',level:4},{value:'Rule 7: Having a profile that contains content in violation of our rules is prohibited.',id:'rule-7having-a-profile-that-contains-content-in-violation-of-our-rules-is-prohibited',level:4},{value:'Rule 8: Unsolicited advertising is prohibited',id:'rule-8unsolicited-advertising-is-prohibited',level:4},{value:'Rule 9: Accusing someone for breaking rules in public chats is prohibited.',id:'rule-9accusing-someone-for-breaking-rules-in-public-chats-is-prohibited',level:4},{value:'Rule 10: General toxicity is prohibited.',id:'rule-10general-toxicity-is-prohibited',level:4},{value:'Rule 11: Contact the right people when needed.',id:'rule-11contact-the-right-people-when-needed',level:4},{value:'Rule 12: Use channels for their intended purpose.',id:'rule-12use-channels-for-their-intended-purpose',level:4},{value:'Rule 13: Exploiting loopholes is prohibited.',id:'rule-13exploiting-loopholes-is-prohibited',level:4},{value:'5.2 DE-ESCALATION',id:'52-de-escalation',level:3},{value:'Dealing with Members Complaints',id:'dealing-with-members-complaints',level:3},{value:'5.3 MODERATION STANDARDS',id:'53-moderation-standards',level:3},{value:'1st Tier Infractions - 1st warning → 2nd warning (If dissimilar) → 3 hour mute → 6h mute → 12h mute',id:'1st-tier-infractions---1st-warning--2nd-warning-if-dissimilar--3-hour-mute--6h-mute--12h-mute',level:4},{value:'2nd Tier Infractions - Immediate 3 hour mute → 12 hour mute → 7 day ban',id:'2nd-tier-infractions---immediate-3-hour-mute--12-hour-mute--7-day-ban',level:4},{value:'3rd Tier Infractions - Immediate 7-day ban → Permanent ban',id:'3rd-tier-infractions---immediate-7-day-ban--permanent-ban',level:4},{value:'4th Tier Infractions - Permanent ban',id:'4th-tier-infractions---permanent-ban',level:4},{value:'Kick Infractions - Kick → 1 day ban → 7 day ban → Permanent ban',id:'kick-infractions---kick--1-day-ban--7-day-ban--permanent-ban',level:4},{value:'5.4 AUTO-MODERATION',id:'54-auto-moderation',level:3},{value:'5.5 MODERATION BOTS',id:'55-moderation-bots',level:3},{value:'BuildTheEarth bot',id:'buildtheearth-bot',level:4},{value:'Vortex (Backup Bot)',id:'vortex-backup-bot',level:4},{value:'5.6 @MODERATOR ON DUTY',id:'56-moderator-on-duty',level:3},{value:'6.0 OTHER RESOURCES',id:'60-other-resources',level:2},{value:'6.1 Minimum Ages',id:'61minimum-ages',level:3},{value:'Asia',id:'asia',level:4},{value:'Europe',id:'europe',level:4},{value:'South America',id:'south-america',level:4}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_docs_website_docs_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"bte-moderation-guidelines"},`BTE Moderation Guidelines`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"10-purpose"},`1.0 PURPOSE `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`This document is an above-all reference needed for moderating in BTE. Subjects addressed include team member conduct, handling difficult situations, moderation commands, moderations standards, and many other topics. We hope that this document will be of great use to you!`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"20-community-overview"},`2.0 COMMUNITY OVERVIEW`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`It is important to remember that BuildTheEarth is a community project, unlike most other Discord servers. If you come from moderation on a traditional Discord server, while many of the skills are the same, one of the most important things you will need is knowledge of our project. It's essential that you read over the information channels and ask questions when you don't know the answer. Our server is an inclusive, non-discriminatory, and PG-13 server.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"30-staff-hierarchy"},`3.0 STAFF HIERARCHY`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The complete BuildTheEarth staff structure can be found `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://app.milanote.com/1N4MYa15e6msad/bte-staff-organization-chart?p=sfH31jITyc6"},`here`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Our staff team works with a tiered hierarchy, but it is essential to remember that no staff is above another. It's simply a system of who has what permissions and who reports to whom.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"moderation-hierarchy"},`Moderation Hierarchy`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Trial Moderator → Moderator → Senior Moderator → Moderation Manager → Administrator`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"40-staff-conduct"},`4.0 STAFF CONDUCT`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Staff members act as the public face of BTE within the Discord. Frequently, members follow the implicit cues on how staff members communicate with the community and each other. It is your responsibility to maintain a certain amount of professionalism and decorum while still having fun. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Try to be aware of your use of language and the tone of voice when addressing community members. Your job is to be of service to the community and it does not place you in a superior position to them. This project is meant for the community, and your behavior should represent that.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`As a member of this team, you are a role model, and as such, it is vital that you act in accordance with this fact. Your conduct on the server should represent what we want our community to be. It is highly recommended that you read `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://discord.com/moderation/4405230698519-110:-Moderator-Etiquette"},`this article`),` from the Discord Moderator Academy. While it does not cover everything we expect from our moderators, it is helpful to start.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`You will be working in a team while moderating on our server, and it's crucial that you are a team player. Everyone will make mistakes, and that's okay. However, it's important that once you realize that you made a mistake, it gets fixed and that you are willing to receive feedback. This is so we as a team can grow and learn from our mistakes.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`As briefly mentioned earlier, it's vital that your conduct is representative of what our server represents. While your conduct outside of BTE is not ours to manage, anytime you are representing BTE, you must act according to how you would act within BTE. You are representing BTE anytime you associate yourself with BTE staff outside of BTE, such as on another Discord server.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"41-compliance"},`4.1 COMPLIANCE`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`BuildTheEarth uses a strike system within the staff team read more about it `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://docs.google.com/document/d/1YPlIHXve3Ksnjs4M4poSMguP7lTjXvqHLMGTmiB6gnw"},`here`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"50-moderation"},`5.0 Moderation`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`All discussion about moderation actions and the usage of moderation commands should be done in #mod-chat`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"51-rules"},`5.1 RULES`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Details about each rule and which Tier violations fall under it can be found `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://docs.BuildTheEarth.net/docs/staff/moderation/general-rules-specifications"},`here`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-1all-forms-of-prejudice-are-prohibited"},`Rule 1: All forms of prejudice are prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`This includes Racism, Sexism, Ageism, Classism, Homophobia, Transphobia, Xenophobia, and any other form of prejudice.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-2sending-nsfw-content-is-prohibited"},`Rule 2: Sending NSFW content is prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`NSFW content includes sexual, erotic, gore, and any other content that would not be considered PG-13.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Content includes messages, images, videos, audio, and your profile.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Mild and/or Suggestive NSFW content is not allowed but is taken more lightly.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-3politics-and-other-heavy-topics-are-prohibited"},`Rule 3: Politics and other heavy topics are prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Our server is dedicated to building the earth and is not the place for discussing heavy or dividing topics.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`While we sometimes allow political/social conversations they must remain civil and it is up to the moderators' discretion to allow the conversation.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-4discord-tos-developer-tos-and-guidelines-must-be-followed"},`Rule 4: Discord ToS, Developer ToS and Guidelines must be followed.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`This includes but is not limited to the age requirement of 13 (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://support.discord.com/hc/en-us/articles/360040724612"},`or your country's minimum age`),`).`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Discord ToS: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://discord.com/terms"},`here`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Developer ToS: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://discord.com/developers/docs/legal"},`here`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-5criminal-behavior-or-criminal-discussion-is-prohibited"},`Rule 5: Criminal behavior or criminal discussion is prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Criminal activity is anything that breaks the law such as death threats, doxing, blackmailing, drug usage, etc.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`This includes discussion about promoting the usage of pirated software such as cracked Minecraft (TLauncher).`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`This does not include launchers like MultiMC or Badlion as they require a legitimate Minecraft.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-6disrupting-the-chat-is-prohibited"},`Rule 6: Disrupting the chat is prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Disturbing the chat is any action within a channel that disrupts or hinders the ability of others to use the channel.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`This includes text spam, text walls, spam pinging, overuse of caps/text formatting, spoiler baiting to make others believe it's a banned word.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-7having-a-profile-that-contains-content-in-violation-of-our-rules-is-prohibited"},`Rule 7: Having a profile that contains content in violation of our rules is prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Your profile is your username, profile photo, status, about me, and game activity.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`This includes impersonation of Staff members.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-8unsolicited-advertising-is-prohibited"},`Rule 8: Unsolicited advertising is prohibited`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Including voice channels, text channels, and direct messages.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-9accusing-someone-for-breaking-rules-in-public-chats-is-prohibited"},`Rule 9: Accusing someone for breaking rules in public chats is prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`This does not mean you can't mention to a member if they broke a rule (Such as "hey I think this would be better in `,`_`,`_`,`_`,`_`,`_`,`_`,` channel.").`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`When you accuse someone of breaking a rule you become a mini-mod and attempt to do the moderators' job for them. We ask that you don't do this and instead ask a member of moderation staff to handle the situation. (Ping @Moderator on  Duty if needed).`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-10general-toxicity-is-prohibited"},`Rule 10: General toxicity is prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Toxicity is anything that is rude or significantly annoying above a certain degree.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`This includes, but is not limited to, earrape, spreading slander/lies, and rude, insulting, or derogatory language towards others.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-11contact-the-right-people-when-needed"},`Rule 11: Contact the right people when needed.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`For moderation-related questions or reports, you can ping @Moderator on Duty.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`For support with the project, you can ping @Support on Duty.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`If you need something else take the time to look in #staff-positions to find who can answer your question.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-12use-channels-for-their-intended-purpose"},`Rule 12: Use channels for their intended purpose.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Please read the channel description before chatting.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"rule-13exploiting-loopholes-is-prohibited"},`Rule 13: Exploiting loopholes is prohibited.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`This includes evading punishments and anything that goes against the spirit of these rules.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Evading a punishment is using alternate accounts, exploiting gaps in permissions, or any action that you are not intended to be able to do while muted or banned.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"52-de-escalation"},`5.2 DE-ESCALATION`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The most important part of our job as moderators is defusing a situation before it becomes a problem. This is why it is vital to maintain a calm and professional attitude when handling conflicts but keep a very close eye on things. The absence of visual and auditory cues, in combination with invisibility, anonymity, and delayed reactions, can cause online conflict to escalate fast.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`A Moderator should intervene if a member resorts to personally insulting another member, using language that breaches the community guidelines, or posts anything that a reasonable person would consider offensive, abusive, or hate speech.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`As the first course of action, a Moderator should remove the offensive content by removing the posts in question, and warnings or infractions may be necessary if our guidelines were breached. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`For more information on conflict resolution, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.google.com/url?q=https://www.google.com/url?q%3Dhttps://docs.google.com/document/d/191JGoNxY4uu6soKJt7bWaPfQjp-yW5TOecw9n8TSkH4/edit%2523heading%253Dh.bl3tbjt23gkw%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1681151611247905%26amp;usg%3DAOvVaw1MhwXA8Qosi6Nxmm6amgDV&sa=D&source=docs&ust=1681151611285593&usg=AOvVaw08JHEBBVpGQ_a4LCy3_O09"},`this document`),` from Xylotrupes is a good read, and for information about internal conflict resolution, this `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://discord.com/moderation/4405272652951-312:-Internal-Conflict-Resolution"},`DMA article`),` is a good resource.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"dealing-with-members-complaints"},`Dealing with Members Complaints`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`When a member makes a complaint about a member of staff, the community, or the brand; `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`it is a Moderator's responsibility to handle the complaint professionally.`),` This is for their protection and to protect the nature of the community. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Complaints may be petty, abusive, exaggerated, or in some cases, completely false. Regardless of these above factors, it is important to resist the temptation to argue or outright refute the complaint. If a Moderator doesn't feel that they can remain neutral, the complaint should be redirected to another Moderator or escalated to the Moderation Manager.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Additionally, please do not feel compelled to immediately respond to any claims or complaints made by a user as a 'fire-fighting' measure, as it may just escalate the situation needlessly. Please forward the complaint if it is of a nature that involves the project or the staff team as a whole.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`A Moderator who responds negatively to a complaint may have their privileges removed if BTE or the Moderation Manager determines that their comments are libelous or otherwise detrimental to the situation.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Any complaint process should begin with getting all the facts and making it clear that the complaint has been heard. This affords the complainant time to calm down if they are emotional. If possible, a realistic (achievable) timeline for following up should be offered.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Situations like these may end up requiring conversing within the team. Make a decision, and acknowledge any errors made, if necessary. Inform the complainant of the outcome. Follow up with any other parties involved.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`When dealing with a complaint about your brand, it is important to respond at times. Being unresponsive generally incites (more) anger. A response that illustrates respect and understanding of the concerns will indicate your intention to rectify any problems. It is best to communicate that you intend to escalate the complaint to another member of the organization, in which case it is important to acknowledge receipt of the complaint and make the community member feel heard.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"53-moderation-standards"},`5.3 MODERATION STANDARDS`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`As mentioned previously, we use a 4 tier system for our moderation.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`If the previous infractions are similar, the infraction process can be quicker.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`A list of what words are banned can be found `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.google.com/url?q=https://www.google.com/url?q%3Dhttps://docs.google.com/document/d/1-74Ykhf6sr2wJgrf6DhAreBxqOzLg-5D-NPKUEwplaE/edit%2523heading%253Dh.944wyfhyz4vd%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1681151725685030%26amp;usg%3DAOvVaw3-oR-RTt8TkvXO02knDcq9&sa=D&source=docs&ust=1681151725721783&usg=AOvVaw2bSsnxDSWhNygHnYp8fWjW"},`here`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"1st-tier-infractions---1st-warning--2nd-warning-if-dissimilar--3-hour-mute--6h-mute--12h-mute"},`1st Tier Infractions - 1st warning → 2nd warning (If dissimilar) → 3 hour mute → 6h mute → 12h mute`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Spamming / Toxicity towards other members / NSFW or Gore in text, voice, emojis, or reactions / Continuous Caps Spam / Minor death threat (Very flexible, should always look for context in these situations) / Misusing channels/spam tagging staff / talking about how to get a cracked Minecraft account / excessive swearing (tasteful swearing is allowed, but if they are doing it just for the sake of swearing, please take action) / Discussion of politics / Advertising (YouTube channels, Minecraft servers, etc.) / Borderline homophobia, transphobia, xenophobia, racism, sexism`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Exception: Bobwalls are 1st Tier`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"2nd-tier-infractions---immediate-3-hour-mute--12-hour-mute--7-day-ban"},`2nd Tier Infractions - Immediate 3 hour mute → 12 hour mute → 7 day ban`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Blatant spam / Copypasta text walls / Blatant trolling (Coming into a chat with the sole purpose of stirring people up) / Blatant or high-level toxicity`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},`Note: Messages that surpass 500 to 700 characters are considered text-walls.`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"3rd-tier-infractions---immediate-7-day-ban--permanent-ban"},`3rd Tier Infractions - Immediate 7-day ban → Permanent ban`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`DM advertising / Harassment in DMs; anything that would result in someone getting triggered (ethnocentrism, strong religious beliefs, forcing opinions on other people) / Anyone from the minor infractions bracket who already had a 12 hour mute`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"4th-tier-infractions---permanent-ban"},`4th Tier Infractions - Permanent ban`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Posting NSFW or Gruesome content (Image, video or link) / being younger than the required age for the use of Discord by country (in most countries 13y old) (or other significant violations of Discord's Terms of Service) / n-word, other disturbing topics(Neo-Nazis, blatant homophobia, blatant bashing of any culture, race, religion, etc.) / Punishment evasion.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},`Note: Video/Image with the intent of discriminating - Permanent`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`A video/image with the n-word - 3d -`,`>`,` Permanent if done again`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"kick-infractions---kick--1-day-ban--7-day-ban--permanent-ban"},`Kick Infractions - Kick → 1 day ban → 7 day ban → Permanent ban`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Having a username, profile picture, Game Activity, or status that violates our rules / Impersonating Staff (ONLY if profile picture and username/nickname is nearly or fully identical)`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"54-auto-moderation"},`5.4 AUTO-MODERATION`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`BTE uses a bot for auto-moderation. When a message has a word in it that is banned, the message will be deleted and will show up in #moderation-logs, where the option to punish the user or pardon them will be there. Banned words can be added by moderators+ (See section 5.5)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`We also have moderation reason placeholders allowing you to use {{`,`<`,`placeholder name`,`>`,`}} instead of typing out long punishment reasons.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"55-moderation-bots"},`5.5 MODERATION BOTS`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"note"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},`Command descriptions need to be updated to slash commands and added.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"buildtheearth-bot"},`BuildTheEarth bot`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`This is our in-house bot and the one we primarily use. In this subsection, you’ll find info and usages of each command. Use this section as a quick, small introduction to the commands we use the most. (More info about any of these can be found with /help `,`<`,`command name`,`>`,`). `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Argument names enclosed in `,`[`,`square brackets] are optional. Ones enclosed in `,`<`,`angle brackets`,`>`,` are required. The ones enclosed in `,`[`,`'single quotes'] mean that you should type their name to toggle an option (instead of providing a value of your own). Ones separated by `,`<`,`vertical | bars`,`>`,` mean you can choose between one of them (this also applies to quoted arguments).`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"vortex-backup-bot"},`Vortex (Backup Bot)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"56-moderator-on-duty"},`5.6 @MODERATOR ON DUTY`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The Moderator On Duty role is for when you are online and ready to moderate. While you have this role you consent to getting pinged for any and all reasons. You can give yourself this role by running /duty.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"60-other-resources"},`6.0 OTHER RESOURCES`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`We have a collection of helpful resources to use while moderating.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"61minimum-ages"},`6.1 Minimum Ages`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The full list is available `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://support.discord.com/hc/en-us/articles/360040724612-Why-is-Discord-asking-for-my-birthday-"},`here`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`For all countries not listed below, 13 is the minimum age.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"asia"},`Asia`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`South Korea: 14+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Vietnam: 15+`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"europe"},`Europe`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Austria: 14+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Bulgaria: 14+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Croatia: 16+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Cyprus: 14+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Czech Republic: 15+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`France: 15+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Germany: 16+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Greece: 15+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Hungary: 16+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Ireland: 16+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Italy: 14+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Lithuania: 14+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Luxembourg: 16+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Netherlands: 16+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Poland: 16+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Romania: 16+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`San Marino: 16+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Serbia: 15+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Slovakia: 16+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Slovenia: 16+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Spain: 14+`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"south-america"},`South America`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Chile: 14+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Colombia: 14+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Peru: 14+`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Venezuela: 14+`)));};MDXContent.isMDXComponent=true;

/***/ })

}]);