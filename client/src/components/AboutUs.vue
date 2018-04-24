<template>
    <div>
        <navigation-menu/>
        <h1 align="center">Meet with Our Team!</h1>
        <profile></profile>
    </div>
</template>

<script>
    import NavigationMenu from './NavigationMenu'
    import Profile from './Profile'
    
    export default {
        name: 'AboutUs',
        components: {
            'navigation-menu': NavigationMenu,
            'profile': Profile
        }
    }
</script>


<style scoped>

</style>
