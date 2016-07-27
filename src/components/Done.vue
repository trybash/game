<style lang="stylus">
  .Done {
    &-text {
      margin-bottom 1rem
      text-align center
      font-size 2em
    }
  }
</style>

<template>
  <tb-modal :active="active">
    <div class="Done">
      <div class="Done-text">{{praises[praiseIndex]}}</div>
      <tb-button @click="restartSection" color="red">Restart Section</tb-button>
      <tb-button @click="nextSection" v-el:next>Next Section →</tb-button>
    </div>
  </tb-modal>
</template>

<script>
  import _ from 'lodash'
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

    data () {
      return {
        praises: [
          'Done!',
          'Nice Work!',
          'Wow!',
          'Amazing!'
        ],
        praiseIndex: 0
      }
    },

    watch: {
      active (val) {
        if (val) {
          this.$els.next.focus()
          this.newPraise()
        }
      }
    },

    methods: {
      newPraise () {
        this.praiseIndex = _.random(this.praises.length - 1)
      }
    }
  }
</script>
