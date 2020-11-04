import axios from 'axios'

axios.defaults.baseURL = 'http://umaru.test/'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'


export const media = function (params) {
    return axios.get('/animes/',params)
}

export const recentlyUpdate = function () {
    return axios.get('/animes/recently-updated')
}

export const Anime = function (params) {
    let id = params.id
    delete params.id
    return axios.get('/animes/'+ id + "/", {params:params})
}

export const AnimeWithEpisode = function (params) {
    return axios.get('/animes/'+ params.id + "/", {params: {withEpisode:true}})
}
