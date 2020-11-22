import Vue from 'vue'
import helper from '@/plugins/helper'
import App from '@/App.vue'
import '@/plugins/vuetify'
import '@/components'
import wb from './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(helper)

Vue.prototype.$workbox = wb
new Vue({ render: (h) => h(App) }).$mount('#app')
