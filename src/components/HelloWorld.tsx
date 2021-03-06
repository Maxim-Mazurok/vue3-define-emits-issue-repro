import { defineCustomElement } from "vue";
// this solves the issue: import { defineEmits } from "vue";

export default defineCustomElement({
  name: "HelloWorld",
  emits: defineEmits<{
    update: (count: number) => void;
  }>(),
  render() {
    return (
      <button
        onClick={() => {
          this.$emit("update", 123);
        }}
      >
        emit
      </button>
    );
  },
});
