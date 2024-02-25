<script setup>
import { store } from '../store'
import Card from '../components/ProjectCard.vue'
import Modal from '../components/ProjectModal.vue'

function SetModal(item) {
    console.log(modal)
    console.log(item)
    modal = item
}
</script>

<template>
    <div class="home">
        <section class="home-banner">
            <div class="container">
                <div class="home-banner__info">
                    <span>Привет</span>
                    <h1>Я Илья </h1>
                    <p>Я FronEnd разработчик, занимаюсь этим уже более 5 лет, первые 3 года я работал на фрилансе с cms WordPress, последнии 2 года я пишу на Vue.js и Nuxt.js. Так же есть навыки с BackEnd разработкой на Node (Strapi), PHP Laravel</p>
                    <p>Работаю с локализацие I18n, SSR, Scss, Бэм, Mixin, YandexMap, AOS, Анимации, FullRestApi, настройка сервера через SSH, деплой проектов на сервер, уменее читать чужой код,</p>
                    <!-- <router-link to="#project">
                        <button>Мои работы</button>
                    </router-link> -->
                    <a href="#project">
                        <button>Мои работы</button>
                    </a>
                    
                </div>
                <div class="home-banner__img">
                    <img src="/banner.png" alt="">
                </div>
            </div>
        </section>
        <section class="home-skils" id="about">
            <div class="container">
                <div class="title">Мой стек технологий</div>
                <div class="home-skils__items">
                    <div class="home-skils__item" v-for="(item, i) in store.skills" :key="i">
                        <div class="home-skils__item-img">
                            <img :src="item.image" alt="">
                        </div>
                        <p>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="home-works" id="project">
            <div class="container">
                <div class="title">Мои работы</div>
                <div class="subtitle">В гите у меня около 100 проектов, все здесь не отображены</div>
                <div class="home-works__filter">

                </div>
                <div class="home-works__grid">
                    <Card  v-for="(item, i) in store.projects" :key="i" :work="item" @click="store.modal = item" />
                </div>
            </div>
        </section>
    </div>
    <Modal />
</template>

