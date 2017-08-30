import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import school from '@/views/school.vue'
import blast from '@/views/blast.vue'
import delivery from '@/views/delivery.vue'
import entertainment from '@/views/entertainment.vue'
import guardian from '@/views/guardian.vue'
import hotel from '@/views/hotel.vue'
import mentalpatient from '@/views/mentalpatient.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/school',
            name: 'school',
            component: school
        },
        {
            path: '/blast',
            name: 'blast',
            component: blast
        },
        {
            path: '/entertainment',
            name: 'entertainment',
            component: entertainment
        },
        {
            path: '/guardian',
            name: 'guardian',
            component: guardian
        },
        {
            path: '/hotel',
            name: 'hotel',
            component: hotel
        },
        {
            path: '/mentalpatient',
            name: 'mentalpatient',
            component: mentalpatient
        }
    ]
})