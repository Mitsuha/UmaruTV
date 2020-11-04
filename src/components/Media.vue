<template>
    <el-row :gutter="30">
        <el-col class="test" :span="4" v-for="(item, key) in data.data" :key="key">
            <router-link :to="{name:'media', params:{id: item.id}}">
                <div class="cover">
                    <img :src="item.cover" alt="">
                </div>
                <p>{{ item.name}} <span><i class="el-icon-success"></i> {{ diffForHumans(item.watch) }}</span></p>
            </router-link>
        </el-col>
    </el-row>
</template>

<script>
    import { diffForHumans } from "@/helper";

    export default {
        name: "Media",
        data: function(){
            return{
                resource:[]
            }
        },
        props: {
            data:{
                type: Object
            }
        },
        created(){
            // this.handleData()
        },
        methods: {
            handleData(){

            },
            jumpToMedia(id){
                console.log(id)
            },
            diffForHumans(number){
                return diffForHumans(number)
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