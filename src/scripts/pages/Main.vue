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
      arrActive: 'arrActive',
    }),

    selectActiveArrayImages() {
      if(this.arrActive === 'black') {
        return this.green
      } else if(this.arrActive === 'green') {
        return this.black
      }
    }
  },

  methods: {
    hover(id) {
      this.imgBackground(id)
      this.hoverEvent()

      this.activeIndex = id
    },

    imgBackground(id) {
      const arr = this.selectActiveArrayImages
      const url = arr[id].src

      const main = document.querySelector('.main')
      main.style.background = `url(${url})`

      main.style.backgroundSize = 'cover';
      main.style.backgroundPosition = 'center center';
      main.style.backgroundRepeat = 'no-repeat';
      main.style.transition = 'all 300ms ease-out 0.5s';

      // main.classList.add("back")
    },

    hoverEvent() {
      this.$eventBus.$emit('eventHover');
    },
  },

  mounted() {
     this.imgBackground(0)
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