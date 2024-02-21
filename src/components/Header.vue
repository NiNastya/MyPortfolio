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
                <router-link to="/">Главная</router-link>
                <router-link to="#about">Обо мне</router-link>
                <router-link to="#project">Мои работы</router-link>
                <router-link to="#contacts">Контакты</router-link>
            </nav>
        </div>
    </header>
</template>

