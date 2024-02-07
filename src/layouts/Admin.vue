<template>
  <v-app>
    <va-layout 
      v-if="authenticatedUser"
    >
      <template #appbar>
        <va-app-bar
          :key="getCurrentLocale"
          color="primary"
          density="compact"
          :header-menu="getHeaderMenu"
          :profile-menu="getProfileMenu"
          :sidebar-color="sidebarColor"
          @toggle="lgAndUp ? (mini = !mini) : (drawer = !drawer)"
        >
          <template v-slot:logo>
            <div class="mb-1" style="letter-spacing: 1px;">logo</div>
          </template>
        </va-app-bar>
      </template>

      <template #header>
        <va-breadcrumbs />
      </template>

      <template #aside>
        <va-aside />
      </template>

      <template #footer>
        <va-footer 
          :key="getCurrentLocale" 
          :menu="getFooterMenu"
        >
          <span style="font-size:13px">&copy; 2023</span>
        </va-footer>
      </template>
    </va-layout>
  </v-app>
</template>

<script>
import { useDisplay } from "vuetify";
import { mapActions } from "vuex";
import Trans from "@/i18n/translation";

export default {
  name: "App",
  inject: ["admin"],
  setup() {
    const { lgAndUp } = useDisplay();
    return { lgAndUp };
  },
  data() {
    return {
      drawer: null,
      headerMenu: null,
      footerMenu: null,
      profileMenu: null,
      sidebarColor: "white",
      authenticatedUser: null,
    };
  },
  async created() {
    /**
     * Set default locale
     */
    const lang = Trans.guessDefaultLocale();
    if (lang && Trans.supportedLocales.includes(lang)) { // assign browser language
      await Trans.switchLanguage(lang);
    }
    /**
     * Check user is authenticated
     */
    this.authenticatedUser = await this.checkAuth();
    if (! this.authenticatedUser) {
      this.$router.push({name: "login"});
    } else {
      // 
      // Please do not remove it, it periodically updates the session lifetime.
      // Thus, as long as the user's browser is open, the user logged in to the application,
      // otherwise the session will be closed when the ttl period expires.
      // 
      this.admin.http.post('/auth/session', { update: 1 }); 
    }
  },
  computed: {
    getCurrentLocale() {
      return this.$store.getters[`getLocale`];
    },
    getHeaderMenu() {
      return [];
    },
    getProfileMenu() {
      return [];
    },
    getFooterMenu() {
      return [
        {
          href: "https://oloma.dev/end-user-license-agreement",
          text: this.$t("menu.terms"),
        },
      ]
    }
  },
  methods: {
    ...mapActions({
      checkAuth: "auth/checkAuth",
    }),
  },
};
</script>
