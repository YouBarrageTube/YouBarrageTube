<template>
    <div>
        <h2>Navigation Menu</h2>
        
        <ul>
        <li>Home</li>
        <li>Team</li>
        <li>Contact</li>
        <li>About</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'NavigationMenu'
}
</script>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111111;
}
</style>