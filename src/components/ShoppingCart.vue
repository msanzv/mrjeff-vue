<template>
  <div class="shopping-cart">
    <img src="https://orders.mrjeffapp.com/bundles/app/images/cart-blue.png" alt="">
    <span>4</span>
  </div>
</template>

<script>
export default {
  name: 'shopping-cart'
}
</script>

<style lang="scss">

.shopping-cart {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  font-weight: 600;

  img {
    width: auto;
    max-height: 24px;
    margin-right: 10px;
  }
}
</style>
