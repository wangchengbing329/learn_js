<template>
  <div>
    <counter  />
    
  </div>
</template>

<script>
// 两个兄弟组件， 共享count 数据
// 那么count 不应该属于Counter组件私有 ，data () {},props
import Counter from './components/Counter'
import CounterBrother from './components/CounterBrother'
export default {
components:{
  'counter':Counter

},
data () {
  return {
   
  }
},
methods:{
 
  }

}
</script>

<style>

</style>
