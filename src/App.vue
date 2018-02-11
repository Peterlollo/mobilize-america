<template>
  <div id="app">
    <div class='container'>
      <img src="./assets/logo.png">
      <div class='main-row'>
        <router-view name='sidebar'/>
        <router-view name='main'/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-size: 12px;
  max-width: 100%;
  overflow-x: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  flex: 1 0 100%;
  background: ;
  color: #484848;
  min-height: 100vh;
  text-align: center;
}
#app > .container {
  flex: 1 0 auto;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: calc(100% - 1.5rem * 2);
}
.main-row {
  display: flex;
  flex-direction: row;
}

h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}

/*********** Media Queries  **********/
/***********************************/

@media (max-width: 767px) {
}

@media (min-width: 768px) {
  #app > .container {
    width: 750px;
  }
}

@media (min-width: 1024px) {
  #app > .container {
    width: 970px;
  }
}

@media (min-width: 1280px) {
  #app > .container {
    width: 1170px;
  }
}
</style>
