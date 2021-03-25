<template>
  <div>
	<v-select
          col="1"
          v-model="$vuetify.lang.current"
          :items= "langitems"
          label="Select"
          persistent-hint
          return-object
          single-line
          full-width=false
          class="md1 xs3 lg1"
          > </v-select>
  </div>
</template>

<script>
export default {
  name: 'SwitchLocale',
  data() {
    return {isos: [ 'af', 'ar', 'az', 'bg', 'ca', 'cs', 'de', 'el', 'en', 'es', 'et', 'fa', 'fi', 'fr','he', 'hr', 'hu', 'id', 'it', 'ja', 'ko', 'lt', 'lv', 'nl', 'no', 'pl', 'pt', 'ro',
			'ru', 'sk', 'sl', 'sv', 'th', 'tr', 'uk', 'ckb', 'srCyrl', 'zhHans', 'zhHant' ],
            langitems:['Afrikaans (Afrikaans)','Arabic (اللغة العربية)','Catalan (català)',
                'Czech (čeština)', 'German (Deutsch)', 'Greek (Ελληνικά)','English',
                'Spanish (Español)','Persian (فارسی)','Finnish (suomi)','French (Français)',
                'Hebrew (עברית)','Croatian (hrvatski jezik)','Hungarian (magyar)',
                'Indonesian (Indonesian)','Italian (Italiano)','Japanese (日本語)','Korean ()',
                'Lithuanian (lietuvių kalba)','Latvian (latviešu valoda)','Dutch (Nederlands)',
                'Norwegian (Norsk)','Polish (język polski)','Portuguese (Português)',
                'Romanian (Română)', 'Russian (Русский)','Slovak (slovenčina)','Slovene (slovenski jezik)',
                'Serbian (српски језик)','Swedish (svenska)','Thai (ไทย)','Turkish (Türkçe)',
                'Ukrainian (Українська)','Chinese (中文)'
               ],
               flags: [ 'ZA', 'AE', 'AD', 'CZ', 'DE', 'GR', 'GB', 'ES', 'IR', 'FI', 'FR', 'IL',
                        'HR', 'HU', 'ID', 'IT', 'JP', 'KR', 'LT', 'LV', 'NL', 'NO', 'PL', 'PT',
                        'RO', 'RU', 'SK', 'SI', 'RS', 'SE', 'TH', 'TR', 'UA', 'CN'
               ],
	}
  }
}
</script>
