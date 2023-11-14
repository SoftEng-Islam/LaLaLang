import { createPinia } from "pinia";
import { createApp } from "vue";


import App from "./App.vue";
import router from "./router/index";

import "./styles.css";
import 'animate.css';
import 'remixicon/fonts/remixicon.css';

// Minimalistic but perfect custom scrollbar plugin
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

// Tippy.js is the complete tooltip, popover, dropdown
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css'; // optional for styling


import { createI18n } from 'vue-i18n';
const i18n = createI18n({
	// something vue-i18n options here ...
 })


// mount App
createApp(App)
.use(createPinia())
.use(i18n)
.use(router)
.use(VueTippy,  {
	directive: 'tippy', // => v-tippy
	component: 'tippy', // => <tippy/>
	componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
	defaultProps: {
	  placement: 'auto-end',
	  allowHTML: true,
	}, // => Global default options * see all props
  }).use(PerfectScrollbar, {
	watchOptions: true,
	options: {
		swipeEasing: true,
	},
}).mount("#app");
