<template>

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
		<!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
       <div class="ma-2" v-for="Nitem in Nitems" :key="Nitem.name" >
          <v-icon>{{Nitem.icon}}</v-icon>
        <!-- <router-link :to="Nitem.url" class="green--text">{{Nitem.name}}</router-link> -->
		<router-link :to="'/'+$vuetify.lang.current + Nitem.url" class="green--text"><!-- {{Nitem.name}} -->{{'/'+$vuetify.lang.current + Nitem.url}} </router-link>
       </div>
      <v-spacer></v-spacer>
      <router-link to="/" class="green--text" >Home</router-link>
      <!-- -->
      {{ $vuetify.lang.t('$vuetify.close') }}
      {{this.$vuetify.lang.current}}
      <v-switch
        class="mt-5 pa-2"
        v-model="$vuetify.theme.dark"
        label="Theme"
        persistent-hint
      ></v-switch>
      <!-- -->
	<v-select
          col="1"
          v-if="StatLang===true"
          v-on:change="StatLang = !StatLang ;$vuetify.lang.current =Select.loca"
          v-model="Select"
          :items= "items"
          item-text="name"
          item-value="loca"
          label="Select"
          persistent-hint
          return-object
          single-line
          class="md1 xs3 lg1"
          > </v-select>
	<v-btn icon @click="StatLang = !StatLang"  v-if="StatLang===false">
      <flag :iso="Select.flag" />
      {{Select.loca}}
	</v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: 'SwitchLocale',
  data() {
    return {
            StatLang: false,
            Select: {loca: 'en',name: 'English',flag: 'GB'},
            items:[
                  {loca: 'af',name: 'Afrikaans (Afrikaans)',flag: 'ZA'},
                  {loca: 'ar',name: 'Arabic (اللغة العربية)',flag: 'AE'},
                  {loca: 'az',name: 'Azerbaijani (Azərbaycan)',flag: 'AZ'},
                  {loca: 'bg',name: 'Bulgarian (български)',flag: 'BG'},
                  {loca: 'ca',name: 'Catalan (català)',flag: ' '},
                  {loca: 'ckb',name: 'Central Kurdish (کوردی)',flag: ' '},
                  {loca: 'cs',name: 'Czech (čeština)',flag: 'CZ'},
                  {loca: 'de',name: 'German (Deutsch)',flag: 'DE'},
                  {loca: 'el',name: 'Greek (Ελληνικά)',flag: 'GR'},
                  {loca: 'en',name: 'English',flag: 'GB'},
                  {loca: 'es',name: 'Spanish (Español)',flag: 'ES'},
                  {loca: 'et',name: 'Estonian (eesti)',flag: 'EE'},
                  {loca: 'fa',name: 'Persian (فارسی)',flag: 'IR'},
                  {loca: 'fi',name: 'Finnish (suomi)',flag: 'FI'},
                  {loca: 'fr',name: 'French (Français)',flag: 'FR'},
                  //{loca: 'he',name: 'Hebrew (עברית)',flag: 'IL'},
                  {loca: 'hr',name: 'Croatian (hrvatski jezik)',flag: 'HR'},
                  {loca: 'hu',name: 'Hungarian (magyar)',flag: 'HU'},
                  {loca: 'id',name: 'Indonesian (Indonesian)',flag: 'ID'},
                  {loca: 'it',name: 'Italian (Italiano)',flag: 'IT'},
                  {loca: 'ja',name: 'Japanese (日本語)',flag: 'JP'},
                  {loca: 'ko',name: 'Korean (한국어)',flag: 'KR'},
                  {loca: 'lt',name: 'Lithuanian (lietuvių kalba)',flag: 'LT'},
                  {loca: 'lv',name: 'Latvian (latviešu valoda)',flag: 'LV'},
                  {loca: 'nl',name: 'Dutch (Nederlands)',flag: 'NL'},
                  {loca: 'no',name: 'Norwegian (Norsk)',flag: 'NO'},
                  {loca: 'pl',name: 'Polish (język polski)',flag: 'PL'},
                  {loca: 'pt',name: 'Portuguese (Português)',flag: 'PT'},
                  {loca: 'ro',name: 'Romanian (Română)',flag: 'RO'},
                  {loca: 'ru',name: 'Russian (Русский)',flag: 'RU'},
                  {loca: 'sk',name: 'Slovak (slovenčina)',flag: 'SK'},
                  {loca: 'sl',name: 'Slovene (slovenski jezik)',flag: 'SI'},
                  {loca: 'srCyrl',name: 'Serbian (српски језик)',flag: 'RS'},
                  {loca: 'srLatn',name: 'Serbian (srpski jezik)',flag: 'RS'},
                  {loca: 'sv',name: 'Swedish (svenska)',flag: 'SE'},
                  {loca: 'th',name: 'Thai (ไทย)',flag: 'TH'},
                  {loca: 'tr',name: 'Turkish (Türkçe)',flag: 'TR'},
                  {loca: 'uk',name: 'Ukrainian (Українська)',flag: 'UA'},
                  {loca: 'vi',name: 'Vietnamese (Tiếng Việt)',flag: 'VI'},
                  {loca: 'zhHans',name: 'Chinese (中文)',flag: 'CN'},
                  {loca: 'zhHant',name: 'Chinese (正體中文)',flag: 'CN'},

                  ],

               Nitems: [
                       {name:'Home',icon: 'mdi-home' ,url: '/'},  
                       {name:'About',icon: 'mdi-book-account' ,url: '/About'},  
                       {name:'Services',icon: 'mdi-cog' ,url: ''},  
                       //{name:'Product',icon: 'mdi-folder-home' ,url: ''},  
                       //{name:'Portfolio',icon: 'mdi-bank' ,url: ''},  
                       {name:'Support',icon: 'mdi-folder-home' ,url: ''},  
                       {name:'Contact',icon: 'mdi-phone' ,url: ''},  
                       ],
              //methods:
              // html.lang = 'ar'
              // html.dir = 'rtl'
	}
  }
}
</script>
