<template>
 <section class="hello ">
<div class="scroll-box">
<text-scroll :dataList="data" scrolltype="scroll-up"></text-scroll>

</div>
<div class="scroll-box">
<text-scroll :dataList="data" scrolltype="scroll-left"></text-scroll>

</div>

 </section>
  
</template>

<script>
import textScroll from './textscroll'
export default {
  data () {
return {
  data:[
    {text:'我是第一条数据'},
    {text:'我是第二条数据'},
    {text:'我是第三条数据'}


  ]
}
  },
  components:{
    textScroll
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello{
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid #e7e8e9;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  /* height: 500px; */

}
.scroll-box{
  background-color: #f7f7f7;
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  
}
</style>
