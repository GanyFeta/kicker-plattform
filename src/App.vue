<template>
  <header>
    <div class="container">
      <div>
        <img
          class="header-logo"
          alt="Mayflower logo"
          src="./assets/maylogo.png"
        />
      </div>
      <span class="header-titel">Kicker-Plattform</span>
      <div id="nav">
        <nav class="navbar navbar-expand navbar-light">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/startGame" class="nav-link"
            >Spiel Starten</router-link
          >
          <!-- <router-link to="/about" class="nav-link">About</router-link> -->
        </nav>
      </div>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  font-size: 18px;
  line-height: 1.5rem;
}
h1 {
  font-size: 2.2rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.8rem;
}

body {
  margin-left: 2re;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container {
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
}
.main {
  display: flex;
  flex-flow: row nowrap;
}
.header-logo {
  width: 200px;
}
.header-titel {
  font-weight: 900;
}
</style>
