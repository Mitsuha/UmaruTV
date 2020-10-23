<template>
    <el-row :gutter="30">
        <el-col :span="4" v-for="(item, key) in video" :key="key">
            <div class="cover">
                <img :src="item.img" alt="">
            </div>
            <p>{{ item.name}} <span><i class="el-icon-success"></i> {{ item.watch }}</span></p>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Media",
        data: function () {
            return {
                video:[
                    {
                        img: '/carouse/cover.webp',
                        name: '你的名字',
                        watch: '24594',
                    }, {
                        img: '/carouse/cover.webp',
                        name: '你的名字',
                        watch: '24594',
                    }, {
                        img: '/carouse/cover.webp',
                        name: '你的名字',
                        watch: '24594',
                    }, {
                        img: '/carouse/cover.webp',
                        name: '你的名字',
                        watch: '24594',
                    },
                    {
                        img: '/carouse/cover.webp',
                        name: '你的名字',
                        watch: '24594',
                    },
                    {
                        img: '/carouse/cover.webp',
                        name: '你的名字',
                        watch: '24594',
                    },
                    {
                        img: '/carouse/cover.webp',
                        name: '你的名字',
                        watch: '24594',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-col{
        margin-top: 20px;
    }
    .cover{
        width: 100%;
        height: 324px;
        border-radius: 10px;
        overflow: hidden;

        img{
            max-width: 100%;
        }
    }

    p{
        line-height: 14px;
        font-size: 14px;
        font-weight: 400;
        margin-top: 8px ;
        padding: 0 8px ;
        color: #111111;

        span{
            float: right;
        }
    }
</style>