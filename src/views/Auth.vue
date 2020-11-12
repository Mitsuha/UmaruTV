<template>
    <div class="main">
        <Nav></Nav>
        <div class="container">
            <div class="logo">
                <img src="../assets/umaru.jpg" alt="">
            </div>
            <div class="form">
                <div class="form-header">
                    <h3>LOGO</h3>
                </div>
                <div class="form-body">
                    <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="loginForm.email">
                    </el-input>
                    <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="loginForm.validate">
                    </el-input>
                    <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="loginForm.password">
                    </el-input>
                    <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="loginForm.password_confirm">
                    </el-input>
                    <el-button type="primary">主要按钮</el-button>
                </div>
                <div class="form-footer">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from "../components/Nav";

    export default {
        name: "Login",
        components:{
            Nav,
        },
        data: function () {
            return {
                currentRoute:{},
                loginForm:{
                    email:'',
                    validate:'',
                    password:'',
                    password_confirm:'',
                }
            }
        },
        created: function(){
            this.currentRoute = this.$router.currentRoute
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .main{
        height: 100%;
        background: #ececec;
    }
    .container{
        height: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;


        >div{
            display: inline-block;
        }
        .logo{
            margin-left: 100px;
            img{
                width: 300px;
                height: 300px;
            }
        }
        .form{
            width: 300px;
            padding: 30px;
            background: #FFFFFF;

            .form-header{
                padding: 10px 0;
            }
            .form-body{
                .el-input{
                    margin-bottom: 10px;
                }

                .el-button{
                    margin-top: 20px;
                    width: 100%;
                }
            }
        }
    }
</style>

<style>
    html,body,#app{
        height: 100%;
    }
</style>