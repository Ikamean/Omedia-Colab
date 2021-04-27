<template>
<!-- footer bar -->
  <v-footer
    dark
    padless
    app
  > 
    <v-card
      class="flex footer"
      flat
      tile
    >
      <v-card-title class="footer">
        <strong class="subheading">Get connected with us on Github!</strong>

        <v-spacer></v-spacer>

        <v-btn
          class="mx-4"
          dark
          icon
        >
          <v-icon x-large>
            mdi-github
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center footer">
        {{ new Date().getFullYear() }} — <strong>Omedia Colab</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  <!-- search bar -->
</template>

<script>

export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        background-color: #11583E;
    }
</style>