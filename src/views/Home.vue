<script setup>
import { skills } from '../store'
import Card from '../components/ProjectCard.vue'
import Modal from '../components/ProjectModal.vue'

</script>

<template>
    <div class="home">
        <section class="home-banner">
            <div class="container">
                <div class="home-banner__info">
                    <span>Hello</span>
                    <h1>I’m Gleb Kostrubov</h1>
                    <p>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
                    <button>Contact me</button>
                </div>
                <div class="home-banner__img">
                    <img src="/banner.png" alt="">
                </div>
            </div>
        </section>
        <section class="home-skils">
            <div class="container">
                <div class="title">Мой стек технологий</div>
                <div class="home-skils__items">
                    <div class="home-skils__item" v-for="(item, i) in skills" :key="i">
                        <img :src="item.image" alt="">
                        <p>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="home-works">
            <div class="container">
                <div class="title">Мои работы</div>
                <div class="home-works__filter">

                </div>
                <div class="home-works__grid">
                    <Card  v-for="(item, i) in 10" :key="i"/>
                </div>
            </div>
        </section>
    </div>
    <Modal />
</template>

