<template lang='pug'>
  div.text-container
    text-item(
      v-for='(img, index) of currentImages'
      :key='img.id'
      @mouseover="mouseHoverCustom(index)"
      @mouseout="$emit('mouseOutCustom')"
      :class="{active: currentIndex === index}"
      :style="{'color': currentTextColor}"
      ) {{img.text}}

</template>

<script>

import TextItem from '@components/TextItem'

export default {
  components: {
    TextItem,
  },

  data() {
    return {
      currentIndex: 0
    }
  },

  props: {
    currentImageSet: { type: Object, default: () => null },
    currentTextColor: { type: String, default: 'black' },
  },

  computed: {
    currentImages() {
      return this.currentImageSet ? this.currentImageSet.images : [];
    },
  },

  methods: {
    mouseHoverCustom(index) {
      this.$emit('mouseHoverCustom', index)
      this.setCurrentIndex(index)
    },

    setCurrentIndex(index) {
      this.currentIndex = index
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
