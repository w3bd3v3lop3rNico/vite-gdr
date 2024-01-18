<template>
  <div class="character-card">
    <div>
      <div class="card-text name">{{ character.name }}</div>
      <div class="card-text character-class">{{ character.type.name }}</div>
    </div>

    <div class="card-text bio">{{ character.bio }}</div>

    <div class="card-stats">
      <div class="card-text hp">
        <span class="stats">HP </span>{{ character.hp }}
      </div>
      <div class="card-text atk">
        <span class="stats">ATK </span>{{ character.attack }}
      </div>
      <div class="card-text def">
        <span class="stats">DEF </span>{{ character.defense }}
      </div>
      <div class="card-text spd">
        <span class="stats">SPD </span>{{ character.speed }}
      </div>
    </div>
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
  gap: 30px;

  overflow: hidden;
  padding: 50px 30px;

  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  outline: 0px solid;
  transition: 100ms all;

  &:hover {
    outline: 6px solid rgba(105, 255, 143, 0.8);
    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.25);
  }

  .card-stats {
    display: flex;
    flex-direction: column;
    gap: 20px;
    // justify-content: space-evenly;
    // flex-grow: 1;
    text-align: center;
    font-size: 20px;
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

    // .card-text::after {
    //   content: "";
    //   display: block;
    //   width: 100%;
    //   margin-block: 10px;
    //   height: 1px;
    //   background-color: rgba(255, 255, 255, 0.3);
    // }

    // .card-text:last-child::after {
    //   display: none;
    // }
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
      max-height: 100px;
      overflow: auto;
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
