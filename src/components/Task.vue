<style lang="stylus" scoped>
  @import '../stylus/colors'

  .Task {
    padding 1em
    background-color yellow

    &-text {
      white-space pre-wrap
    }
  }
</style>

<template>
  <div class="Task">
    <h3 class="Task-headline">Current Task</h3>
    <div class="Task-text">{{task}}</div>
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
