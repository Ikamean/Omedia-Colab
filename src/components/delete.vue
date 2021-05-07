<template>
  <div class="text-center">
    <v-dialog
      v-model="dialogDelete"
      width="500px"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        text
        dark
        v-bind="attrs"
        v-on="on"
        >
          delete
        </v-btn>
      </template>

      <v-card>

        <v-card-title>
          Are you sure you want to delete the video?
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          
          <v-btn
            color="error"
            text
            @click="deleteVid()"
          >
            Yes
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="uploadPage()"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import router from '../router/index'
import Upload from '../components/upload.vue'

  export default {
    name: 'Delete',
    data () {
      return {
        dialogDelete: true,
      }
    },
    methods: {
        deleteVid(){
        var requestOptions = {
          method: 'DELETE',
          redirect: 'follow',
          credentials: 'include',
        };

        fetch(`/api/media/delete/${this.$route.params.id}`, requestOptions)
        this.uploadPage()
      },
      uploadPage(){
        router.push({ path: '/Upload', components: Upload })
        .then(() => location.reload())
      },
    }
  }
</script>