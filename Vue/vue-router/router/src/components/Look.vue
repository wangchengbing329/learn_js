<template>
    <div class="look">
{{msg}}
{{$route.params.id}}
    <router-view/>
    </div>
</template>
<script>
export default {
    name:'Look',
    data () {
        
        return {
            msg:'看一看'
        }
    }
}
</script>
<style>
.look{
    font-size: 20px;
    font-weight: bold;
    border:60px double ;
    color:blue;
}
</style>

