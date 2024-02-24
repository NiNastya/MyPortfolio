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
            stack: ['Nuxt', 'Node', 'Strapi'],
            mystack: ['FrontEnd', 'BackEnd'],
            git: '',
            descript: 'Моя часть заключалась в дороботке BackEnd части, а так же внесение правок во FrontEnd часть сайта'
        },
        {
            image: '/project/p.png',
            title: 'Шаблоный интернет магазин (В разработке)',
            link: 'https://ainurita.kz/',
            stack: ['Nuxt', 'Python', 'FastApi'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Разработка шаблонного интренет магазина на SSR Nuxt3, Моя часть разработки это полностью FrontEnd данного продукта начиная с верстки'
        },
        {
            image: '/project/ik.png',
            title: 'Ikeruen',
            link: 'https://ikeruen.kz/',
            stack: ['Vue', 'Nuxt', 'Python', 'DRA'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Аналог сервиса Везет Всем. Своего рода фриланс биржа для перевозки чего либо. Большой проект работал с командой'
        },
        {
            image: '/project/prod.png',
            title: 'ProdMarket',
            link: 'https://play.google.com/store/apps/details?id=com.prodmarket.kz',
            stack: ['Vue', 'WebView', 'WordPres', 'DRA'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Реализацая мобильного приложения по технологии WebView через Flutter, бекенд был взять из готового интернет магазина на WordPres WooCommerce Api'
        },
        {
            image: '/project/cbm.png',
            title: 'CBM (В рзработке)',
            link: 'http://86.107.45.124:3001/',
            stack: ['Vue', 'Nuxt', 'Python', 'DRA'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Разработка полностью FrontEnd на SSR'
        },
        {
            image: '/project/kom.png',
            title: 'KomatsuCentralAsia ',
            link: 'https://www.komatsu-central-asia.com/',
            stack: ['Vue', 'Nuxt', 'Python', 'DRA'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Полная разработка FrontEnd на SSR + сложная работка с картами дистрибьюторав'
        },
        {
            image: '/project/fw.png',
            title: 'FightWear',
            link: 'https://fightwear.kz/',
            stack: ['Vue', 'Nuxt', 'Python', 'DRA'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Fron интернет магазина сделаный за неделю'
        },
        {
            image: '/project/es.png',
            title: 'Esentai Mall',
            link: 'https://esentai.com/',
            stack: ['Vue', 'Nuxt', 'Laravel'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Доработка сайта до рабочей версии'
        },
        {
            image: '/project/tahit.png',
            title: 'Tahit',
            link: 'https://tahit.kz/',
            stack: ['Vue', 'Python', 'DRA'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Интернет магазин с резиновой версткой на rem функции'
        },
        {
            image: '/project/tez.png',
            title: 'TezZhet ',
            link: 'https://play.google.com/store/apps/details?id=com.ZOOMAPPS.tezzhet&hl=ru&gl=US',
            stack: ['Vue', 'Python', 'DRA'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Доработка приложения до рабочей версии, работа в WebSocket + курерское приложения'
        },
        {
            image: '/project/bah.png',
            title: 'Доработка Интернет магазина',
            link: 'https://bahcha.kz/',
            stack: ['Vue', 'Python', 'DRA'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Дороботка FrontEnd части: корзина, бонусная система, добавления адресов в личный кабинет, оформление заказа, реализация карты магазинов. Так же дороботка админ панели под заказы и бонусную систему'
        },
        {
            image: '/project/mg.png',
            title: 'Stroy Energo',
            link: 'https://stroy-energo.kz/',
            stack: ['React', 'Next', 'Python', 'DRA'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Внесение правко, испралвние ошибок '
        },
        {
            image: '/project/lux.png',
            title: 'Lux Personnel',
            link: 'https://lux-personnel.kz/',
            stack: ['Laravel', 'Blade'],
            mystack: ['FrontEnd', 'BackEnd'],
            git: '',
            descript: 'Сайт по подбору персонала. Написание JS скриптов, внесениея изменения в BackEnd часть'
        },
        {
            image: '/project/cant.png',
            title: 'Cantra',
            link: 'https://cantra.ru/',
            stack: ['Vue', 'Nuxt', 'Laravel'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Доделывал сайт до рабочего состояния, '
        },
        {
            image: '/project/obag.png',
            title: 'Obag',
            link: 'https://obagofficial.kz/',
            stack: ['Vue', 'Nuxt', 'Laravel'],
            mystack: ['FrontEnd'],
            git: '',
            descript: 'Добработка корзины + переделывания конструктора суммок '
        },
    ],
    modal: ''
})
