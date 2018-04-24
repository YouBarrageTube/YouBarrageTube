<template>
    <div class='profiles'>
        <div class="card" v-for="member in members" :key="member.name">
            <img :src="member.photo" alt="member image">
            <p style="font-size:20px;">{{member.name}}</p>
            <p class="title">{{member.title}}</p>
            <p v-for="edu in member.education" :key="edu">{{edu}}</p>
            <hr>
            <div style="padding-left:10px; padding-right:10px">
                <p>Personal Intro: {{member.description}}</p>
            </div>
            <a :href="`mailto:` + member.email" target="_top"><button>Contact</button></a>
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
                        education: ["University of Colorado Boulder", "北京理工大学"],
                        email: "Yuhan.Lin@colorado.edu",
                        description: "Corgi or Samoyed",
                        photo: "../../static/img/Yuhan.jpeg"
                    },
                    {
                        name: "Zhenguo Chen",
                        title: "CTO",
                        education: ["University of Colorado Boulder", "南开大学"],
                        email: "Zhenguo.Chen@colorado.edu",
                        description: "Border Collie or Golden Retriever",
                        photo: "../../static/img/Zhenguo.jpg"
                    },
                    {
                        name: "Liangjun Song",
                        title: "Entry Level Frontend Engineer",
                        education: ["University of Colorado Boulder", "澳门科技大学"],
                        email: "Liangjun.Song@colorado.edu",
                        description: "Responsible for all bugs and issues",
                        photo: "../../static/img/Liangjun.jpg"
                    }
                ]
            };
        },
        mounted: function() {
            // set text the same length
            var max_length = 0;
            for (var mem in this.members){
                max_length = this.members[mem].description.length;
                console.log(this.members[mem].description.length);
            }
            console.log(max_length);
            for (var mem in this.members){
                this.members[mem].description = this.members[mem].description.padEnd(max_length);
                console.log(this.members[mem].description);
            }
            for (var mem in this.members){
                max_length = this.members[mem].description.length;
                console.log(this.members[mem].description.length);
            }
        }
    }
</script>


<style scoped>
    .profiles {
        margin-left: 12%;
        margin-right: 12%;
    }
    
    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin: 1em 0;
        padding: 0;
    }
    
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 30%;
        max-width: 500px;
        margin: auto;
        text-align: center;
        font-family: arial;
        float: left;
        margin: 10%;
    }
    
    .card img {
        width: 45%
    }
    
    .title {
        color: grey;
        font-size: 18px;
    }
    
    button {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }
    
    a {
        text-decoration: none;
        font-size: 22px;
        color: black;
    }
    
    button:hover,
    a:hover {
        opacity: 0.7;
    }
    
    @media screen and (max-width: 600px) {
        .card {
            float: none;
            width: 80%;
        }
    }
    
    /* div.row-list {
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
                } */
</style>