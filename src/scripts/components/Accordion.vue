<template lang="pug">
  div.accordion__container.active
    div.accordion__item.active(
    v-for="(item, index) of currentImages"
    :key="index")
        img(:src="item.src").img.active

</template>
<script>

export default {
  props: {
    currentImageSet: { type: Object || Array, default: () => [] },
  },

  computed: {
    currentImages() {
      return this.currentImageSet ? this.currentImageSet.images : [];
    },
  },
};
</script>

<style lang="scss" scoped>

.active {
  transition: all 3s ease-in-out;
  animation: show 3s ease;
}

.accordion {

  &__container {
    display: flex;

    &:hover .accordion__item {
      width: 15%;
    }

    .accordion__item {
      width: 30%;
      transition: width 0.4s ease 0.2s;
      transition: all 1s ease-in-out;
      animation: show 2s ease;

      &:hover {
        width: 70%;
      }
    }
  }
}

.img {
  width: 100%;
  height: 100%;
  transition: all 1s ease-in-out;
  animation: show 2s ease;
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
