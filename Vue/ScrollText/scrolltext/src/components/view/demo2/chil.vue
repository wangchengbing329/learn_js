<template>
  <div class="container">
      <button @click="sendMsg">ok</button></div>  
</template>
<script>
export default {
  name:'demo2',
    data () {
        return {
            message:'8'
        }
    },
    methods:{
        sendMsg () {
            this.$emit('wn',this.message)

            
        }
    }
}
</script>
