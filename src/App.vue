<style lang="stylus">

@import './stylus/colors'

* {
  position relative
  margin 0
  padding 0
  box-sizing border-box
}

body {
  background-color site-background
  font-family 'Source Sans Pro', Helvetica, Arial, sans-serif

  &.yolo {
    transition-property transform
    transition-duration 1s
    transform rotate(360deg)
  }

  &.shake {
    transition-property transform
    transition-duration 0.05s
  }
}

.u-spacer {
  clear both
  margin-bottom 40px
}

.Container {
  display flex
  flex-direction column
  height 100vh
}

.Header {
  display flex
  flex-direction row

  margin-bottom 1em

  padding 1em

  background-color black

  &-left,
  &-right {
    flex 1
  }
}

.Main {
  flex 1
  display flex
  flex-direction column
  justify-content center

  padding-left 1em
  padding-right 1em

  &-container {
    display flex
    flex-direction row
    width 100%
    height 100%
    padding-bottom 1em
  }

  &-terminal,
  &-task {
  }

  &-terminal {
    flex 2
    height 100%
    padding-right 0.5em
  }

  &-task {
    flex 1
    padding-left 0.5em
  }
}

</style>

<template>
  <div class="Container" :class="{ turbo: turbo }">
    <header class="Header">
      <div class="Header-left"></div>
      <div class="Header-right">
        <tb-progress :current="currentSection" :max="maxSection"></tb-progress>
        <tb-progress :current="currentLesson" :max="maxLesson"></tb-progress>
        <tb-button color="red" @click="reset">Reset</tb-button>
      </div>
    </header>

    <tb-done></tb-done>

    <main class="Main">
      <div class="Main-container">
        <div class="Main-terminal">
          <tb-terminal></tb-terminal>
        </div>
        <div class="Main-task">
          <tb-task></tb-task>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import Terminal from 'components/Terminal'
import Progress from 'components/Progress'
import Task from 'components/Task'
import Button from 'components/Button'
import Done from 'components/Done'

import store from './vuex/store'
import { getCompletedSectionCount, getSectionLength, getCompletedCount, getLessonCount } from './vuex/getters'
import { reset } from './vuex/actions'

export default {
  components: {
    'tb-terminal': Terminal,
    'tb-progress': Progress,
    'tb-task': Task,
    'tb-button': Button,
    'tb-done': Done
  },

  store,

  vuex: {
    actions: {
      reset
    },

    getters: {
      currentSection: getCompletedSectionCount,
      maxSection: getSectionLength,
      currentLesson: getCompletedCount,
      maxLesson: getLessonCount
    }
  }
}
</script>
