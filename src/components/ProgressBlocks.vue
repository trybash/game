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

    color grey
    font-weight bold
    line-height 40px
    text-align center

    transition-property color, background-color, box-shadow
    transition-duration 0.2s

    &:first-child {
      margin-left 0
    }

    &:last-child {
      margin-right 0
    }

    &.is-active {
      color white
      background-color yellow
      box-shadow: 0 0 10px yellow
    }

    &.is-done {
      color transparent
      background-color green
      background-image url('../assets/checkmark.svg')
      background-position center
      background-repeat no-repeat

      &.is-active {
        color white
        background-image none
        box-shadow: 0 0 10px green
      }
    }
  }
</style>


<template>
  <div class="ProgressBlocks">
    <div class="ProgressBlock" v-for="lesson in lessons" track-by="$index" :class="{
      'is-done': lesson.done,
      'is-active': lesson.active
    }">
      {{ lesson.active ? 'Current: ' : '' }} {{ lesson.index + 1}}
    </div>
  </div>
</template>


<script>
  import {getLessons} from '../vuex/getters'

  module.exports = {
    vuex: {
      getters: {
        lessons: getLessons
      }
    }
  }
</script>
