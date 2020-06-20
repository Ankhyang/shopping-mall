<template>
    <div class="cart">
        <!-- 头部 -->
        <header class="head_container">
            <h3><em>{{this.$t('cart.title')}}</em></h3>
            <div class="btn">
                <van-button plain hairline round size="mini" type="primary">{{this.$t('cart.delete')}}</van-button>
            </div>
        </header>
        <!-- 购物车 -->
        <div class="cart_container">
            <!-- 空购物车 -->
            <div class="empty" v-show="isShowEmptyCart">
                <img src="./../../images/cart/empty.png" alt="">
                <h5>{{this.$t('cart.tip')}}</h5>
                <router-link class="walk" to="/dashboard/home">{{this.$t('cart.walk')}}</router-link>
            </div>
            <!-- 有数据的购物车 -->
            <div class="content" v-show="!isShowEmptyCart">
                <section>
                    <div class="cart_item">
                        <div class="left">
                            <!-- <a href="javascript:;" class="radioChecked"></a> -->
                            <van-checkbox v-model="checked" checked-color="#21bf73"></van-checkbox>
                        </div>
                        <div class="center">
                            <img src="" alt="">
                        </div>
                        <div class="right">
                            <p>四川脆红李 1.25Kg以上</p>
                            <div class="priceCount">
                                <span>$12.9</span>
                                <div>
                                    <span>-</span>
                                    <input value="" type="number" disabled>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <!-- 分割线 -->
        <van-divider :style="{color: ' #666', borderColor: '#666', padding: '.1rem 1rem'}">
            {{this.$t('cart.guess')}}
        </van-divider>
        <!-- 商品详情组件 -->
        <ProduceItem :list="like_list"/>
        <!-- 订单栏 -->
        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked" checked-color="#07c160">全选</van-checkbox>
        </van-submit-bar>
        <!-- 加载中 -->
        <Loading :show="showLoading"/> 
    </div>
</template>

<script>
import ProduceItem from '../home/components/tabbar/ProduceItem'
import Loading from "@/components/loading/LoadingGif"
import { Cart } from "@/server/api/index.js";
export default {
    components: {ProduceItem, Loading},
    data() {
        return {
            isShowEmptyCart: true, // 是否显示空购物车
            checked: true,
            showLoading: true,
            like_list: []
        }
    },
    mounted() {
        this._initData();
    },
    methods: {
        async _initData() {
            let res = await Cart.guess_like();
            if(res.success) {
                this.like_list = res.data.product_list;
                this.showLoading = false;
            }

        },
        onSubmit() {

        }
    }
}
</script>

<style lang="less" scoped>
.cart {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .head_container {
        width: 100%;
        height: 2.5rem; 
        background-color: #fff;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        h3{
            font-weight: 600;
        }
        .btn{
            height: inherit;
            line-height: 2.5rem;
            position: absolute;
            right: 2%;
            
        }
    }
    .cart_container{
        width: 100%;
        padding-top: 0.1rem;
        .empty{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: .625rem;
            img{
                width: 50%;
                height: 8rem;
                padding-top: 1.5rem;
                margin: 0 auto;
            }
            h5{
                font-size: .9375rem;
                padding: .9375rem;
            }
            .walk{
                width: 3.855rem;
                height: 1.25rem;
                background-color: #21bf73;
                border-radius: .75rem;
                line-height: 1.28rem;
                text-align: center;
                padding: .3125rem;
                font-size: .875rem;
                color: #fff;
            }
        }
        .content{
            width: 100%;
            .cart_item{
                border-bottom: .0625rem solid #e0dede;
                box-sizing: border-box;
                width: 100%;
                height: 6.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: .425rem;
                background-color: #fff;
                .left{
                    flex: 1;
                    padding-left: .1875rem;
                    .radioChecked{
                        display: inline-block;
                        margin-top: 0.8rem;
                        margin-left: 0.5rem;
                        background: url("../../images/cart/shop-icon.png") no-repeat;
                        background-size: 2.5rem 5rem;
                        width: 1rem;
                        height: 1rem;
                    }
                }
                .center{
                    flex: 3;
                }
                .right{
                    flex: 6;
                    height: inherit;
                    align-self: center;
                    font-size: .875rem;
                    padding: .3125rem;
                    p{
                        padding: 1.385rem 0;
                        text-align: left;
                        font-weight: 500;
                    }
                    .priceCount{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        span{
                            font-weight: 500;
                        }
                        input{
                            width: 1.825rem;
                            height: 1.18rem;
                            line-height: 1.18rem;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 300px) and (min-width: 320px) {
        .van-submit-bar{
            bottom: 3.2rem;
            border-bottom: .0525rem solid #f5f5f5;
        }
    }
    @media screen and (min-width: 320px) and (min-width: 374px) {
        .van-submit-bar{
            bottom: 2.8rem;
            border-bottom: .0525rem solid #f5f5f5;
        }
    }
    @media screen and (min-width: 375px) and (min-width: 413px) {
        .van-submit-bar{
            bottom: 2.5rem;
            border-bottom: .0525rem solid #f5f5f5;
        }
    }
    @media screen and (min-width: 414px) and (min-width: 767px) {
        .van-submit-bar{
            bottom: 1.1rem;
            border-bottom: .0525rem solid #f5f5f5;
        }
    }
    
}
</style>