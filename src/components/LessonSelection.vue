<style lang="stylus">
  h2 {
    font-weight normal
  }
</style>

<template>
  <tb-modal :active="active">
    <tb-button color="grey" @click="deactivateLessonSelection">Close</tb-button>
    <h2>Choose a lesson</h2>
    <p>
      You can do the excercises in any order you want – although it'd probably be wise to do them in order, if you are new to the Bash.
    </p>

    <ul>
      <li v-for="lesson in lessons" @click="openLesson($index + 1)">{{lesson.title}}</li>
    </ul>

    <tb-button color="red" @click="reset">Reset all your data and start again</tb-button>
  </tb-modal>
</template>

<script>
  import Modal from 'components/Modal'
  import Button from 'components/Button'

  import { getLessons, getLessonSelectionActive } from '../vuex/getters'
  import { reset, openLesson, deactivateLessonSelection } from '../vuex/actions'

  module.exports = {
    vuex: {
      actions: {
        reset,
        openLesson,
        deactivateLessonSelection
      },

      getters: {
        lessons: getLessons,
        active: getLessonSelectionActive
      }
    },

    components: {
      'tb-modal': Modal,
      'tb-button': Button
    }
  }
</script>
