<template>
  <div class="character-card">
    <div>
      <p class="card-text name">{{ character.name }}</p>
      <p class="card-text character-class">{{ character.type.name }}</p>
    </div>

    <div class="card-text bio">{{ character.bio }}</div>

    <ul class="items">
      <li class="item" v-for="item in character.items">{{ item.name }}</li>
    </ul>

    <ul class="card-stats">
      <li class="card-text hp">
        <span class="stats">HP </span>{{ character.hp }}
      </li>
      <li class="card-text atk">
        <span class="stats">ATK </span>{{ character.attack }}
      </li>
      <li class="card-text def">
        <span class="stats">DEF </span>{{ character.defense }}
      </li>
      <li class="card-text spd">
        <span class="stats">SPD </span>{{ character.speed }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.character-card {
  background: url(card-bg.jpg);
  background-size: cover;
  background-color: rgb(62, 62, 75);
  color: rgba(255, 255, 255, 0.9);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  overflow: hidden;
  padding: 50px 30px;

  border-radius: 30px;
  box-shadow: 10px 10px 15px -3px rgba(0, 0, 0, 0.25);
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  outline: 6px solid rgba(93, 197, 136, 0.24);
  transition: 300ms all;

  &:hover {
    outline: 6px solid rgba(86, 202, 167, 0.8);
    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.25);
  }

  .card-text {
    // border: 1px solid;
    &.name {
      text-transform: uppercase;
      font-size: 30px;
      //   text-align: center;
      //   min-height: 2.5em;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   font-weight: 700;
      //   line-height: 1.2em;
    }

    &.character-class {
      font-size: 18px;
    }

    &.bio {
      border-left: 2px solid rgba(255, 255, 255, 0.3);
      padding: 0px 10px;
      min-height: 50px;
      max-height: 88px;
      overflow: auto;
    }
  }

  .items {
    // border: 2px solid;
    // text-align: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    gap: 8px;
    .item {
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 6px;
      box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.1);
      transition: 300ms all;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.25);
      }
    }
  }

  .card-stats {
    // display: flex;
    // flex-direction: column;
    // gap: 4px;
    // justify-content: space-evenly;
    // flex-grow: 1;
    text-align: center;
    font-size: 18px;
    // font-weight: 300;

    .card-text {
      position: relative;
      width: 60%;
      margin: 0 auto;

      .stats {
        position: absolute;
        top: 4px;
        left: 0;
        font-size: 12px;
        font-weight: 700;
        margin-right: 10px;
      }
    }

    .card-text::after {
      content: "";
      display: block;
      width: 100%;
      margin-block: 5px;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.3);
    }

    .card-text:last-child::after {
      display: none;
    }
  }
}

::-webkit-scrollbar {
  width: 2px;
  background-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
