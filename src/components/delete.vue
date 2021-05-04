<template>
  <div class="text-center">
    <v-dialog
      v-model="dialogDelete"
      width="500px"
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
            @click="dialogDelete = false"
          >
            Yes
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="dialogDelete = false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Delete',
    data () {
      return {
        dialogDelete: false,
      }
    },
    methods: {
        deleteVid(){

        }
    }
  }
</script>