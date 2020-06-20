<template>
    <div>
        <div id="dashboard">
            <van-tabbar v-model="active"
                :safe-area-inset-bottom=true
                active-color="#75a342"
            >
                <van-tabbar-item v-for="(item, index) in tabbars" 
                                :key="index"
                                @click="tab(index, item.name)"
                >
                    <span :class="curIndex === index ? 'active':''">{{item.title}}</span>
                    <template slot="icon" slot-scope="props">
                        <img :src="props.active ? item.active : item.inactive" />
                    </template>
                </van-tabbar-item>
            </van-tabbar>
        </div>                          
        <!-- 缓存界面选择加载 -->
        <div class="content">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashBoard",
    created() {
        this.tabbarSelected(this.$route.name)
    },
    watch: {
        // 监听路由变化，保证路由跳转tabbar选中正常
        $route: {
            handler (obj, oldObj) {
                this.tabbarSelected(obj.name)
            },
            deep: true
        }
    },
    data() {
        return {
            active: 0,
            curIndex: 0,
            tabbars: [
                {
                    name: "home",
                    title: this.$t('home.home'),
                    inactive: require('../../images/tabbar/home_default.png'),
                    active: require('../../images/tabbar/home_selected.png')
                },
                {
                    name: "category",
                    title: this.$t('home.category'),
                    inactive: require('@/images/tabbar/category_default.png'),
                    active: require('@/images/tabbar/category_selected.png')
                },
                {
                    name: "eat",
                    title: this.$t('home.eat'),
                    inactive: require('@/images/tabbar/eat_default.png'),
                    active: require('@/images/tabbar/eat_selected.png')
                },
                {
                    name: "cart",
                    title: this.$t('home.cart'),
                    inactive: require('@/images/tabbar/shoppingcart_default.png'),
                    active: require('@/images/tabbar/shoppingcart_selected.png')
                },
                {
                    name: "mine",
                    title: this.$t('home.mine'),
                    inactive: require('@/images/tabbar/mine_default.png'),
                    active: require('@/images/tabbar/mine_selected.png')
                }
            ]
        }
    },
    methods: {
        tab(index, name) {
            this.curIndex = index
            this.$router.push(name)
        },
        tabbarSelected (name) {
            const obj = {
                home: 0,
                category: 1,
                eat: 2,
                cart: 3,
                mine: 4
            }
            this.active = obj[name]
        }
    }
}
</script>

<style lang="less" scoped>
#dashboard{
    margin-top: 3.125rem;
}
.content{
    min-height: 100%;
    padding-bottom: 2.8rem;
}
// 转场动画
.router-slider-enter-active,
.router-slider-leave-active {
    transition: all .3s;
}
.router-slider-enter,
.router-slider-leave{
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}    
</style>