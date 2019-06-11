<template>
  <div class="container">{{sendMsg}}{{sendAge}}{{sendDate}}</div>  
</template>
<script>
export default {
    name:'demoChild1',
    props:{sendMsg:{
        type:String,
        require:true
    },sendAge:{
        type:String,
        require:true
    },sendDate:{
        type:String,
        require:true
    }},
    data () {
        return {
            
        }
    }
}
</script>
