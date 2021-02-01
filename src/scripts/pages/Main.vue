<template lang='pug'>
  div.main
    text-container.text-container
      text-item(
        v-for='item of arrImg'
        :key='item.id'
        @mouseover="log('over', item.id)"
        @mouseout="log('out', item.id)"
        ) {{item.text}}

</template>

<script>
import TextContainer from '@components/TextContainer'
import TextItem from '@components/TextItem'

export default {
  data() {
    return {
      arrImg: [
        { id: 1, text: 'text 1', src: '' },
        { id: 2, text: 'text 2', src: '' },
        { id: 3, text: 'text 3', src: '' },
        { id: 4, text: 'text 4', src: '' },
      ]
    }
  },
  components: {
    TextContainer,
    TextItem,
  },

  methods: {
    log(text, id) {
      console.log(text, id);
    }
  },
}
</script>

<style lang='scss' scoped>

@import '@common';

.main {
  height: 100vh;
  @include flex();
}

</style>