<template>
    <nav class="container">
        <ul class="nav-body">
            <li class="nav-item home">
                <RouterLink :to="{ name: 'home' }">
                    Home
                </RouterLink>
            </li>
            <li class="nav-item characters">
                <RouterLink :to="{ name: 'characters' }">
                    Characters
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
<script>
import { router } from '../router';
export default {

}
</script>
<style lang="scss" scoped>
.container {
    height: 40px;
    .nav-body {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 8px;

        .nav-item {
            background-color: red;
            color: white;
            padding: 5px;
            border-radius: 20px;

            :hover {
                font-size: 20px;
                color: black;
            }
        }
    }
}
</style>