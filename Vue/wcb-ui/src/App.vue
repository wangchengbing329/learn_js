<template>
  <div id="app">
   <div class="moor-item">
     <label >Switch</label>
     <moor-switch v-model="LightSwitch">开关（关）</moor-switch>
   </div>
  </div>
</template>

<script>
import MoorSwitch from './components/MoorSwitch'
export default {
  name: 'app',
  data () {
    return {
     LightSwitch:false
    }
  },
  watch:{
    LightSwitch:newValue =>
    console.log('开关:',newValue)
  },
  components:{
    'moor-switch':MoorSwitch
  }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
