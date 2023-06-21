import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from "vue-i18n";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

// import translations
import pl from "./locales/pl.json";
import en from "./locales/en.json";

const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: "pl",
    messages: { pl, en },
});

createApp(App).use(i18n).use(router).use(autoAnimatePlugin).mount('#app');
