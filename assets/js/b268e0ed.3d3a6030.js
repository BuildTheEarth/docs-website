"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[248],{

/***/ 6869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ Button)
});

// UNUSED EXPORTS: _Button

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js
var create_polymorphic_component = __webpack_require__(8427);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Button/ButtonGroup/ButtonGroup.styles.js


var useStyles = (0,create_styles/* createStyles */.k)((_theme, { orientation, buttonBorderWidth }) => ({
  root: {
    display: "flex",
    flexDirection: orientation === "vertical" ? "column" : "row",
    "& [data-button]": {
      "&:first-of-type": {
        borderBottomRightRadius: 0,
        [orientation === "vertical" ? "borderBottomLeftRadius" : "borderTopRightRadius"]: 0,
        [orientation === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: buttonBorderWidth / 2
      },
      "&:last-of-type": {
        borderTopLeftRadius: 0,
        [orientation === "vertical" ? "borderTopRightRadius" : "borderBottomLeftRadius"]: 0,
        [orientation === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: buttonBorderWidth / 2
      },
      "&:not(:first-of-type):not(:last-of-type)": {
        borderRadius: 0,
        [orientation === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: buttonBorderWidth / 2,
        [orientation === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: buttonBorderWidth / 2
      },
      "& + [data-button]": {
        [orientation === "vertical" ? "marginTop" : "marginLeft"]: -buttonBorderWidth,
        "@media (min-resolution: 192dpi)": {
          [orientation === "vertical" ? "marginTop" : "marginLeft"]: 0
        }
      }
    }
  }
}));

/* harmony default export */ const ButtonGroup_styles = (useStyles);
//# sourceMappingURL=ButtonGroup.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 9 modules
var Box = __webpack_require__(7414);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Button/ButtonGroup/ButtonGroup.js





var __defProp = Object.defineProperty;
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
  orientation: "horizontal",
  buttonBorderWidth: 1
};
const ButtonGroup = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("ButtonGroup", defaultProps, props), { className, orientation, buttonBorderWidth, unstyled } = _a, others = __objRest(_a, ["className", "orientation", "buttonBorderWidth", "unstyled"]);
  const { classes, cx } = ButtonGroup_styles({ orientation, buttonBorderWidth }, { name: "ButtonGroup", unstyled });
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, __spreadValues({
    className: cx(classes.root, className),
    ref
  }, others));
});
ButtonGroup.displayName = "@mantine/core/ButtonGroup";


//# sourceMappingURL=ButtonGroup.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Input/Input.styles.js


var Input_styles_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Input_styles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Input_styles_hasOwnProp = Object.prototype.hasOwnProperty;
var Input_styles_propIsEnum = Object.prototype.propertyIsEnumerable;
var Input_styles_defNormalProp = (obj, key, value) => key in obj ? Input_styles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Input_styles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Input_styles_hasOwnProp.call(b, prop))
      Input_styles_defNormalProp(a, prop, b[prop]);
  if (Input_styles_getOwnPropSymbols)
    for (var prop of Input_styles_getOwnPropSymbols(b)) {
      if (Input_styles_propIsEnum.call(b, prop))
        Input_styles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const sizes = {
  xs: 30,
  sm: 36,
  md: 42,
  lg: 50,
  xl: 60
};
function getVariantStyles({ theme, variant }) {
  if (variant === "default") {
    return {
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]}`,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      transition: "border-color 100ms ease",
      "&:focus, &:focus-within": theme.focusRingStyles.inputStyles(theme)
    };
  }
  if (variant === "filled") {
    return {
      border: "1px solid transparent",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
      "&:focus, &:focus-within": theme.focusRingStyles.inputStyles(theme)
    };
  }
  return {
    borderWidth: 0,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    backgroundColor: "transparent",
    minHeight: 28,
    outline: 0,
    "&:focus, &:focus-within": {
      outline: "none",
      borderColor: "transparent"
    },
    "&:disabled": {
      backgroundColor: "transparent",
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: "transparent"
      }
    }
  };
}
var Input_styles_useStyles = (0,create_styles/* createStyles */.k)((theme, {
  size,
  multiline,
  radius,
  variant,
  invalid,
  rightSectionWidth,
  withRightSection,
  iconWidth,
  offsetBottom,
  offsetTop,
  pointer
}) => {
  const invalidColor = theme.fn.variant({ variant: "filled", color: "red" }).background;
  const sizeStyles = variant === "default" || variant === "filled" ? {
    minHeight: theme.fn.size({ size, sizes }),
    paddingLeft: theme.fn.size({ size, sizes }) / 3,
    paddingRight: withRightSection ? rightSectionWidth : theme.fn.size({ size, sizes }) / 3,
    borderRadius: theme.fn.radius(radius)
  } : null;
  return {
    wrapper: {
      position: "relative",
      marginTop: offsetTop ? `calc(${theme.spacing.xs}px / 2)` : void 0,
      marginBottom: offsetBottom ? `calc(${theme.spacing.xs}px / 2)` : void 0
    },
    input: Input_styles_spreadValues(__spreadProps(Input_styles_spreadValues(__spreadProps(Input_styles_spreadValues({}, theme.fn.fontStyles()), {
      height: multiline ? variant === "unstyled" ? void 0 : "auto" : theme.fn.size({ size, sizes }),
      WebkitTapHighlightColor: "transparent",
      lineHeight: multiline ? theme.lineHeight : `${theme.fn.size({ size, sizes }) - 2}px`,
      appearance: "none",
      resize: "none",
      boxSizing: "border-box",
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      width: "100%",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      display: "block",
      textAlign: "left",
      cursor: pointer ? "pointer" : void 0
    }), sizeStyles), {
      "&:disabled": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
        color: theme.colors.dark[2],
        opacity: 0.6,
        cursor: "not-allowed",
        "&::placeholder": {
          color: theme.colors.dark[2]
        }
      },
      "&::placeholder": __spreadProps(Input_styles_spreadValues({}, theme.fn.placeholderStyles()), {
        opacity: 1
      }),
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
        appearance: "none"
      },
      "&[type=number]": {
        MozAppearance: "textfield"
      }
    }), getVariantStyles({ theme, variant })),
    withIcon: {
      paddingLeft: typeof iconWidth === "number" ? iconWidth : theme.fn.size({ size, sizes })
    },
    invalid: {
      color: invalidColor,
      borderColor: invalidColor,
      "&::placeholder": {
        opacity: 1,
        color: invalidColor
      }
    },
    disabled: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
      color: theme.colors.dark[2],
      opacity: 0.6,
      cursor: "not-allowed",
      "&::placeholder": {
        color: theme.colors.dark[2]
      }
    },
    icon: {
      pointerEvents: "none",
      position: "absolute",
      zIndex: 1,
      left: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: typeof iconWidth === "number" ? iconWidth : theme.fn.size({ size, sizes }),
      color: invalid ? theme.colors.red[theme.colorScheme === "dark" ? 6 : 7] : theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5]
    },
    rightSection: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: rightSectionWidth
    }
  };
});

/* harmony default export */ const Input_styles = ((/* unused pure expression or super */ null && (Input_styles_useStyles)));

//# sourceMappingURL=Input.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Button/Button.styles.js



var Button_styles_defProp = Object.defineProperty;
var Button_styles_defProps = Object.defineProperties;
var Button_styles_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Button_styles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Button_styles_hasOwnProp = Object.prototype.hasOwnProperty;
var Button_styles_propIsEnum = Object.prototype.propertyIsEnumerable;
var Button_styles_defNormalProp = (obj, key, value) => key in obj ? Button_styles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Button_styles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Button_styles_hasOwnProp.call(b, prop))
      Button_styles_defNormalProp(a, prop, b[prop]);
  if (Button_styles_getOwnPropSymbols)
    for (var prop of Button_styles_getOwnPropSymbols(b)) {
      if (Button_styles_propIsEnum.call(b, prop))
        Button_styles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Button_styles_spreadProps = (a, b) => Button_styles_defProps(a, Button_styles_getOwnPropDescs(b));
const Button_styles_sizes = {
  xs: { height: sizes.xs, paddingLeft: 14, paddingRight: 14 },
  sm: { height: sizes.sm, paddingLeft: 18, paddingRight: 18 },
  md: { height: sizes.md, paddingLeft: 22, paddingRight: 22 },
  lg: { height: sizes.lg, paddingLeft: 26, paddingRight: 26 },
  xl: { height: sizes.xl, paddingLeft: 32, paddingRight: 32 },
  "compact-xs": { height: 22, paddingLeft: 7, paddingRight: 7 },
  "compact-sm": { height: 26, paddingLeft: 8, paddingRight: 8 },
  "compact-md": { height: 30, paddingLeft: 10, paddingRight: 10 },
  "compact-lg": { height: 34, paddingLeft: 12, paddingRight: 12 },
  "compact-xl": { height: 40, paddingLeft: 14, paddingRight: 14 }
};
function getSizeStyles({ compact, size, withLeftIcon, withRightIcon }) {
  if (compact) {
    return Button_styles_sizes[`compact-${size}`];
  }
  const _sizes = Button_styles_sizes[size];
  return Button_styles_spreadProps(Button_styles_spreadValues({}, _sizes), {
    paddingLeft: withLeftIcon ? _sizes.paddingLeft / 1.5 : _sizes.paddingLeft,
    paddingRight: withRightIcon ? _sizes.paddingRight / 1.5 : _sizes.paddingRight
  });
}
const getWidthStyles = (fullWidth) => ({
  display: fullWidth ? "block" : "inline-block",
  width: fullWidth ? "100%" : "auto"
});
function Button_styles_getVariantStyles({ variant, theme, color, gradient }) {
  const colors = theme.fn.variant({ color, variant, gradient });
  if (variant === "gradient") {
    return {
      border: 0,
      backgroundImage: colors.background,
      color: colors.color,
      "&:hover": theme.fn.hover({
        backgroundSize: "200%"
      })
    };
  }
  return Button_styles_spreadValues({
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.background,
    color: colors.color
  }, theme.fn.hover({
    backgroundColor: colors.hover
  }));
}
var Button_styles_useStyles = (0,create_styles/* createStyles */.k)((theme, {
  color,
  size,
  radius,
  fullWidth,
  compact,
  gradient,
  variant,
  withLeftIcon,
  withRightIcon
}) => ({
  root: Button_styles_spreadProps(Button_styles_spreadValues(Button_styles_spreadProps(Button_styles_spreadValues(Button_styles_spreadValues(Button_styles_spreadValues(Button_styles_spreadValues({}, getSizeStyles({ compact, size, withLeftIcon, withRightIcon })), theme.fn.fontStyles()), theme.fn.focusStyles()), getWidthStyles(fullWidth)), {
    borderRadius: theme.fn.radius(radius),
    fontWeight: 600,
    position: "relative",
    lineHeight: 1,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    userSelect: "none",
    cursor: "pointer"
  }), Button_styles_getVariantStyles({ variant, theme, color, gradient })), {
    "&:active": theme.activeStyles,
    "&:disabled, &[data-disabled]": {
      borderColor: "transparent",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
      color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
      cursor: "not-allowed",
      backgroundImage: "none",
      pointerEvents: "none",
      "&:active": {
        transform: "none"
      }
    },
    "&[data-loading]": {
      pointerEvents: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        top: -1,
        left: -1,
        right: -1,
        bottom: -1,
        backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.dark[7], 0.5) : "rgba(255, 255, 255, .5)",
        borderRadius: theme.fn.radius(radius),
        cursor: "not-allowed"
      }
    }
  }),
  icon: {
    display: "flex",
    alignItems: "center"
  },
  leftIcon: {
    marginRight: 10
  },
  rightIcon: {
    marginLeft: 10
  },
  centerLoader: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    opacity: 0.5
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    overflow: "visible"
  },
  label: {
    whiteSpace: "nowrap",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center"
  }
}));

/* harmony default export */ const Button_styles = (Button_styles_useStyles);

//# sourceMappingURL=Button.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Loader/Loader.js + 3 modules
var Loader = __webpack_require__(966);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.js + 1 modules
var UnstyledButton = __webpack_require__(4736);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Button/Button.js








var Button_defProp = Object.defineProperty;
var Button_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Button_hasOwnProp = Object.prototype.hasOwnProperty;
var Button_propIsEnum = Object.prototype.propertyIsEnumerable;
var Button_defNormalProp = (obj, key, value) => key in obj ? Button_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Button_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Button_hasOwnProp.call(b, prop))
      Button_defNormalProp(a, prop, b[prop]);
  if (Button_getOwnPropSymbols)
    for (var prop of Button_getOwnPropSymbols(b)) {
      if (Button_propIsEnum.call(b, prop))
        Button_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Button_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Button_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Button_getOwnPropSymbols)
    for (var prop of Button_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Button_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Button_defaultProps = {
  size: "sm",
  type: "button",
  variant: "filled",
  loaderPosition: "left"
};
const _Button = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Button", Button_defaultProps, props), {
    className,
    size,
    color,
    type,
    disabled,
    children,
    leftIcon,
    rightIcon,
    fullWidth,
    variant,
    radius,
    uppercase,
    compact,
    loading,
    loaderPosition,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled
  } = _a, others = Button_objRest(_a, [
    "className",
    "size",
    "color",
    "type",
    "disabled",
    "children",
    "leftIcon",
    "rightIcon",
    "fullWidth",
    "variant",
    "radius",
    "uppercase",
    "compact",
    "loading",
    "loaderPosition",
    "loaderProps",
    "gradient",
    "classNames",
    "styles",
    "unstyled"
  ]);
  const { classes, cx, theme } = Button_styles({
    radius,
    color,
    size,
    fullWidth,
    compact,
    gradient,
    variant,
    withLeftIcon: !!leftIcon,
    withRightIcon: !!rightIcon
  }, { name: "Button", unstyled, classNames, styles });
  const colors = theme.fn.variant({ color, variant });
  const loader = /* @__PURE__ */ react.createElement(Loader/* Loader */.a, Button_spreadValues({
    color: colors.color,
    size: theme.fn.size({ size, sizes: Button_styles_sizes }).height / 2
  }, loaderProps));
  return /* @__PURE__ */ react.createElement(UnstyledButton/* UnstyledButton */.k, Button_spreadValues({
    className: cx(classes.root, className),
    type,
    disabled,
    "data-button": true,
    "data-disabled": disabled || void 0,
    "data-loading": loading || void 0,
    ref,
    unstyled
  }, others), /* @__PURE__ */ react.createElement("div", {
    className: classes.inner
  }, (leftIcon || loading && loaderPosition === "left") && /* @__PURE__ */ react.createElement("span", {
    className: cx(classes.icon, classes.leftIcon)
  }, loading && loaderPosition === "left" ? loader : leftIcon), loading && loaderPosition === "center" && /* @__PURE__ */ react.createElement("span", {
    className: classes.centerLoader
  }, loader), /* @__PURE__ */ react.createElement("span", {
    className: classes.label,
    style: { textTransform: uppercase ? "uppercase" : void 0 }
  }, children), (rightIcon || loading && loaderPosition === "right") && /* @__PURE__ */ react.createElement("span", {
    className: cx(classes.icon, classes.rightIcon)
  }, loading && loaderPosition === "right" ? loader : rightIcon)));
});
_Button.displayName = "@mantine/core/Button";
_Button.Group = ButtonGroup;
const Button = (0,create_polymorphic_component/* createPolymorphicComponent */.F)(_Button);


//# sourceMappingURL=Button.js.map


/***/ }),

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

/***/ 8514:
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
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6869);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={title:'APIs',tags:['API','Website','Plot System']};const contentTitle=undefined;const metadata={"unversionedId":"development/apis","id":"development/apis","title":"APIs","description":"Here you can find a collection of publicly available BuildTheEarth APIs that build on the REST and OpenApi 3 standards.","source":"@site/docs/development/apis.mdx","sourceDirName":"development","slug":"/development/apis","permalink":"/docs/development/apis","draft":false,"tags":[{"label":"API","permalink":"/docs/tags/api"},{"label":"Website","permalink":"/docs/tags/website"},{"label":"Plot System","permalink":"/docs/tags/plot-system"}],"version":"current","frontMatter":{"title":"APIs","tags":["API","Website","Plot System"]},"sidebar":"tutorialSidebar","previous":{"title":"General Development","permalink":"/docs/development/general"}};const assets={};const toc=[{value:'BuildTheEarth.net Website API',id:'buildtheearthnet-website-api',level:2},{value:'Plot System API',id:'plot-system-api',level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_docs_website_docs_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Here you can find a collection of publicly available BuildTheEarth APIs that build on the REST and OpenApi 3 standards.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"note"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},`Not all Documentation of these APIs are fully complete yet.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"buildtheearthnet-website-api"},`BuildTheEarth.net Website API`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The BuildTheEarth.net API is used on the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://buildtheearth.net"},`BuildTheEarth Website`),` and can be used by Buildteams to implement the data from the Website into their Projects. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Github Repository: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/BuildTheEarth/website-node-backend"},`website-node-backend`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br",null),`
Swagger File: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://raw.githubusercontent.com/BuildTheEarth/website-node-backend/main/swagger.json"},`swagger.json`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{src:"https://buildtheearth.github.io/website-node-backend/",width:"100%",height:"700px",style:{backgroundColor:'#ffffff'}}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z,{my:"md",component:"a",target:"blank",href:"https://buildtheearth.github.io/website-node-backend/",mdxType:"Button"},"Open in new Tab"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"plot-system-api"},`Plot System API`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The Plot System API provides functions to Buildteams to integrate the data provided by the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://app.milanote.com/1MSOj31AvD6P5c/global-plot-system?p=9H9SRXRJA3f"},`Global Plot System`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Github Repository: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/BuildTheEarth/PlotSystemAPI"},`PlotSystemAPI`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br",null),`
Swagger File: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://raw.githubusercontent.com/BuildTheEarth/PlotSystemAPI/main/swagger.json"},`swagger.json`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br",null),`
Postman File: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://raw.githubusercontent.com/BuildTheEarth/PlotSystemAPI/master/testing/postman/PlotSystemAPI.postman_collection.json"},`postman.json`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{src:"https://buildtheearth.github.io/PlotSystemAPI/",width:"100%",height:"700px",style:{backgroundColor:'#ffffff'}}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z,{my:"md",component:"a",target:"blank",href:"https://buildtheearth.github.io/PlotSystemAPI/",mdxType:"Button"},"Open in new Tab"));};MDXContent.isMDXComponent=true;

/***/ })

}]);