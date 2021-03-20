<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <!-- -->
      <v-switch
        class="mt-5 pa-2"
        v-model="$vuetify.theme.dark"
        label="Theme"
        persistent-hint
      ></v-switch>
      <!-- -->
      {{ $vuetify.lang.t('$vuetify.close') }}
      <v-icon>fas fa-lock</v-icon>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <HelloWorld/>
    </v-main>
    <footerr/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import footerr from './components/footer.vue'
export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
    footerr,
  },

  data: () => ({
    //
  }),
});
</script>
