import axios from 'axios'

axios.defaults.baseURL = 'https://api.example.com'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'


export const media = axios.get('')

export const medias = function (params) {
    return axios.get('',params)
}
