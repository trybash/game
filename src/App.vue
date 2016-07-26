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
  // Absolute URL because relative fails with hosting on a sub route
  background-image url("https://trybash.github.io/game/static/img/background.jpg")
  background-height 100%
  background-repeat no-repeat
  background-size cover
  background-position center top
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
  height 73px

  margin-bottom 5em

  padding-left 1em
  padding-right 1em

  background-color black

  &-left {
    display flex
  }

  &-right {
    z-index 15000
  }

  &-left,
  &-right {
    flex 1
  }
}

.Logo {
  display flex
  &-image {
    display block
    width 150px
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
    flex 1
    flex-direction row
    width 100%
    padding-bottom 1em
  }

  &-terminal,
  &-task {
  }

  &-terminal {
    display flex
    align-items stretch
    flex 2
    padding-right 0.5em
  }

  &-task {
    flex 1
    padding-left 0.5em
  }
}

.MadeBy {
  position absolute
  right 0
  bottom 0

  text-align right

  &-team {
    font-size 12px
    color rgba(white, 0.5)
  }

  &-github {
    color white

    a {
      color inherit
    }

    svg {
      top 2px
      padding-right 0.25em
    }
  }
}

</style>

<template>
  <div class="Container" :class="{ turbo: turbo }">
    <header class="Header">
      <div class="Header-left">
        <a href="/" class="Logo">
          <img src="assets/logo.svg" class="Logo-image" alt="TryBash">
        </a>
      </div>

      <div class="Header-right">
        <tb-progress></tb-progress>
      </div>
    </header>

    <main class="Main">
      <div class="Main-container">
        <div class="Main-terminal">
          <tb-terminal></tb-terminal>
        </div>
        <div class="Main-task">
          <tb-task></tb-task>

          <div class="MadeBy">
            <div class="MadeBy-team">Built by the TryBash Team in Berlin</div>
            <div class="MadeBy-github">
              <a href="https://github.com/trybash/game">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="github-link"><path fill="#ffffff" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>

  <tb-done></tb-done>
  <tb-lesson-selection></tb-lesson-selection>
</template>

<script>
import Terminal from 'components/Terminal'
import Progress from 'components/Progress'
import Task from 'components/Task'
import Button from 'components/Button'
import Done from 'components/Done'
import LessonSelection from 'components/LessonSelection'

import store from './vuex/store'

export default {
  components: {
    'tb-terminal': Terminal,
    'tb-progress': Progress,
    'tb-task': Task,
    'tb-button': Button,
    'tb-done': Done,
    'tb-lesson-selection': LessonSelection
  },

  store
}
</script>
