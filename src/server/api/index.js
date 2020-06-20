import ajax from './ajax'

// 定义基础路径
const BASE_URL = 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/'

export const Cart = {
    guess_like : () => ajax(BASE_URL + 'cart/youlike')
}


