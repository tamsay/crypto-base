<template>
  <div>
    <button
      :type="type"
      :disabled="disabled"
      class="baseButton"
      @click="customClick"
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {
        console.log('Button clicked');
      },
    },
  },
  methods: {
    customClick() {
      this.$emit('customClickEvent', "I'm a custom emitted event");
    },
  },
});
</script>

<style lang="scss" scoped>
.baseButton {
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  border-radius: 100px;
  color: #fff;
  border: none;
  padding: 0.5rem 2.5rem;
  font-size: 0.875rem;
  font-weight: 600;
}
</style>
