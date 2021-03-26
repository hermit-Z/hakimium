import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

// Translation provided by Vuetify (typescript) exemple pl
import af from './locale/af'
import ar from './locale/ar'
import az from './locale/az'
import bg from './locale/bg'
import ca from './locale/ca'
import cs from './locale/cs'
import de from './locale/de'
import el from './locale/el'
import en from './locale/en'
import es from './locale/es'
import et from './locale/et'
import fa from './locale/fa'
import fi from './locale/fi'
import fr from './locale/fr'
import he from './locale/he'
import hr from './locale/hr'
import hu from './locale/hu'
import id from './locale/id'
import it from './locale/it'
import ja from './locale/ja'
import ko from './locale/ko'
import lt from './locale/lt'
import lv from './locale/lv'
import nl from './locale/nl'
import no from './locale/no'
import pl from './locale/pl'
import pt from './locale/pt'
import ro from './locale/ro'
import ru from './locale/ru'
import sk from './locale/sk'
import sl from './locale/sl'
import sv from './locale/sv'
import th from './locale/th'
import tr from './locale/tr'
import uk from './locale/uk'
import ckb from './locale/ckb'
import srCyrl from './locale/sr-Cyrl'
import zhHans from './locale/zh-Hans'
import zhHant from './locale/zh-Hant'

export default new Vuetify({
		icons: {
        iconfont: 'fa',
		},
        theme: {
           themes:{
              light: {
                  primary: colors.purple.lighten1,
                  secondary: colors.grey.darken4,
                  accent: colors.shades.black,
                  error: colors.red.lighten4,
                  info: "#2196F3",
                  success: "#76FF03",
                  warning: colors.amber.darken1,
                  therty:colors.indigo,
                  background: colors.indigo.lighten4
						},
              dark: {

                  primary: colors.purple.darken3,
                  secondary: colors.grey.lighten4,
                  accent: colors.shades.white,
                  error: colors.red.lighten4,
                  info: "#2196F3",
                  success: "#4CAF50",
                  warning:colors.orange.darken4,
                  therty: colors.indigo.darken4,
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
