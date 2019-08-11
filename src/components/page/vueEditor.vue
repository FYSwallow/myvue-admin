<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>编辑器</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="container">
                <div class="plugins-tips">
                    Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
                </div>
                <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
                <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
            </div>
             <!-- <quill-editor v-model="content"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)">
            </quill-editor> -->
        </div>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
export default {
    data: function(){
        return {
            content: '',
            editorOption: {
                placeholder: 'Hello World'
            }
        }
    },
    components: {
        quillEditor
    },
    methods: {
        onEditorChange({ editor, html, text }) {
            this.content = html;
        },
        submit(){
            console.log(this.content);
            this.$message.success('提交成功！');
        }
    }
}
</script>
<style lang="less" scoped>
    .editor-btn{
        margin-top: 100px;
        margin-left: 5px;
    }
    .plugins-tips {
        padding: 20px 10px;
        margin-bottom: 20px;
    }
    .quill-editor {
        height: 400px;
    } 
</style>