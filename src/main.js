import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/vuex/store.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
//引入富文本编辑器所需要的样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import VueQuillEditor from 'vue-quill-editor';

Vue.use(VueQuillEditor)
Vue.use(VueAxios, axios)
Vue.use(ElementUI); 

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
