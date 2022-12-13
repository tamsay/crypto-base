<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/BaseNavBar/BaseNavBar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Poppins';
  src: local('Poppins'),
    url('./assets/fonts/Poppins-Regular.ttf') format('truetype');
}

* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  margin: 0rem;
  padding: 0rem;
}

.flexRow {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.flexRow-space-between {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.flexRow-fully-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flexRow-left-centered {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.flexRow-align-center {
  display: flex;
  align-items: center;
}

.flexCol {
  display: flex;
  flex-direction: column;
}
.flexCol-align-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flexCol-justify-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flexCol-fully-centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dropdown-menu {
  top: 2.5rem;
}

.dropdown-toggle {
  font-family: 'Poppins', sans-serif !important;
  font-weight: bold !important;
  color: #333333 !important;
}
</style>
