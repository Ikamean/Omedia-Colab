<template>
    <div>
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
                    v-on:keydown.13="register"
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
    </div>
</template>

<script>
import { getAPI } from '../axios-api.js'

export default {
    name: 'Register',

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
          console.log(this.error)
        })
      },
      //remove error message
      removeError(){
        this.error = '';
      }
    },
}
</script>
