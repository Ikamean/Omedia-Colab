<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/header';
import Footer from './components/footer'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
