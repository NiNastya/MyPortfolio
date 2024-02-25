import{r as g,o,c as n,a as t,t as c,F as d,b as p,u as e,d as k,e as _,w as u,f as h,g as y,h as v}from"./index-rGIKFZyU.js";const j="/banner.png",s=g({skills:[{image:"/i1.png",text:"Vue.js"},{image:"/i2.png",text:"Nuxt.js"},{image:"/i3.png",text:"Ubuntu"},{image:"/i4.png",text:"Git"},{image:"/i5.svg",text:"Node.js (Strapi)"},{image:"/i6.svg",text:"Figma"},{image:"/i7.png",text:"Laravel (Blade)"},{image:"/i8.png",text:"WordPress"}],projects:[{image:"/project/my.png",title:"MyProtfolio",link:"/",stack:["Vue"],mystack:["FrontEnd"],git:"https://github.com/NiNastya/MyPortfolio",descript:"Сайт моего портфоли, прилогаю ссылку на GitHab"},{image:"/project/mg.png",title:"Magnum",link:"https://magnum.kz/",stack:["Nuxt","Node","Strapi"],mystack:["FrontEnd","BackEnd"],git:"",descript:"Моя часть заключалась в дороботке BackEnd части, а так же внесение правок во FrontEnd часть сайта"},{image:"/project/p.png",title:"Шаблоный интернет магазин (В разработке)",link:"https://ainurita.kz/",stack:["Nuxt","Python","FastApi"],mystack:["FrontEnd"],git:"",descript:"Разработка шаблонного интренет магазина на SSR Nuxt3, Моя часть разработки это полностью FrontEnd данного продукта начиная с верстки"},{image:"/project/ik.png",title:"Ikeruen",link:"https://ikeruen.kz/",stack:["Vue","Nuxt","Python","DRA"],mystack:["FrontEnd"],git:"",descript:"Аналог сервиса Везет Всем. Своего рода фриланс биржа для перевозки чего либо. Большой проект работал с командой"},{image:"/project/prod.png",title:"ProdMarket",link:"https://play.google.com/store/apps/details?id=com.prodmarket.kz",stack:["Vue","WebView","WordPres","DRA"],mystack:["FrontEnd"],git:"",descript:"Реализацая мобильного приложения по технологии WebView через Flutter, бекенд был взять из готового интернет магазина на WordPres WooCommerce Api"},{image:"/project/cbm.png",title:"CBM (В рзработке)",link:"http://86.107.45.124:3001/",stack:["Vue","Nuxt","Python","DRA"],mystack:["FrontEnd"],git:"",descript:"Разработка полностью FrontEnd на SSR"},{image:"/project/kom.png",title:"KomatsuCentralAsia ",link:"https://www.komatsu-central-asia.com/",stack:["Vue","Nuxt","Python","DRA"],mystack:["FrontEnd"],git:"",descript:"Полная разработка FrontEnd на SSR + сложная работка с картами дистрибьюторав"},{image:"/project/fw.png",title:"FightWear",link:"https://fightwear.kz/",stack:["Vue","Nuxt","Python","DRA"],mystack:["FrontEnd"],git:"",descript:"Fron интернет магазина сделаный за неделю"},{image:"/project/es.png",title:"Esentai Mall",link:"https://esentai.com/",stack:["Vue","Nuxt","Laravel"],mystack:["FrontEnd"],git:"",descript:"Доработка сайта до рабочей версии"},{image:"/project/tahit.png",title:"Tahit",link:"https://tahit.kz/",stack:["Vue","Python","DRA"],mystack:["FrontEnd"],git:"",descript:"Интернет магазин с резиновой версткой на rem функции"},{image:"/project/tez.png",title:"TezZhet ",link:"https://play.google.com/store/apps/details?id=com.ZOOMAPPS.tezzhet&hl=ru&gl=US",stack:["Vue","Python","DRA"],mystack:["FrontEnd"],git:"",descript:"Доработка приложения до рабочей версии, работа в WebSocket + курерское приложения"},{image:"/project/bah.png",title:"Доработка Интернет магазина",link:"https://bahcha.kz/",stack:["Vue","Python","DRA"],mystack:["FrontEnd"],git:"",descript:"Дороботка FrontEnd части: корзина, бонусная система, добавления адресов в личный кабинет, оформление заказа, реализация карты магазинов. Так же дороботка админ панели под заказы и бонусную систему"},{image:"/project/mg.png",title:"Stroy Energo",link:"https://stroy-energo.kz/",stack:["React","Next","Python","DRA"],mystack:["FrontEnd"],git:"",descript:"Внесение правко, испралвние ошибок "},{image:"/project/lux.png",title:"Lux Personnel",link:"https://lux-personnel.kz/",stack:["Laravel","Blade"],mystack:["FrontEnd","BackEnd"],git:"",descript:"Сайт по подбору персонала. Написание JS скриптов, внесениея изменения в BackEnd часть"},{image:"/project/cant.png",title:"Cantra",link:"https://cantra.ru/",stack:["Vue","Nuxt","Laravel"],mystack:["FrontEnd"],git:"",descript:"Доделывал сайт до рабочего состояния, "},{image:"/project/obag.png",title:"Obag",link:"https://obagofficial.kz/",stack:["Vue","Nuxt","Laravel"],mystack:["FrontEnd"],git:"",descript:"Добработка корзины + переделывания конструктора суммок "}],modal:""}),x={class:"card-project"},E=["src"],F={class:"card-project__hover"},b={__name:"ProjectCard",props:{work:{}},setup(m){const l=m;return(a,i)=>(o(),n("div",x,[t("img",{src:l.work.image,alt:""},null,8,E),t("div",F,[t("p",null,c(l.work.title),1),t("span",null,[(o(!0),n(d,null,p(l.work.mystack,r=>(o(),n("span",{key:r},c(r+" "),1))),128))])])]))}},f={class:"modal-project"},N={class:"modal-project__img"},P=["src"],S={class:"modal-project__info"},V=t("span",null,"Ссылка: ",-1),$=["href"],w={key:0},A=t("span",null,"Git: ",-1),R=["href"],z=t("span",null,"Стек: ",-1),M={class:"dicription"},B=["innerHTML"],C={__name:"ProjectModal",setup(m){return(l,a)=>e(s).modal?(o(),n("div",{key:0,class:"modal",onClick:a[1]||(a[1]=i=>e(s).modal="")},[t("div",{class:"modal-block",onClick:a[0]||(a[0]=u(()=>{},["stop"]))},[t("div",f,[t("div",N,[t("img",{src:e(s).modal.image,alt:""},null,8,P)]),t("div",S,[t("h2",null,c(e(s).modal.title),1),t("p",null,[V,t("a",{href:e(s).modal.link,target:"_blank",rel:"noopener noreferrer"},c(e(s).modal.link),9,$)]),e(s).modal?(o(),n("p",w,[A,t("a",{href:e(s).modal.git,target:"_blank",rel:"noopener noreferrer"},"перейти в git репозиторий проекта",8,R)])):k("",!0),t("p",null,[z,_(),(o(!0),n(d,null,p(e(s).modal.stack,i=>(o(),n("span",{class:"stack",key:i},c(i)+", ",1))),128))]),t("div",M,[t("p",{innerHTML:e(s).modal.descript},null,8,B)])])])])])):k("",!0)}},D={class:"home"},L=y('<section class="home-banner"><div class="container"><div class="home-banner__info"><span>Привет</span><h1>Я Илья </h1><p>Я FronEnd разработчик, занимаюсь этим уже более 5 лет, первые 3 года я работал на фрилансе с cms WordPress, последнии 2 года я пишу на Vue.js и Nuxt.js. Так же есть навыки с BackEnd разработкой на Node (Strapi), PHP Laravel</p><p>Работаю с локализацие I18n, SSR, Scss, Бэм, Mixin, YandexMap, AOS, Анимации, FullRestApi, настройка сервера через SSH, деплой проектов на сервер, уменее читать чужой код,</p><a href="#project"><button>Мои работы</button></a></div><div class="home-banner__img"><img src="'+j+'" alt=""></div></div></section>',1),W={class:"home-skils",id:"about"},H={class:"container"},T=t("div",{class:"title"},"Мой стек технологий",-1),O={class:"home-skils__items"},G={class:"home-skils__item-img"},I=["src"],U={class:"home-works",id:"project"},Z={class:"container"},J=t("div",{class:"title"},"Мои работы",-1),K=t("div",{class:"subtitle"},"В гите у меня около 100 проектов, все здесь не отображены",-1),Y=t("div",{class:"home-works__filter"},null,-1),q={class:"home-works__grid"},tt={__name:"Home",setup(m){return(l,a)=>(o(),n(d,null,[t("div",D,[L,t("section",W,[t("div",H,[T,t("div",O,[(o(!0),n(d,null,p(e(s).skills,(i,r)=>(o(),n("div",{class:"home-skils__item",key:r},[t("div",G,[t("img",{src:i.image,alt:""},null,8,I)]),t("p",null,c(i.text),1)]))),128))])])]),t("section",U,[t("div",Z,[J,K,Y,t("div",q,[(o(!0),n(d,null,p(e(s).projects,(i,r)=>(o(),v(b,{key:r,work:i,onClick:Q=>e(s).modal=i},null,8,["work","onClick"]))),128))])])])]),h(C)],64))}};export{tt as default};
