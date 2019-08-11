<template>
    <div class="wrapper">
        <v-header></v-header>
        <v-aside></v-aside>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tag></v-tag>
            <div class="content">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/common/header.vue"
import Aside from "@/components/common/aside.vue"
import Tags from "@/components/common/tags.vue"
import bus from '@/components/common/bus';

export default {
    data()　{
        return {
            collapse: false
        }
    },
    created() {
        bus.$on('collapse', msg => {
            this.collapse = msg;
        })
    },
    components: {
        'v-header': Header,
        'v-aside': Aside,
        'v-tag': Tags
    }
}
</script>
<style lang="less" scoped>
    .content-box {
        position: absolute;
        left: 250px;
        right: 0;
        top: 70px;
        bottom: 0;
        padding-bottom: 30px;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #f0f0f0;
        .content {
            width: auto;
            height: 100%;
            padding: 10px;
            overflow-y: scroll;
        }   
    }
    .content-collapse {
        left: 65px;
    }
</style>
