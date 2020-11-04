<template>
    <div>
        <Nav></Nav>
        <el-row class="body">
            <el-col :span="17" class="left">
                <div id="player"></div>
                <div class="description">
                    <h3>{{ data.name }}</h3>
                    <p>简介：{{ data.introduction}}</p>
                </div>
                <div class="season-pricker">
                    <div class="season">
                        <div>第一季</div>
                        <div>星辰远征军</div>
                        <div>不灭钻石</div>
                        <div>黄金之风</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="7" class="right">
                <h3>
                    {{ data.name }} <span>{{ data.episodes }} 集全</span>
                </h3>
                <div class="episode-picker">
                    <button
                            v-for="(episode, index) in episode_picker" :key="index"
                            @click="activeEpisode(episode)"
                            :class="{ active:episode.id === eid }"
                            plain
                    >
                        {{ episode.name }}
                    </button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Nav from "../components/Nav";
    import DPlayer from "dplayer";
    import Hls from 'hls.js';
    import { Anime } from "@/api";

    window.Hls = Hls;

    export default {
        name: "Episode",
        components: {
            Nav,
        },
        data: function(){
            return{
                aid: null,
                eid: null,
                data: {},
                active_episode: {},
                episode_picker:[
                    // {name:"1",active:false},
                    // {name:"2",active:false},
                    // {name:"3",active:false},
                    // {name:"4",active:false},
                    // {name:"5",active:true},
                ],
            }
        },
        // mounted() {
        //     this.createPlayer()
        // },
        created(){
            this.aid = Number(this.$route.params.aid)

            if (this.$route.params.eid !== undefined){
                this.eid = Number(this.$route.params.eid)
            }

            this.loadData()
        },
        methods: {
            loadData(){
                Anime({id:this.aid, with:['episode.resource', 'tags']}).then((response) => {
                    this.data = response.data
                    this.episode_picker = response.data.episode

                    if (this.eid === null){
                        this.$router.push({
                                name:'episode',
                                params: {aid: this.aid, eid: response.data.episode[0].id}
                            }
                        )
                    }

                    for (let key in this.episode_picker){
                        // eslint-disable-next-line no-prototype-builtins
                        if (!this.episode_picker.hasOwnProperty(key)){
                            continue
                        }
                        if (this.episode_picker[key].id === this.eid){
                            this.active_episode = this.episode_picker[key]
                            break
                        }
                    }

                    this.createPlayer()
                })
            },
            createPlayer(){
                let quality = []

                for (let key in this.active_episode.resource){
                    // eslint-disable-next-line no-prototype-builtins
                    if (!this.active_episode.resource.hasOwnProperty(key)){
                        continue
                    }
                    quality.push({
                        name: this.active_episode.resource[key].resolution,
                        url: this.active_episode.resource[key].resource,
                        // type: this.active_episode.resource[key].type,
                        type: 'hls',
                    })
                }
                window.player = new DPlayer({
                    container: document.getElementById('player'),
                    video: {
                        quality: quality,
                        defaultQuality: 0,
                        pic: 'demo.png',
                        thumbnails: 'thumbnails.jpg',
                    },
                    // danmaku: {
                    //     addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=[aid]'],
                    // },
                });
            },
            activeEpisode(episode) {
                this.$router.push({
                        name:'episode',
                        params: {
                            aid: this.aid,
                            eid: episode.id
                        }
                    }
                )
                this.active_episode = episode
                this.eid = episode.id
                this.createPlayer()
            },
        }
    }
</script>

<style lang="scss" scoped>
    .body{
        padding: 0 10%;
        margin: 20px 0;

        .left{
            .description{
                margin-top: 20px;

                h3{
                    font-size: 22px;
                    font-weight: 500;
                    color: #454545;
                }

                p{
                    margin-top: 8px;
                    height: 57px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #525252;
                    line-height: 21px;
                }
            }
            .season-pricker{
                margin-top: 20px;
                .season{
                    div{
                        position: relative;
                        display: inline-block;
                        padding: 0 10px 0 25px;
                        height: 40px;
                        line-height: 40px;
                        background: #EEEEEE;
                        color: #222222;
                        margin-right: 40px;
                        border-radius: 5px 0 0 5px;
                    }

                    div:after{
                        position: absolute;
                        right: -16px;
                        top: 3px;
                        display: inline-block;
                        transform:rotate(45deg);
                        background: #EEEEEE;
                        width: 34px;
                        height: 34px;
                        z-index: -1;
                        content: "喵";
                        color: #EEEEEE;
                        border-radius: 10px;
                    }

                    div:before{
                        position: absolute;
                        left: 0;
                        top: 1px;
                        content: "";
                        border-top: 20px solid transparent;
                        border-left: 15px solid white;
                        border-bottom: 20px solid transparent;
                    }
                }
            }
        }

        .right{
            padding: 0 10px;

            h3{
                font-size: 17px;
                font-weight: 100;
                padding: 10px 0 0 14px;

                span{
                    padding: 0 7px;
                    background: black;
                    color: #00FFFC;
                }
            }

            .episode-picker{
                margin-top: 20px;

                button{
                    border: 1px white solid;
                    box-shadow: none;
                    background: none;
                    padding: 10px 20px;
                    color: #5f5f5f;
                }

                button:hover{
                    border: 1px black solid;
                    color: black;
                }

                .active{
                    border-color: black;
                    background: black;
                    color: white;
                }
                .active:hover{
                    color: white !important;
                }
            }
        }
    }
</style>