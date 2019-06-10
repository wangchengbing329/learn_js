<template>
    <div class="alert" >{{msg}}
        </br>
<button type="success" @click="hidden">好</button>
    </div>
</template>
<script>
export default {
    props:[msg],
    name:'Alert',
    data () {
        return {

        }
    },
    methods:{
        hidden () {
            this.$emit('fromChild',false)
        }
    }
}
</script>
<style scoped>
.alert{
    font-size: 30px;
    text-align: center;
    width: 300px;
    height: 200px;
    border: 1px solid #aaa;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 3;
}
</style>


