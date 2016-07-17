<style lang="stylus" scoped>

@import '../stylus/colors'

.ProgressBar {
  &-fill,
  &-text {
    display block
    text-align left
    white-space nowrap
  }

  &-fill {
    background-color green
    color #fff
    z-index 1337
    overflow hidden

    transition-property width
    transition-duration 0.2s
  }

  &-fillPadding,
  &-text {
    padding 0.5em
  }

  &-text {
    position absolute
    width 100%
    top 0
    background-color white
  }
}

</style>


<template>

<div class="ProgressBar">
  <div class="ProgressBar-bar">
    <div class="ProgressBar-fill" :style="{ width: fillWidth }">
      <div class="ProgressBar-fillPadding">
        {{ current }} / {{ max }} <slot></slot>
      </div>
    </div>

    <div class="ProgressBar-text">
      {{ current }} / {{ max }} <slot></slot>
    </div>
  </div>
</div>

</template>


<script>
export default {
  props: ['current', 'max'],

  computed: {
    fillWidth () {
      return (this.current * 100 / this.max) + '%'
    }
  }
}

</script>
