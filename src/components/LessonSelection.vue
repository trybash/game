<style lang="stylus" scoped>

  @import '../stylus/colors'

  h2 {
    font-weight normal
  }

  .LessonSelection {
    &-close {
      display block
      float right
      width 1em
      height 1em

      border 0
      background-color transparent
      background-image url('../assets/close.svg')
      background-repeat no-repeat
      background-position center
      background-size 50%

      color grey
      font-size 2em
      line-height 0.5rem

      z-index 1000
    }

    &-footer {
      margin-left -1em
      margin-right -1em
      margin-bottom -1em

      padding 1em
      background-color grey-light
      text-align center
    }
  }

  .Lessons {
    margin-top 1em
    margin-bottom 1em

    list-style-type none
  }

  .Lesson {
    display flex
    padding-top 0.5em
    padding-bottom 0.5em

    border-top 1px solid grey-light

    &:last-child {
      border-bottom 1px solid grey-light
    }

    &-left {
      flex 1
    }

    &-right {

    }
  }
</style>

<template>
  <tb-modal :active="selectionActive">
    <button class="LessonSelection-close" @click="deactivateLessonSelection"></button>
    <h2>Choose a lesson</h2>
    <p>
      You can do the excercises in any order you want – although it'd probably be wise to do them in order, if you are new to the Bash.
    </p>

    <ul class="Lessons">
      <li class="Lesson" v-for="lesson in lessons">
        <div class="Lesson-left">
          {{lesson.title}}
        </div>

        <div class="Lesson-right">
          <tb-button :color="getColor(lesson)" @click="lesson.active && !lesson.done ? deactivateLessonSelection() : openLesson($index)">
            {{ getButtontext(lesson) }}
          </tb-button>
        </div>
      </li>
    </ul>

    <div class="LessonSelection-footer">
      <tb-button color="red" @click="reset">Reset all your data and start again</tb-button>
    </div>
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
        selectionActive: getLessonSelectionActive
      }
    },

    components: {
      'tb-modal': Modal,
      'tb-button': Button
    },

    methods: {
      getColor (lesson) {
        return lesson.active ? 'yellow' : 'green'
      },

      getButtontext (lesson) {
        let text = 'Start'
        if (lesson.active) text = 'Continue'
        if (lesson.done) text = 'Play Again'
        return text
      }
    }
  }
</script>
