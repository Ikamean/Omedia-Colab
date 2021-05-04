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
                    <v-card-title class="justify-center text-h4">
                      <v-icon x-large color="#1F7087">mdi-account-circle-outline</v-icon>
                      </v-card-title>

                      <v-form @submit.prevent="register()" v-model="validRegister">
                        <v-container class="justify-center">
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
                              v-on:keyup.enter="register"
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
                {{activeUser}}
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
      </template>
    </div>
  </div>
<!-- popup login -->

  
</template>

<script>
//import axios from 'axios'

export default {
  components: {

  },
  data:() => ({
      activeUser: '',
      validLogin: true,
      validRegister: true,
      dialog: false,
      success: false,
      email: '',
      password: '',
      error: '',
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

      fetch("http://127.0.0.1:5000/api/login", requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.success = data.success;
          localStorage.setItem('userID', data.data.userId)
          localStorage.setItem('userName', data.data.userName)
          this.activeUser = localStorage.getItem('userName')
          if (localStorage.getItem('userID')){
            this.dialog = !this.success;
          }
          this.userName = '';
          this.password = '';
        }) 
        .catch(error => {
          console.log('error', error)
          this.error = error.response.data;
          this.success = false;
        });
    },
    //function for registration handling
    register(){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({"userName":this.userNameRegister,"password":this.passwordRegister, "email":this.email});

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:5000/api/register", requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.success = true;
          this.usernNameRegister = '';
          this.passwordRegister = '';
          this.dialog = false;
        })
        .catch(err => {
          this.success = false;
          this.error = err.response.data;
          console.log(this.error)
        });
    },
    //logout function which removes userID and userName from local storage
    logout(){
      var formdata = new FormData();

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
        credentials: 'include',
      };

      fetch("http://127.0.0.1:5000/api/logout", requestOptions)
        .then(response => {
          console.log(response.text())
          localStorage.removeItem('userName')
          localStorage.removeItem('userId')
          })
        .then(result => {
          console.log(result)
          })
        .catch(error => console.log('error', error)); 
    },
    //remove error message
    removeError(){
      this.error = '';
    }
  },
  mounted(){
    if (localStorage.getItem('userName') & document.cookie){
          this.success = true;
    }
    this.activeUser = localStorage.getItem('userName')
  }
}
</script>
