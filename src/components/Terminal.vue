<style lang="stylus" scoped>

@import '../stylus/colors'

.Terminal {
  height 100%
  overflow scroll

  padding 1em

  background-color grey-dark

  color terminal-green
  font-family monospace

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
        <input class="Input" v-model="command" v-el:input>
      </div>
    </form>
  </div>
</template>


<script>
import { getOutput, getHistory } from '../vuex/getters'
import { sendCommand } from '../vuex/actions'

module.exports = {
  data: () => {
    return { command: '' }
  },

  vuex: {
    getters: {
      output: getOutput,
      history: getHistory
    },

    actions: {
      sendCommand
    }
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
    }
  }
}
</script>
