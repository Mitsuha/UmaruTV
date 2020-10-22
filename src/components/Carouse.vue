<template>
    <el-carousel class="carousel" height="360px" >
        <el-carousel-item v-for="item in items" :key="item">
            <!--                <h3 class="small">{{ item }}</h3>-->
            <img :src="item" alt="">
            <!--                <img src="../assets/carouse/1.jpg" alt="">-->
            <!--                <img src="../assets/carouse/2.png" alt="">-->
            <!--                <img src="../assets/carouse/3.jpg" alt="">-->
            <!--                <img src="../assets/carouse/4.jpg" alt="">-->
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "Carouse",
        data: function () {
            return {
                items:[
                    '/carouse/1.jpg',
                    '/carouse/2.png',
                    '/carouse/3.jpg',
                    '/carouse/4.jpg',
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .carousel{
        border-radius: 8px;
    }
</style>