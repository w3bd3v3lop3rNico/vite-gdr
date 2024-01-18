<template>
  <div class="section">
    <div class="container">
      <ul v-for="character in characters">
        <li>{{ character.name }}</li>
        <li>{{ character.type.name }}</li>
        <li>{{ character.bio }}</li>
        <ul>
          <li>HP: {{ character.hp }}</li>
          <li>ATK: {{ character.attack }}</li>
          <li>DEF: {{ character.defense }}</li>
          <li>SPD: {{ character.speed }}</li>
        </ul>
        <ul>
          <li v-for="item in character.items">{{ item.name }}</li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      characters: [],
      API_URL: "http://127.0.0.1:8000/api",
    };
  },
  methods: {
    fetchCharacters() {
      axios.get(`${this.API_URL}/characters`).then((res) => {
        console.log(res.data);
        this.characters = res.data.results.data;
      });
    },
  },
  created() {
    this.fetchCharacters();
  },
};
</script>

<style lang="scss" scoped></style>
