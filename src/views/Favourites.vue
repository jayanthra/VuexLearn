<template>
  <div class="home">
    <div class="gif-holder">
      <gif-item v-for="(item,key) in gifList" 
      :key="key" :imageUrl="item"/>
    </div>
  </div>
</template>


<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import GifItem from '@/components/GifItem.vue'
import { mapGetters } from 'vuex'

@Component({
  components: {
    GifItem
  },
  computed: {
    ...mapGetters({
      gifList: 'giphy/getFavouriteGifs'
    })
  }
})
export default class Favourites extends Vue {
  gifList!: string[]
}
</script>
<style lang="scss" scoped>
  .gif-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>