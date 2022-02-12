<template>
  <!-- Using the 'title' prop from 'TheHeader.vue' as the <h1> -->
  <the-header title="ResourceBook"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: {
    'the-header': TheHeader,
    'the-resources': TheResources,
  },
};
</script>

<!-- Setting global styles -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
