<style lang="stylus">
  .Done {
    position absolute
    top 50%
    left 50%
    padding 1em
    max-width 50vw
    border-radius 3px
    background-color white
    box-shadow 0 5px 20px rgba(black, 0.1)
    transform translate(-50%, -100vw)
    transition-property transform
    transition-duration 0.3s
    z-index 1000

    &.is-active {
      transform translate(-50%, -50%)
    }
  }
</style>

<template>
  <div class="Done" :class="{
    'is-active': solved
  }">
    <div>Fertig!</div>
    <tb-button @click="nextSection">Nächstes Level!</tb-button>
  </div>
</template>

<script>
  import Button from './Button'
  import { getSolved } from '../vuex/getters'
  import { nextSection } from '../vuex/actions'

  module.exports = {
    components: {
      'tb-button': Button
    },

    vuex: {
      actions: {
        nextSection
      },
      getters: {
        solved: getSolved
      }
    }
  }
</script>
