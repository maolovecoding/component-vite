import { Plugin } from 'vue';
import Button from './button/src/Button';
export {
  Button
};
// 注册组件
export default {
  install(app) {
    app.component(Button.name, Button);
  }
} as Plugin;