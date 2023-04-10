"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[995],{

/***/ 6222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ Accordion)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
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
  radius,
  classNames,
  styles,
  unstyled
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
      radius,
      classNames,
      styles,
      unstyled
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
const defaultProps = {};
const AccordionItem = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("AccordionItem", defaultProps, props), { children, className, value } = _a, others = __objRest(_a, ["children", "className", "value"]);
  const ctx = useAccordionContext();
  const { classes, cx } = AccordionItem_styles({ variant: ctx.variant, radius: ctx.radius }, { name: "Accordion", classNames: ctx.classNames, styles: ctx.styles, unstyled: ctx.unstyled });
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
const AccordionControl_defaultProps = {};
const AccordionControl = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("AccordionControl", AccordionControl_defaultProps, props), { disabled, onKeyDown, onClick, chevron, children, className, icon } = _a, others = AccordionControl_objRest(_a, ["disabled", "onKeyDown", "onClick", "chevron", "children", "className", "icon"]);
  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();
  const { classes, cx } = AccordionControl_styles({
    transitionDuration: ctx.transitionDuration,
    chevronPosition: ctx.chevronPosition,
    chevronSize: ctx.chevronSize,
    variant: ctx.variant,
    radius: ctx.radius
  }, { name: "Accordion", classNames: ctx.classNames, styles: ctx.styles, unstyled: ctx.unstyled });
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
    unstyled: ctx.unstyled,
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
const raf = typeof window !== "undefined" && window.requestAnimationFrame;
function useCollapse({
  transitionDuration,
  transitionTimingFunction = "ease",
  onTransitionEnd = () => {
  },
  opened
}) {
  const el = (0,react.useRef)(null);
  const collapsedHeight = "0px";
  const collapsedStyles = {
    display: "none",
    height: "0px",
    overflow: "hidden"
  };
  const [styles, setStylesRaw] = (0,react.useState)(opened ? {} : collapsedStyles);
  const setStyles = (newStyles) => {
    (0,react_dom.flushSync)(() => setStylesRaw(newStyles));
  };
  const mergeStyles = (newStyles) => {
    setStyles((oldStyles) => use_collapse_spreadValues(use_collapse_spreadValues({}, oldStyles), newStyles));
  };
  function getTransitionStyles(height) {
    const _duration = transitionDuration || getAutoHeightDuration(height);
    return {
      transition: `height ${_duration}ms ${transitionTimingFunction}`
    };
  }
  (0,use_did_update/* useDidUpdate */.l)(() => {
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
  const handleTransitionEnd = (e) => {
    if (e.target !== el.current || e.propertyName !== "height") {
      return;
    }
    if (opened) {
      const height = getElementHeight(el);
      if (height === styles.height) {
        setStyles({});
      } else {
        mergeStyles({ height });
      }
      onTransitionEnd();
    } else if (styles.height === collapsedHeight) {
      setStyles(collapsedStyles);
      onTransitionEnd();
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
const Collapse_defaultProps = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: true
};
const Collapse = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Collapse", Collapse_defaultProps, props), {
    children,
    in: opened,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    animateOpacity
  } = _a, others = Collapse_objRest(_a, [
    "children",
    "in",
    "transitionDuration",
    "transitionTimingFunction",
    "style",
    "onTransitionEnd",
    "animateOpacity"
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
    onTransitionEnd
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
const AccordionPanel_defaultProps = {};
function AccordionPanel(props) {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("AccordionPanel", AccordionPanel_defaultProps, props), { children, className } = _a, others = AccordionPanel_objRest(_a, ["children", "className"]);
  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();
  const { classNames, styles, unstyled } = useAccordionContext();
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
    radius,
    classNames,
    styles,
    unstyled
  }, /* @__PURE__ */ react.createElement(Box/* Box */.x, Accordion_spreadProps(Accordion_spreadValues({}, others), {
    "data-accordion": true
  }), children));
}
Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;
Accordion.displayName = "@mantine/core/Accordion";


//# sourceMappingURL=Accordion.js.map


/***/ }),

/***/ 6289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _use_isomorphic_effect_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(129);



const randomId = () => `mantine-${Math.random().toString(36).slice(2, 11)}`;
const useReactId = react__WEBPACK_IMPORTED_MODULE_0__["useId".toString()] || (() => void 0);
function useClientId() {
  const [uuid, setUuid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,_use_isomorphic_effect_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_1__/* .useIsomorphicEffect */ .Y)(() => {
    setUuid(randomId());
  }, []);
  return uuid;
}
function getReactId() {
  const id = useReactId();
  return id ? `mantine-${id.replace(/:/g, "")}` : "";
}
function useId(staticId) {
  return typeof staticId === "string" ? staticId : getReactId() || useClientId();
}


//# sourceMappingURL=use-id.js.map


/***/ }),

/***/ 129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useIsomorphicEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


const useIsomorphicEffect = typeof document !== "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


//# sourceMappingURL=use-isomorphic-effect.js.map


/***/ }),

/***/ 4731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ mergeRefs),
  "Y": () => (/* binding */ useMergedRef)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/utils/assign-ref/assign-ref.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}


//# sourceMappingURL=assign-ref.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.js



function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
function useMergedRef(...refs) {
  return (0,react.useCallback)(mergeRefs(...refs), refs);
}


//# sourceMappingURL=use-merged-ref.js.map


/***/ }),

/***/ 5851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useUncontrolled)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function useUncontrolled({
  value,
  defaultValue,
  finalValue,
  onChange = () => {
  }
}) {
  const [uncontrolledValue, setUncontrolledValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue !== void 0 ? defaultValue : finalValue);
  const handleUncontrolledChange = (val) => {
    setUncontrolledValue(val);
    onChange == null ? void 0 : onChange(val);
  };
  if (value !== void 0) {
    return [value, onChange, true];
  }
  return [uncontrolledValue, handleUncontrolledChange, false];
}


//# sourceMappingURL=use-uncontrolled.js.map


/***/ }),

/***/ 8216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ createSafeContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function createSafeContext(errorMessage) {
  const Context = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value
  }, children);
  return [Provider, useSafeContext];
}


//# sourceMappingURL=create-safe-context.js.map


/***/ }),

/***/ 5985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ createScopedKeydownHandler)
});

;// CONCATENATED MODULE: ./node_modules/@mantine/utils/esm/find-element-ancestor/find-element-ancestor.js
function findElementAncestor(element, selector) {
  let _element = element;
  while ((_element = _element.parentElement) && !_element.matches(selector))
    ;
  return _element;
}


//# sourceMappingURL=find-element-ancestor.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/utils/esm/create-scoped-keydown-handler/create-scoped-keydown-handler.js


function getPreviousIndex(current, elements, loop) {
  for (let i = current - 1; i >= 0; i -= 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function getNextIndex(current, elements, loop) {
  for (let i = current + 1; i < elements.length; i += 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function onSameLevel(target, sibling, parentSelector) {
  return findElementAncestor(target, parentSelector) === findElementAncestor(sibling, parentSelector);
}
function createScopedKeydownHandler({
  parentSelector,
  siblingSelector,
  onKeyDown,
  loop = true,
  activateOnFocus = false,
  dir = "rtl",
  orientation
}) {
  return (event) => {
    var _a;
    onKeyDown == null ? void 0 : onKeyDown(event);
    const elements = Array.from(((_a = findElementAncestor(event.currentTarget, parentSelector)) == null ? void 0 : _a.querySelectorAll(siblingSelector)) || []).filter((node) => onSameLevel(event.currentTarget, node, parentSelector));
    const current = elements.findIndex((el) => event.currentTarget === el);
    const _nextIndex = getNextIndex(current, elements, loop);
    const _previousIndex = getPreviousIndex(current, elements, loop);
    const nextIndex = dir === "rtl" ? _previousIndex : _nextIndex;
    const previousIndex = dir === "rtl" ? _nextIndex : _previousIndex;
    switch (event.key) {
      case "ArrowRight": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[nextIndex].focus();
          activateOnFocus && elements[nextIndex].click();
        }
        break;
      }
      case "ArrowLeft": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[previousIndex].focus();
          activateOnFocus && elements[previousIndex].click();
        }
        break;
      }
      case "ArrowUp": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_previousIndex].focus();
          activateOnFocus && elements[_previousIndex].click();
        }
        break;
      }
      case "ArrowDown": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_nextIndex].focus();
          activateOnFocus && elements[_nextIndex].click();
        }
        break;
      }
      case "Home": {
        event.stopPropagation();
        event.preventDefault();
        !elements[0].disabled && elements[0].focus();
        break;
      }
      case "End": {
        event.stopPropagation();
        event.preventDefault();
        const last = elements.length - 1;
        !elements[last].disabled && elements[last].focus();
        break;
      }
    }
  };
}


//# sourceMappingURL=create-scoped-keydown-handler.js.map


/***/ }),

/***/ 1943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getSafeId)
/* harmony export */ });
function getSafeId(uid, errorMessage) {
  return (value) => {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error(errorMessage);
    }
    return `${uid}-${value}`;
  };
}


//# sourceMappingURL=get-safe-id.js.map


/***/ }),

/***/ 4477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useDocsVersion),
/* harmony export */   "q": () => (/* binding */ DocsVersionProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(902);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);/**
 * Provide the current version's metadata to your children.
 */function DocsVersionProvider(_ref){let{children,version}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:version},children);}/**
 * Gets the version metadata of the current doc page.
 */function useDocsVersion(){const version=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(version===null){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .i6('DocsVersionProvider');}return version;}

/***/ })

}]);