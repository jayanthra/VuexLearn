import { GifState, GiphyItem } from "./interfaces"

// export const getFavouriteGifs = state => state.favouriteGifs

export const getTrendingGifs = (state: GifState): GiphyItem[] => {
  return state.trendingGifs
}

export const getFavouriteGifs = (state: GifState): string[] => {
  return state.favouriteGifs
}