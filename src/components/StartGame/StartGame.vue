<template>
  <section>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Spieler Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="game.playerName"
            name="Spieler Name"
          />
        </div>

        <div class="form-group">
          <label for="Standort">Standort</label>
          <input
            class="form-control"
            id="Standort"
            required
            v-model="game.playerLocation"
            name="Standort"
          />
        </div>
        <div class="form-group">
          <label for="Position">Position</label>
          <input
            class="form-control"
            id="Position"
            required
            v-model="game.playerPosition"
            name="Spieler Position"
          />
        </div>

        <div class="form-group">
          <label for="Modus">Modus</label>
          <input
            class="form-control"
            id="Modus"
            required
            v-model="game.gameModus"
            name="Modus"
          />
        </div>

        <div class="form-group">
          <label for="Ergebnis">Ergebnis</label>
          <input
            class="form-control"
            id="Ergebnis"
            v-model="game.gameResult"
            name="Ergebnis"
          />
        </div>

        <button @click="saveGame" class="btn btn-success">Submit</button>
      </div>

      <div v-else>
        <h4>Spiel angelegt!</h4>
        <button class="btn btn-success" @click="newGame">Add</button>
      </div>
    </div>
  </section>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "add-player",
  data() {
    return {
      game: {
        playerName: "",
        playerLocation: "",
        playerPosition: "",
        gameModus: "",
        gameResult: "",
        date: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveGame() {
      let data = {
        name: this.game.playerName,
        playerLocation: this.game.playerLocation,
        playerPosition: this.game.playerPosition,
        gameModus: this.game.gameModus,
        gameResult: this.game.gameResult,
      };

      DataService.create(data)
        .then(() => {
          console.log("Spiel erstellt!");
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newGame() {
      this.submitted = false;
      this.game = {
        playerName: "",
        playerLocation: "",
        playerPosition: "",
        gameModus: "",
        gameResult: "",
        published: false,
      };
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
