<template lang='pug'>
div.main
  text-container.text-container(
    ref="textContainer"
    :currentImageSet="currentImageSet"
    @mouseHoverCustom="hover($event)"
    @mouseOutCustom="hoverEvent()"
    :currentColor="setCurrentColorText"
  )

  page-cursor(ref="cursor")

  side-nav(
    @changeActive="changeActive($event)"
    :names="imageSetNames"
  )

</template>


<script>

import TextContainer from '@components/TextContainer'
import PageCursor from '@components/PageCursor'
import SideNav from '@components/SideNav'

import { mapState } from 'vuex';

const imageSetNames = function() {
  return this.imageSets.map(s => s.name);
};

const setCurrentColorText = function() {
  return this.currentImageSet?.color
};

export default {

  components: {
    TextContainer,
    PageCursor,
    SideNav,
  },

  computed: {
    ...mapState({
      currentImageSet: 'currentImageSet',
      imageSets: 'imageSets',
    }),

    imageSetNames,
    setCurrentColorText,
  },

  methods: {
    hover(id) {
      this.setImageBackground(id)
      this.hoverEvent()
    },

    setImageBackground(idx = 0) {
      const url = this.currentImageSet.images[idx].src;
      const main = document.querySelector('.main');

      main.classList.add("background");
      main.style.backgroundImage = `url(${url})`;
    },

    hoverEvent() {
      this.$refs.cursor.toggleMouseHover()
    },

    resetFirstImage() {
      this.setImageBackground(0);
      this.$refs.textContainer.setCurrentIndex(0)
    },

    changeActive(nextName) {
      this.$store.commit('changeActiveSetByName', nextName);
      this.resetFirstImage();
    },
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