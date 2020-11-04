<template>
    <div>
        <Nav></Nav>
        <div class="body">
            <Carouse></Carouse>
            <div class="recommend">
                <div class="title">
                    <span class="icon">
                        <i class="el-icon-video-play"></i>
                        热推番剧
                    </span>
                    <span class="clock">
                            <i class="el-icon-alarm-clock"></i>
                        <!--                            <i class="el-icon-timer"></i>-->
                    </span>
                    <ul class="category">
                        <li>后宫</li>
                        <li>泡面</li>
                        <li>治愈</li>
                        <li>搞笑</li>
                    </ul>
                </div>
                <el-row>
                    <el-col :span="19">
                        <el-carousel class="carousel" height="400" :autoplay="false" indicator-position="none" arrow="never">
                            <el-carousel-item>
                                <el-row class="list">
                                    <el-col :span="8">
                                        <div class="img"></div>
                                        <div class="info">
                                            <h4>这是一个动画名字</h4>
                                            <p>他非常好看，我建议你们每个人都去看一遍</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="5">
                                        <div class="img"></div>
                                        <div class="info">
                                            <h4>这是一个动画名字</h4>
                                            <p>他非常好看，我建议你们每个人都去看一遍</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="5">
                                        <div class="img"></div>
                                        <div class="info">
                                            <h4>这是一个动画名字</h4>
                                            <p>他非常好看，我建议你们每个人都去看一遍</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="5">
                                        <div class="img"></div>
                                        <div class="info">
                                            <h4>这是一个动画名字</h4>
                                            <p>他非常好看，我建议你们每个人都去看一遍</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="5">
                                        <div class="img"></div>
                                        <div class="info">
                                            <h4>这是一个动画名字</h4>
                                            <p>他非常好看，我建议你们每个人都去看一遍</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="5">
                                        <div class="img"></div>
                                        <div class="info">
                                            <h4>这是一个动画名字</h4>
                                            <p>他非常好看，我建议你们每个人都去看一遍</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="5">
                                        <div class="img"></div>
                                        <div class="info">
                                            <h4>这是一个动画名字</h4>
                                            <p>他非常好看，我建议你们每个人都去看一遍</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="5">
                                        <div class="img"></div>
                                        <div class="info">
                                            <h4>这是一个动画名字</h4>
                                            <p>他非常好看，我建议你们每个人都去看一遍</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="5">
                                        <div class="img"></div>
                                        <div class="info">
                                            <h4>这是一个动画名字</h4>
                                            <p>他非常好看，我建议你们每个人都去看一遍</p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>

                    <el-col :span="5" class="hot">
                        <p class="title">
                            一周排行榜
                        </p>
                        <ul class="list">
                            <li v-for="(item, key) in recentlyUpdate" :key="key">
                                <router-link :to="{name:'media', params:{id:item.id}}">
                                    <strong>{{ key + 1 }}.</strong> {{ item.name }} <i class="el-icon-arrow-right"></i>
                                </router-link>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
            <div class="media">
                <span class="icon">
                    <i class="el-icon-video-play"></i>
                        热播番剧
                </span>
                <Medias class="list" :data="mediaData"></Medias>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from "@/components/Nav";
    import Carouse from "@/components/Carouse";
    import Medias from "@/components/Media";
    import { media as MediaRequest, recentlyUpdate as recentlyUpdateRequest } from "@/api";

    export default {
        name: "Index",
        components: {
            Nav,
            Carouse,
            Medias,
        },
        data: function() {
            return {
                mediaData:{},
                recentlyUpdate:[],
            };
        },
        created(){
            this.loadMedia()
            this.loadRecentlyUpdate()
        },
        methods: {
            loadMedia (){
                MediaRequest().then((response) => {
                    this.mediaData = response.data
                })
            },
            loadRecentlyUpdate(){
                recentlyUpdateRequest().then((response) => {
                    this.recentlyUpdate = response.data
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
    /*正常的未被访问过的链接*/
    a:link {
        text-decoration: none;
    }
    /*已经访问过的链接*/
    a:visited {
        text-decoration: none;
    }
    /*鼠标划过(停留)的链接*/
    a:hover {
        text-decoration: none;
    }
    /* 正在点击的链接，鼠标在元素上按下还没有松开*/
    a:active {
        text-decoration: none;
    }
    /* 获得焦点的时候 鼠标松开时显示的颜色*/
    a:focus {
        text-decoration: none;
    }
        .body{
        padding: 20px 200px;

        .icon{
            background: black;
            color: white;
            padding: 10px 15px;
            border-radius: 40px;
        }

        .recommend{
            margin-top: 20px;

            .title{
                margin-bottom: 10px;

                .clock{
                    background: black;
                    display: inline-block;
                    color: white;
                    margin-left: 30px;
                    padding: 7px;
                    border-radius: 50%;

                    i{
                        font-size: 23px;
                    }
                }
                .category{
                    list-style: none;
                    display: inline-flex;
                    padding-left: 10px;

                    li{
                        float: left;
                        padding: 10px 15px;
                    }
                }
            }

            .list{
                height: 300px;

                .el-col{
                    height: 150px;
                    border-radius: 6px;
                    /*padding: 5px 5px 0 5px;*/
                    margin: 0 5px 5px 0;
                    overflow: hidden;
                    color: white;

                    .img{
                        background-image: url("../assets/carouse/4.jpg");
                        background-size:cover;
                        width: 100%;
                        height: 100%;
                    }
                    .info{
                        transition:0.5s;
                        padding-left: 10px;
                        padding-top: 11%;
                        position: relative;
                        height: 55%;
                        background-image: linear-gradient(#00000000, #000000);
                        top: 0;
                    }

                }
                .el-col:first-child{
                    height: 100%;
                    width: 35%;
                    .info{
                        padding-top: 34%;
                    }
                }
                .el-col:hover{
                    .info{
                        top: -70%;
                    }
                }
            }

            .hot{
                /*padding: 0 10px;*/
                padding-left: 10px;

                .title{
                    text-align: center;
                    background: black;
                    color: white;
                    line-height: 36px;
                    border-radius: 27px;
                }

                .list{
                    list-style: none;
                    padding: 0;

                    li{
                        margin-top: 8px;
                        line-height: 36px;
                        background: #EEEEEE;
                        opacity: 0.7;
                        border-radius: 10px;
                        padding-left: 25px;
                        padding-right: 10px;

                        a{
                            color: #222222;
                        }

                        i{
                            float: right;
                            line-height: 36px;
                        }
                    }
                }
            }
        }

        .media{
            .list{
                margin-top: 10px;
            }
        }
    }
</style>