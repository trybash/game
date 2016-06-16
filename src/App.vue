<style lang="stylus">

* {
  position relative
  margin 0
  padding 0
  box-sizing border-box
}

.u-spacer {
  clear both
  margin-bottom 40px
}

</style>

<template>
  <div>
    <tb-terminal></tb-terminal>
    <div class="u-spacer"></div>

    <tb-progress></tb-progress>
    <button @click="incrementProgress">Progress +1</button>
    <div class="u-spacer"></div>

    <tb-task></tb-task>
  </div>
</template>

<script>
import Terminal from './components/Terminal'
import Progress from './components/Progress'
import Task from './components/Task'

import store from './vuex/store'
import { incrementProgress } from './vuex/actions'

export default {
  components: {
    'tb-terminal': Terminal,
    'tb-progress': Progress,
    'tb-task': Task
  },

  store,

  vuex: {
    actions: {
      incrementProgress
    }
  }
}
</script>
