<template lang='pug'>
  div.text-container
    text-item(
      v-for='(img, index) of currentImages'
      :key='img.id'
      @mouseover="$emit('mouseHoverCustom', index)"
      @mouseout="$emit('mouseOutCustom')"
      :class="{active: activeIndex === index}"
      :style="{'color': currentColor}"
      ) {{img.text}}

</template>

<script>

import TextItem from '@components/TextItem'

export default {
  components: {
    TextItem,
  },

  props: {
    currentImageSet: { type: Object, default: () => null },
    activeIndex: { type: Number, default: 0 },
    currentColor: { type: String, default: 'black' },
  },

  computed: {
    currentImages() {
      return this.currentImageSet ? this.currentImageSet.images : [];
    }
  }
}
</script>

<style lang='scss' scoped>

@import '@common';

$activeColor: red;

.text-container {
  @include flex();
  flex-direction: column;
}

.active {
  color: $activeColor !important;
}
</style>
