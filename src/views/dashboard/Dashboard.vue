<template>
    <div id="dashboard">
        <van-tabbar v-model="active"
            :safe-area-inset-bottom=true
            active-color="#75a342"
        >
            <van-tabbar-item v-for="(item, index) in tabbars" :key="index">
                <span>{{item.title}}</span>
                <template slot="icon" slot-scope="props">
                    <img :src="props.active ? item.active : item.inactive" />
                </template>
            </van-tabbar-item>
        </van-tabbar>

        <!-- 缓存界面选择加载 -->
        <keep-alive>
            <router-view v-if="$route.meta.keppAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keppAlive"></router-view>
    </div>
</template>

<script>
export default {
    name: "dashBoard",
    data() {
        return {
            active: 0,
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
    }
}
</script>

<style>

</style>