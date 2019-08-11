import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/view/Index.vue'], resolve)
const Tabs = resolve => require(['@/components/page/tabs.vue'], resolve)
const Index = resolve => require(['@/components/page/index.vue'], resolve)
const BaseTable = resolve => require(['@/components/page/baseTable.vue'], resolve)
const BaseForm = resolve => require(['@/components/page/baseForm.vue'], resolve)
const VueEditor = resolve => require(['@/components/page/vueEditor.vue'], resolve)
const MarkDown = resolve => require(['@/components/page/markdown.vue'], resolve)
const Upload = resolve => require(['@/components/page/upload.vue'], resolve)
const Chart = resolve => require(['@/components/page/charts.vue'], resolve)
const DragList = resolve => require(['@/components/page/dragList.vue'], resolve)
const Permission = resolve => require(['@/components/page/permission.vue'], resolve)
const Login = resolve => require(['@/components/page/login.vue'], resolve)
const Error404 = resolve => require(['@/components/page/404.vue'], resolve)
Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', redirect: '/index'},
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '/index',
                    component: Index,
                    name: '系统首页'
                },
                {
                    path: '/tabs',
                    component: Tabs,
                    name: 'tab选项卡'
                },
                {
                    path: '/baseTabs',
                    component: BaseTable,
                    name: '基础表格'
                },
                {
                    path: '/form',
                    component: BaseForm,
                    name: '基本表单'
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: VueEditor,
                    name: '富文本编辑器'
                },
                {
                    // Mark编辑器组件
                    path: '/markdown',
                    component: MarkDown,
                    name: 'markdown编辑器'
                },
                {
                    // 文件上传
                    path: '/upload',
                    component: Upload,
                    name: '文件上传'
                },
                {
                    // schart图标
                    path: '/charts',
                    component: Chart,
                    name: 'schart图标'
                },
                {
                    // 拖拽列表
                    path: '/dragList',
                    component: DragList,
                    name: '拖拽列表'
                },
                {
                    // 权限测试
                    path: '/permission',
                    component: Permission,
                    name: '权限管理'
                },
                {
                    // 权限测试
                    path: '/404',
                    component: Error404,
                    name: '权限管理'
                },
            ]
        },
        {
            path: '/login',
            component: Login
        },
        
    ]
  })