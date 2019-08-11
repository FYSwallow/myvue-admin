<template>
    <div class="tags">
        <el-tag
            v-for="tag in tags"
            :key="tag.name"
            closable
            @click="goLink(tag.path)"
            @close="handleClose(tag.name)"
            :type="isActive(tag.path)">
            {{tag.name}}
        </el-tag>
        <div class="tags-close-box">
            <el-dropdown @command="handleTags">
                <el-button size="mini" type="primary">
                    标签选项<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu size="small" slot="dropdown">
                    <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                    <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tags: []
        }
    },
    watch: {
        $route(newVal, oldVal) {
            this.setTags(this.$route)
        },
    },
    methods: {
        isActive(path){
            if(path === this.$route.fullPath) {
                return 'success'
            }
        },
        setTags(newVal){
            var list = this.tags
            console.log(list.length)
            var tampObj = {
                'name': newVal.name,
                'path': newVal.fullPath,
            }
            console.log(tampObj)
            if(list.length === 0) {
                list.push(tampObj)
            }else{
                for(var i = 0; i < list.length; i++) {
                    if(list[i].name === newVal.name) {
                        this.$router.push(newVal.fullPath)
                        return
                    }
                }
                list.push(tampObj)
            }
        },   
        handleClose(name) {
            var list = this.tags
            for(var i = 0; i < list.length; i++) {
                if(list[i].name === name) {
                    list.splice(i, 1)
                    if(i > 0) {
                        this.$router.push(list[i - 1].path)
                    } else {
                        this.$router.push('/')
                    }
                }
            }
        },
        goLink(route) {
            this.$router.replace({path: route})
        },
        // 关闭全部标签
        closeAll(){  
            this.$router.push('/');
            this.tags = [];
        },
        closeOther() {
            const curItem = this.tags.filter(item => {
                return item.path === this.$route.fullPath
            })
            this.tags = curItem
        },
        handleTags(command){
            command === 'other' ? this.closeOther() : this.closeAll();
        }
    }
}
</script>

<style lang="less" scoped>
    .tags {
        position: relative;
        height: 30px;
        overflow: hidden;
        background-color: #fff;
        padding-right: 120px;
        box-shadow: 0 5px 10px #ddd;
        .el-tag {
            display: inline-block;
            text-align: center;
            height: 20px;
            line-height: 20px;
            margin: 5px;
            cursor: pointer;
        }
        .tags-close-box {
            position: absolute;
            right: 0;
            top: 0;
            box-sizing: border-box;
            text-align: center;
            padding-top: 1px;
            width: 110px;
            height: 30px;
            background: #fff;
            box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
            z-index: 10;
        }
    }
</style>
