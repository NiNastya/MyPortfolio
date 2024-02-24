<script setup>
    import Logo from './Icons/Logo.vue'
</script>

<template>
    <header class="header">
        <div class="container">
            <router-link :to="{ name: 'Home' }" class="header-logo">
                <Logo />
                MyProtfolio
            </router-link>
            <nav>
                <!-- <router-link to="/">Главная</router-link>
                <router-link to="#about">Обо мне</router-link>
                <router-link to="#project">Мои работы</router-link>
                <router-link to="#contacts">Контакты</router-link> -->
                <a href="#">Главная</a>
                <a href="#about">Обо мне</a>
                <a href="#project">Мои работы</a>
                <!-- <a href="#contacts">Контакты</a> -->
            </nav>
        </div>
    </header>
</template>

