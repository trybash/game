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
}

</style>


<template>

<button class="Button" :class="{
  'red': color === 'red'
}">
  <slot></slot>
</button>

</template>


<script>
  module.exports = {
    props: ['color']
  }
</script>
