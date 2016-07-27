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

    watch: {
      active (val) {
        if (val) this.$els.next.focus()
      }
    },

    computed: {
      active () {
        return this.solved && !this.lessonSolved
      }
    }
  }
</script>
