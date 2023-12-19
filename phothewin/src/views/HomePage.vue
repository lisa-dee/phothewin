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
      
      
    <v-card-text>

        <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="message"
                :rules="nameRules"
                :counter="10"
                label="Enter a Message"
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            md="4"
            >
            <v-btn @click="sendMessage">Send Message</v-btn>
          </v-col>
          </v-row>
        </v-container>
        </v-form>
        {{ responseMessage }}
 
  </v-card-text>
   </template>
   <script>
    import PhoCard from '@/components/PhoCard.vue';
    import axios from 'axios';
    export default {
        PhoCard,
        data: () => ({
            show: false,
            message: '',
            responseMessage: '',
        }),
    methods: {
        async sendMessage() {
        try {
            const response = await axios.post('http://localhost:8080/api/api.php', {
                message: this.message
            });

        console.log(response.data);
        if(response.data.status === "success")
          this.responseMessage = response.data.message;
      } catch (error) {
        console.error(error);
      }
    }
  }
     }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   </style>