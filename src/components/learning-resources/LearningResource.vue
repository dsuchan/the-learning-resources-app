<template>
  <!-- Binding all the props to elements I want to dynamically change based of current resource -->
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <!-- Once it's clicked, the 'deleteResource' will be deletes at the 'id' that is provided from 'StoredResources.vue' -->
        <base-button mode="flat" @click="deleteResource(id)"
          >Delete</base-button
        >
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource'],
};
</script>

<!-- Applying scoped styles -> only for this component -->
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
