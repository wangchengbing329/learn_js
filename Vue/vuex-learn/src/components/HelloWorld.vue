<template>
 <div>
   <input type="text" placeholder="请输入今天多少号" v-model.lazy="inputValue" @keyup.enter="add">
   <ul >
     <li @click="deleteItem(key)" v-for="(item,key) in $store.state.value" :key="key" >{{item}}</li>
   </ul>
 </div>

</template>

<script>
// import {state}
export default {
  name: 'HelloWorld',
  data () {
    return {
      inputValue:''
    }
  },
  methods:{
    add () {
      console.log(this.inputValue)
      this.$store.commit('incr',this.inputValue)
      this.inputValue = ''
    },
    deleteItem(e){
      // console.log(e)
      this.$store.commit('decre',e)
    },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  color:pink;
}
</style>
