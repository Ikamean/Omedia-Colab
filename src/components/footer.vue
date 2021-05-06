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
      color="#11583E"
    >
        
      <v-card-text class="py-2 white--text text-center footer">
        {{ new Date().getFullYear() }} — <strong>Omedia Colab</strong>
        <v-btn
          class="mx-4"
          dark
          icon
          href="https://github.com/Ikamean/Omedia-Colab"
        >
          <v-icon x-large>
            mdi-github
          </v-icon>
        </v-btn>
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
        background-color: #1F7087;
        
    }
</style>