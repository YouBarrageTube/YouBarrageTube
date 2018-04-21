<template>
    <div class='row-list'>
        <div class="gallery" v-for="member in members" :key="member.name">
            <img :src="member.photo" alt="member image">
            <h2>{{member.name}}</h2>
            <h2>{{member.title}}</h2>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'VideoList',
        data: function() {
            return {
                members: [{
                        name: "Yuhan Lin",
                        title: "CEO",
                        photo: "../../static/img/Yuhan.jpeg"
                    },
                    {
                        name: "Zhenguo Chen",
                        title: "CTO",
                        photo: "../../static/img/Zhenguo.jpg"
                    },
                    {
                        name: "Liangjun Song",
                        title: "Entry Level Frontend Engineer",
                        photo: "../../static/img/Liangjun.jpg"
                    }
                ]
            };
        }
    }
</script>


<style scoped>
    div.row-list {
        margin-left: 12%;
        margin-right: 12%;
    }
    
    div.gallery {
        border: 1px solid #ccc;
        float: left;
        width: 40%;
        margin-right: 12.2%;
        margin-bottom: 3%;
        margin-top: 3%;
    }
    
    div.gallery:nth-child(2n+2) {
        margin-right: 0%;
    }
    
    div.gallery:hover {
        border: 1px solid #777;
    }
    
    div.gallery img {
        width: 50%;
        height: auto;
        float: left;
    }
    
    div.desc {
        padding: 5%;
        text-align: center;
        height: 40px;
    }
</style>