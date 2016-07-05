<style lang="stylus">

@import './stylus/colors'

* {
  position relative
  margin 0
  padding 0
  box-sizing border-box
}

body {
  background-color #ddd
  font-family 'Source Sans Pro'
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
  }

  &-terminal,
  &-task {
  }

  &-terminal {
    flex 2
    height 50vh
  }

  &-task {
    flex 1
  }
}

</style>

<template>
  <div class="Container">
    <header class="Header">
      <div class="Header-left"></div>
      <div class="Header-right">
        <tb-progress :current="currentSection" :max="maxSection"></tb-progress>
        <tb-progress :current="currentLesson" :max="maxLesson"></tb-progress>
        <!-- <tb-button @click="incrementProgress">Progress +1</tb-button> -->
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
import { getStatus, getCompletedSectionCount, getSectionLength, getCompletedCount, getLessonCount } from './vuex/getters'
import { incrementProgress, reset } from './vuex/actions'

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  window.mock = {
    toggle () {
      store
    }
  }
}

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
      incrementProgress,
      reset
    },

    getters: {
      status: getStatus,
      currentSection: getCompletedSectionCount,
      maxSection: getSectionLength,
      currentLesson: getCompletedCount,
      maxLesson: getLessonCount
    }
  }
}
</script>
