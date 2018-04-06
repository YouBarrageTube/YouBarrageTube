<template>
    <div>
        <p>hahahaha</p>
        <p>hahaha age</p>
        <p>zhenguo is sb</p>
        <p>yuhan is also sb</p>
    </div>
</template>

<script>
export default {
  name: 'Barrage'
}
</script>

<style scoped>
div{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    height: 315px;
    width: 650px;
    margin:0;
    padding:0;
    overflow: hidden;
}
p{
    color:white;
    transform: translateX(650px);
    animation:wordmove 10s linear 1s;
}

@keyframes wordmove {
    from{
        transform: translateX(650px);
    }to{
        transform: translateX(-100%);
    }
}
</style>
