<template>
  <header>
    <nav class="container">
      <ul class="nav-body">
        <li class="nav-item home">
          <RouterLink :to="{ name: 'home' }"> Home </RouterLink>
        </li>
        <li class="nav-item characters">
          <RouterLink :to="{ name: 'characters' }"> Characters </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { router } from "../router";
export default {};
</script>
<style lang="scss" scoped>
header {
  box-shadow: 0px 10px 15px -3px rgba(100, 100, 100, 0.1);
  padding: 24px;
  .container {
    .nav-body {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 28px;

      .nav-item {
        a {
          display: block;
          background-color: rgba(26, 128, 97, 0.8);
          color: white;
          padding: 5px 20px;
          border-radius: 20px;
          transition: all 300ms;

          &:hover {
            background-color: rgba(6, 78, 83, 0.8);
          }
        }
      }
    }
  }
}
</style>
