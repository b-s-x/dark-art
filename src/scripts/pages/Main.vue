<template lang='pug'>
div.main
  text-container.text-container(
    :currentImageSet="currentImageSet"
    @mouseHoverCustom="hover($event)"
    @mouseOutCustom="hoverEvent()"
    :class="{ active: activeIndex }"
    :activeIndex="activeIndex"
    :currentColor="currentColor"
  )

  //- v-if-else(v-if="this.loading") NOTHING

  page-cursor

  side-nav(
    @changeActive="changeActive($event)"
    :names="imageSetNames"
  )

</template>


<script>

import TextContainer from '@components/TextContainer'
import PageCursor from '@components/PageCursor'
import SideNav from '@components/SideNav'

import { mapGetters, mapState } from 'vuex';

const imageSetNames = function() {
  return this.imageSets.map(s => s.name);
};

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
      mapColor: 'mapColor',
    }),
    ...mapState({
      currentImageSet: 'currentImageSet',
      imageSets: 'imageSets',
    }),
    imageSetNames,
  },

  methods: {
    hover(id) {
      this.setImageBackground(id)
      this.hoverEvent()

      this.activeIndex = id
    },

    setImageBackground(idx = 0) {
      const url = this.currentImageSet.images[idx].src;
      console.log('about to set loaded image: ', url);

      const main = document.querySelector('.main');
      main.classList.add("background");
      main.style.backgroundImage = `url(${url})`;
    },

    hoverEvent() {
      this.$root.$emit('eventHover')
    },

    resetFirstImage() {
      this.setImageBackground(0);
      this.activeIndex = 0;
    },

    changeActive(nextName) {
      this.$store.commit('changeActiveSetByName', nextName);
      this.resetFirstImage();
    },
  },

  async mounted() {
    await this.$store.dispatch('fetchArray');
    // this.loading = false;

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