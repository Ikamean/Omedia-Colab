<template>
  <div v-if='user'>
    <v-container class="mt-4" fluid>
      <v-row justify="center">
      <!-- Upload form -->
        <v-col cols='auto' no-gutters>
          <v-card width="80vw">
            <v-form
            ref="form"
            lazy-validation
            enctype="mutlipart/form-data"
            @submit.prevent="upload()"
            >
              <v-container fluid>
                <v-row class="justify-center"
                align="center" 
                dense
                no-gutters>
                  <v-col cols="12">
                    <v-text-field
                    v-model="uploadFile.title"
                    outlined
                    clearable
                    :rules="nameRules"
                    placeholder="Name"
                    name='title'
                    required
                    dense
                    prepend-icon="mdi-subtitles"
                    ></v-text-field>
                  </v-col>

                  <v-col cols='12'>
                    <v-file-input
                      label="Video"
                      outlined
                      show-size
                      dense
                      id="inputVideo"
                      name='file'
                      
                      v-model="uploadFile.mediaFile"
                      accept="video/*"
                      prepend-icon="mdi-video"
                    ></v-file-input>
                  </v-col>

                  <v-col cols='12'>
                    <v-file-input
                      label="Thumbnail"
                      outlined
                      show-size
                      dense
                      id="inputThumbnail"
                      name="thumbnail"
                      accept="image/*"
                      prepend-icon="mdi-image"
                      
                      v-model="uploadFile.thumbnail"
                    ></v-file-input>
                  </v-col>

                  <v-col cols="auto">
                    <v-radio-group
                      v-model="uploadFile.private"
                      row
                    >
                      <v-radio
                        label="Public"
                        value='false'
                        name='private'
                      ></v-radio>
                      <v-radio
                        label="Private"
                        value="true"
                        name='private'
                      ></v-radio>
                    </v-radio-group>
                  </v-col>

                  <v-col cols="auto">
                    <v-btn
                    color="#11583E"
                    text
                    type="submit"
                    >
                      <v-icon dark x-large>mdi-cloud-upload-outline</v-icon>
                    </v-btn>
                  </v-col>

                </v-row>

      <!-- Upload preview -->
              <template v-if='uploaded'>
                <v-card
                  color="#1F7087"
                  dark
                >
                  <v-card-title class="justify-center text-h4" v-if="registered" transition="scale-transition">
                    <v-icon size="70px" color="#84eb36">mdi-checkbox-marked-circle-outline</v-icon>
                  </v-card-title>
                </v-card>
              </template>
      <!-- Upload preview -->   

              </v-container>
            </v-form>
          </v-card>  
        </v-col>
      <!-- Upload form -->

      <!-- My videos component -->
        <v-col 
        cols='12'
        xl="12"
        lg="12"
        md="12"
        sm="12"
        xs="12">
        <v-card width='100vw' class='ma-0' elevation="0">
          <v-container fluid>
            <v-row justify="center">
              <v-col cols="12">
                  <v-card dark color="#385F73">
                    <v-card-title class="text-h5">
                    My videos
                    </v-card-title>
                  </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
          
          <MyVideos />
        </v-col>
      <!-- My videos component -->
      </v-row>  
    </v-container>     
  </div>
</template>

<script>
import MyVideos from '../components/myVideos.vue'
import router from '../router/index'
import LoginView from '../components/loginView.vue'

  export default {
    name: 'Upload',
    components: {
      MyVideos
    },

    data: () => ({
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      uploaded: false, 
      error: '',
      uploadFile: {
        title: '',
        private: '',
        mediaFile: null,
        thumbnail: null,
      }
    }),

    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
      user : function(){ return this.$store.getters.user}
    },

    methods: {
      upload(){

        var formdata = new FormData();

        if(this.uploadFile.private == 'true'){
          this.uploadFile.private = true;
        }else{
          this.uploadFile.private = false;
        }
        const VideoInput = document.getElementById('inputVideo');
        const ThumbnailInput = document.getElementById('inputThumbnail');

        formdata.append("title", this.uploadFile.title);
        formdata.append("private", this.uploadFile.private);
        formdata.append("mediaFile", VideoInput.files[0], "video");
        formdata.append("thumbnail", ThumbnailInput.files[0], "thumbnail");
        //formdata.append("thumbnail", this.$refs.thumbnail.files[0], "thumbnail");

        console.log(formdata)

        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
          credentials: 'include',
        };

        fetch("/api/upload", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .then(() => (this.uploaded = true))
          .catch(error => console.log('error', error));
      },
      selectFile(){
        this.uploadFile.mediaFile = this.$refs.file.files[0];
        this.uploadFile.thumbnail = this.$refs.thumbnail.files[0];
      },
      loginPage(){
        router.push({ path: '/login', components: LoginView }).catch(()=>{})
      }
    },
    created(){
      if(!localStorage.getItem('userName')){
        this.loginPage()
      }
    },
  }
</script>

<style scoped>

</style>