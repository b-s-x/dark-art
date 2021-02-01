<template lang='pug'>
  div.text-container
    slot
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>

@import '@common';

.text-container {
  @include flex();
  flex-direction: column;
}
</style>
