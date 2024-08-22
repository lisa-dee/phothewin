<template>
   ADD REVIEW

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
    import axios from 'axios';
    export default {
      data: () => ({
        show: false,
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