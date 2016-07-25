<style lang="stylus" scoped>
  @import '../stylus/colors'

  .Task {
    position absolute
    top 0
    left 0.5em
    right 0

    padding 1em
    background-color yellow

    box-shadow 2px 4px 0 rgba(black, 0.2)

    z-index 10000

    &-text {
      white-space pre-wrap
    }

    &.is-active {
      background-color green
    }

    &--transition {
      transition-property all
      transition-duration 1.5s
      transition-timing-function ease-in-out
      transform-origin 0 0
      transform translate(0, 0) rotate(4deg)
    }

    &--enter {

    }

    &--enter,
    &--leave {
      transform translate(-500px, -600px) rotate(-270deg)
      box-shadow 2px 4px 10px rgba(black, 1)
    }
  }
</style>

<template>
  <div class="Task" transition="Task-" v-for="section in sections" v-show="$index > 0">
    <h3 class="Task-headline">Current Task</h3>
    <div class="Task-text">{{section.task}}</div>
  </div>
</template>

<script>
  import { getSection } from '../vuex/getters'

  module.exports = {
    vuex: {
      getters: {
        section: getSection
      }
    },

    data () {
      return {
        sections: ['', this.section]
      }
    },

    watch: {
      section (val) {
        this.sections.shift()
        this.sections.push(val)
      }
    }
  }
</script>
