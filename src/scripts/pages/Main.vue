<template lang='pug'>
  div.main
    text-container.text-container
      text-item(
        v-for='item of arrImg'
        :key='item.id'
        @mouseover="hover(item.id)"
        ) {{item.text}}

</template>

<script>

import TextContainer from '@components/TextContainer'
import TextItem from '@components/TextItem'

export default {
  data() {
    return {
      arrImg: [
        { id: 0, text: 'text 1', src: '/images/black1.jpeg' },
        { id: 1, text: 'text 2', src: '/images/black2.jpeg' },
        { id: 2, text: 'text 3', src: '/images/black9.jpeg' },
        { id: 3, text: 'text 4', src: '/images/black14.jpeg' },
        { id: 4, text: 'text 5', src: '/images/black15.jpeg' },
      ]
    }
  },

  components: {
    TextContainer,
    TextItem,
  },

  methods: {
    hover(id) {
      const main = document.querySelector('.main')
      let url = this.arrImg[id].src
      this.imgBackground(main, url)
    },

    imgBackground(elem, url) {
      elem.style.background = `url(${url})`
      elem.style.backgroundSize = 'cover';
      elem.style.backgroundPosition = 'center center';
      elem.style.backgroundRepeat = 'no-repeat';
    },

    firstBackground() {
      const main = document.querySelector('.main')
      let url = this.arrImg[0].src
      this.imgBackground(main, url)
    }
  },

  mounted() {
    this.firstBackground()
  }
}
</script>

<style lang='scss' scoped>

@import '@common';

.main {
  height: 100vh;
  @include flex();
  background: black;
}

</style>