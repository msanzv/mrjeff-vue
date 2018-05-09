<template>
  <header class="header">
    <div class="menu-icon-wrapper" @click="mobileMenuOpen = !mobileMenuOpen">
      <menu-icon :isActive="mobileMenuOpen"></menu-icon>
    </div>
    <span class="logo">
      <img src="https://orders.mrjeffapp.com/bundles/app/images/logo-blue.png" alt="Mr. Jeff logo">
    </span>
    <app-nav :isOpen="mobileMenuOpen"></app-nav>
    <shopping-cart></shopping-cart>
  </header>
</template>

<script>
import AppNav from '@/components/AppNav'
import MenuIcon from '@/components/MenuIcon'
import ShoppingCart from '@/components/ShoppingCart'

export default {
  name: 'app-header',

  components: {
    AppNav,
    MenuIcon,
    ShoppingCart
  },

  data () {
    return {
      mobileMenuOpen: false
    }
  }
}
</script>

<style lang="scss">

.header {
  display: flex;
  align-items: center;
  height: var(--header-height);
  padding: 0 1rem;
  color: #2a375c;
  background-color: #fff;
  position: relative;

  .menu-icon-wrapper {
    flex: 1 0 25%;
  }

  .logo {
    flex: 0 0 auto;

    > img {
      width: auto;
      max-height: 30px;
    }
  }

  .shopping-cart {
    flex: 1 0 25%;
  }
}

@media screen and (min-width: 900px) {
  .header {
    height: var(--header-height);

    .menu-icon-wrapper {
      display: none;
    }

    .shopping-cart {
      flex: 0 0 auto;
    }
  }
}

</style>
