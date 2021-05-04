<template>
    <div>
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
                        ref="file"
                        name='file'
                        @change="Preview_image"
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
                        ref="thumbnail"
                        name="thumbnail"
                        accept="image/*"
                        prepend-icon="mdi-image"
                        @change="Preview_image"
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
                  <v-card
                    color="#1F7087"
                    dark
                    v-if="url && uploadFile.title"
                  >
                    <div class="d-flex flex-no-wrap justify-center">
                      <div>
                        <v-container fluid>
                          <v-row justify="center">
                          <v-col cols="auto">
                            <v-card-title
                            class="text-h5"
                            >
                            Upload preview
                            </v-card-title>

                            <v-card-subtitle>Created {{date}}</v-card-subtitle>
                          </v-col>

                          <v-col>
                            <v-card-actions>

                              <v-btn
                                class="ml-2 mt-5"
                                outlined
                                rounded
                                small
                              >
                                {{uploadFile.title}}
                              </v-btn>
                            </v-card-actions>
                          </v-col>

                          <v-col>
                            <v-card-actions>
                              <v-btn
                                class="ml-2 mt-5"
                                outlined
                                rounded
                                small
                                v-if="uploadFile.private"
                              >
                                Private
                              </v-btn>

                              <v-btn
                                class="ml-2 mt-5"
                                outlined
                                rounded
                                small
                                v-else
                              >
                                Public 
                              </v-btn>
                            </v-card-actions>
                          </v-col>
                          
                          <v-col cols="auto">
                            <v-avatar
                              class="ma-3"
                              size="225"
                              tile
                            >
                              <v-img :src=url></v-img>
                            </v-avatar>
                          </v-col>

                          </v-row>
                        </v-container>
                      </div>
                    </div>
                  </v-card>
        <!-- Upload preview -->   

                </v-container>
              </v-form>
            </v-card>  
          </v-col>
        <!-- Upload form -->

        <!-- My videos component -->
          <v-col 
          cols='12'
          xl="2"
          lg="2"
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
      authenticated: false,
      showPreview: false, 
      error: '',
      url: null,
      date: '',
      uploadFile: {
        title: '',
        private: '',
        mediaFile: null,
        thumbnail: null,
      }
    }),

    methods: {
      isAuthenticated(){
        if (localStorage.getItem('userID')){
            this.authenticated = true;
        } 
        else {
            this.authenticated = false;
        }
      },
      upload(){

        var formdata = new FormData();

        if(this.uploadFile.private == 'true'){
          this.uploadFile.private = true;
        }else{
          this.uploadFile.private = false;
        }

        formdata.append("title", this.uploadFile.title);
        formdata.append("private", this.uploadFile.private);
        formdata.append("mediaFile", this.$refs.file.files[0], "video");
        formdata.append("thumbnail", this.$refs.thumbnail.files[0], "thumbnail");

        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
          credentials: 'include',
        };

        fetch("http://127.0.0.1:5000/api/upload", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      },
      selectFile(){
        this.uploadFile.mediaFile = this.$refs.file.files[0];
        this.uploadFile.thumbnail = this.$refs.thumbnail.files[0];
      },
      Preview_image() {
        this.url= URL.createObjectURL(this.uploadFile.thumbnail)
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        this.date = today.toLocaleDateString();
      }
    },
    mounted(){
        this.isAuthenticated();
    },
  }
</script>

<style scoped>

</style>