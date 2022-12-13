<template>
  <b-navbar
    class="flexRow-space-between fixed-top nav"
    toggleable="lg"
    type="dark"
  >
    <b-navbar-brand href="#" class="logoDiv flexRow"
      ><img src="@/assets/icons/logo.svg" alt="logo"
    /></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" class="toggler">
      <img src="@/assets/icons/menu-hamburger.svg" alt="icon" />
    </b-navbar-toggle>

    <b-collapse
      :class="{ fullHeight: isExpanded }"
      id="nav-collapse"
      is-nav
      v-model="isExpanded"
    >
      <b-navbar-nav class="links flexRow-fully-centered">
        <router-link @click.native="hideNavbar" to="/">Home</router-link>
        <router-link @click.native="hideNavbar" to="/about-us"
          >About Us</router-link
        >
        <router-link @click.native="hideNavbar" to="/blog">Blog</router-link>
        <router-link @click.native="hideNavbar" to="/contact-us"
          >Contact Us</router-link
        >
      </b-navbar-nav>
      <div class="btnGroup flexRow">
        <b-dropdown
          variant="none"
          class="navbarDropdown"
          text="Sell Bitcoin / Giftcard"
        >
          <b-dropdown-item>Sell Bitcoin</b-dropdown-item>
          <b-dropdown-item>Sell Giftcard</b-dropdown-item>
        </b-dropdown>
        <BaseButton
          text="LOGIN"
          @customClickEvent="showBitcoinModal"
        ></BaseButton>
      </div>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';

export default defineComponent({
  name: 'BaseNavBar',

  data() {
    return {
      isExpanded: false,
      isModalOpen: false,
    };
  },

  components: {
    BaseButton,
  },

  methods: {
    hideNavbar() {
      console.log('event');
      this.isExpanded = false;
    },

    showBitcoinModal(data: any) {
      console.log('bitcoin', data);
    },

    customClickEvent(data: any) {
      console.log('custom click event', data);
    },
  },

  computed: {
    // hideNavbar() {
    //   return (this.isExpanded = false);
    // },
  },
}); // end of export default
</script>

<style scoped lang="scss">
@import './BaseNavBar.scss';
</style>
