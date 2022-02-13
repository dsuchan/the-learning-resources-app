<template>
  <ul>
    <!-- Using 1 custom component for all the 'storedResources' -->
    <!-- The 'storedResources' was changed to 'resources' because this template was originally stored in 'App.vue', therefore I need access to the 'storedResources' that is stored in that file -->
    <learning-resource
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  // Injecting 'resources' provided from 'TheResources.vue'
  inject: ['resources'],
  components: {
    LearningResource,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
