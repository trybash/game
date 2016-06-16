<style lang="stylus" scoped>

@import '../stylus/colors'

.Progress {
  padding 1em
  background-color #eee

  &-fill,
  &-text {
    display block
    text-align left
    white-space nowrap
  }

  &-fill {
    background-color green-htw
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

<div class="Progress">
  <div class="Progress-bar">
    <div class="Progress-fill" :style="{ width: fillWidth }">
      <div class="Progress-fillPadding">
        {{ progress }} / {{ maxProgress }}
      </div>
    </div>

    <div class="Progress-text">
      {{ progress }} / {{ maxProgress }}
    </div>
  </div>
</div>

</template>


<script>
import { getProgress, getMaxProgress } from '../vuex/getters'

export default {
  vuex: {
    getters: {
      progress: getProgress,
      maxProgress: getMaxProgress
    }
  },

  computed: {
    fillWidth () {
      return (this.progress * 100 / this.maxProgress) + '%'
    }
  }
}

</script>
