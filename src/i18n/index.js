import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// 引入语言配置文件
import zh from './zh'
import en from './en'
// 创建vue-i18n的实例
const i18n = new VueI18n({
    locale: localStorage.getItem('local') || 'zh', // 语言标识
    messages: {
        zh,
        en
    }
})
export default i18n
