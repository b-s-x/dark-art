<template lang="pug">
div
  div.sidenav(
    :class="animation()"
    )
    div.text(href="#" @click="changeActive('black')") Black
    div.text(href="#" @click="changeActive('green')") Green
    div.text(href="#" @click="changeActive('darkRed')") Dark Red

  span.burger-icon(
    @click="openCloseNav()"
    :class="{visible: isVisible}"
    ) &#9776;
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    }
  },

  methods: {
    openCloseNav() {
      this.isVisible = !this.isVisible
    },

    animation() {
      if(this.isVisible) return 'animation'
      else return 'animationOut'
    },

    changeActive(arr) {
      this.$store.commit('changeActiveArr', arr)
      this.$eventBus.$emit('reloadImage')
    }
  }
}
</script>

<style lang="scss" scoped>

$primary: white;
$background: #111;
$text: #818181;
$transitionText: 0.3s;

.visible {
  color: $text !important;

  &:hover {
    color: $primary !important;
    transition: $transitionText;
  }
}

.burger-icon {
  position: fixed;
  right: 40px;
  top: 40px;
  z-index: 9999;
  font-size: 40px;
  cursor: pointer;
  color: black;
}

.sidenav {
  height: 100%;
  width: clamp(15%, 22%, 30%);
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 100px;
  z-index: 1;
  background-color: $background;
  opacity: 0.8;
  overflow-x: hidden;
}

.text {
  display: block;
  padding: 8px;
  margin: 8px;
  padding-left: 24px;
  font-size: calc(25px + 0.6vw);
  color: $text;
  transition: $transitionText;
  opacity: 1;

  &:hover {
    color:  $primary;
    opacity: 1;
  }
}

.animation {
  animation: move 1s ease-in-out;
  width: 20%;
}

.animationOut {
  transition: all 1s ease-in-out;
  width: 0;
}

@keyframes move {
 from { width: 0; }
 to { width: 20%; }
}

</style>