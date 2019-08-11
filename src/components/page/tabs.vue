<template>
    <div class="tabs">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-copy"></i> tab选项卡</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
                    <el-table 
                    :data="unread"
                    :show-header="false" 
                    style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                <span class="message-title">{{scope.row.title}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="scope">
                                <el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="handle-row">
                        <el-button type="primary">全部标为已读</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="`已读消息(${read.length})`" name="second">
                    <el-table 
                    :data="read"
                    :show-header="false" 
                    style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                <span class="message-title">{{scope.row.title}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="scope">
                                <el-button size="small" type="danger" @click="deleteRead(scope.$index)">删除本条</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="handle-row">
                        <el-button type="danger">删除全部</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
                    <el-table 
                    :data="recycle" 
                    :show-header="false" 
                    style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                <span class="message-title">{{scope.row.title}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="scope">
                                <el-button size="small" @click="recycleRead(scope.$index)">还原本条</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="handle-row">
                        <el-button type="primary">还原所有</el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>   
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'first',
            showHeader: false,
            unread: [{
                date: '2018-04-19 20:00:00',
                title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
            },{
                date: '2018-04-19 21:00:00',
                title: '今晚12点整发大红包，先到先得',
            }],
            read: [{
                date: '2018-04-19 20:00:00',
                title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
            }],
            recycle: [{
                date: '2018-04-19 20:00:00',
                title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
            }]
        }
    },
    methods: {
        handleRead(index) {
            let item = this.unread.splice(index, 1)
            this.read = this.read.concat(item) 
        },
        deleteRead(index) {
            let item = this.read.splice(index, 1)
            this.recycle = this.recycle.concat(item) 
        },
        recycleRead(index) {
            let item = this.recycle.splice(index, 1)
            this.read = this.read.concat(item) 
        }
    }
}
</script>

<style lang="less" scoped>
    .tabs {
        .container {
            padding: 30px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            .message-title{
                cursor: pointer;
            }
            .handle-row{
                margin-top: 30px;
            }
        }

        .crumbs {
            margin: 10px 0;
        }
    }
</style>
