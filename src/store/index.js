import { reactive } from 'vue'
export const store = reactive({
    skills: [
        {
            image: '/i1.png',
            text: 'Vue.js'
        },
        {
            image: '/i2.png',
            text: 'Nuxt.js'
        },
        {
            image: '/i3.png',
            text: 'Ubuntu'
        },
        {
            image: '/i4.png',
            text: 'Git'
        },
        {
            image: '/i5.svg',
            text: 'Node.js (Strapi)'
        },
        {
            image: '/i6.svg',
            text: 'Figma'
        },
        {
            image: '/i7.png',
            text: 'Laravel (Blade)'
        },
        {
            image: '/i8.png',
            text: 'WordPress'
        },
    ],
    projects: [
        {
            image: '/project/mg.png',
            title: 'Magnum',
            link: 'https://magnum.kz/',
            stack: ['Nuxt2', 'Node (strapi)'],
            git: '',
            descript: 'Моя часть заключалась в дороботке backend части, а так же в создании новых страници и лендингов для данного сайта.'
        },
    ],
    modal: ''
})
