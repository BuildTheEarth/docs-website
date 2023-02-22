"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[8054],{

/***/ 6222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ Accordion)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 25 modules
var MantineProvider = __webpack_require__(4215);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/StylesApiContext.js
var StylesApiContext = __webpack_require__(4526);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/get-safe-id/get-safe-id.js
var get_safe_id = __webpack_require__(1943);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-id/use-id.js
var use_id = __webpack_require__(6289);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.js
var use_uncontrolled = __webpack_require__(5851);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-safe-context/create-safe-context.js
var create_safe_context = __webpack_require__(8216);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/Accordion.errors.js
const ACCORDION_ERRORS = {
  context: "Accordion component was not found in the tree",
  itemContext: "Accordion.Item component was not found in the tree",
  value: "Accordion.Item component was rendered with invalid value or without value"
};


//# sourceMappingURL=Accordion.errors.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/Accordion.context.js



const [AccordionContextProvider, useAccordionContext] = (0,create_safe_context/* createSafeContext */.R)(ACCORDION_ERRORS.context);


//# sourceMappingURL=Accordion.context.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/AccordionProvider.js






function AccordionProvider({
  children,
  multiple,
  value,
  defaultValue,
  onChange,
  id,
  loop,
  transitionDuration,
  disableChevronRotation,
  chevronPosition,
  chevronSize,
  order,
  chevron,
  variant,
  radius
}) {
  const uid = (0,use_id/* useId */.M)(id);
  const [_value, handleChange] = (0,use_uncontrolled/* useUncontrolled */.C)({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange
  });
  const isItemActive = (itemValue) => Array.isArray(_value) ? _value.includes(itemValue) : itemValue === _value;
  const handleItemChange = (itemValue) => {
    const nextValue = Array.isArray(_value) ? _value.includes(itemValue) ? _value.filter((selectedValue) => selectedValue !== itemValue) : [..._value, itemValue] : itemValue === _value ? null : itemValue;
    handleChange(nextValue);
  };
  return /* @__PURE__ */ react.createElement(AccordionContextProvider, {
    value: {
      isItemActive,
      onChange: handleItemChange,
      getControlId: (0,get_safe_id/* getSafeId */.A)(`${uid}-control`, ACCORDION_ERRORS.value),
      getRegionId: (0,get_safe_id/* getSafeId */.A)(`${uid}-panel`, ACCORDION_ERRORS.value),
      transitionDuration,
      disableChevronRotation,
      chevronPosition,
      chevronSize,
      order,
      chevron,
      loop,
      variant,
      radius
    }
  }, children);
}


//# sourceMappingURL=AccordionProvider.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/AccordionItem.context.js



const [AccordionItemContextProvider, useAccordionItemContext] = (0,create_safe_context/* createSafeContext */.R)(ACCORDION_ERRORS.itemContext);


//# sourceMappingURL=AccordionItem.context.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/AccordionItem/AccordionItem.styles.js


function getVariantStyles(theme, { variant, radius }) {
  const borderColor = theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3];
  const filledColor = theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0];
  const borderRadius = theme.fn.radius(radius);
  if (variant === "default") {
    return {
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      borderBottom: `1px solid ${borderColor}`
    };
  }
  if (variant === "contained") {
    return {
      border: `1px solid ${borderColor}`,
      transition: "background-color 150ms ease",
      "&[data-active]": {
        backgroundColor: filledColor
      },
      "&:first-of-type": {
        borderTopRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        "& > [data-accordion-control]": {
          borderTopRightRadius: borderRadius,
          borderTopLeftRadius: borderRadius
        }
      },
      "&:last-of-type": {
        borderBottomRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        "& > [data-accordion-control]": {
          borderBottomRightRadius: borderRadius,
          borderBottomLeftRadius: borderRadius
        }
      },
      "& + &": {
        borderTop: 0
      }
    };
  }
  if (variant === "filled") {
    return {
      borderRadius,
      "&[data-active]": {
        backgroundColor: filledColor
      }
    };
  }
  if (variant === "separated") {
    return {
      borderRadius,
      backgroundColor: filledColor,
      border: "1px solid transparent",
      transition: "background-color 150ms ease",
      "& + &": {
        marginTop: theme.spacing.md
      },
      "&[data-active]": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        borderColor
      }
    };
  }
  return {};
}
var useStyles = (0,create_styles/* createStyles */.k)((theme, params) => ({
  item: getVariantStyles(theme, params)
}));

/* harmony default export */ const AccordionItem_styles = (useStyles);
//# sourceMappingURL=AccordionItem.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 9 modules
var Box = __webpack_require__(7414);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/AccordionItem/AccordionItem.js







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
const AccordionItem = (0,react.forwardRef)((_a, ref) => {
  var _b = _a, { children, className, value } = _b, others = __objRest(_b, ["children", "className", "value"]);
  const { classNames, styles, unstyled } = (0,StylesApiContext/* useContextStylesApi */.F)();
  const ctx = useAccordionContext();
  const { classes, cx } = AccordionItem_styles({ variant: ctx.variant, radius: ctx.radius }, { name: "Accordion", classNames, styles, unstyled });
  return /* @__PURE__ */ react.createElement(AccordionItemContextProvider, {
    value: { value }
  }, /* @__PURE__ */ react.createElement(Box/* Box */.x, __spreadValues({
    ref,
    className: cx(classes.item, className),
    "data-active": ctx.isItemActive(value) || void 0
  }, others), children));
});
AccordionItem.displayName = "@mantine/core/AccordionItem";


//# sourceMappingURL=AccordionItem.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-scoped-keydown-handler/create-scoped-keydown-handler.js + 1 modules
var create_scoped_keydown_handler = __webpack_require__(5985);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/AccordionControl/AccordionControl.styles.js


var AccordionControl_styles_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var AccordionControl_styles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var AccordionControl_styles_hasOwnProp = Object.prototype.hasOwnProperty;
var AccordionControl_styles_propIsEnum = Object.prototype.propertyIsEnumerable;
var AccordionControl_styles_defNormalProp = (obj, key, value) => key in obj ? AccordionControl_styles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var AccordionControl_styles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (AccordionControl_styles_hasOwnProp.call(b, prop))
      AccordionControl_styles_defNormalProp(a, prop, b[prop]);
  if (AccordionControl_styles_getOwnPropSymbols)
    for (var prop of AccordionControl_styles_getOwnPropSymbols(b)) {
      if (AccordionControl_styles_propIsEnum.call(b, prop))
        AccordionControl_styles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var AccordionControl_styles_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (AccordionControl_styles_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && AccordionControl_styles_getOwnPropSymbols)
    for (var prop of AccordionControl_styles_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && AccordionControl_styles_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function AccordionControl_styles_getVariantStyles(theme, { variant }) {
  if (variant === "default" || variant === "contained") {
    return theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
    });
  }
  return {};
}
var AccordionControl_styles_useStyles = (0,create_styles/* createStyles */.k)((theme, _a) => {
  var _b = _a, { transitionDuration, chevronPosition, chevronSize } = _b, params = AccordionControl_styles_objRest(_b, ["transitionDuration", "chevronPosition", "chevronSize"]);
  return {
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: chevronPosition === "left" ? 0 : theme.spacing.sm,
      marginLeft: chevronPosition === "left" ? theme.spacing.lg : 0
    },
    chevron: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: `transform ${transitionDuration}ms ease`,
      marginRight: chevronPosition === "right" ? 0 : theme.spacing.sm,
      marginLeft: chevronPosition === "right" ? theme.spacing.lg : 0,
      width: chevronSize,
      minWidth: chevronSize,
      "&[data-rotate]": {
        transform: "rotate(180deg)"
      }
    },
    label: {
      color: "inherit",
      fontWeight: 400,
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    itemTitle: {
      margin: 0,
      padding: 0
    },
    control: __spreadProps(AccordionControl_styles_spreadValues(AccordionControl_styles_spreadValues(AccordionControl_styles_spreadValues({}, theme.fn.focusStyles()), theme.fn.fontStyles()), AccordionControl_styles_getVariantStyles(theme, params)), {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: chevronPosition === "right" ? "row-reverse" : "row",
      padding: `${theme.spacing.md}px ${theme.spacing.md / 2}px`,
      paddingLeft: chevronPosition === "right" ? `calc(${theme.spacing.sm}px + 4px)` : null,
      textAlign: "left",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      "&:disabled": AccordionControl_styles_spreadValues({
        opacity: 0.4,
        cursor: "not-allowed"
      }, theme.fn.hover({ backgroundColor: "transparent" }))
    })
  };
});

/* harmony default export */ const AccordionControl_styles = (AccordionControl_styles_useStyles);
//# sourceMappingURL=AccordionControl.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.js + 1 modules
var UnstyledButton = __webpack_require__(4736);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/AccordionControl/AccordionControl.js








var AccordionControl_defProp = Object.defineProperty;
var AccordionControl_defProps = Object.defineProperties;
var AccordionControl_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var AccordionControl_getOwnPropSymbols = Object.getOwnPropertySymbols;
var AccordionControl_hasOwnProp = Object.prototype.hasOwnProperty;
var AccordionControl_propIsEnum = Object.prototype.propertyIsEnumerable;
var AccordionControl_defNormalProp = (obj, key, value) => key in obj ? AccordionControl_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var AccordionControl_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (AccordionControl_hasOwnProp.call(b, prop))
      AccordionControl_defNormalProp(a, prop, b[prop]);
  if (AccordionControl_getOwnPropSymbols)
    for (var prop of AccordionControl_getOwnPropSymbols(b)) {
      if (AccordionControl_propIsEnum.call(b, prop))
        AccordionControl_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var AccordionControl_spreadProps = (a, b) => AccordionControl_defProps(a, AccordionControl_getOwnPropDescs(b));
var AccordionControl_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (AccordionControl_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && AccordionControl_getOwnPropSymbols)
    for (var prop of AccordionControl_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && AccordionControl_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const AccordionControl = (0,react.forwardRef)((_a, ref) => {
  var _b = _a, {
    disabled,
    onKeyDown,
    onClick,
    chevron,
    children,
    className,
    icon
  } = _b, others = AccordionControl_objRest(_b, [
    "disabled",
    "onKeyDown",
    "onClick",
    "chevron",
    "children",
    "className",
    "icon"
  ]);
  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();
  const { classNames, styles, unstyled } = (0,StylesApiContext/* useContextStylesApi */.F)();
  const { classes, cx } = AccordionControl_styles({
    transitionDuration: ctx.transitionDuration,
    chevronPosition: ctx.chevronPosition,
    chevronSize: ctx.chevronSize,
    variant: ctx.variant,
    radius: ctx.radius
  }, { name: "Accordion", classNames, styles, unstyled });
  const isActive = ctx.isItemActive(value);
  const shouldWrapWithHeading = typeof ctx.order === "number";
  const Heading = `h${ctx.order}`;
  const content = /* @__PURE__ */ react.createElement(UnstyledButton/* UnstyledButton */.k, AccordionControl_spreadProps(AccordionControl_spreadValues({}, others), {
    ref,
    "data-accordion-control": true,
    disabled,
    className: cx(classes.control, className),
    onClick: (event) => {
      onClick == null ? void 0 : onClick(event);
      ctx.onChange(value);
    },
    type: "button",
    "data-active": isActive || void 0,
    "aria-expanded": isActive,
    "aria-controls": ctx.getRegionId(value),
    id: ctx.getControlId(value),
    unstyled,
    onKeyDown: (0,create_scoped_keydown_handler/* createScopedKeydownHandler */.R)({
      siblingSelector: "[data-accordion-control]",
      parentSelector: "[data-accordion]",
      activateOnFocus: false,
      loop: ctx.loop,
      orientation: "vertical",
      onKeyDown
    })
  }), /* @__PURE__ */ react.createElement("div", {
    className: classes.chevron,
    "data-rotate": !ctx.disableChevronRotation && isActive || void 0
  }, chevron || ctx.chevron), /* @__PURE__ */ react.createElement("div", {
    className: classes.label
  }, children), icon && /* @__PURE__ */ react.createElement("div", {
    className: classes.icon
  }, icon));
  return shouldWrapWithHeading ? /* @__PURE__ */ react.createElement(Heading, {
    className: classes.itemTitle
  }, content) : content;
});
AccordionControl.displayName = "@mantine/core/AccordionControl";


//# sourceMappingURL=AccordionControl.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/AccordionPanel/AccordionPanel.styles.js


var AccordionPanel_styles_defProp = Object.defineProperty;
var AccordionPanel_styles_defProps = Object.defineProperties;
var AccordionPanel_styles_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var AccordionPanel_styles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var AccordionPanel_styles_hasOwnProp = Object.prototype.hasOwnProperty;
var AccordionPanel_styles_propIsEnum = Object.prototype.propertyIsEnumerable;
var AccordionPanel_styles_defNormalProp = (obj, key, value) => key in obj ? AccordionPanel_styles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var AccordionPanel_styles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (AccordionPanel_styles_hasOwnProp.call(b, prop))
      AccordionPanel_styles_defNormalProp(a, prop, b[prop]);
  if (AccordionPanel_styles_getOwnPropSymbols)
    for (var prop of AccordionPanel_styles_getOwnPropSymbols(b)) {
      if (AccordionPanel_styles_propIsEnum.call(b, prop))
        AccordionPanel_styles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var AccordionPanel_styles_spreadProps = (a, b) => AccordionPanel_styles_defProps(a, AccordionPanel_styles_getOwnPropDescs(b));
var AccordionPanel_styles_useStyles = (0,create_styles/* createStyles */.k)((theme, _params) => ({
  panel: AccordionPanel_styles_spreadProps(AccordionPanel_styles_spreadValues({}, theme.fn.fontStyles()), {
    wordBreak: "break-word",
    lineHeight: theme.lineHeight
  }),
  content: {
    padding: theme.spacing.md,
    paddingTop: `calc(${theme.spacing.xs}px / 2)`
  }
}));

/* harmony default export */ const AccordionPanel_styles = (AccordionPanel_styles_useStyles);
//# sourceMappingURL=AccordionPanel.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.js
var use_reduced_motion = __webpack_require__(3678);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.js
var use_did_update = __webpack_require__(7048);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.js + 1 modules
var use_merged_ref = __webpack_require__(4731);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Collapse/use-collapse.js




var use_collapse_defProp = Object.defineProperty;
var use_collapse_defProps = Object.defineProperties;
var use_collapse_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var use_collapse_getOwnPropSymbols = Object.getOwnPropertySymbols;
var use_collapse_hasOwnProp = Object.prototype.hasOwnProperty;
var use_collapse_propIsEnum = Object.prototype.propertyIsEnumerable;
var use_collapse_defNormalProp = (obj, key, value) => key in obj ? use_collapse_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var use_collapse_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (use_collapse_hasOwnProp.call(b, prop))
      use_collapse_defNormalProp(a, prop, b[prop]);
  if (use_collapse_getOwnPropSymbols)
    for (var prop of use_collapse_getOwnPropSymbols(b)) {
      if (use_collapse_propIsEnum.call(b, prop))
        use_collapse_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var use_collapse_spreadProps = (a, b) => use_collapse_defProps(a, use_collapse_getOwnPropDescs(b));
var use_collapse_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (use_collapse_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && use_collapse_getOwnPropSymbols)
    for (var prop of use_collapse_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && use_collapse_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function getAutoHeightDuration(height) {
  if (!height || typeof height === "string") {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function getElementHeight(el) {
  return (el == null ? void 0 : el.current) ? el.current.scrollHeight : "auto";
}
function getElementWidth(el) {
  return (el == null ? void 0 : el.current) ? el.current.scrollWidth : "auto";
}
const raf = typeof window !== "undefined" && window.requestAnimationFrame;
function useCollapse({
  transitionDuration,
  transitionTimingFunction = "ease",
  onTransitionEnd = () => {
  },
  opened,
  axis
}) {
  const el = (0,react.useRef)(null);
  const collapsedHeight = "0px";
  const [styles, setStylesRaw] = (0,react.useState)({});
  const setStyles = (newStyles) => {
    (0,react_dom.flushSync)(() => setStylesRaw(newStyles));
  };
  const mergeStyles = (newStyles) => {
    setStyles((oldStyles) => use_collapse_spreadValues(use_collapse_spreadValues({}, oldStyles), newStyles));
  };
  function getTransitionStyles(height) {
    const _duration = transitionDuration || getAutoHeightDuration(height);
    return {
      transitionProperty: `${axis === "x" ? "width" : "height"}`,
      transitionDuration: `${_duration}ms`,
      transitionTimingFunction: `${transitionTimingFunction}`
    };
  }
  const getDefaultSizes = () => {
    const oldStyles = styles;
    setStyles({});
    const sizes = { width: getElementWidth(el), height: getElementHeight(el) };
    setStyles(oldStyles);
    return sizes;
  };
  const getCollapsedStyles = () => {
    const { height } = getDefaultSizes();
    return {
      x: { height, width: "0px", overflow: "hidden" },
      y: { display: "none", height: "0px", overflow: "hidden" }
    };
  };
  (0,react.useEffect)(() => {
    raf(() => {
      const { x, y } = getCollapsedStyles();
      if (axis === "x" && !opened) {
        setStyles(use_collapse_spreadValues({}, x));
      } else if (axis === "y" && !opened) {
        setStyles(use_collapse_spreadValues({}, y));
      }
    });
  }, []);
  (0,use_did_update/* useDidUpdate */.l)(() => {
    if (axis === "x")
      return;
    if (opened) {
      raf(() => {
        mergeStyles({ willChange: "height", display: "block", overflow: "hidden" });
        raf(() => {
          const height = getElementHeight(el);
          mergeStyles(use_collapse_spreadProps(use_collapse_spreadValues({}, getTransitionStyles(height)), { height }));
        });
      });
    } else {
      raf(() => {
        const height = getElementHeight(el);
        mergeStyles(use_collapse_spreadProps(use_collapse_spreadValues({}, getTransitionStyles(height)), { willChange: "height", height }));
        raf(() => mergeStyles({ height: collapsedHeight, overflow: "hidden" }));
      });
    }
  }, [opened]);
  (0,use_did_update/* useDidUpdate */.l)(() => {
    if (axis === "y")
      return;
    if (opened) {
      raf(() => {
        const { width } = getDefaultSizes();
        mergeStyles({
          display: "block",
          overflow: "hidden",
          willChange: "width",
          flexShrink: 0
        });
        raf(() => {
          mergeStyles(use_collapse_spreadProps(use_collapse_spreadValues({}, getTransitionStyles(width)), { width }));
        });
      });
    } else {
      raf(() => {
        const { width, height } = getDefaultSizes();
        mergeStyles(use_collapse_spreadProps(use_collapse_spreadValues({}, getTransitionStyles(width)), {
          flexShrink: 0,
          willChange: "width",
          width,
          height
        }));
        raf(() => mergeStyles({ width: "0px", overflow: "hidden" }));
      });
    }
  }, [opened]);
  const handleTransitionEnd = (e) => {
    if (e.target !== el.current || !(e.propertyName === "width" || "height")) {
      return;
    }
    onTransitionEnd();
    if (opened) {
      setStyles({});
    } else {
      const { x, y } = getCollapsedStyles();
      if (axis === "x")
        setStyles(x);
      else
        setStyles(y);
    }
  };
  function getCollapseProps(_a = {}) {
    var _b = _a, { style = {}, refKey = "ref" } = _b, rest = use_collapse_objRest(_b, ["style", "refKey"]);
    const theirRef = rest[refKey];
    return use_collapse_spreadProps(use_collapse_spreadValues({
      "aria-hidden": !opened
    }, rest), {
      [refKey]: (0,use_merged_ref/* mergeRefs */.l)(el, theirRef),
      onTransitionEnd: handleTransitionEnd,
      style: use_collapse_spreadValues(use_collapse_spreadValues({ boxSizing: "border-box" }, style), styles)
    });
  }
  return getCollapseProps;
}


//# sourceMappingURL=use-collapse.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/style-system-props/extract-system-styles/extract-system-styles.js
var extract_system_styles = __webpack_require__(2756);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Collapse/Collapse.js







var Collapse_defProp = Object.defineProperty;
var Collapse_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Collapse_hasOwnProp = Object.prototype.hasOwnProperty;
var Collapse_propIsEnum = Object.prototype.propertyIsEnumerable;
var Collapse_defNormalProp = (obj, key, value) => key in obj ? Collapse_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Collapse_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Collapse_hasOwnProp.call(b, prop))
      Collapse_defNormalProp(a, prop, b[prop]);
  if (Collapse_getOwnPropSymbols)
    for (var prop of Collapse_getOwnPropSymbols(b)) {
      if (Collapse_propIsEnum.call(b, prop))
        Collapse_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Collapse_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Collapse_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Collapse_getOwnPropSymbols)
    for (var prop of Collapse_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Collapse_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: true,
  axis: "y"
};
const Collapse = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Collapse", defaultProps, props), {
    children,
    in: opened,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    animateOpacity,
    axis
  } = _a, others = Collapse_objRest(_a, [
    "children",
    "in",
    "transitionDuration",
    "transitionTimingFunction",
    "style",
    "onTransitionEnd",
    "animateOpacity",
    "axis"
  ]);
  const theme = (0,MantineProvider/* useMantineTheme */.rZ)();
  const shouldReduceMotion = (0,use_reduced_motion/* useReducedMotion */.J)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 0 : transitionDuration;
  const { systemStyles, rest } = (0,extract_system_styles/* extractSystemStyles */.x)(others);
  const getCollapseProps = useCollapse({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd,
    axis
  });
  if (duration === 0) {
    return opened ? /* @__PURE__ */ react.createElement(Box/* Box */.x, Collapse_spreadValues({}, rest), children) : null;
  }
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, Collapse_spreadValues({}, getCollapseProps(Collapse_spreadValues(Collapse_spreadValues({ style, ref }, rest), systemStyles))), /* @__PURE__ */ react.createElement("div", {
    style: {
      opacity: opened || !animateOpacity ? 1 : 0,
      transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : "none"
    }
  }, children));
});
Collapse.displayName = "@mantine/core/Collapse";


//# sourceMappingURL=Collapse.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/AccordionPanel/AccordionPanel.js







var AccordionPanel_defProp = Object.defineProperty;
var AccordionPanel_defProps = Object.defineProperties;
var AccordionPanel_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var AccordionPanel_getOwnPropSymbols = Object.getOwnPropertySymbols;
var AccordionPanel_hasOwnProp = Object.prototype.hasOwnProperty;
var AccordionPanel_propIsEnum = Object.prototype.propertyIsEnumerable;
var AccordionPanel_defNormalProp = (obj, key, value) => key in obj ? AccordionPanel_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var AccordionPanel_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (AccordionPanel_hasOwnProp.call(b, prop))
      AccordionPanel_defNormalProp(a, prop, b[prop]);
  if (AccordionPanel_getOwnPropSymbols)
    for (var prop of AccordionPanel_getOwnPropSymbols(b)) {
      if (AccordionPanel_propIsEnum.call(b, prop))
        AccordionPanel_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var AccordionPanel_spreadProps = (a, b) => AccordionPanel_defProps(a, AccordionPanel_getOwnPropDescs(b));
var AccordionPanel_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (AccordionPanel_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && AccordionPanel_getOwnPropSymbols)
    for (var prop of AccordionPanel_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && AccordionPanel_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function AccordionPanel(_a) {
  var _b = _a, { children, className } = _b, others = AccordionPanel_objRest(_b, ["children", "className"]);
  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();
  const { classNames, styles, unstyled } = (0,StylesApiContext/* useContextStylesApi */.F)();
  const { classes, cx } = AccordionPanel_styles({ variant: ctx.variant, radius: ctx.radius }, { name: "Accordion", classNames, styles, unstyled });
  return /* @__PURE__ */ react.createElement(Collapse, AccordionPanel_spreadProps(AccordionPanel_spreadValues({}, others), {
    className: cx(classes.panel, className),
    in: ctx.isItemActive(value),
    transitionDuration: ctx.transitionDuration,
    role: "region",
    id: ctx.getRegionId(value),
    "aria-labelledby": ctx.getControlId(value)
  }), /* @__PURE__ */ react.createElement("div", {
    className: classes.content
  }, children));
}
AccordionPanel.displayName = "@mantine/core/AccordionPanel";


//# sourceMappingURL=AccordionPanel.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/ChevronIcon.js


var ChevronIcon_defProp = Object.defineProperty;
var ChevronIcon_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ChevronIcon_hasOwnProp = Object.prototype.hasOwnProperty;
var ChevronIcon_propIsEnum = Object.prototype.propertyIsEnumerable;
var ChevronIcon_defNormalProp = (obj, key, value) => key in obj ? ChevronIcon_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ChevronIcon_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ChevronIcon_hasOwnProp.call(b, prop))
      ChevronIcon_defNormalProp(a, prop, b[prop]);
  if (ChevronIcon_getOwnPropSymbols)
    for (var prop of ChevronIcon_getOwnPropSymbols(b)) {
      if (ChevronIcon_propIsEnum.call(b, prop))
        ChevronIcon_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function ChevronIcon(props) {
  return /* @__PURE__ */ react.createElement("svg", ChevronIcon_spreadValues({
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), /* @__PURE__ */ react.createElement("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}


//# sourceMappingURL=ChevronIcon.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Accordion/Accordion.js









var Accordion_defProp = Object.defineProperty;
var Accordion_defProps = Object.defineProperties;
var Accordion_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Accordion_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Accordion_hasOwnProp = Object.prototype.hasOwnProperty;
var Accordion_propIsEnum = Object.prototype.propertyIsEnumerable;
var Accordion_defNormalProp = (obj, key, value) => key in obj ? Accordion_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Accordion_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Accordion_hasOwnProp.call(b, prop))
      Accordion_defNormalProp(a, prop, b[prop]);
  if (Accordion_getOwnPropSymbols)
    for (var prop of Accordion_getOwnPropSymbols(b)) {
      if (Accordion_propIsEnum.call(b, prop))
        Accordion_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Accordion_spreadProps = (a, b) => Accordion_defProps(a, Accordion_getOwnPropDescs(b));
var Accordion_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Accordion_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Accordion_getOwnPropSymbols)
    for (var prop of Accordion_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Accordion_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Accordion_defaultProps = {
  multiple: false,
  disableChevronRotation: false,
  transitionDuration: 200,
  chevronPosition: "right",
  variant: "default",
  chevronSize: 24,
  chevron: /* @__PURE__ */ react.createElement(ChevronIcon, null)
};
function Accordion(props) {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Accordion", Accordion_defaultProps, props), {
    id,
    loop,
    children,
    multiple,
    value,
    defaultValue,
    onChange,
    transitionDuration,
    disableChevronRotation,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    classNames,
    styles,
    unstyled,
    variant,
    radius
  } = _a, others = Accordion_objRest(_a, [
    "id",
    "loop",
    "children",
    "multiple",
    "value",
    "defaultValue",
    "onChange",
    "transitionDuration",
    "disableChevronRotation",
    "chevronPosition",
    "chevronSize",
    "order",
    "chevron",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "radius"
  ]);
  return /* @__PURE__ */ react.createElement(AccordionProvider, {
    id,
    multiple,
    value,
    defaultValue,
    onChange,
    loop,
    transitionDuration,
    disableChevronRotation,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    variant,
    radius
  }, /* @__PURE__ */ react.createElement(StylesApiContext/* StylesApiProvider */.V, {
    classNames,
    styles,
    unstyled
  }, /* @__PURE__ */ react.createElement(Box/* Box */.x, Accordion_spreadProps(Accordion_spreadValues({}, others), {
    "data-accordion": true
  }), children)));
}
Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;
Accordion.displayName = "@mantine/core/Accordion";


//# sourceMappingURL=Accordion.js.map


/***/ }),

/***/ 606:
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
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 19 modules
var Layout = __webpack_require__(1837);
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
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"backToTopButton":"backToTopButton_sjWU","backToTopButtonShow":"backToTopButtonShow_xfvO"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BackToTopButton(){const{shown,scrollToTop}=useBackToTopButton({threshold:300});return/*#__PURE__*/react.createElement("button",{"aria-label":(0,Translate/* translate */.I)({id:'theme.BackToTopButton.buttonAriaLabel',message:'Scroll back to top',description:'The ARIA label for the back to top button'}),className:(0,clsx_m/* default */.Z)('clean-btn',ThemeClassNames/* ThemeClassNames.common.backToTopButton */.k.common.backToTopButton,styles_module.backToTopButton,shown&&styles_module.backToTopButtonShow),type:"button",onClick:scrollToTop});}
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6550);
// EXTERNAL MODULE: ./src/theme/DocSidebar/index.tsx + 2 modules
var DocSidebar = __webpack_require__(6279);
// EXTERNAL MODULE: ./src/theme/Icon/Arrow/index.tsx
var Arrow = __webpack_require__(4818);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ExpandButton_styles_module = ({"expandButton":"expandButton_m80_","expandButtonIcon":"expandButtonIcon_BlDH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageLayoutSidebarExpandButton(_ref){let{toggleSidebar}=_ref;return/*#__PURE__*/react.createElement("div",{className:ExpandButton_styles_module.expandButton,title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonTitle',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonAriaLabel',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar},/*#__PURE__*/react.createElement(Arrow/* default */.Z,{className:ExpandButton_styles_module.expandButtonIcon}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Sidebar_styles_module = ({"docSidebarContainer":"docSidebarContainer_b6E3","docSidebarContainerHidden":"docSidebarContainerHidden_b3ry"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange(_ref){let{children}=_ref;const sidebar=(0,docsSidebar/* useDocsSidebar */.V)();return/*#__PURE__*/react.createElement(react.Fragment,{key:sidebar?.name??'noSidebar'},children);}function DocPageLayoutSidebar(_ref2){let{sidebar,hiddenSidebarContainer,setHiddenSidebarContainer}=_ref2;const{pathname}=(0,react_router/* useLocation */.TH)();const[hiddenSidebar,setHiddenSidebar]=(0,react.useState)(false);const toggleSidebar=(0,react.useCallback)(()=>{if(hiddenSidebar){setHiddenSidebar(false);}setHiddenSidebarContainer(value=>!value);},[setHiddenSidebarContainer,hiddenSidebar]);return/*#__PURE__*/react.createElement("aside",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarContainer */.k.docs.docSidebarContainer,Sidebar_styles_module.docSidebarContainer,hiddenSidebarContainer&&Sidebar_styles_module.docSidebarContainerHidden),onTransitionEnd:e=>{if(!e.currentTarget.classList.contains(Sidebar_styles_module.docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}}},/*#__PURE__*/react.createElement(ResetOnSidebarChange,null,/*#__PURE__*/react.createElement(DocSidebar/* default */.Z,{sidebar:sidebar,path:pathname,onCollapse:toggleSidebar,isHidden:hiddenSidebar})),hiddenSidebar&&/*#__PURE__*/react.createElement(DocPageLayoutSidebarExpandButton,{toggleSidebar:toggleSidebar}));}
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
// EXTERNAL MODULE: ./src/theme/NotFound.tsx + 1 modules
var NotFound = __webpack_require__(4697);
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

/***/ 7816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Mobile)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(5281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(3102);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js + 1 modules
var navbarMobileSidebar = __webpack_require__(2961);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(902);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docSidebarItemsExpandedState.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const EmptyContext=Symbol('EmptyContext');const Context=/*#__PURE__*/react.createContext(EmptyContext);/**
 * Should be used to wrap one sidebar category level. This provider syncs the
 * expanded states of all sibling categories, and categories can choose to
 * collapse itself if another one is expanded.
 */function DocSidebarItemsExpandedStateProvider(_ref){let{children}=_ref;const[expandedItem,setExpandedItem]=(0,react.useState)(null);const contextValue=(0,react.useMemo)(()=>({expandedItem,setExpandedItem}),[expandedItem]);return/*#__PURE__*/react.createElement(Context.Provider,{value:contextValue},children);}function useDocSidebarItemsExpandedState(){const value=(0,react.useContext)(Context);if(value===EmptyContext){throw new reactUtils/* ReactContextError */.i6('DocSidebarItemsExpandedStateProvider');}return value;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6668);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(6043);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(3438);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(8596);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2389);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Category/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory(_ref){let{isActive,collapsed,updateCollapsed}=_ref;const wasActive=(0,reactUtils/* usePrevious */.D9)(isActive);(0,react.useEffect)(()=>{const justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){updateCollapsed(false);}},[isActive,wasActive,collapsed,updateCollapsed]);}/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */function useCategoryHrefWithSSRFallback(item){const isBrowser=(0,useIsBrowser/* default */.Z)();return (0,react.useMemo)(()=>{if(item.href){return item.href;}// In these cases, it's not necessary to render a fallback
// We skip the "findFirstCategoryLink" computation
if(isBrowser||!item.collapsible){return undefined;}return (0,docsUtils/* findFirstCategoryLink */.Wl)(item);},[item,isBrowser]);}function CollapseButton(_ref2){let{categoryLabel,onClick}=_ref2;return/*#__PURE__*/react.createElement("button",{"aria-label":(0,Translate/* translate */.I)({id:'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',message:"Toggle the collapsible sidebar category '{label}'",description:'The ARIA label to toggle the collapsible sidebar category'},{label:categoryLabel}),type:"button",className:"clean-btn menu__caret",onClick:onClick});}function DocSidebarItemCategory(_ref3){let{item,onItemClick,activePath,level,index,...props}=_ref3;const{items,label,collapsible,className,href}=item;const{docs:{sidebar:{autoCollapseCategories}}}=(0,useThemeConfig/* useThemeConfig */.L)();const hrefWithSSRFallback=useCategoryHrefWithSSRFallback(item);const isActive=(0,docsUtils/* isActiveSidebarItem */._F)(item,activePath);const isCurrentPage=(0,routesUtils/* isSamePath */.Mg)(href,activePath);const{collapsed,setCollapsed}=(0,Collapsible/* useCollapsible */.u)({// Active categories are always initialized as expanded. The default
// (`item.collapsed`) is only used for non-active categories.
initialState:()=>{if(!collapsible){return false;}return isActive?false:item.collapsed;}});const{expandedItem,setExpandedItem}=useDocSidebarItemsExpandedState();// Use this instead of `setCollapsed`, because it is also reactive
const updateCollapsed=function(toCollapsed){if(toCollapsed===void 0){toCollapsed=!collapsed;}setExpandedItem(toCollapsed?null:index);setCollapsed(toCollapsed);};useAutoExpandActiveCategory({isActive,collapsed,updateCollapsed});(0,react.useEffect)(()=>{if(collapsible&&expandedItem!=null&&expandedItem!==index&&autoCollapseCategories){setCollapsed(true);}},[collapsible,expandedItem,index,setCollapsed,autoCollapseCategories]);return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemCategory */.k.docs.docSidebarItemCategory,ThemeClassNames/* ThemeClassNames.docs.docSidebarItemCategoryLevel */.k.docs.docSidebarItemCategoryLevel(level),'menu__list-item',{'menu__list-item--collapsed':collapsed},className)},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('menu__list-item-collapsible',{'menu__list-item-collapsible--active':isCurrentPage})},/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',{'menu__link--sublist':collapsible,'menu__link--sublist-caret':!href&&collapsible,'menu__link--active':isActive}),onClick:collapsible?e=>{onItemClick?.(item);if(href){updateCollapsed(false);}else{e.preventDefault();updateCollapsed();}}:()=>{onItemClick?.(item);},"aria-current":isCurrentPage?'page':undefined,"aria-expanded":collapsible?!collapsed:undefined,href:collapsible?hrefWithSSRFallback??'#':hrefWithSSRFallback},props),label),href&&collapsible&&/*#__PURE__*/react.createElement(CollapseButton,{categoryLabel:label,onClick:e=>{e.preventDefault();updateCollapsed();}})),/*#__PURE__*/react.createElement(Collapsible/* Collapsible */.z,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed},/*#__PURE__*/react.createElement(theme_DocSidebarItems,{items:items,tabIndex:collapsed?-1:0,onItemClick:onItemClick,activePath:activePath,level:level+1})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(3919);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"iconExternalLink":"iconExternalLink_nPIU"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconExternalLink(_ref){let{width=13.5,height=13.5}=_ref;return/*#__PURE__*/react.createElement("svg",{width:width,height:height,"aria-hidden":"true",viewBox:"0 0 24 24",className:styles_module.iconExternalLink},/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_styles_module = ({"menuExternalLink":"menuExternalLink_NmtK"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItemLink(_ref){let{item,onItemClick,activePath,level,index,...props}=_ref;const{href,label,className,autoAddBaseUrl}=item;const isActive=(0,docsUtils/* isActiveSidebarItem */._F)(item,activePath);const isInternalLink=(0,isInternalUrl/* default */.Z)(href);return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLink */.k.docs.docSidebarItemLink,ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLinkLevel */.k.docs.docSidebarItemLinkLevel(level),'menu__list-item',className),key:label},/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',!isInternalLink&&Link_styles_module.menuExternalLink,{'menu__link--active':isActive}),autoAddBaseUrl:autoAddBaseUrl,"aria-current":isActive?'page':undefined,to:href},isInternalLink&&{onClick:onItemClick?()=>onItemClick(item):undefined},props),label,!isInternalLink&&/*#__PURE__*/react.createElement(IconExternalLink,null)));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Html_styles_module = ({"menuHtmlItem":"menuHtmlItem_M9Kj"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItemHtml(_ref){let{item,level,index}=_ref;const{value,defaultStyle,className}=item;return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLink */.k.docs.docSidebarItemLink,ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLinkLevel */.k.docs.docSidebarItemLinkLevel(level),defaultStyle&&[Html_styles_module.menuHtmlItem,'menu__list-item'],className),key:index// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:value}});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItem(_ref){let{item,...props}=_ref;switch(item.type){case'category':return/*#__PURE__*/react.createElement(DocSidebarItemCategory,(0,esm_extends/* default */.Z)({item:item},props));case'html':return/*#__PURE__*/react.createElement(DocSidebarItemHtml,(0,esm_extends/* default */.Z)({item:item},props));case'link':default:return/*#__PURE__*/react.createElement(DocSidebarItemLink,(0,esm_extends/* default */.Z)({item:item},props));}}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems(_ref){let{items,...props}=_ref;return/*#__PURE__*/react.createElement(DocSidebarItemsExpandedStateProvider,null,items.map((item,index)=>/*#__PURE__*/react.createElement(DocSidebarItem,(0,esm_extends/* default */.Z)({key:index,item:item,index:index},props))));}// Optimize sidebar at each "level"
/* harmony default export */ const theme_DocSidebarItems = (/*#__PURE__*/(0,react.memo)(DocSidebarItems));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu=_ref=>{let{sidebar,path}=_ref;const mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();return/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarMenu */.k.docs.docSidebarMenu,'menu__list')},/*#__PURE__*/react.createElement(theme_DocSidebarItems,{items:sidebar,activePath:path,onItemClick:item=>{// Mobile sidebar should only be closed if the category has a link
if(item.type==='category'&&item.href){mobileSidebar.toggle();}if(item.type==='link'){mobileSidebar.toggle();}},level:1}));};function DocSidebarMobile(props){return/*#__PURE__*/react.createElement(content/* NavbarSecondaryMenuFiller */.Zo,{component:DocSidebarMobileSecondaryMenu,props:props});}/* harmony default export */ const Mobile = (/*#__PURE__*/react.memo(DocSidebarMobile));

/***/ })

}]);