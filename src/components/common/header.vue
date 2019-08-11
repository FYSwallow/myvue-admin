<template>
    <div class="header">
        <div class="collapse-btn" @click="collapseChange">
            <i class="el-icon-menu"></i>
        </div>
        <div class="logo">后台管理系统</div>
        <div class="header-right">
            <div class="header-user-icon">
                <div class="btn-fullscreen" @click="toggleFullScreen">
                    <el-tooltip class="item" effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="top-start">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <div class="btn-bell">
                        <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                            <router-link to="tabs" tag="span">
                                <i class="el-icon-bell"></i>  
                            </router-link>
                        </el-tooltip>
                        <span class="btn-bell-badge"></span>
                    </div>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator"><img src="@/assets/images/img.jpg" alt=""></div>
                <!-- 用户名 -->
                <el-dropdown class="user-name" trigger="click">
                    <span class="el-dropdown-link">
                        {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-circle-check">个人中心</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check">github</el-dropdown-item>
                        <span @click="exit">
                            <el-dropdown-item icon="el-icon-circle-check" >退出登录</el-dropdown-item>
                        </span>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '../common/bus'
export default {
    data() {
        return {
            collapse: false,
            fullscreen: false,
            message: 2,
            name: '',
        }
    },
    created() {
        this.name = localStorage.getItem('user')
        if (this.name === null) {
            this.$router.push('/login')
        }
    },
    methods: {
        collapseChange(){
            this.collapse = !this.collapse
            bus.$emit('collapse', this.collapse)
        },
        // 全屏事件
        toggleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        exit(){
            localStorage.removeItem('user')
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="less" scoped>
    .header {
        width: 100%;
        height: 70px;
        font-size: 12px;
        color: #fff;
        position: relative;
        background-color: #242F42;
        text-align: center;
        line-height: 70px;
        font-size: 25px;
        overflow: hidden;
        .collapse-btn {
            height: 100%;
            float: left;
            margin: 0 21px;
            cursor: pointer;
        }
        .logo {
            width: 250px;
            height: 100%;
            float: left;
            text-align: left;
        }
        .header-right {
            float: right;
            padding-right: 50px;
            .header-user-icon {
                .btn-fullscreen {
                    float: left;
                    margin-right: 10px;
                    cursor: pointer;
                    border-radius: 15px;  
                    transform: rotate(45deg);
                }
                .btn-bell,
                .user-avator,
                .user-name {
                    float: left;
                    margin-right: 10px;
                    cursor: pointer;
                    border-radius: 15px;   
                } 
                .btn-bell {
                    float: left;
                    margin-right: 10px;
                    cursor: pointer;
                    border-radius: 15px;
                    position: relative;
                    .btn-bell-badge {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        width: 8px;
                        height: 8px;
                        border-radius: 4px;
                        background: #f56c6c;
                        color: #fff;
                    }
                }
                .user-avator img {
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;   
                    vertical-align: middle;
                    
                }
                .user-name {
                    margin-left: 10px;
                    .el-dropdown-link {
                    color: #fff

                    }
                }
            }
        }
    }

</style>