<style lang="stylus" scoped>

@import '../stylus/colors'

.Terminal {
  display flex
  width 100%
  padding-bottom 10vh
  border-radius 10px
  background-color #ddd
  color terminal-green

  &-front {
    display flex
    flex 1
    width 100%
    flex-direction column
    padding 1.5em
    border-radius 10px
    background-color white
  }

  &-screen {
    flex 1
    height 100%
    overflow-y scroll
    overflow-x hidden
    padding 1em
    box-shadow inset 0.5em 0.5em 0 rgba(black, 0.3)
    border-radius 3px
    background-color grey-dark
    font-family monospace
  }

  &-buttons {
    display flex
    padding-top 1em
    min-height 58px
  }

  &-floppy {
    flex 1
    background-image url('../assets/floppy.svg')
    background-repeat no-repeat
    background-position 3em center
  }

  .History {

  }

  .Form {
    display flex

    .Sign {
      flex-grow 0
      flex-shrink 0
      color terminal-green
    }

    .InputWrapper {
      flex 1
    }
  }

  .Input {
    display block
    width 100%

    border 0
    outline 0

    background-color transparent

    color inherit
    font-family inherit
    font-size 1em
  }

  .Step {
    line-height 1.3em
    white-space pre-wrap

    &--error {
      color terminal-red
    }

    &--instruction {
      color white
    }

    &--input {
      color white
    }
  }
}

</style>


<template>
  <div class="Terminal" @click="focusInput">
    <div class="Terminal-front">
      <div class="Terminal-screen" v-el:terminal>
        <div class="History">
          <pre v-for="line in output" track-by="$index" class="Step" :class="{
            'Step--error': line.type === 'ERR',
            'Step--output': line.type === 'OUTPUT',
            'Step--input': line.type === 'INPUT',
            'Step--instruction': line.type === 'INSTRUCTION'
          }">{{line.type === 'INPUT' ? '$ ' : '' }}{{line.text}}</pre>
        </div>

        <div class="Form">
          <div class="Sign">$&nbsp;</div>
          <div class="InputWrapper">
            <input class="Input" v-model="command" @keydown="keydown" v-el:input>
          </div>
        </div>
      </div>

      <div class="Terminal-buttons">
        <tb-button :color="turbo ? 'yellow' : 'grey'" @click="toggleTurbo">Turbo</tb-button>
        <div class="Terminal-floppy"></div>
        <tb-button color="blue" @click="activateLessonSelection">Lesson Selection</tb-button>
      </div>
    </div>
  </div>
</template>


<script>
import Button from 'components/Button'
import { getOutput, getHistory, getTurbo, getDoneModalActive, getLessonSelectionActive } from '../vuex/getters'
import { sendCommand, toggleTurbo, activateLessonSelection } from '../vuex/actions'
import { emulator } from '../vuex/store'
import { screenShake } from '../utils'

const TAB = 9
const ENTER = 13
const UP = 38
const DOWN = 40

module.exports = {
  data () {
    return { command: '' }
  },

  vuex: {
    actions: {
      sendCommand,
      toggleTurbo,
      activateLessonSelection
    },

    getters: {
      output: getOutput,
      history: getHistory,
      turbo: getTurbo,
      doneModalActive: getDoneModalActive,
      lessonSelectionActive: getLessonSelectionActive
    }
  },

  components: {
    'tb-button': Button
  },

  watch: {
    output () {
      this.scrollBottom()
    },

    lessonSelectionActive (val) {
      if (val === false) this.focusInput()
    },

    doneModalActive (val) {
      if (val === false) this.focusInput()
    }
  },

  ready () {
    this.focusInput()
    this.scrollBottom()
  },

  methods: {
    submit (event) {
      event.preventDefault()
      if (!this.command.length) return
      this.sendCommand(this.command)
      this.command = ''
    },

    scrollBottom () {
      this.$els.terminal.scrollTop = this.$els.terminal.scrollHeight
    },

    focusInput () {
      this.$els.input.focus()
    },

    screenShake,

    [UP]: emulator.completeUp,
    [DOWN]: emulator.completeDown,

    complete (direction) {
      const input = this.$els.input
      var completeFunction = this[direction]
      if (!completeFunction) return
      var cursorPosition = input.selectionStart
      var beforeCursor = input.value.slice(0, cursorPosition)
      completeFunction(beforeCursor).then((completion) => {
        if (completion) {
          this.command = completion // so Vue doesn't lose track
          input.value = completion // so change is immediate and not whenever Vue gets to it
          input.setSelectionRange(cursorPosition, cursorPosition)
        }
      })
    },

    keydown (e) {
      if (this.turbo) this.screenShake()

      if (e.which === TAB) {
        e.preventDefault()
      }

      if (e.which === ENTER) {
        this.submit(e)
      }

      if (e.altKey || e.metaKey || e.shiftKey || e.ctrlKey) {
        return
      }

      if (e.which === UP || e.which === DOWN) {
        e.preventDefault()
        this.complete(e.which)
      }
    }
  }
}
</script>
