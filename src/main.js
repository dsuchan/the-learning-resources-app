import { createApp } from 'vue';

// Importing the App logic from 'App.vue' file
import App from './App.vue';
// 'BaseCard' component will probably be used in multiple files so I'm importing it globally
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

// Creating the actual App and then mounting it to '#app' in 'index.html'
const app = createApp(App);

// Creating the custom HTML component pointing to 'BaseCard.vue' component
app.component('base-card', BaseCard);
// Creating the custom HTML component pointing to 'DeleteButton.vue' component
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
