<template>
  <div id="app">
  clicked {{$store.state.count}} times,count is {{evenOrOdd}}
<button @click="increment"> +</button>
<button @click="decrement">-</button>
<button @click="incrementIfOdd">Increment if odd</button>
<button @click="incrementSync">increment async</button>
  </div>
</template>

<script>
// 借 
import {mapActions,mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    
  },
  methods:mapActions(['increment','decrement','incrementIfOdd','incrementSync']),
 computed:
  //  如果有多出要用到 就判断怎么办？
   mapGetters(['evenOrOdd'])

}
</script>

<style>

</style>
