<style lang="stylus">

</style>

<template>
  <tb-modal :active="active">
    <div class="Done">
      <div>Fertig!</div>
      <tb-button @click="nextSection">Nächster Abschnitt →</tb-button>
    </div>
  </tb-modal>
</template>

<script>
  import Button from './Button'
  import Modal from './Modal'
  import { getSolved, getLessonSolved } from '../vuex/getters'
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
        solved: getSolved,
        lessonSolved: getLessonSolved
      }
    },

    computed: {
      active () {
        return this.solved && !this.lessonSolved
      }
    }
  }
</script>
