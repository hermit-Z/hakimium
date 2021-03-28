<template>
  <div>
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
          full-width=false
          class="md1 xs3 lg1"
          > </v-select>
	<v-btn icon @click="StatLang = !StatLang"  v-if="StatLang===false">
      {{Select.loca}}
      <flag :iso="Select.flag" />
	</v-btn>
  </div>
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
	}
  }
}
</script>
