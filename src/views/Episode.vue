<template>
    <div>
        <Nav></Nav>
        <el-row class="body">
            <el-col :span="17" class="left">
                <div id="player"></div>
                <div class="description">
                    <h3>干物妹！小埋R</h3>
                    <p>简介：小埋，复活！在房间无限展开的宇宙，再临……！在外人人称羡的才色兼备“美妹”，一回到家，就变身成不为人知的一心犯懒“干物妹”……！？极尽无所事事之能事的干物妹小埋，一手可乐一手薯片，沉浸于漫画、游戏、动画、网络……，将一同生活的哥哥太平放置在旁，忠于欲望向前突进！和同班同学海老名、切绘、希尔芬的关系也逐渐加深，小埋的日常变得越来越热闹！！！小埋的最强、最棒的日常，再次开始！</p>
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
                    干物妹！小埋R <span>12 集全</span>
                </h3>
                <div class="episode-picker">
                    <button
                            v-for="(episode, index) in episode_picker" :key="index"
                            @click="activeEpisode(episode)"
                            :class="{ active:episode.active }"
                            plain
                    >
                        {{ episode.id }}
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

    window.Hls = Hls;

    export default {
        name: "Episode",
        components: {
            Nav,
        },
        data: function(){
            return{
                episode_picker:[
                    {
                        id:1,
                        name: '第一集',
                        active: false
                    },{
                        id:2,
                        name: '第二集',
                        active: false
                    },{
                        id:3,
                        name: '第三集',
                        active: false
                    },{
                        id:4,
                        name: '第四集',
                        active: false
                    },{
                        id:5,
                        name: '第五集',
                        active: false
                    },{
                        id:6,
                        name: '第六集',
                        active: false
                    },{
                        id:7,
                        name: '第七集',
                        active: false
                    },{
                        id:8,
                        name: '第八集',
                        active: false
                    },
                ]
            }
        },
        mounted() {
            new DPlayer({
                container: document.getElementById('player'),
                video: {
                    url: 'http://diaoshi.dehua-kuyun.com/20200929/17809_f53f0941/index.m3u8',
                    type: 'hls'
                },
                danmaku: {
                    // ...
                    addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=[aid]'],
                },
            });
        },
        methods: {
            activeEpisode(episode) {
                for(let ep in this.episode_picker){
                    this.episode_picker[ep].active = false
                }
                episode.active = true
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