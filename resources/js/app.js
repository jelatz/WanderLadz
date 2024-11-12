import './bootstrap';


import { createApp, h } from 'vue'
import { createInertiaApp,Link, Head } from '@inertiajs/vue3'
import AppLayout from '@/js/Layouts/AppLayout.vue'

createInertiaApp({
    title: (title) => `TrippyLatz ${title}`,
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    page.default.layout = page.default.layout || AppLayout
    return page
},
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Link", Link)
      .component("Head", Head)
      .mount(el)
  },
})