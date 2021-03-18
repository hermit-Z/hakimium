import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
		icons: {
        iconfont: 'fa',
		},
        theme: {
           themes:{
              light: {
                  primary: colors.purple,
                  secondary: colors.grey.darken1,
                  accent: colors.shades.black,
                  error: colors.red.accent3,
                  background: colors.indigo.lighten5
						},
              dark: {
                primary: colors.blue.lighten3,
                background: colors.indigo.base
              },
				
				},
		
		},
});
