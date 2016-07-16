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
    padding-top 1em
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
  <div class="Terminal" @click="focusInput" v-el:terminal>
    <div class="Terminal-front">
      <div class="Terminal-screen">
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
        <tb-button>Level Selection</tb-button>
      </div>
    </div>
  </div>
</template>


<script>
import _ from 'lodash'
import Button from 'components/Button'
import { getOutput, getHistory, getTurbo } from '../vuex/getters'
import { sendCommand, toggleTurbo } from '../vuex/actions'

module.exports = {
  data: () => {
    return { command: '' }
  },

  vuex: {
    getters: {
      output: getOutput,
      history: getHistory,
      turbo: getTurbo
    },

    actions: {
      sendCommand,
      toggleTurbo
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

    keydown () {
      if (this.turbo) {
        const body = document.getElementsByTagName('body')[0]
        body.className = 'shake'
        const x = _.random(-20, 20)
        const y = _.random(-20, 20)
        body.style.transform = `translate(${x}px, ${y}px)`

        setTimeout(function () {
          document.getElementsByTagName('body')[0].className = ''
          body.style.transform = 'translate(0px, 0px)'
        }, 50)
        console.log('turbo turbo turbo')
      }
      console.log('key down')
    }
  }
}
</script>
