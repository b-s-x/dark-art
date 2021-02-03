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
  side-nav/
</template>

<script>

import TextContainer from '@components/TextContainer'
import TextItem from '@components/TextItem'
import PageCursor from '@components/PageCursor'
import SideNav from '@components/SideNav'

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
    SideNav,
  },

  methods: {
    hover(id) {
      let url = this.arrImg[id].src

      this.imgBackground(url)
      this.activeHover(id)
      this.hoverEvent()
    },

    hoverEvent() {
      this.$eventBus.$emit('eventHover');
    },

    imgBackground(url) {
      const main = document.querySelector('.main')
      main.style.background = `url(${url})`
      main.style.backgroundSize = 'cover';
      main.style.backgroundPosition = 'center center';
      main.style.backgroundRepeat = 'no-repeat';
      main.style.transition = 'all 300ms ease-out 0.5s';

      // main.classList.add("back")
    },

    firstBackground() {
      let url = this.arrImg[0].src
      this.imgBackground(url)
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