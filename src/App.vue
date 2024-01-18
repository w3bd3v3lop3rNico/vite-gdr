<template>
  <router-view></router-view>
</template>

<script>
import Home from "./pages/Home.vue";
export default {
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
