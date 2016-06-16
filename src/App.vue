<style lang="stylus">

* {
  position relative
  margin 0
  padding 0
  box-sizing border-box
}

</style>

<template>
  <div>
    <tb-terminal></tb-terminal>
    <tb-progress></tb-progress>

    <button @click="incrementProgress">Progress +1</button@click>
  </div>
</template>

<script>
import Terminal from './components/Terminal'
import Progress from './components/Progress'

import store from './vuex/store'
import { incrementProgress } from './vuex/actions'

export default {
  components: {
    'tb-terminal': Terminal,
    'tb-progress': Progress
  },

  store,

  vuex: {
    actions: {
      incrementProgress
    }
  }
}
</script>
