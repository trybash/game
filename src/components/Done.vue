<style lang="stylus">

</style>

<template>
  <tb-modal :active="solved">
    <div class="Done">
      <div>Fertig!</div>
      <tb-button @click="nextSection">Nächster Abschnitt →</tb-button>
    </div>
  </tb-modal>
</template>

<script>
  import Button from './Button'
  import Modal from './Modal'
  import { getSolved } from '../vuex/getters'
  import { nextSection } from '../vuex/actions'

  module.exports = {
    components: {
      'tb-button': Button,
      'tb-modal': Modal
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
