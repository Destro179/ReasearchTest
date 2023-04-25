import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faUserSecret,
    faPaperclip,
    faSearch,
    faPlus,
    faAngleDown,
    faUser,
    faList,
    faTimes,
    faCheck,
    faChevronRight,
    faChevronLeft,
    faFile,
    faBars,
} from '@fortawesome/free-solid-svg-icons'

import '@/scss/main.scss'

/* add icons to the library */
library.add(
    faUserSecret,
    faPaperclip,
    faSearch,
    faPlus,
    faAngleDown,
    faUser,
    faList,
    faTimes,
    faCheck,
    faChevronRight,
    faChevronLeft,
    faFile,
    faBars
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, { plugins: {} })
app.component('fa-icon', FontAwesomeIcon)

app.mount('#app')
