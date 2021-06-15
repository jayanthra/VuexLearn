import request from '@/services/request'

const giphyApi = {
  getGifList(params : any) : Promise<any> {
    return request({
      url: `/v1/gifs/trending`,
      method: 'get',
      params,
    }).then(function (response) {
      return response.data
    })
  },
}

export default giphyApi
