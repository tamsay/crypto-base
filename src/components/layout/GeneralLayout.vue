<template>
  <div class="generalLayout">
    <BaseNavBar />
    <div class="mainContent">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseNavBar from '@/components/BaseNavBar/BaseNavBar.vue';
import TheFooter from '@/components/TheFooter/TheFooter.vue';

export default defineComponent({
  name: 'GeneralLayout',
  components: {
    BaseNavBar,
    TheFooter,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.generalLayout {
  margin-top: 42px;
  .mainContent {
  }
}
</style>
