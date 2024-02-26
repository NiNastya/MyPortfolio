<script setup>
import { ref } from 'vue'
import Logo from './Icons/Logo.vue'
const burger = ref(false)    
</script>

<template>
    <header class="header">
        <div class="container">
            <router-link :to="{ name: 'Home' }" class="header-logo">
                <Logo />
                MyProtfolio
            </router-link>
            <nav :class="{active: burger}" @click="burger = !burger">
                <a href="#">Главная</a>
                <a href="#about">Обо мне</a>
                <a href="#project">Мои работы</a>
            </nav>
            <div class="header-burger" @click="burger = !burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
</template>

