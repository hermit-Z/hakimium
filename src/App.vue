<template>
  <v-app>
    <SwitchLocale/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <footerr/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
//import HelloWorld from './components/HelloWorld.vue';
import SwitchLocale from './components/langS.vue'
import footerr from './components/footer.vue'
export default Vue.extend({
  name: 'App',

  components: {
    //HelloWorld,
    footerr,
    SwitchLocale,
  },

  data: () => ({
    //
  }),
});
</script>
