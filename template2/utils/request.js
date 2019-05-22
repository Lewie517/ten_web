import axios from 'axios'
import {getUser} from '@/utils/auth'
// 创建axios实例
//https://www.easy-mock.com/mock/5c544cc63cb21679a143110f
//192.168.17.128:9005
const service = axios.create({
    baseURL: 'http://localhost:9013', // api的base_url
    timeout: 300000, // 请求超时时间
    headers: { 
      'Authorization':  "Bearer "+getUser().token,
      'Access-Control-Allow-Origin':'*'
    }
  })
export default service