<template>
    <div>
        Clicked :{{$store.state.count}} times,count is
        <button @click="increment">+</button>
    </div>
</template>

<script>
// 让 store 里的改变状态的方法，mapActions
import {mapActions} from 'vuex';
export default {
    props:['count']

,
methods:mapActions([
    'increment'
])
    
        //   修改store 状态？


    

}
</script>

<style>

</style>
