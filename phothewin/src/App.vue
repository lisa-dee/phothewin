<template>
  <div id="app">
    <v-card>
    <v-layout>
      <v-main>
        <v-container>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Pho The Win</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer" expand-on-hover
        temporary>
        <v-list
            flat dense nav class="py-1">
            <v-list-item-group color='primary' mandatory>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    dense
                    router :to="item.route"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-title>{{ item.title }}</v-list-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    <router-view>

    </router-view>
    </v-container>
  </v-main>
  </v-layout>
  </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer:false,
      items:[
        { 
          title: 'Home',
          icon:'',
          route: '/Home'
        },
        { 
          title: 'Add Review',
          icon:'',
          route: '/AddReview'
        },
        { 
          title: 'See Review',
          icon:'',
          route: '/SeeReview'
        },
        {
          title: 'About',
          icon: '',
          route: '/AboutUs'
        }
      ]
    };
  }
};
</script>