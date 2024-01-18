<template>
  <div class="section">
    <div class="container">
      <div class="grid-wrapper">
        <CharacterCard v-for="character in characters" :character="character" />
      </div>
      <!-- <ul v-for="character in characters">
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
      </ul> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CharacterCard from "../../components/CharacterCard.vue";
export default {
  components: {
    CharacterCard,
  },
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

<style lang="scss" scoped>
.grid-wrapper {
  margin: 60px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
</style>
