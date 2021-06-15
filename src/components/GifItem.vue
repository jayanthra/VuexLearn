<template>
<div class="gif-image">
    <img class="gif" :src="imageUrl" alt="">
    <div v-if="user">
        <img class="avatar" :src="user.avatar_url" alt="">
        <p>{{user.display_name}}</p>
    </div>
    <button @click="addFav(imageUrl)">ADD</button>
</div>
</template>

<script lang="ts">
import { User } from '@/store/modules/giphy/interfaces';
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class GifItem extends Vue {

    @Prop(String) imageUrl: string | undefined
    @Prop({ default: {} }) user!: User | undefined

    // @Prop(Number) readonly weight: number | undefined
    // @Prop({ default: 'red' }) readonly color!: string
    // @Prop(String) name: string | undefined

    @Emit()
    addFav(gifItem: string): string {
        return gifItem
    }

    mounted(): void {
        console.log(this.imageUrl)
        console.log(this.user)
    }
}
</script>

<style lang="scss" scoped>
.gif-image {
    max-width: 150px;
    border: 1px solid gray;
    margin-bottom: 12px;
    .gif {
        max-width: 150px;
    }
    .avatar {
        width: 50px;
        border-radius: 50%;
        float: right;
    }
}
</style>