<template>
  <div class="container">
      {{msg}}
      <child @wn = 'getWn' ></child>
      
          </div>  
</template>
<script>
import child from "./chil"
export default {
    components:{
child
    },
    name:'demoChild2',
    data () {
        return {
msg:2
        }
    },
    methods:{
        getWn (data) {
            this.msg = data
        }
    }
}
</script>
