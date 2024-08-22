<template>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <h1>Pho Reviews</h1>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 text-right">
          <router-link to="/AddReview"><v-btn color="primary" prepend-icon="mdi-plus">Submit Review</v-btn></router-link>
        </v-sheet>
      </v-col>
      </v-row>
      
      <PhoCard></PhoCard>
      
      
   </template>
   <script>
    import PhoCard from '@/components/PhoCard.vue';
    export default {
        PhoCard,
        data: () => ({
            show: false,
            message: '',
            responseMessage: '',
        })
      }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   </style>