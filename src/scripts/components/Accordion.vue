<template lang="pug">
  div.accordion__container
    div.accordion__item(
    v-for="(item, index) of currentImages"
    :key="index")
      img(:src="item.src").img

</template>
<script>
export default {
  props: {
    currentImageSet: { type: Object },
  },

  computed: {
    currentImages() {
      return this.currentImageSet ? this.currentImageSet.images : [];
    },
  },
};
</script>

<style lang="scss" scoped>

.accordion {

  &__container {
    display: flex;

    &:hover .accordion__item {
      width: 15%;
    }
    .accordion__item {
      width: 30%;
      transition: width 0.4s ease 0.2s;

      &:hover {
        width: 70%;
      }
    }
  }
}

.img {
  width: 100%;
  height: 100%;
}

</style>
