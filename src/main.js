import { createApp } from "vue"; /** alles wt je ndg hebt van packages importeren uit node modules **/
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap"; /** het is geen alias zoals de bovenstaande**/
import "bootstrap/dist/css/bootstrap.min.css"

createApp(App).use(store).use(router).mount("#app");
