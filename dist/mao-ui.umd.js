(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.maoUi = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const Button = vue.defineComponent({
    name: "button",
    setup() {
      return () => {
        return vue.createVNode(vue.Fragment, null, [vue.createVNode("button", null, [vue.createTextVNode("\u6309\u94AE")])]);
      };
    }
  });
  const entry = {
    install(app) {
      app.component(Button.name, Button);
    }
  };
  exports2.Button = Button;
  exports2.default = entry;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
