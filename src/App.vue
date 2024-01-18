<template>
  <HeaderApp />
  <router-view></router-view>
</template>

<script>

import HeaderApp from "./components/HeaderApp.vue";

export default {
  components: {
    HeaderApp,

  },
};
</script>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
