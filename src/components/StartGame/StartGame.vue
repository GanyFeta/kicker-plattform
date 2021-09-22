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
            name="Spieler Name:"
          />
        </div>

        <div class="form-group">
          <label for="date">Datum</label>
          <input
            type="text"
            class="form-control"
            id="date"
            required
            v-model="game.date"
            name="Spiel Datum:"
          />
        </div>

        <div class="form-group">
          <label for="Standort">Standort</label>
          <select
            class="form-control"
            id="location"
            required
            v-model="game.playerLocation"
            name="Standort:"
          >
            <option>Berlin</option>
            <option>München</option>
            <option>Würzburg</option>
          </select>
        </div>
        <div class="form-group">
          <label for="Position">Position</label>
          <select
            class="form-control"
            id="position"
            required
            v-model="game.playerPosition"
            name="Spieler Position:"
          >
            <option>Vorne</option>
            <option>Hinten</option>
          </select>
        </div>

        <div class="form-group">
          <label for="Modus">Modus</label>
          <select
            class="form-control"
            id="modus"
            required
            v-model="game.gameModus"
            name="Modus:"
          >
            <option>1-Match</option>
            <option>BestOf 3</option>
            <option>BestOf 5</option>
          </select>
        </div>

        <div class="form-group">
          <label for="Ergebnis">Ergebnis</label>
          <select
            class="form-control"
            id="result"
            required
            v-model="game.gameResult"
            name="Ergebnis:"
          >
            <option>Gewonnen</option>
            <option>Verloren</option>
          </select>
        </div>

        <button @click="saveGame" class="btn btn-success">Submit</button>
      </div>

      <div v-else>
        <h4>Spiel angelegt!</h4>
        <button class="btn btn-success" @click="newGame">
          Neues Spiel anlegen
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import DataService from "../services/DataService";

// import Datepicker from "vue3-datepicker";
// import { ref } from "vue";
// const date = ref(new Date());

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
        date: this.game.date,
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
