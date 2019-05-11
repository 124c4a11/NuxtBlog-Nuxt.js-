import Vue from 'vue'
import Element from 'element-ui'
import VueMarkdown from 'vue-markdown'
import locale from 'element-ui/lib/locale/lang/en'

import DateFilter from '@/common/date.filter'


export default () => {
  Vue.use(Element, { locale })
}


Vue.component('vue-markdown', VueMarkdown)


Vue.filter('date', DateFilter)
