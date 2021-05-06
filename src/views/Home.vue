<template>
  <v-container>
    <v-row justify='center' v-if="videos">
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
        class='ml-4'
        >
          <video width="300" height="250" controls :poster="video.thumbnail">
          <source :src="video.url" type="video/mp4">
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
              <v-col cols="12">
                <div>{{video.created}}</div>
              </v-col>
            </v-row>
            
          </v-card-text>  
        </v-card>

      </v-col>
    </v-row>

    <v-row justify='center' v-else>
      <v-col
        v-for="n in 4"
        :key="n"
        cols="12"
        xl="4"
        lg="4"
        md="4"
        sm="6"
        xs="12"
      >
        <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
      ></v-skeleton-loader>
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
    videos: [],
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