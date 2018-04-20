<template>
    <!-- top 10 video dropdown menu -->
    <div class="dropdown">
        <button class="dropbtn">Top 10</button>
        <div class="dropdown-content">
            <!-- <router-link :to="`/videos/`+video.id">
                            {{video.title}}:{{video.num}}
                        </router-link> -->
            <!-- <a href="/">VideonameVideonameVideonameVideoname</a>
                            <a href="/">Link 2</a>
                            <a href="/">Link 3</a> -->
            <div class="row">
                <div class="dropdown-content-list" v-for="video in top10" :key="video.id">
                    <router-link :to="`/videos/`+video.id">
                        <div class="column-left">
                            {{video.title}}
                        </div>
                        
                        <div class="column-right">
                            {{video.num}}
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'Dropdown',
        data: function() {
            return {
                top10: []
            };
        },
        mounted: function() {
            axios.get(`/v1/video/top10Comments`)
                .then(response => this.top10 = response.data)
                .catch(error => console.log(error));
        }
    }
</script>

<style scoped>
    /* Dropdown menu */
    
    a {
        text-decoration: none;
    }
    
    .dropdown {
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
        /* background-color: black; */
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        right: 0;
    }
    
    .dropdown-content-list {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }
    
    .dropdown-content-list:hover {
        background-color: #ddd;
    }
    
    .dropdown:hover .dropdown-content {
        display: block;
    }
    
    
    /* Create two equal columns that floats next to each other */
    
    .column-left {
        float: left;
        width: 90%;
        /* padding: 10px; */
        /* Should be removed. Only for demonstration */
    }
    .column-right {
        float: right;
        width: 10%;
    }
    
    
    /* Clear floats after the columns */
    
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    .vl {
    border-left: 6px solid green;
    height: 16px;
}
</style>