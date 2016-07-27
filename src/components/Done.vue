<style lang="stylus">

</style>

<template>
  <tb-modal :active="active">
    <div class="Done">
      <div>Done!</div>
      <tb-button @click="restartSection" color="red">Restart Section</tb-button>
      <tb-button @click="nextSection" v-el:next>Next Section →</tb-button>
    </div>
  </tb-modal>
</template>

<script>
  import Button from './Button'
  import Modal from './Modal'
  import { getDoneModalActive } from '../vuex/getters'
  import { nextSection, restartSection } from '../vuex/actions'

  module.exports = {
    components: {
      'tb-button': Button,
      'tb-modal': Modal
    },

    vuex: {
      actions: {
        nextSection,
        restartSection
      },
      getters: {
        active: getDoneModalActive
      }
    },

    watch: {
      active (val) {
        if (val) this.$els.next.focus()
      }
    }
  }
</script>
