<template>
  <div class="menu-icon" :class="{ 'open': isActive }">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'menu-icon',

  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">

.menu-icon {
  width: 26px;
  height: 22px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: currentColor;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    transform-origin: left center;

    &:nth-child(1) { top: 0; }
    &:nth-child(2) { top: 50%; transform: scaleX(1) translateY(-50%); }
    &:nth-child(3) { bottom: 0; }
  }

  &.open span {

    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: scaleX(0) translateY(-50%);
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
}
</style>
