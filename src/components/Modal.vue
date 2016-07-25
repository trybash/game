<style lang="stylus">
  .Modal {
    display none
    position absolute
    top 0
    left 0
    width 100%
    height 100%

    &.is-active {
      display block

      .Modal-content {
        transform translate(-50%, -50%)
      }

      .Modal-backdrop {
        opacity 1
      }
    }

    &-content {
      position absolute
      top 50%
      left 50%
      padding 1em
      max-width 600px
      border-radius 3px
      background-color white
      box-shadow 0 5px 20px rgba(black, 0.1)
      transform translate(-50%, -100vw)
      transition-property transform
      transition-duration 0.3s
      z-index 20001
    }

    &-backdrop {
      position fixed
      top 0
      left 0
      right 0
      bottom 0
      background-color rgba(#000, 0.2)
      z-index 20000
    }
  }
</style>


<template>
  <div class="Modal" :class="{'is-active': active}">
    <div class="Modal-content">
      <slot></slot>
    </div>
    <div class="Modal-backdrop"></div>
  </div>
</template>


<script>
  module.exports = {
    props: ['active']
  }
</script>
