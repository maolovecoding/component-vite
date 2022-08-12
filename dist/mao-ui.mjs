import { defineComponent, createVNode, Fragment, createTextVNode } from "vue";
const Button = defineComponent({
  name: "button",
  setup() {
    return () => {
      return createVNode(Fragment, null, [createVNode("button", null, [createTextVNode("\u6309\u94AE")])]);
    };
  }
});
const entry = {
  install(app) {
    app.component(Button.name, Button);
  }
};
export {
  Button,
  entry as default
};
