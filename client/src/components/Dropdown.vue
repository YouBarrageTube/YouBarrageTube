<template>
    <!-- top 10 video dropdown menu -->
    <div class="dropdown">
        <button class="dropbtn">Top 10</button>
        <div class="dropdown-content">
            <div class="row">
                <div class="dropdown-content-list">
                    <!-- <subrow>
                                <div class="column-left">
                                    Video Title
                                </div>
                            </subrow>
                            <subrow>
                                <div class="column-right">
                                    Comments #
                                </div>
                            </subrow> -->
    
                    <span>
                                Video Title
                            </span>
                    <span style="float: right;">
                                Comments #
                            </span>
                </div>
            </div>
            <div class="row">
                <div class="dropdown-content-list" v-for="video in top10" :key="video.id">
                    <router-link :to="`/videos/`+video.id">
                        <!-- <subrow>
                                        <div class="column-left">
                                            {{video.title}}
                                        </div>
                                    </subrow>
                                    <subrow>
                                        <div class="column-right">
                                            {{video.num}}
                                        </div>
                                    </subrow> -->
                        <!-- <span>
                                <img :src="video.thumbnail" alt="video image" width="42" height="42">
                            </span> -->
                        <span>
                                        <img :src="video.thumbnail" alt="video image" width="42" height="42" align="middle">
                                        <span class="text" style="float: none;">
                                            {{video.title}}
                                            </span>
                                            <span class="text">
                                        {{video.num}}
                                    </span>
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
    span .text {
        margin-left: 10px;
        margin-right: 10px;
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
    
    
    /* .dropdown-content-list:hover {
                                        background-color: #ddd;
                                    } */
    
    .dropdown:hover .dropdown-content {
        display: block;
    }
    
    
    /* Create two equal columns that floats next to each other */
    
    .column-left {
        float: left;
        white-space: nowrap;
        /* border-bottom: 1px solid #e9e9e9;
                            border-right: 1px solid #e9e9e9; */
        /* padding: 10px; */
        /* Should be removed. Only for demonstration */
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
    
    @media screen and (max-width: 600px) {
        .dropdown {
            float: none;
        }
        .dropdown-content {
            left: 0;
        }
    }
</style>