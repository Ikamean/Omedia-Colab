<template>
    <div>
      <v-container class="mt-4">
        <v-row justify="center">
          <v-card width="80vw">
          <v-form
          ref="form"
          lazy-validation
          enctype="mutlipart/form-data"
          @submit.prevent="upload()"
          >
          <v-container>
            <v-row class="justify-center"
            align="center" 
            dense>
              <v-col cols="12">
                <v-text-field
                v-model="uploadFile.title"
                outlined
                :rules="nameRules"
                placeholder="Name"
                required
                ></v-text-field>

                <div class="field">
                  <label for="file" class="label">Upload video</label>
                  <input 
                    type="file"
                    ref="file"
                    @change="selectFile"
                  />
                </div>

              </v-col>

              <v-col cols="auto">
                <v-btn
                color="#11583E"
                class="mr-4"
                text
                @click="upload()"
                >
                  <v-icon dark x-large>mdi-cloud-upload-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            </v-container>
          </v-form>
          </v-card>  
      </v-row>  
      </v-container>            
    </div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'Upload',

    data: () => ({
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      authenticated: false, 
      error: '',
      
      uploadFile: {
        title: '',
        private: false,
        mediaFile: null,
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
        var data = new FormData();
        data.append('title', this.uploadFile.title);
        data.append('private', this.uploadFile.private);
        data.append('mediaFile', this.uploadFile.mediaFile);
        console.log(this.uploadFile.mediaFile)

        var config = {
          method: 'post',
          url: 'http://127.0.0.1:5000/api/upload',
          headers: { 
          },
          data : data
        };

        axios(config)
        .then(response => {
          console.log(JSON.stringify(response.data));
        })
        .catch(err => {
          console.log(err);
        });
      },
      selectFile(){
        this.uploadFile.mediaFile = this.$refs.file.files[0];
      }
    },
    mounted(){
        this.isAuthenticated();
    },
  }
</script>

<style scoped>
/* Add basic styles for the upload container */
.upload-container {
	border-radius: 0.25rem;
	border: 1px solid#486684;
	display: block;
	margin: auto;
	width: 100%;
}
.upload-heading,
.upload-footer {
	background: #486684;
	color: #fff;
	padding: 1rem 2rem;
	font-weight: 600;
}
.upload-body {
	align-items: center;
	background-color: #fafafa;
	color: #486684;
  display: flex;
  font-size: 1.5rem;
	justify-content: center;
	min-height: 25vh;
}
.upload-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.upload-footer-file-name {
	margin-bottom: 0.25rem;
}
.upload-footer-file-size {
	opacity: 0.95;
}
.upload-footer-button {
	background-color: transparent;
	border: 2px solid #fff;
	border-color: #fff;
	border-radius: 0.25rem;
	color: #fff;
	cursor: pointer;
	font-weight: 600;
	padding: 0.5rem 1rem;
	transition: 0.25s all;
}
.upload-footer-button:hover {
	background-color: #fff;
	color: #486684;
	transition: 0.25s all;
}
</style>