<template>
  <!-- Using the 'title' prop from 'TheHeader.vue' as the <h1> -->
  <the-header title="ResourceBook"></the-header>
  <!-- Binding the 'resources' prop from 'StoredResources.vue' file -->
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    'stored-resources': StoredResources,
    'the-header': TheHeader,
  },
  data() {
    return {
      // All resources will be stored here
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://google.com',
        },
      ],
    };
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
