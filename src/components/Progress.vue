<style lang="stylus" scoped>

@import '../stylus/colors'

.Progress {
  padding 1em
  border-bottom-left-radius 5px
  border-bottom-right-radius 5px
  background-color grey-light
  box-shadow 0 4px 0 rgba(black, 0.2)

  .RestartSection {
    text-align right
    margin-top 1em

    &-message {
      display inline-block
      margin-right: 0.5em
    }
  }
}

</style>


<template>

<div class="Progress">
  <!-- <tb-progress-bar :current="currentLesson" :max="maxLesson"></tb-progress-bar> -->
  <tb-progress-blocks>Lessons</tb-progress-blocks>
  <tb-progress-bar :current="currentSection" :max="maxSection">Sections</tb-progress-bar>
  <div class="RestartSection">
    <p class="RestartSection-message">Messed up? No Problemo. Restart the Task!</p>
    <tb-button color="red" @click="restartSection">Restart Task</tb-button>
  </div>
</div>

</template>


<script>
import Button from 'components/Button'
import ProgressBlocks from 'components/ProgressBlocks'
import ProgressBar from 'components/ProgressBar'
import { restartSection } from '../vuex/actions'
import { getCompletedSectionCount, getSectionCount, getCompletedCount, getLessonCount } from '../vuex/getters'

export default {
  components: {
    'tb-progress-blocks': ProgressBlocks,
    'tb-progress-bar': ProgressBar,
    'tb-button': Button
  },

  vuex: {
    actions: {
      restartSection
    },
    getters: {
      currentSection: getCompletedSectionCount,
      maxSection: getSectionCount,
      currentLesson: getCompletedCount,
      maxLesson: getLessonCount
    }
  }
}

</script>
