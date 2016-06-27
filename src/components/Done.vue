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
