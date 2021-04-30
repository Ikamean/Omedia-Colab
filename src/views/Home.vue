<template>
  <v-container>
      <v-row>
        <v-col
          v-for="(video, index) in videos"
          :key="index"
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
            <video width="300" height="250" controls>
              <source :src="video.url" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <v-card-title>{{video.title}}</v-card-title>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
              </v-row>
              <div>{{video.author}}</div>
              <v-row class="align-center">
                <v-col cols="6">
                  <div>Duration: min</div>
                  
                </v-col>
                <v-col cols="6">
                  <div>{{video.created}}</div>
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
import { getAPI } from '../axios-api.js'

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
  methods: {
    getVideos(){
      getAPI.get('api/media')
      .then(response => {
        this.videos = response.data.data
        console.log(this.videos)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created(){
    this.getVideos()
  }
}
</script>

<style scoped>

</style>