<template>
  <div class="text-center">
    <v-dialog
      v-model="dialogEdit"
      width="500px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        text
        dark
        v-bind="attrs"
        v-on="on"
        >
          edit
        </v-btn>
      </template>

      <v-card>

         <v-form
              ref="form"
              lazy-validation
              enctype="mutlipart/form-data"
              @submit.prevent="editVid()"
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
                        ref="thumbnail"
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
                      color="#1F7087"
                      text
                      type="submit"
                      >
                        <v-icon dark x-large>mdi-image-edit-outline</v-icon>
                      </v-btn>
                    </v-col>

                  </v-row>
                </v-container>
              </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Edit',
    data () {
      return {
        nameRules: [
            v => (v.length <= 50) || 'Name must be less than 50 characters',
        ],
        dialogEdit: false,
        uploadFile: {
            title: '',
            private: '',
            thumbnail: null,
        }
      }
    },
    methods: {
        editVid(){
            this.dialogEdit = false
            this.uploadFile.title = ''
            this.uploadFile.private = ''
            this.uploadFile.thumbnail = null
        }
    }
  }
</script>