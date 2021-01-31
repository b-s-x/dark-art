<template lang="pug">
  div.main
    text-container.text-container/

</template>

<script>
import TextContainer from '@components/TextContainer'

export default {
  components: {
    TextContainer,
  }
}
</script>

<style lang="scss" scoped>

@import '@common';

.main {
  height: 100vh;
  @include flex()
}

</style>