<style lang="stylus" scoped>

@import '../stylus/colors'

.Terminal {
  height 100%
  padding-bottom 10vh
  border-radius 10px
  background-color #ddd
  color terminal-green

  &-front {
    display flex
    height 100%
    flex-direction column
    padding 1.5em
    border-radius 10px
    background-color white
  }

  &-screen {
    flex 1
    height 100%
    overflow scroll
    padding 1em
    box-shadow inset 0.5em 0.5em 0 rgba(black, 0.3)
    border-radius 3px
    background-color grey-dark
    font-family monospace
  }

  &-buttons {
    display flex
    padding-top 1em
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

        <form class="Form" @submit="submit">
          <div class="Sign">$&nbsp;</div>
          <div class="InputWrapper">
            <input class="Input" v-model="command" @keydown="keydown" v-el:input>
          </div>
        </form>
      </div>

      <div class="Terminal-buttons">
        <tb-button color="grey" :turbo="turbo" @click="toggleTurbo">Turbo</tb-button>
        <div class="Terminal-floppy"></div>
        <tb-button @click="activateLessonSelection">Lesson Selection</tb-button>
      </div>
    </div>
  </div>
</template>


<script>
import Button from 'components/Button'
import { getOutput, getHistory, getTurbo } from '../vuex/getters'
import { sendCommand, toggleTurbo, activateLessonSelection } from '../vuex/actions'
import { screenShake } from '../utils'

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
      turbo: getTurbo
    }
  },

  components: {
    'tb-button': Button
  },

  watch: {
    output () {
      this.scrollBottom()
    }
  },

  ready () {
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

    keydown () {
      if (this.turbo) {
        this.screenShake()
      }
    }
  }
}
</script>
