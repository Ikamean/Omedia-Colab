<template>
  <v-container>
      <v-row>
        <v-col
          v-for="n in 24"
          :key="n"
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="6"
          xs="12"
        >
          <v-card 
          tile
          hover
          elevation="0"
          >
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title>{{videos[0].name}}</v-card-title>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
              </v-row>
              <div>{{videos[0].owner}}</div>
              <v-row class="align-center">
                <v-col cols="6">
                  <div>Duration: {{videos[0].duration/60}} min</div>
                  
                </v-col>
                <v-col cols="6">
                  <div>{{videos[0].date}}</div>
                </v-col>
              </v-row>
              
              
            </v-card-text>
            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  },

  data:() => ({
    videos: [
      {
        name: 'Test video',
        duration: 180,
        owner: 'Ika',
        date: '2021-04-29 15:00'
      }
    ],
  }),
}
</script>

<style scoped>

</style>