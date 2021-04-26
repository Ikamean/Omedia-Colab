<template>
 <div>
    <v-app-bar app 
    color="#11583E" 
    dark 
    flat>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
       
       <v-text-field
            
            outlined
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            dense
            clearable
            class="expanding-search"
            style="padding-top: 25px; margin-left: 10vw;"
          ></v-text-field>
          
          <v-spacer></v-spacer>
          <Login />

          <!-- 
      <v-container fluid class="ma-0 pa-0">
        <v-row justify="center" align="center" dense no-gutters>
          <v-col cols="6"
            md="1"
            sm="1"
            xs="5"
            lg="2"
            xl="1">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> 
          </v-col>
          <v-col cols='12'
            md="7"
            sm="9"
            xs='9'
            lg="8"
            xl="9"
            >
            <v-text-field
            
            outlined
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            dense
            clearable
            class="expanding-search"
            style="padding-top: 25px;"
          ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="6"
            md="2"
            sm="2"
            xs="5"
            lg="1"
            xl="2">
              <Login />
          </v-col>
        </v-row>
      </v-container>
      -->
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-progress-question</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-cloud-upload-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Upload video</v-list-item-title>
          </v-list-item>

        </v-list>
    </v-navigation-drawer>
 </div>
</template>

<script>
import Login from '../components/login.vue'

export default {
    name: 'Header',
    components: {
      Login
    },

    data: () => ({
      drawer: false
    })
}

</script>
