<template>
    <!-- top 10 video dropdown menu -->
    <div class="dropdown">
        <button class="dropbtn">Top 10</button>
        <div class="dropdown-content">
            <div class="row">
                <div class="dropdown-content-list">
                    <span>Video Title</span>
                    <span style="float: right;">Comments #</span>
                </div>
            </div>
            <div class="row">
                <div class="dropdown-content-list" v-for="video in top10" :key="video.id">
                    <router-link :to="`/videos/`+video.id">
                        <span>
                            <img :src="video.thumbnail" alt="video image" width="42" height="42" align="middle">
                            <!-- large screen -->
                            <span class="title" style="float: none;">
                                {{video.title}}
                            </span>
                            <!-- small screen -->
                            <div class="small">
                                <span class="title-small" style="float: none;">
                                    {{video.title}}
                                </span>
                            </div>        

                            <span class="num">
                                {{video.num}}
                            </span>

                            <div class="small" style="width: 20%">
                                <span style="float: right;">
                                    {{video.num}}
                                </span>
                            </div>    
                        </span>
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
            // var that = this;
            // $.getJSON('https://raw.githubusercontent.com/ZhenguoChen/Data-Science-Kaggle-/master/top10.json')
            //     .done(data => {
            //         console.log(data);
            //         that.top10 = data;
            //     })
            axios.get(`/v1/video/top10Comments`)
                .then(response => this.top10 = response.data)
                .catch(error => console.log(error));
        }
    }
</script>

<style scoped>
    /* Dropdown menu */
    div .small {
        display: none;
        float: left;
        width: 80%;
    }
    
    span .title {
        margin-left: 10px;
        margin-right: 10px;
    }

    span .title-small {
        margin-left: 10px;
        margin-right: 10px;
    }
    
    span .num {
        margin-top: 5px;
        float: right;
    }
    
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
        z-index: 101;
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
    
    .dropdown:hover .dropdown-content {
        display: block;
    }
    
    /* Create two equal columns that floats next to each other */
    
    .column-left {
        float: left;
        white-space: nowrap;
    }
    
    .column-right {
        float: right;
        width: 100px;
        /* border-bottom: 1px solid #e9e9e9; */
        border-left: 2px solid #e9e9e9;
        text-align: right;
    }
    
    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    
    .subrow:after {
        content: "";
        display: table;
        clear: both;
    }
    
    .vl {
        border-left: 6px solid green;
        height: 16px;
    }

    @media screen and (max-width: 800px) {

    }
    
    @media screen and (max-width: 600px) {
        .dropdown {
            float: none;
        }
        .dropdown-content {
            left: 0;
        }
        span .title {
            display: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        span .num {
            display: none;
        }
        span .title-small {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-left: 1px;
            margin-right: 1px;
        }
        div .small {
            display: block;
        }
        img {
            display: none;
        }
    }
</style>