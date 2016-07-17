<style lang="stylus" scoped>

@import '../stylus/colors'

.Progress {
  padding 1em
  border-bottom-left-radius 5px
  border-bottom-right-radius 5px
  background-color grey-light
  box-shadow 0 4px 0 rgba(black, 0.2)
}

</style>


<template>

<div class="Progress">
  <!-- <tb-progress-bar :current="currentLesson" :max="maxLesson"></tb-progress-bar> -->
  <tb-progress-blocks>Lessons</tb-progress-blocks>
  <tb-progress-bar :current="currentSection" :max="maxSection">Sections</tb-progress-bar>
</div>

</template>


<script>
import ProgressBlocks from 'components/ProgressBlocks'
import ProgressBar from 'components/ProgressBar'
import { getCompletedSectionCount, getSectionLength, getCompletedCount, getLessonCount } from '../vuex/getters'

export default {
  components: {
    'tb-progress-blocks': ProgressBlocks,
    'tb-progress-bar': ProgressBar
  },

  vuex: {
    getters: {
      currentSection: getCompletedSectionCount,
      maxSection: getSectionLength,
      currentLesson: getCompletedCount,
      maxLesson: getLessonCount
    }
  }
}

</script>
