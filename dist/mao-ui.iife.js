var maoUi = function(exports, vue) {
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
  exports.Button = Button;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
