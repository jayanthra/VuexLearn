<template>
  <div class="home">
    <div class="gif-holder">
      <gif-item @add-fav="addToFav" :user="item.user" v-for="(item,key) in gifList" :key="key" :imageUrl="item.images.original.url"/>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex'
import GifItem from '@/components/GifItem.vue'
import { GiphyItem } from '@/store/modules/giphy/interfaces';

@Component({
  components: {
    GifItem
  },
  computed: {
    ...mapGetters({
      gifList: 'giphy/getTrendingGifs'
    })
  }
})
export default class Home extends Vue {
  gifList!: GiphyItem[]

  async addToFav(item : string) : Promise<void> {
    await this.$store.dispatch('giphy/setFavourite', item)
  }

  async loadGifs() : Promise<void> {
    if(this.gifList.length === 0) {
      await this.$store.dispatch('giphy/loadTrendingGifs')
    }
  }

  mounted(): void {
    this.loadGifs()
  }

}
</script>

<style lang="scss" scoped>
  .gif-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
