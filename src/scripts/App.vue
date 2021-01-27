<template lang="pug">
  div.main
    div.ff VUE
    div.ff VUE VUE
    div.ff VUE VUE VUE
    div.ff VUE VUE VUE VUE
    div.ff VUE VUE VUE VUE VUE SHIT
    div.ff VUE VUE VUE VUE
    div.ff VUE VUE VUE
    div.ff VUE VUE
    div.ff VUE
</template>

<script>
import NewApp from "./components/NewApp"
export default {
  components: {
    NewApp,
  }
}

</script>

<style lang="scss" scoped>
$color: red;

.main {
  box-sizing: border-box;
}

.ff {
  background: $color;
  color: white;
  font-size: 40px;
}

</style>

