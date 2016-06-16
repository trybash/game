<style lang="stylus" scoped>

@import '../stylus/colors'

.Terminal {
  height 400px
  overflow scroll

  padding 1em

  background-color grey-dark

  color green
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
}

</style>


<template>
  <div class="Terminal" @click="focusInput" v-el:terminal>
    <div class="History">
      <div v-for="step in history" track-by="$index">
        {{step}}
      </div>
    </div>
    <form @submit="submit">
      <input class="Input" v-model="command" v-el:input>
    </form>
  </div>
</template>


<script>
import { getHistory } from '../vuex/getters'
import { sendCommand } from '../vuex/actions'

module.exports = {
  data: () => {
    return { command: '' }
  },

  vuex: {
    getters: {
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
