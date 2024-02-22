<script setup>

import { store } from '../store'
</script>

<template>
    <div class="modal" v-if="store.modal" @click="store.modal = ''">
        <div class="modal-block" @click.stop="">
            <div class="modal-project">
                <div class="modal-project__img">
                    <img :src="store.modal.image" alt="">
                </div>
                <div class="modal-project__info">
                    <h2>{{ store.modal.title }}</h2>
                    <p><span>Ссылка: </span><a :href="store.modal.link" target="_blank" rel="noopener noreferrer">{{ store.modal.link }}</a></p>
                    <p v-if="store.modal"><span>Git: </span><a :href="store.modal.git" target="_blank" rel="noopener noreferrer">перейти в git репозиторий проекта</a></p>
                    <p><span>Стек: </span> <span class="stack" v-for="item in store.modal.stack" :key="item">{{ item }}, </span></p>
                    <div class="dicription">
                        <p v-html="store.modal.descript"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

