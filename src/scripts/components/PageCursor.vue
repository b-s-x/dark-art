<template lang="pug">
div
  div.cursor
  div.cursor2(:class="toggle()")
  div.cursor3

</template>

<script>
export default {

  props: {
    toggleHover: { type: Boolean, default: false }
  },

  methods: {
    setBasicSetupCursor() {
      const cursor1 = document.querySelector(".cursor")
      const cursor2 = document.querySelector(".cursor2")

      document.addEventListener("mousemove", (event) => {
        cursor1.style.left = event.clientX + "px"
        cursor1.style.top = event.clientY + "px"
        cursor2.style.left = event.clientX + "px"
        cursor2.style.top = event.clientY + "px"
      });
    },

    toggle() {
      if(this.toggleHover) return "hover"
    },
  },

  mounted() {
    this.setBasicSetupCursor()

  },
}
</script>

<style lang="scss" scoped>

$circleBorder: #fff;
$circleShadow: 0 0 22px rgba(34, 29, 29, 0.418),
  inset 0px 0px 10px rgba(0, 0, 0, 0.335);

$hoverBodyCircle: rgba(255, 0, 0, 0.397);
$hoverShadowCircle: rgba(255, 4, 3, 1);

.cursor,
.cursor2,
.cursor3 {
  border-radius: 50%;
  position: fixed;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  border: transparent;
  height: 34px;
  width: 34px;
  z-index: 99998;
  transition: all 0.3s ease-out;
}

.cursor2.hover,
.cursor3.hover {
  transform: scale(1.7) translateX(-25%) translateY(-25%);
  border: none;
}

.cursor2 {
  border: 2px solid $circleBorder;
  box-shadow: $circleShadow;
}
.cursor2.hover {
  background: $hoverBodyCircle;
  box-shadow: 0 0 20px $hoverShadowCircle;
}
</style>