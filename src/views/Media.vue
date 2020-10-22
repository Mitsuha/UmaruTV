<template>
    <div style="background: #F8F8F8">
        <Nav></Nav>
        <el-row class="detail">
            <el-col :xs="24" :sm="{span:22, offset:1}" :md="{span:18, offset:3}">
                <div class="cover">
                    <img src="../assets/cover.webp" alt="">
                </div>
                <div class="info">
                    <h2>寻梦环游记</h2>
                    <table class="statistics">
                        <tr>
                            <td>总播放</td><td>100w</td>
                        </tr>
                        <tr>
                            <td>总弹幕</td><td>350w</td>
                        </tr>
                        <tr>
                            <td>评分</td>
                            <td>
                                <el-rate v-model="value" disabled show-score score-template="{value}"></el-rate>
                            </td>
                        </tr>
                    </table>
                    <div class="introduction">
                        <p>
                            简介
                            <el-button size="mini" round>编辑记录</el-button>
                            <el-button size="mini" type="primary" @click="edit_introduction()" round>提交改进</el-button>
                        </p>
                        <textarea name="" id="" cols="30" rows="10" :disabled="introduction_edit_disable" ref="introduction_editor">
                            您可以帮我们填写影片信息哦，提交后我们会人工审核，合适的就会采纳，快来填写吧！
                        </textarea>
                    </div>
                    <div class="tags">
                        <el-tag
                                size="mini"
                                type="info"
                                :key="tag"
                                v-for="tag in tags"
                                :disable-transitions="false"
                                @close="handleClose(tag)">
                            {{tag}}
                        </el-tag>
                        <el-input
                                class="input-new-tag"
                                v-if="tagInputVisible"
                                v-model="inputValue"
                                ref="saveTagInput"
                                size="mini"
                                @keyup.enter.native="handleInputConfirm"
                                @blur="handleInputConfirm"
                        >
                        </el-input>
                        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 打个标签</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class="media">
            <el-col :xs="24" :sm="{span:22, offset:1}" :md="{span:18, offset:3}">
                <el-col :xs="24" :sm="23" :md="17">
                    <div class="fake">
                        假装这是一个选择器
                    </div>
                </el-col>

                <el-col :xs="24" :sm="2" :md="4">

                </el-col>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Nav from "@/components/Nav";

    export default {
        name: "media",
        components: {
            Nav,
        },
        data() {
            return {
                value: 3.7,
                introduction_edit_disable: true,
                tagInputVisible: false,
                inputValue: '',
                tags:[
                    '治愈',
                    '百合',
                    '纯爱',
                    'NTR',
                ]
            }
        },
        methods:{
            edit_introduction () {
                console.log(this.introduction_edit_disable)
                if (this.introduction_edit_disable){
                    this.introduction_edit_disable = false
                    this.$refs.introduction_editor.focus()
                }else {
                    this.introduction_edit_disable = true
                }
            },

            showInput() {
                this.tagInputVisible = true;
                this.$nextTick(() => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue && this.tags.indexOf(inputValue) === -1) {
                    this.tags.push(inputValue);
                }
                this.tagInputVisible = false;
                this.inputValue = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .detail{
        background: #F8F8F8;
        >.el-col{
            background: white;
            padding: 30px 0 35px 40px;
        }

        .cover{
            display: inline-block;
            width: 233px;
            float: left;

            img{
                max-width: 100%;
                max-height: 100%;
                border-radius: 10px;
            }
        }

        .info{
            margin-left: 30px;
            display: inline-block;
            width: 50%;

            h2{
                height: 22px;
                font-size: 22px;
                font-weight: 500;
                color: #3e3e3e;
            }
            .statistics{
                margin-top: 20px;

                tr{
                    font-size: 14px;
                    font-weight: 400;

                    td:first-child{
                        color: #5f5f5f;
                    }

                    td:nth-child(2){
                        padding-left: 16px;
                        color: #4e4e4e;
                        margin-top: 10px;
                    }
                }

                tr:last-child{
                    line-height: 25px;
                }
            }

            .introduction{
                margin-top: 25px;
                p{
                    line-height: 14px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #222222;
                }
                .el-button--mini:first-child{
                    margin-left: 15px;
                }
                .el-button--mini{
                    padding: 4px 11px;
                    font-size: 12px;
                    font-weight: 400;
                }
                textarea{
                    display: block;
                    margin-top: 5px;
                    width: 100%;
                    height: 80px;
                    border: none;
                    resize:none;
                    padding: 10px;
                }
            }

            .tags{
                margin-top: 20px;
                width: 100%;

                .el-tag{
                    border-radius: 5px;
                    margin-right: 7px;
                }

                .el-button--small{
                    padding: 4px 10px;
                }
                .el-input--mini{
                    width: 80.34px;
                }
            }
        }
    }
    .media{
        margin-top: 20px;
    }
    .fake{
        width: 100%;
        height: 500px;
        background: black;
    }
</style>