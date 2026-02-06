import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index";
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App);

app.use(router);

router.afterEach((to) => {
  document.title = to.meta.title || "Vite App";
});

app.mount("#app");
