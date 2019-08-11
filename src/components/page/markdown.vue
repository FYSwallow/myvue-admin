<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>markdown编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                mavonEditor：基于Vue的markdown编辑器。
            </div>
            <mavonEditor v-model="content" ref="md" @change="change" style="min-height: 600px"/>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    components: {
        mavonEditor 
    },
    data() {
        return {
            content:'', 
            html:'',    
        }
    },
    methods: {
        change(value, render){
            this.html = render;
        },
        // 提交
        submit(){
            console.log(this.content);
            console.log(this.html);
        }
    },
}
</script>

<style lang="less" scoped>
    .editor-btn {
        margin-top: 20px;
    }
</style>