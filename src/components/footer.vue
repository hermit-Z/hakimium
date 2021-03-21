<template>
  <v-footer>
   <v-container fluid>
    <v-layout row wrap>
      <v-flex md3 xs12>
      <v-form
        ref="form"
		v-model="valid"
        lazy-validation
      >
       <v-row class="pa-0 ma-0">
         <v-col cols="8" class="pa-0 ml-0" >
          <v-text-field v-model="email"  class="primary lighten-1 white--text text-center ml-0"
          :rules="loginEmailRules" label="Subscibe in newsletters" required></v-text-field>
         </v-col>
         <v-col cols="4" class="primary lighten-1 pl-0 ml-0">
          <v-btn
          tile
          color="success ml-0"
          >
          <v-icon left>
            mdi-email-newsletter
          </v-icon>
           Subscibe
          </v-btn>
         </v-col>
        </v-row>
       </v-form>
      </v-flex>
     <v-flex md6 xs12>
         <v-card
           tile
           class="primary lighten-1 white--text text-center "
         >
        
         <v-btn
             v-for="icon in iconssm"
             :key="icon.icon"
             :href="icon.href"
           class="mx-4 white--text"
           icon
           >
             <v-icon size="24px">{{icon.icon}}</v-icon>
         </v-btn>
         </v-card>

				<v-card  class="primary lighten-1 white--text text-center  pa-1 " >
                 <v-icon>mdi-copyright</v-icon> - <strong>copyright</strong> - {{ new Date().getFullYear() }}
                </v-card>
     </v-flex>
     <v-flex md3 class="pa-0 ma-0" >
      <v-card class="indigo lighten-1 white--text text-center  pa-1 "  >
       <v-card-title class="pa-0 ma-0">
         Public key fingerprint
       </v-card-title>
       <v-card-text class="pa-0 ma-0" >
        46021D27570E1FBFD66E
        4A9D7611200F003097FB
       </v-card-text>

      </v-card>
     </v-flex>
	</v-layout>
   </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'footerr',
  components: {
   },
  data: () => ({
		//Xteam:0,
      valid: true,
      email:"",
      iconssm: [
        { href: "https://github.com/hermit-Z", icon: "mdi-github" },
        {
          href: "https://stackexchange.com/users/20310513/hermit-z",
          icon: "mdi-stack-overflow"
        },
        { href: "https://twitter.com/EldinMatricar", icon: "mdi-twitter" },
        {
          href: "https://www.linkedin.com/in/hermit-Z",
          icon: "mdi-linkedin"
        },
        {
          href: "https://www.xing.com/profile/Phermit-Z",
          icon: "mdi-xing"
        },
        {
          href: "https://www.facebook.com/hermit-Z",
          icon: "mdi-facebook"
        },
        { href: "https://www.instagram.com/hermit-Z", icon: "mdi-instagram" }
      ],
       loginEmailRules: [
            v => !!v || "Required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        emailRules: [
            v => !!v || "Required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"],
  }),
}
</script>
