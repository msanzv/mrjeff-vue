<template>
  <nav class="nav" :class="{ 'open': isOpen }">
    <a class="nav-item" href="#">Iniciar</a>
  </nav>
</template>

<script>
export default {
  name: 'app-nav',

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">

.nav {
  position: absolute;
  top: var(--header-height);
  left: 0;
  right: 0;
  background-color: inherit;
  opacity: 0;
  z-index: 10;
  transform: scaleY(0);
  transform-origin: top;
  transition: all .15s ease-in-out;

  &.open {
    opacity: 1;
    transform: scaleY(1);
  }

  .nav-item {
    width: 100%;
    margin: 0 1rem;
    padding: 1rem;
    color: inherit;
    font-weight: 600;
    letter-spacing: .6px;
    text-transform: uppercase;
  }

  @media screen and (min-width: 900px) {
    position: initial;
    flex: 0 0 auto;
    margin-left: auto;
    opacity: 1;
    transform: scaleY(1);

    .nav-item {
      width: auto;
    }
  }
}
</style>
