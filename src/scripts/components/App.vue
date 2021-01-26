<template>
  <div class="sun">
    <div class="ff">VUE.JS</div>
    <new-app> </new-app>
    <!-- <router-view></router-view> -->
  </div>
</template>


<script>
import NewApp from "./NewApp"
export default {
  components: {
    NewApp,
  }
}

</script>

<style lang="scss" scoped>
$color: red;

.ff {
  background: $color;
  color: $color;
  font-size: 40px;
}

body {
  background: red;
  height: 100vh;
}
</style>

