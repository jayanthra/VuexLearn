import { GifState, GiphyItem } from "./interfaces"

export const setTrendingGifs = (state: GifState, trendingGifs: GiphyItem[]) : void => {
  state.trendingGifs = trendingGifs
}

export const addToFavourite = (state: GifState, favourite: string) : void => {
  state.favouriteGifs.push(favourite)
}