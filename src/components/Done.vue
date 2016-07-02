<style lang="stylus">
  .Done {
    padding 1em
    max-width 50vw
    border-radius 3px
    background-color white
    box-shadow 0 5px 20px rgba(black, 0.1)
    transform translateY(-100vw)
    
    &.is-active {
      transform translateY(0)
    }
  }
</style>

<template>
  <div class="Done" :class="{
    'is-active': status
  }">
    Fertig!
    <tb-button>Nächstes Level!</tb-button>
  </div>
</template>

<script>
  import Button from './Button'
  import { getStatus } from '../vuex/getters'
  
  module.exports = {
    components: {
      'tb-button': Button
    },

    vuex: {
      getters: {
        status: getStatus
      }
    }
  }
</script>
