<template>
<!-- popup login -->
  <div class="text-center">
    <div v-if="!success">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              class="d-flex align-center"
              text
              v-bind="attrs"
              v-on="on"
          >
              <v-icon large>mdi-account-circle-outline</v-icon>
          </v-btn>
        </template>
          <!--login - register -->
            <v-card>
              <!-- tabs -->
              <v-tabs
                dark
                background-color="#11583E"
                grow
                flat
                slider-color="#ED7B22"
              >
                <v-tab>
                  Login
                </v-tab>

                <v-tab >
                  Register
                </v-tab>

                <!-- login tab -->
                <v-tab-item>
                  <v-card-title class="justify-center text-h4">
                    <v-icon x-large color="#11583E">mdi-account-circle-outline</v-icon>
                  </v-card-title>

                  <!-- error message -->
                  <v-slide-x-transition>
                    <div v-if="error">
                    <v-card-title class="justify-center text-h4" >
                      <v-chip
                      color="red"
                      outlined
                      label
                      close
                      @click:close='removeError()' 
                      > {{error}}</v-chip>
                    </v-card-title>
                  </div>
                  </v-slide-x-transition>
                  <!-- error message -->
                     
                  <!-- login form -->
                  <v-form @submit.prevent="login()" v-model="valid">
                    <v-container class="justify-center">
                      <v-row justify="center"
                        align="center" 
                        dense>
                        <v-col cols="12">
                          <v-text-field
                            v-model="username"
                            :rules="nameRules"
                            placeholder="Username"
                            prepend-inner-icon="mdi-account"
                            outlined
                            clearable
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            placeholder="Password"
                            prepend-inner-icon="mdi-lock"
                            outlined
                            clearable
                            type="password"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-divider></v-divider>

                        <v-col cols="auto">
                            <v-btn
                              color="#11583E"
                              outlined
                              block
                              :disabled="!valid"
                              @click="login()"
                            >
                              Login
                            </v-btn>
                        </v-col>

                        <v-card-subtitle>
                          or, sign in with
                        </v-card-subtitle>

                        <v-btn
                          color="#ED7B22"
                          dark
                          elevation="0"
                          outlined
                          fab
                        >
                          <v-icon dark>
                            mdi-google
                          </v-icon>
                        </v-btn>

                      </v-row>
                    </v-container>
                  </v-form>
                  <!-- login form -->

                </v-tab-item>
                <!-- login tab -->

                <!-- registration tab -->
                <v-tab-item>
                  <v-card-title class="justify-center text-h4">
                    <v-icon x-large color="#11583E">mdi-account-circle-outline</v-icon>
                  </v-card-title>

                  <v-form @submit.prevent="register()" v-model="valid">
                    <v-container class="justify-center">
                      <v-row justify="center"
                        align="center" 
                        dense>
                        <v-col cols="12">
                          <v-text-field
                            v-model="username"
                            :rules="nameRules"
                            placeholder="Username"
                            prepend-inner-icon="mdi-account"
                            outlined
                            clearable
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            placeholder="Email"
                            prepend-inner-icon="mdi-email"
                            outlined
                            clearable
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            placeholder="Password"
                            prepend-inner-icon="mdi-lock"
                            outlined
                            clearable
                            required
                            type="password"
                          ></v-text-field>
                        </v-col>

                        <v-divider></v-divider>

                        <v-col cols="auto">
                            <v-btn
                              :disabled="!valid"
                              color="#11583E"
                              outlined
                              block
                              @click="register()"
                            >
                              Sign up
                            </v-btn>
                        </v-col>

                          <v-card-subtitle>
                            or, sign in with
                          </v-card-subtitle>

                            <v-btn
                              color="#ED7B22"
                              dark
                              elevation="0"
                              outlined
                              fab
                            >
                              <v-icon dark>
                                mdi-google
                              </v-icon>
                            </v-btn>

                      </v-row>
                    </v-container>
                  </v-form>
                </v-tab-item>
                <!-- registration tab -->

              </v-tabs>
              <!-- tabs --> 
            </v-card>
        <!--login - register -->
      </v-dialog>
    </div>

    <div v-else>
      <template>
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                dark
                v-bind="attrs"
                v-on="on"
              >
                {{userName}}
              </v-btn>
            </template>
            <v-card width="200px">
              <v-list>

                <v-list-item link @click='logout()'>
                  <v-btn 
                  class="d-flex align-center"
                  text
                  >
                    <v-icon>mdi-logout</v-icon>
                  </v-btn>
                  <v-list-item-title>
                    Logout
                  </v-list-item-title>
                </v-list-item>

                <v-list-item link>
                  <v-btn 
                  class="d-flex align-center"
                  text
                  >
                    <v-icon>mdi-account-arrow-right-outline</v-icon>
                  </v-btn>
                  <v-list-item-title>
                    Profile
                  </v-list-item-title>
                </v-list-item>

              </v-list>
            </v-card>      
          </v-menu>
        </div>
      </template>
    </div>
  </div>
<!-- popup login -->

  
</template>

<script>
import { getAPI } from '../axios-api.js'

export default {
    data:() => ({
        valid: true,
        dialog: false,
        success: false,
        username: '',
        email: '',
        password: '',
        error: '',
        userName: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    }),

    methods: {
      login(){
        getAPI.post('api/login', {
          userName: this.username,
          password: this.password
        })
        .then(response => {
          this.success = response.data.success;
          
          this.username = '';
          this.password = '';
          localStorage.setItem('userID', response.data.data.userId)
          localStorage.setItem('userName', response.data.data.userName)
          this.userName = localStorage.getItem('userName')
          if (localStorage.getItem('userID')){
            this.dialog = !this.success;
          }
        })
        .catch(err => {
          this.success = false;
          this.error = err.response.data;
        })
      },
      //function for registration handling
      register(){
        getAPI.post('api/register', {
          userName: this.username,
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.success = response.data.success;
          this.dialog = !this.success;
          this.username = '';
          this.password = '';
        })
        .catch(err => {
          this.success = false;
          this.error = err.response.data;
        })
      },
      //logout function which removes userID and userName from local storage
      logout(){
        localStorage.removeItem('userID');
        localStorage.removeItem('userName');
        this.success = false;
      },
      //remove error message
      removeError(){
        this.error = '';
      }
    },
    mounted(){
      if (localStorage.getItem('userID')){
            this.success = true;
      }
      this.userName = localStorage.getItem('userName')
  }
}
</script>
