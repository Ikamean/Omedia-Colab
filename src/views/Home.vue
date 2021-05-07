<template>
  <v-container>
    <v-row justify='center'>
      
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

      <v-col cols='12'
        xl="4"
        lg="4"
        md="4"
        sm="6"
        xs="12" v-for="n in 6" :key=n>
        <div v-if="noVideo">
        <v-skeleton-loader
          class="mx-auto"
          width="300"
          height="250"
          type="card"
          ></v-skeleton-loader>
        </div>
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
    noVideo: false
  }),
  methods: {
    getVideos(){
      getAPI.get('api/media')
      .then(response => {
        this.videos = response.data.data
        this.check()
      })
      .catch(err => {
        console.log(err)
        this.check()
      })
    },
    check(){
      if(this.videos.length == 0){
          this.noVideo = true
      }else{
          this.noVideo = false
          }
      }
  },
  mounted(){
    this.getVideos()
  }
}
</script>

<style scoped>

</style>