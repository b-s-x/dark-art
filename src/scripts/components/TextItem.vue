<template lang='pug'>
  div.text-item(v-on='$listeners')
    slot TEXT
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>

@import '@common';

.text-item {
  margin-bottom: 50px;
  max-width: 485px;
  text-align:center;

  font: {
    size: 38px;
    weight: 900;
  };
}
</style>