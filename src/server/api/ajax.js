import axios from 'axios'
export default function ajax(url = '', params = {}, type = 'GET') {
    let p;
    return new Promise((resolve, reject) => {
        if(type.toUpperCase() === 'GET') {
            // 拼接字符串
            let s = '';
            Object.keys(params).forEach(key => {
                s += key + '=' + params[key] + '&';
            });
            if(s) {
                s = s.substr(0, s.lastIndexOf('&'));
                if(url.includes('127.0.0.1')) {
                    url += '?' + s
                } else {
                    url += '?' + s + '&Geek-James=' + randomCode(20);
                }
            } else {
                if(!url.includes('127.0.0.1')) {
                    url += '?Geek-James=' + randomCode(20);
                }
            }
            p = axios.get(url);
        } else {
            p = axios.post(url, params);
        }
        p.then(res => {
            resolve(res.data);
        }, error => {
            reject(error);
        })
    })
}   

/*生成指定长度的随机数*/
function randomCode(length) {
    let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let result = "";
    for (let i = 0; i < length; i++) {
        let index = Math.ceil(Math.random() * 9);
        result += chars[index];
    }
    return result;
}