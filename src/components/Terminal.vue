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

  .Input {
    display block
    width 100%

    border 0
    outline 0

    background-color transparent

    color inherit
    font-family inherit
    font-size 1em

    &:before {
      content: '$ '
    }
  }
  
  .Step {
    white-space pre-wrap
    
    &--error {
      color terminal-red
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
        'Step--input': line.type === 'INPUT'
      }">{{line.text}}</pre>
    </div>
    <form @submit="submit">
      <input class="Input" v-model="command" v-el:input>
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
    history () {
      this.$els.terminal.scrollTop = this.$els.terminal.scrollHeight
    }
  },

  methods: {
    submit (event) {
      event.preventDefault()
      this.sendCommand(this.command)
      this.command = ''
    },

    focusInput () {
      this.$els.input.focus()
    }
  }
}
</script>
