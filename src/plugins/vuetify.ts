import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

// Translation provided by Vuetify (typescript) exemple pl
//import pl from 'vuetify/src/locale/pl'
import af from 'vuetify/src/locale/af'
import ar from 'vuetify/src/locale/ar'
import az from 'vuetify/src/locale/az'
import bg from 'vuetify/src/locale/bg'
import ca from 'vuetify/src/locale/ca'
import cs from 'vuetify/src/locale/cs'
import de from 'vuetify/src/locale/de'
import el from 'vuetify/src/locale/el'
import en from 'vuetify/src/locale/en'
import es from 'vuetify/src/locale/es'
import et from 'vuetify/src/locale/et'
import fa from 'vuetify/src/locale/fa'
import fi from 'vuetify/src/locale/fi'
import fr from 'vuetify/src/locale/fr'
import he from 'vuetify/src/locale/he'
import hr from 'vuetify/src/locale/hr'
import hu from 'vuetify/src/locale/hu'
import id from 'vuetify/src/locale/id'
import it from 'vuetify/src/locale/it'
import ja from 'vuetify/src/locale/ja'
import ko from 'vuetify/src/locale/ko'
import lt from 'vuetify/src/locale/lt'
import lv from 'vuetify/src/locale/lv'
import nl from 'vuetify/src/locale/nl'
import no from 'vuetify/src/locale/no'
import pl from 'vuetify/src/locale/pl'
import pt from 'vuetify/src/locale/pt'
import ro from 'vuetify/src/locale/ro'
import ru from 'vuetify/src/locale/ru'
import sk from 'vuetify/src/locale/sk'
import sl from 'vuetify/src/locale/sl'
import sv from 'vuetify/src/locale/sv'
import th from 'vuetify/src/locale/th'
import tr from 'vuetify/src/locale/tr'
import uk from 'vuetify/src/locale/uk'
import ckb from 'vuetify/src/locale/ckb'
import srCyrl from 'vuetify/src/locale/sr-Cyrl'
import zhHans from 'vuetify/src/locale/zh-Hans'
import zhHant from 'vuetify/src/locale/zh-Hant'

export default new Vuetify({
		icons: {
        iconfont: 'fa',
		},
        theme: {
           themes:{
              light: {
                  primary: colors.purple.lighten3,
                  secondary: colors.grey.darken1,
                  accent: colors.shades.black,
                  error: colors.red.accent3,
                  info: "#2196F3",
                  success: "#76FF03",
                  warning: colors.amber.darken1,
                  background: colors.indigo.lighten4
						},
              dark: {

                  primary: colors.purple.darken3,
                  secondary: colors.grey.lighten1,
                  accent: colors.shades.white,
                  error: colors.red.darken3,
                  info: "#2196F3",
                  success: "#4CAF50",
                  warning:colors.orange.darken4,
                  background: colors.indigo.darken4

                        },
				
				},
		
		},
        lang: {

        locales: { af, ar, az, bg, ca, cs, de, el, en, es, et, fa, fi, fr,
                   he, hr, hu, id, it, ja, ko, lt, lv, nl, no, pl, pt, ro,
                   ru, sk, sl, sv, th, tr, uk, ckb, srCyrl, zhHans, zhHant },

        current: 'ja',
        },

});
