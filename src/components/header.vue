<template>
 <div>
   <!-- navigation bar -->
    <v-app-bar app 
    color="#11583E" 
    dark 
    flat>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
       
      <!-- search bar -->
      <v-text-field
          outlined
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          dense
          clearable
          class="expanding-search"
          style="padding-top: 25px; margin-left: 10vw;"
      ></v-text-field>
      <!-- search bar -->
      
      <v-spacer></v-spacer>
      <Login />

    </v-app-bar>
  <!-- navigation bar -->

  <!-- navigation menu -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list
          nav
          dense
        >
          <v-list-item link @click="home()">
            <v-list-item-icon>
              <v-icon router>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-progress-question</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="uploadPage()">
            <v-list-item-icon>
              <v-icon>mdi-cloud-upload-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Upload video</v-list-item-title>
          </v-list-item>

        </v-list>
    </v-navigation-drawer>
  <!-- navigation menu -->
 </div>
</template>

<script>
import Login from '../components/login.vue'
import router from '../router/index'
import Upload from '../components/upload.vue'

export default {
    name: 'Header',
    components: {
      Login,

    },

    data: () => ({
      drawer: false
    }),
    methods: {
      uploadPage(){
        router.push({ path: '/Upload', components: Upload }).catch(()=>{})
      },
      home(){
        router.push({ path: '/' }).catch(()=>{})
      },
    }
}

</script>
