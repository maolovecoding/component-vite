import { defineComponent } from 'vue';
export default defineComponent({
  name: "button",
  setup() {
    return () => {
      return <>
        <button>按钮</button>
      </>;
    };
  }
});