<template>
    <div class="look-one">
{{msg}}

<div class="go-two" @click='goTwo'>去look2</div>

    </div>
    <!-- <routerview/> -->
</template>
<script>
export default {
    name:'LookOne',
    data () {
        
        return {
            msg:'你愁啥？'
        }
    },
    methods:{
goTwo(){
    // this.$router.push({name:'LookTwo',param:{id:2345}})
    // this.$router.push({path:'/look/lookTwo'})
    this.$router.push('/look/lookTwo')


}
    },
    beforeRouteEnter(to,from,next){
        console.log(from,to)
        next()
    },
    beforeRouteLive(to,from,next){
        console.log(from,to)
        next()
    }
}
</script>
<style>
.look{
    font-size: 20px;
    font-weight: bold;
    border:60px double;
}
</style>

