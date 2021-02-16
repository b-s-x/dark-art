<template lang='pug'>
div.main
  text-container.text-container(
    :selectActiveArrayImages="selectActiveArrayImages"
    @mouseHoverCustom="hover($event)"
    @mouseOutCustom="hoverEvent()"
    :class="{ active: activeIndex }"
    :activeIndex="activeIndex"
    :currentColor="currentColor"
  )

  //- v-if-else(v-if="this.loading") NOTHING

  page-cursor/

  side-nav(
    @changeActive="changeActive($event)"
    :navSectionName='navSectionName'
  )

</template>


<script>

import TextContainer from '@components/TextContainer'
import PageCursor from '@components/PageCursor'
import SideNav from '@components/SideNav'

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      activeIndex: 0,
      currentColor: 'black',
    }
  },

  components: {
    TextContainer,
    PageCursor,
    SideNav,
  },

  computed: {
    ...mapGetters({
      black: 'arrBlackGetters',
      green: 'arrGreenGetters',
      darkRed: 'arrDarkRedGetters',
      hand: 'arrHandGetters',
      arrActive: 'arrActive',
      mapSection: 'mapSection',
      mapColor: 'mapColor',
      navSectionName: 'navSectionName',
      // loading: 'onLoading'
    }),

    selectActiveArrayImages() {
      if (this.arrActive === this.mapSection[0]) {
        this.currentColor = this.mapColor[0]
        return this.black
      } else if(this.arrActive === this.mapSection[1]) {
        this.currentColor = this.mapColor[1]
        return this.green
      } else if(this.arrActive === this.mapSection[2]) {
        this.currentColor = this.mapColor[1]
        return this.darkRed
      } else if(this.arrActive === this.mapSection[3]) {
        this.currentColor = this.mapColor[2]
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

    setImageBackground(id = 0) {
      const arr = this.selectActiveArrayImages
      const url = arr[id].src
      console.log('about to set loaded image: ', url);

      const main = document.querySelector('.main');
      main.classList.add("background");
      main.style.backgroundImage = `url(${url})`;
    },

    hoverEvent() {
      this.$root.$emit('eventHover')
    },

    reloadFirstImage() {
      let id = 0;
      this.setImageBackground(id);
      this.activeIndex = 0;
    },

    changeActive(event) {
      this.$store.commit('changeActiveArr', this.mapSection[event]);
      this.$emit('reloadFirstImage');
    },
  },

  created() {
    this.$on('reloadFirstImage', this.reloadFirstImage)
  },

  beforeDestroy() {
    this.$off('reloadFirstImage', this.reloadFirstImage)
  },

  async mounted() {
    await this.$store.dispatch('fetchArray');

    this.setImageBackground();
  },
}
</script>

<style lang='scss' scoped>

@import '@common';

.main {
  @include flex();
  height: 100vh;
}

.background {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 300ms ease-out 0.5s;
}

</style>