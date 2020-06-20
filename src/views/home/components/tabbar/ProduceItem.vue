<template>
    <div id="produceItem">                                  
        <section v-for="(item, index) in list" :key="index" @click.stop="gotoDetail(item)">
            <img :src="item.small_image" alt="">
            <p class="title">{{item.name}}</p>
            <p class="sub_title">{{item.spec}}</p>
            <div class="priceCart">
                <span class="p">{{item.price}}<span class="sub_p">{{item.origin_price}}</span></span>
                <div class="car">
                    <svg-icon iconClass="car"
                        style="width:1.5rem;height:1.5rem" ></svg-icon>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
        }
    },
    methods: {
        gotoDetail(goods) {
            console.log(goods)
            this.$router.push({
                name: 'goodsDetail',
                query: {
                    id: goods.id,
                    name: goods.name,
                    small_image: goods.small_image,
                    price: goods.price,
                    spec: goods.spec,
                    total_sales: goods.total_sales,
                    origin_price: goods.origin_price
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
#produceItem{
    width: 100%;
    height: auto;
    padding: .1875rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
    section{
        width: 47.6%;
        height: 15.375rem;
        margin: .225rem;
        padding: .125rem;
        border-radius: .3125rem;
        box-sizing: border-box;
        background: #fff;
        img{
            width: 100%;
            height: 68%;
            background-size: contain;
            background-image: url('../../../../images/placeholderImg/product-img-load.png');
        }
        .title{
            font-size: .65rem;
            font-weight: 600;
            text-align: left;
            padding: 0.1rem .325rem;
            box-sizing: border-box;
            margin-bottom: .525rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-box-orient: vertical;
        }
        .sub_title{
            font-size: .45rem;
            font-weight: 600;
            text-align: left;
            padding: 0.1rem .325rem;
            box-sizing: border-box;
            color: gray;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .priceCart{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            justify-content: space-between;
            align-items: center;
            margin: .3125rem;
            .p{
                color: #f37078;
                font-size: .928rem;
                .sub_p{
                    text-align: left;
                    color: #666;
                    font-size: .755rem;
                    text-decoration: line-through;
                    padding-left: .3125rem;
                }
            }
        }
    }
}
</style>