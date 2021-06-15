import giphyApi from '@/api/giphyApi'
import { GiphyItem } from './interfaces'
import {
  SET_TRENDING_GIFS,
  SET_FAVOURITE_GIF
} from './mutationtypes'

export const loadTrendingGifs = async ({ commit }) : Promise<void> => {
  try {
    const params = {
      rating: 'g',
      limit: 20,
    }
    const items = await giphyApi.getGifList(params)
    commit(SET_TRENDING_GIFS, items)
  } catch (err) {
    throw new Error(err)
  }
}

export const setFavourite = ({ commit }, gifItem: GiphyItem) : void => {
  try {
    commit(SET_FAVOURITE_GIF, gifItem)
  } catch (err) {
    throw new Error(err)
  }
}
