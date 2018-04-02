<template>
  <div id="app">
    <div class="main">
      <header class="app-header">
        <app-header></app-header>
      </header>
      <search></search>
      <router-view></router-view>
      <footer></footer>
    </div>
  </div>
</template>

<script>
  import appHeader from "./components/app-header.vue"
export default {
  name: 'app',
  components:{
    appHeader
  }
}
</script>

<style>

</style>
