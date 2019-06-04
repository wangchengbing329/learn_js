<template>
  <div id="app">
    <img src="https://images.pexels.com/photos/2347556/pexels-photo-2347556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
    <p>导航:
      <router-link to="/">首页</router-link>|
      <router-link :to="{name:'Look',params:{id:123}}">看看</router-link>
      <!-- <router-link to="/look/666">看看</router-link> -->
      <router-link to="/look/lookOne">look1</router-link>
      <router-link to="/look/lookTwo">look2</router-link>
      <router-link to="/goback">重定向</router-link>




    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
