<template>
  <div class="text-center">
    <v-dialog
      v-model="dialogEdit"
      width="500px"
      persistent
    >
      <v-card>
        <v-form
        ref="form"
        lazy-validation
        enctype="mutlipart/form-data"
        @submit.prevent="editVid()"
        >
      <!-- edit form -->
        <div>
          <v-container fluid>
            <v-row class="justify-center"
            align="center" 
            dense
            no-gutters>
              <v-col cols="12">
                <v-text-field
                v-model="editFile.title"
                outlined
                clearable
                :rules="nameRules"
                placeholder="Name"
                name='title'
                dense
                prepend-icon="mdi-subtitles"
                ></v-text-field>
              </v-col>

              <v-col cols='12'>
                <v-file-input
                  label="Thumbnail"
                  outlined
                  show-size
                  dense
                  id="inputThumbnail"
                  ref="thumbnail"
                  name="thumbnail"
                  accept="image/*"
                  prepend-icon="mdi-image"
                  v-model="editFile.thumbnail"
                ></v-file-input>
              </v-col>

              <v-col cols="auto">
                <v-radio-group
                  v-model="editFile.private"
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
                color="#1F7087"
                text
                type="submit"
                >
                  <v-icon dark x-large>mdi-image-edit-outline</v-icon>
                </v-btn>
              </v-col>

            </v-row>
          </v-container>
        </div>
      <!-- edit form -->
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import router from '../router/index'
import Upload from '../components/upload.vue'
import axios from 'axios'

  export default {
    name: 'Edit',
    data () {
      return {
        nameRules: [
          v => (v.length <= 50) || 'Name must be less than 50 characters',
        ],
        edited: false,
        dialogEdit: true,
        editFile: {
            title: '',
            private: '',
            thumbnail: null,
        }
      }
    },
    methods: {
      editVid(){
        const ThumbnailInput = document.getElementById('inputThumbnail');
        var formdata = new FormData();
        formdata.append("title", this.editFile.title);
        formdata.append("private", this.editFile.private);
        formdata.append("thumbnail", ThumbnailInput.files[0], "thumbnail");

        var config = {
          method: 'put',
          url: `/api/media/edit/${this.$route.params.id}`,
          withCredentials: true,
          data : formdata
        };

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .then(() => this.uploadPage())
        .catch(function (error) {
          console.log(error);
        });
      },
      uploadPage(){
        router.push({ path: '/Upload', components: Upload })
        .then(() => location.reload())
      }, 
    },
    created(){
      this.editFile.title = this.$route.params.title;
      this.editFile.private = this.$route.params.private;
      this.editFile.thumbnail = this.$route.params.thumbnail;
    }
  }
</script>