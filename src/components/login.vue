<template>
<!-- popup login -->
  <div class="text-center">

    <!-- if logged in -->
    <template v-if="user">
      <div >   
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                dark
                v-bind="attrs"
                v-on="on"
              >
                {{user}}
              </v-btn>
            </template>
            <v-form @submit.prevent="logout()">
              <v-card width="200px">
                <v-list>
                  <v-list-item link>
                    <v-btn 
                    class="d-flex align-center"
                    text
                    type="submit"
                    >
                      <v-icon>mdi-logout</v-icon>
                    </v-btn>
                    <v-list-item-title>
                      Logout
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-form>      
          </v-menu>
        </div>
      </div>
    </template>
    <!-- if logged in -->

    <!-- if not logged in -->
    <template v-else>
      <div>
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
                  background-color="#1F7087"
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
                      <v-icon x-large color="#1F7087">mdi-account-circle-outline</v-icon>
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
                    <v-form @submit.prevent="login()" v-model="validLogin">
                      <v-container class="justify-center">
                        <v-row justify="center"
                          align="center" 
                          dense>
                          <v-col cols="12">
                            <v-text-field
                              v-model="userName"
                              :rules="nameRules"
                              placeholder="Username"
                              name='userName'
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
                              name='password'
                              placeholder="Password"
                              prepend-inner-icon="mdi-lock"
                              outlined
                              clearable
                              type="password"
                              required
                              v-on:keyup.enter="login"
                            ></v-text-field>
                          </v-col>

                          <v-divider></v-divider>

                          <v-col cols="auto">
                            <v-btn
                              color="#1F7087"
                              outlined
                              block
                              :disabled="!validLogin"
                              type='submit'
                            >
                              Login
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                    <!-- login form -->

                  </v-tab-item>
                  <!-- login tab -->

                  <!-- registration tab -->
                    <v-tab-item>
                      <v-card-title class="justify-center text-h4" v-if="registered" transition="scale-transition">
                        <v-icon size="70px" color="#84eb36">mdi-checkbox-marked-circle-outline</v-icon>
                      </v-card-title>

                      <v-card-title class="justify-center text-h4" v-else transition="scale-transition">
                        <v-icon x-large color="#1F7087">mdi-account-circle-outline</v-icon>
                      </v-card-title>

                      <!-- error message -->
                      <v-slide-x-transition>
                        <div v-if="errorRegister">
                        <v-card-title class="justify-center text-h4" >
                          <v-chip
                          color="red"
                          outlined
                          label
                          close
                          @click:close='removeErrorRegister()'
                          > {{errorRegister}}</v-chip>
                        </v-card-title>
                      </div>
                      </v-slide-x-transition>
                      <!-- error message -->

                      <v-form ref="form" @submit.prevent="register()" v-model="validRegister">
                          <v-container class="justify-center" v-on:keyup.enter="register">
                            <v-row justify="center"
                            align="center" 
                            dense>
                              <v-col cols="12">
                                <v-text-field
                                v-model="userNameRegister"
                                :rules="nameRules"
                                name='userName'
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
                                name='email'
                                placeholder="Email"
                                prepend-inner-icon="mdi-email"
                                outlined
                                clearable
                                required
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                v-model="passwordRegister"
                                :rules="passwordRules"
                                placeholder="Password"
                                prepend-inner-icon="mdi-lock"
                                name='password'
                                outlined
                                clearable
                                required
                                type="password"
                                ></v-text-field>
                              </v-col>

                              <v-divider></v-divider>

                              <v-col cols="auto">
                                <v-btn
                                :disabled="!validRegister"
                                color="#11583E"
                                outlined
                                block
                                type='submit'
                                >
                                  Sign up
                                </v-btn>
                              </v-col>
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
    </template>
    <!-- if not logged in -->

  </div>
<!-- popup login -->

  
</template>

<script>
//import axios from 'axios'
import router from '../router/index'

export default {
  name: 'Login',

  components: {

  },
  data:() => ({
    validLogin: true,
    validRegister: true,
    dialog: false,
    success: false,
    registered: false,
    email: '',
    password: '',
    error: '',
    errorRegister: '',
    userName: '',
    passwordRegister: '',
    userNameRegister: '',
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

  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
    user : function(){ return this.$store.getters.user}
  },


  methods: {
    //function to handle login
    login(){
      var formdata = new FormData();
      formdata.append("userName", this.userName);
      formdata.append("password", this.password);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
        credentials: 'include',
      };

      this.$store.dispatch('login', requestOptions)
      .then(() => {
        this.success = true;
      }) 
      .catch(error => {
        console.log(error)
        this.error = error.response.data;
        this.success = false;
      });
    },
    //function for registration handling
    register(){
      var formdata = new FormData();

      formdata.append("userName", this.userNameRegister);
      formdata.append("email", this.email);
      formdata.append("password", this.passwordRegister);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      fetch("/api/register", requestOptions)
      .then(response => response.text())
      .then(result => {
        if(result !== 'Created'){
          this.errorRegister = result;
          this.registered = false
        }else{
          this.reset();
          this.registered = true
        }
      })
      .catch(err => {
        this.success = false;
        this.errorRegister = err.response.data;
        console.log(this.error)
      });
    },
    //logout function which removes userID and userName from local storage
    logout(){
      this.$store.dispatch('logout')
      router.push({ path: '/' }).catch(()=>{})
    },
    //remove error message
    removeError(){
      this.error = '';
    },
    removeErrorRegister(){
      this.errorRegister = '';
    },
    reset () {
      this.$refs.form.reset()
    },
  },
  mounted(){
    if(document.cookie){
      return this.$store.getters.isLoggedIn = true
    }
  }
}
</script>