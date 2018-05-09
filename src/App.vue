<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  name: 'App',

  components: {
    AppHeader
  }
}
</script>

<style lang="scss">

:root {
  --header-height: 60px;

  @media screen and (min-width: 900px) {
    --header-height: 90px;
  }
}

$max-container-width: 900;
$cols-num: 4;
$cols-gutter: 1rem;
$max-col-width: ($max-container-width - ($cols-num - 1) * $cols-gutter) / $cols-num;

body {
  background-color: #f8f8f8;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: grid;
  grid-template-rows: [header-start] var(--header-height) [header-end body-start] auto [body-end];
  grid-template-columns: minmax(15px, 1fr) [content-start] repeat(4, minmax(auto, $max-col-width)) [content-end] minmax(15px, 1fr);
  grid-template-areas:
    ". header header header header ."
    ". body body body body ."
}

.header {
  grid-row-start: header-start;
  grid-row-end: header-end;
  grid-column-start: 1;
  grid-column-end: -1;
}

main {
  grid-area: body;
  margin-top: 1rem;
}

h2 {
  margin-bottom: 2rem;
}
</style>
