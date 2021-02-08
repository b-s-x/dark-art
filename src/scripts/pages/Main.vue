<template lang='pug'>
div.main
  text-container.text-container
    text-item(
      v-for='(item, index) of selectActiveArrayImages'
      :key='item.id'
      @mouseover="hover(item.id)"
      @mouseout="hoverEvent()"
      :class="{active: activeIndex === index}"
      :style="{'color': currentColor}"
      ) {{item.text}}

    page-cursor/
  side-nav(@changeActive="changeActive($event)")/
</template>


<script>
//text container принять text-item и отрендерить на верхнем уровне
// влоденность

import TextContainer from '@components/TextContainer'
import TextItem from '@components/TextItem'
import PageCursor from '@components/PageCursor'
import SideNav from '@components/SideNav'

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      activeIndex: 0,
      currentColor: 'black'
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
      darkRed: 'arrDarkRedGetters',
      hand: 'arrHandGetters',
      arrActive: 'arrActive',
    }),

    selectActiveArrayImages() { //?? this need remake
      if(this.arrActive === 'black') {
        this.currentColor = 'black'
        return this.green
      } else if(this.arrActive === 'green') {
        this.currentColor = 'white'
        return this.black
      } else if(this.arrActive === 'darkRed') {
        this.currentColor = 'white'
        return this.darkRed
      } else if(this.arrActive === 'hand') {
        this.currentColor = '#7a7a7a'
        return this.hand
      }
    }
  },

  methods: {
    hover(id) {
      this.setImageBackground(id)
      this.hoverEvent()

      this.activeIndex = id
    },

    setImageBackground(id) {
      const arr = this.selectActiveArrayImages
      const url = arr[id].src

      const main = document.querySelector('.main');
      main.classList.add("background");
      main.style.backgroundImage = `url(${url})`;
    },

    hoverEvent() {
      this.$eventBus.$emit('eventHover');
    },

    reloadFirstImage() {
      let id = 0;
      this.setImageBackground(id);
      this.activeIndex = 0;
    },

    changeActive(event) {
      this.$store.commit('changeActiveArr', event);
      this.$emit('reloadFirstImage');
    }
  },

  created() {
    this.$on('reloadFirstImage', this.reloadFirstImage)
  },

  beforeDestroy() {
    this.$off('reloadFirstImage', this.reloadFirstImage)
  },

  mounted() {
     this.setImageBackground(0)
  },

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
  color: red !important;
}

.background {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 300ms ease-out 0.5s;
}

</style>