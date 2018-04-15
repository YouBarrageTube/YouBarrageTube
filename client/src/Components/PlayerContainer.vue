<template>
    <div class='container'>
        <barrage-player/>
    </div>
</template>

<script>
    import BarragePlayer from './BarragePlayer'
    
    export default {
        name: 'PlayerContainer',
        components: {
            'barrage-player': BarragePlayer
        }
    }
</script>


<style scoped>
    .container {
        margin: auto;
        width: 50%;
        border: 3px solid green;
        padding: 10px;
        margin-bottom: 3%;
    }
</style>
