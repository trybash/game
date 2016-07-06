<style lang="stylus" scoped>
  @import '../stylus/colors'

  .Task {
    padding 1em
    background-color yellow
  }
</style>

<template>
  <div class="Task">
    <h3 class="Headline">Current Task</h3>
    <div class="Text">{{task}}</div>
  </div>
</template>

<script>
  import { getTask } from '../vuex/getters'

  module.exports = {
    vuex: {
      getters: {
        task: getTask
      }
    }
  }
</script>
