<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
            <el-breadcrumb-item>图片上传</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="container">
            <div class="content-title">支持拖拽</div>
            <div class="plugins-tips">
                Element UI自带上传组件。
            </div>
            <el-upload
                class="upload-demo"
                drag
                action="http://jsonplaceholder.typicode.com/api/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <!-- <div class="content-title">支持裁剪</div>
            <div class="plugins-tips">
                vue-cropperjs：一个封装了 cropperjs 的 Vue 组件。
            </div> -->
            <!-- <div class="crop-demo">
                <img :src="cropImg" class="pre-img">
                <div class="crop-demo-btn">选择图片
                    <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage"/>
                </div>
            </div> -->
        
            <!-- <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
                <vue-cropper ref='cropper' :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage" style="width:100%;height:300px;"></vue-cropper>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelCrop">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog> -->
        </div>
    </div>
</template>

<script>
import VueCropper  from 'vue-cropperjs';
export default {
    components: {
        VueCropper
    },
}
</script>

<style lang="less" scoped>
    
</style>