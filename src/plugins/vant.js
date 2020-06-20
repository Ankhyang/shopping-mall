import Vue from 'vue'
// tabbar
import {
    Tabbar,
    TabbarItem
} from 'vant'
Vue.use(Tabbar).use(TabbarItem)

// icon图标
import {
    Icon
} from 'vant'
Vue.use(Icon)

// 图片
import { 
    Image as VanImage 
} from 'vant'
Vue.use(VanImage)

// 按钮
import { Button } from 'vant'
Vue.use(Button)

// 复选框
import { Checkbox } from 'vant'
Vue.use(Checkbox)

// 分割线
import { Divider } from 'vant'
Vue.use(Divider)

// 懒加载
import { Lazyload } from 'vant'
Vue.use(Lazyload)

// 提交订单栏
import { SubmitBar } from 'vant'
Vue.use(SubmitBar)