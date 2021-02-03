<template lang='pug'>
div.main
  text-container.text-container
    text-item(
      v-for='(item, index) of selectActiveArrayImages'
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

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      activeIndex: 0,
      activeArrayImage: 'green',
    }
  },

  components: {
    TextContainer,
    TextItem,
    PageCursor,
    SideNav,
  },

  computed: {
    ...mapGetters({
      black: 'arrGreenGetters',
      green: 'arrBlackGetters',
    }),

    selectActiveArrayImages() {
      if(this.activeArrayImage === 'black') {
        return this.green
      } else if(this.activeArrayImage === 'green') {
        return this.black
      }
    }
  },

  methods: {
    hover(id) {
      let arr = this.selectActiveArrayImages
      let url = arr[id].src

      this.imgBackground(url)
      this.activeHover(id)
      this.hoverEvent()
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

    firstBackground(arr) {
      let url = arr[0].src
      this.imgBackground(url)
    },

    hoverEvent() {
      this.$eventBus.$emit('eventHover');
    },

    activeHover(id) {
      this.activeIndex = id
    }
  },

  mounted() {
    this.firstBackground(this.selectActiveArrayImages)
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