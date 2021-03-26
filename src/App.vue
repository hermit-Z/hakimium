<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
     <!--
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
        </div> -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
       <div class="ma-2" v-for="Nitem in Nitems" :key="Nitem.name" >
          <v-icon>{{Nitem.icon}}</v-icon>
		<router-link :to="Nitem.url" class="green--text">{{Nitem.name}}</router-link>
       </div>
      <v-spacer></v-spacer>
      <!-- -->
      <SwitchLocale/>
      {{ $vuetify.lang.t('$vuetify.close') }}
      <v-switch
        class="mt-5 pa-2"
        v-model="$vuetify.theme.dark"
        label="Theme"
        persistent-hint
      ></v-switch>
      <!-- -->
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
import SwitchLocale from './components/langS.vue'
import footerr from './components/footer.vue'
export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
    footerr,
    SwitchLocale,
  },

  data: () => ({
               Nitems: [
                       {name:'Home',icon: 'mdi-home' ,url: ''},  
                       {name:'About',icon: 'mdi-book-account' ,url: ''},  
                       {name:'Services',icon: 'mdi-cog' ,url: ''},  
                       {name:'Product',icon: 'mdi-folder-home' ,url: ''},  
                       {name:'Portfolio',icon: 'mdi-bank' ,url: ''},  
                       {name:'Contact',icon: 'mdi-phone' ,url: ''},  
                       ], 
    //
  }),
});
</script>
