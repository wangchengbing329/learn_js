<template>
  <div class="container">
      <child :send-msg = "test" ></child>
      
          </div>  
</template>
<script>
import child from "./chi"
export default {
    components:{
child
    },
    name:'demo1',
    data () {
        return {
test:{
    message:'2',
date:'2019-6-11',
age:'18'
}
        }
    }
}
</script>
