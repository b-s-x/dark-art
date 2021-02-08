<template lang='pug'>
  div.text-container
    text-item(
      v-for='(item, index) of selectActiveArrayImages'
      :key='item.id'
      @mouseover="$emit('mouseHoverCustom', item.id)"
      @mouseout="$emit('mouseOutCustom')"
      :class="{active: activeIndex === index}"
      :style="{'color': currentColor}"
      ) {{item.text}}

</template>

<script>

import TextItem from '@components/TextItem'

export default {
  components: {
    TextItem,
  },

  props: {
    selectActiveArrayImages: { type: Array, default: () => [] },
    activeIndex: { type: Number, default: 0 },
    currentColor: { type: String, default: 'black' },
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
