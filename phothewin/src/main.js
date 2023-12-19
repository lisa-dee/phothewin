import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#FE7F2D',
    'primary-darken-1': '#619B8A',
    secondary: '#233D4D',
    'secondary-darken-1': '#FCCA46',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}


const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})

/*new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
*/

createApp(App).use(router).use(vuetify).mount('#app');

/*const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
//app.use(vuetify)
app.use(router)

app.mount('#app');*/