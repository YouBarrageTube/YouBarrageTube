<template>
    <div class="topnav">
        <router-link to="/">
            Home
        </router-link>
        <router-link to="/career">
            Career
        </router-link>
        <router-link to="/about">
            About Us
        </router-link>
        <!-- top 10 video dropdown menu -->
        <dropdown>
        </dropdown>
        <div class="search-container">
            <input type="text" placeholder="Search.." name="search" v-model.lazy="query">
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import fontawesome from '@fortawesome/fontawesome'
    import Dropdown from './Dropdown'
    
    export default {
        name: 'NavigationMenu',
        data: function() {
            return {
                query: ""
            };
        },
        watch: {
            query: function(newQuery) {
                this.$router.push(`/search?keyword=${newQuery}`);
            }
        },
        components: {
            'dropdown': Dropdown
        }
    }
</script>

<style scoped>
    /* * {
        position: sticky;
        box-sizing: border-box;
    }
     */
    body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    .topnav {
        overflow: hidden;
        background-color: #e9e9e9;
    }
    
    .topnav a {
        float: left;
        display: block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }
    
    .topnav a:hover {
        background-color: rgb(129, 127, 127);
        color: black;
    }
    
    .topnav a.active {
        background-color: #2196F3;
        color: white;
    }
    
    .topnav .search-container {
        float: right;
    }
    
    .topnav input[type=text] {
        padding: 6px;
        margin-top: 8px;
        margin-right: 10px;
        font-size: 17px;
        border: none;
    }
    
    .topnav .search-container button {
        float: right;
        padding: 6px 10px;
        margin-top: 8px;
        margin-right: 16px;
        background: #ddd;
        font-size: 17px;
        border: none;
        cursor: pointer;
    }
    
    .topnav .search-container button:hover {
        background: #ccc;
    }
    
    
    /* Dropdown menu */
    
    /* .dropdown {
        float: right;
        overflow: hidden;
    }
    
    .dropdown .dropbtn {
        font-size: 16px;
        border: none;
        outline: none;
        color: black;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
    }
    
    .dropdown:hover .dropbtn {
        background-color: rgb(129, 127, 127);
    }
    
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        right: 0;
    }
    
    .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }
    
    .dropdown-content a:hover {
        background-color: #ddd;
    }
    
    .dropdown:hover .dropdown-content {
        display: block;
    } */
    
    @media screen and (max-width: 600px) {
        .topnav .search-container {
            float: none;
        }
        .topnav a,
        .topnav input[type=text],
        .topnav .search-container button {
            float: none;
            display: block;
            text-align: left;
            width: 100%;
            margin: 0;
            padding: 14px;
        }
        .topnav input[type=text] {
            border: 1px solid #ccc;
        }
    }
</style>