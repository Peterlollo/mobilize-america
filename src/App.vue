<template>
  <div id="app">
    <div class='container'>
      <img src="./assets/logo.png">
      <div class='main-row'>
        <router-view name='sidebar' id='router-sidebar'/>
        <router-view name='main' id='router-main'/>
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
  flex-direction: column;
}
#router-sidebar {
  /*flex: 1;*/
}
#router-main {
  /*flex: 2;*/
}

h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.btn {
  border: none;
  border-radius: 2px;
  background-color: #26a69a;
  color: #fff;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 2rem;
  text-transform: uppercase;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  font-size: 1.35rem;
  outline: 0;
  cursor: pointer;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
}
.btn:hover {
  background-color: #2bbbad;
}

.btn-secondary {
  background-color: #319ad4;
}

input {
  padding: 15px;
  background: rgba(255,255,255,0.5);
  margin: 0 0 10px 0;
  width: 100px;
  font-size: 1.35rem;
}

/*********** Media Queries  **********/
/***********************************/

@media (max-width: 767px) {
}

@media (min-width: 768px) {
  #app > .container {
    width: 750px;
  }
  .main-row {
    flex-direction: row;
  }
  #router-sidebar {
    flex: 1;
  }
  #router-main {
    flex: 2;
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
