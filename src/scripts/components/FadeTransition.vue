<template lang="pug">
transition(name="fade")
  slot
</template>

<script>
export default {
  data() {},
  components: {},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
