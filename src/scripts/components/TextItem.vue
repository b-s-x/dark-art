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
  margin: 25px 50px;
  max-width: 485px;
  text-align:center;
  color: $grace;
  font-family: "Poppins", sans-serif;
  line-height: 1.3;
  letter-spacing: 3px;
  transition: all 300ms linear;
  user-select: none;
  font: {
    size:  calc(38px + 0.5vw);
    weight: 900;
  };
}
</style>