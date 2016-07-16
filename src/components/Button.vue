<style lang="stylus" scoped>

@import '../stylus/colors'

.Button {
  display inline-block

  padding 0.66em

  border 0
  border-radius 3px
  outline 0

  background-color green
  box-shadow: 0 3px 0 darken(green, 10%)

  color white
  font-family inherit
  font-size 1em

  cursor pointer

  &:active {
    top 3px
    box-shadow 0 0 0 transparent !important
  }

  &.red {
    background-color red
    box-shadow: 0 3px 0 darken(red, 10%)
  }

  &.grey {
    background-color grey-medium
    box-shadow: 0 3px 0 darken(grey-medium, 10%)
  }

  &.turbo {
    background-color yellow
    box-shadow: 0 3px 0 darken(yellow, 10%), 0 0 10px yellow

    transition-property background-color box-shadow
    transition-duration 0.1s
  }
}

</style>


<template>

<button class="Button" :class="{
  red: color === 'red',
  grey: color === 'grey',
  turbo: turbo === true
}">
  <slot></slot>
</button>

</template>


<script>
  module.exports = {
    props: ['color', 'turbo']
  }
</script>
