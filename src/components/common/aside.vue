<template>
    <div class="aside">
        <el-menu :default-active="onRoutes" 
            class="aside-el-demo"
            background-color="#324157"
            text-color="#bfcbd9" 
            active-text-color="#20a0ff" 
            unique-opened router
            :collapse="collapse">
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items:[
                {
                    icon: 'el-icon-s-home',
                    index: 'index',
                    title: '系统首页'
                },
                {
                    icon: 'el-icon-menu',
                    index: 'baseTabs',
                    title: '基础表格'
                },
                {
                    icon: 'el-icon-s-unfold',
                    index: 'tabs',
                    title: 'tab选项卡'
                },
                {
                    icon: 'el-icon-s-data',
                    index: '3',
                    title: '表单相关',
                    subs: [
                        {
                            index: 'form',
                            title: '基本表单'
                        },
                        {
                            index: '3-2',
                            title: '三级菜单',
                            subs: [
                                {
                                    index: 'editor',
                                    title: '富文本编辑器'
                                },
                                {
                                    index: 'markdown',
                                    title: 'markdown编辑器'
                                },
                            ]
                        },
                        {
                            index: 'upload',
                            title: '文件上传'
                        }
                    ]
                },
                {
                    icon: 'el-icon-notebook-2',
                    index: 'charts',
                    title: 'schart图表'
                },
                {
                    icon: 'el-icon-rank',
                    index: '6',
                    title: '拖拽组件',
                    subs: [
                        {
                            index: 'dragList',
                            title: '拖拽列表',
                        }
                    ]
                },
                {
                    icon: 'el-icon-setting',
                    index: 'permission',
                    title: '权限测试',
                },
                {
                    icon: 'el-icon-setting',
                    index: '404',
                    title: '404页面',
                }
            ]
        }
    },
    computed: {
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    },
    created(){
        bus.$on('collapse', msg => {
            this.collapse = msg
        })
        this.getPermission()
        console.log(localStorage.getItem('user'))
    },
    methods: {
        getPermission() {
            var user = localStorage.getItem('user')
            var items = this.items
            if(user === "admin") {
                this.items.forEach(function(item, i) {
                    if(item.index === "404") {
                        items.splice(i,1)
                    }
                })
            }else {
                this.items.forEach(function(item, i) {
                    if(item.index === "permission") {
                        items.splice(i,1)
                    }
                })
            }    
        }
    },
}
</script>

<style lang="less" scoped>
    .aside {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: auto;
    }
    .aside-el-demo:not(.el-menu--collapse) {
        width: 250px;
    }
    .aside > ul {
        height:100%;
    }
</style>