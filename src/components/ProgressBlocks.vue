<style lang="stylus">
  @import '../stylus/colors'


  .ProgressBlocks {
    display flex
    margin-bottom 1em
  }

  .ProgressBlock {
    flex 1
    height 40px

    margin-left 0.5em
    margin-right 0.5em

    background-color white

    color white
    font-weight bold
    line-height 40px
    text-align center

    &:first-child {
      margin-left 0
    }

    &:last-child {
      margin-right 0
    }

    &.is-done {
      background-color green
      background-image url('../assets/checkmark.svg')
      background-position center
      background-repeat no-repeat
    }

    &.is-active {
      background-color yellow
      box-shadow: 0 0 10px yellow
    }
  }
</style>


<template>
  <div class="ProgressBlocks">
    <!-- <div class="ProgressBlock" v-for="block in blocks"></div> -->
    <div class="ProgressBlock is-done"></div>
    <div class="ProgressBlock"></div>
    <div class="ProgressBlock is-active">Current</div>
    <div class="ProgressBlock"></div>
    <div class="ProgressBlock"></div>
  </div>
</template>


<script>
  import {getCompletedCount, getLessonCount} from '../vuex/getters'

  module.exports = {
    vuex: {
      getters: {
        count: getLessonCount,
        completed: getCompletedCount
      }
    }
  }
</script>
