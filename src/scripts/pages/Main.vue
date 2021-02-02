<template lang='pug'>
div.main
  text-container.text-container
    text-item(
      v-for='(item, index) of arrImg'
      :key='item.id'
      @mouseover="hover(item.id)"
      @mouseout="hoverEvent()"
      :class="{active: activeIndex === index}"
      ) {{item.text}}

    page-cursor/
</template>

<script>

import TextContainer from '@components/TextContainer'
import TextItem from '@components/TextItem'
import PageCursor from '@components/PageCursor'

export default {
  data() {
    return {
      arrImg: [
        { id: 0, text: 'Mountain', src: '/images/black1.jpeg' },
        { id: 1, text: 'Ocean', src: '/images/black2.jpeg' },
        { id: 2, text: 'Smooth', src: '/images/black9.jpeg' },
        { id: 3, text: 'Fog', src: '/images/black14.jpeg' },
        { id: 4, text: 'Flower', src: '/images/black15.jpeg' },
      ],

      activeIndex: 0,
    }
  },

  components: {
    TextContainer,
    TextItem,
    PageCursor,
  },

  methods: {
    hover(id) {
      const main = document.querySelector('.main')
      let url = this.arrImg[id].src

      this.imgBackground(main, url)
      this.activeHover(id)
      this.hoverEvent()
    },

    hoverEvent() {
      this.$eventBus.$emit('eventHover');
    },

    imgBackground(elem, url) {
      elem.style.background = `url(${url})`
      elem.style.backgroundSize = 'cover';
      elem.style.backgroundPosition = 'center center';
      elem.style.backgroundRepeat = 'no-repeat';
      elem.style.transition = 'all 300ms ease-out 0.5s';

      // elem.classList.add("back")
    },

    firstBackground() {
      const main = document.querySelector('.main')
      let url = this.arrImg[0].src
      this.imgBackground(main, url)
    },

    activeHover(id) {
      this.activeIndex = id
    }
  },

  mounted() {
    this.firstBackground()
  }
}
</script>

<style lang='scss' scoped>

@import '@common';

$activeColor: red;

.main {
  @include flex();
  height: 100vh;
}

.active {
  color: $activeColor;
}

// .back {
//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   transition: all 300ms ease-out 0.5s;
// }

</style>