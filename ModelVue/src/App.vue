<template>
  <div id="app">
      <div id="nav">
          <router-link to="/HomeVue">Home</router-link> |
          <router-link to="/ModelPage">Model</router-link> |
          <router-link to="/Login">Login</router-link> |
          <router-link to="/ManagerPage">Managers</router-link> |
      </div>
    <router-view/>
  </div>
</template>

<style scoped>
    #app {
        width: 500px;
        border: 1px solid;
        background-color: seagreen;
        margin: auto;
        padding: 20px;
        text-align: center;
    }

    #navbarleft {
        text-align: left;
    }

    #navbarright {
        text-align: right;
    }
</style>
