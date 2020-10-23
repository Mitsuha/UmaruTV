`<template>
    <div class="nav">
        <div class="nav-link">
            <p class="nav-logo"><i class="el-icon-sunny" style="font-size: 20px"></i> UmaruTV</p>
            <ul class="nav-link-list">
                <li v-for="link in links" :key="link.title">
                    <a :href="link.url">{{ link.title }}</a>
                </li>
            </ul>
        </div>

        <div class="nav-user">
            <ul class="nav-link-list">
                <li v-for="link in links" :key="link.title">
                    <a :href="link.url">{{ link.title }}</a>
                </li>
            </ul>
            <img src="../assets/default-user.jpg" alt="">
        </div>
        <div class="nav-search">
            <div class="search" v-bind:class="{ active:isActive }">
                <input type="text" class="search-input" ref="searchInput">
                <button class="search-btn" @click="search()"><i class="el-icon-search"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data: function () {
            return {
                isActive: false,
                links :[
                    {
                        url:'/',
                        title:'治愈'
                    },
                    {
                        url:'/',
                        title:'冒险'
                    },
                    {
                        url:'/',
                        title:'日本'
                    },
                ]
            }
        },
        methods: {
            search() {
                if (! this.isActive){
                    this.$refs.searchInput.focus()
                }
                this.isActive = ! this.isActive;

            },
        }
    }
</script>

<style lang="scss" scoped>
    .nav{
        background: #111111;
        color: aliceblue;
        padding: 0 260px;

        div{
            display: inline;
        }

        .nav-logo{
            line-height: 64px;
            vertical-align: middle;
            display: inline;
            color: #00FFFC;
        }

        .nav-link-list{
            list-style: none;
            display: inline;

            li{
                display: inline;
                a{
                    line-height: 64px;
                    padding: 13px;
                    text-decoration: none;
                }

                a:visited{
                    color: aliceblue;
                    text-decoration: none;
                }
            }
        }

        .nav-search {
            float: right;
            margin-top: 11px;

            *{
                vertical-align:middle;
            }

            .search{
                display: inline-block;
                border-radius: 10px;
                overflow: hidden;
            }

            .search-input{
                transition: 0.5s;
                box-sizing: border-box;
                outline: none;
                padding: 12px 0;
                border: none;
                font-size: 15px;
                width: 0;
            }

            .search-btn{
                transition: 0.4s;
                outline: none;
                border: none;
                background: none;
                font-size: 20px;
                padding: 9px 11px;
                color: white;
            }

            .search-btn:hover{
                background: white;
                color: #111111;
            }

            .active{
                .search-input{
                    width: 300px;
                    padding: 12px 15px;
                }
                .search-btn{
                    color: #111111;
                    background: white;
                }
            }
        }

        .nav-user{
            float: right;
            line-height: 64px;
            display: flex;
            margin-left: 20px;

            img{
                height: 34px;
                border-radius: 50%;
                margin: 15px 0 0 15px;
            }
        }

    }
</style>`