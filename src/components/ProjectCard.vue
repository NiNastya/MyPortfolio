<script setup>
const props = defineProps({
    work: {}
})
</script>

<template>
    <div class="card-project">
        <img :src=" props.work.image" alt="">
        <div class="card-project__hover">
            
            <p>{{ props.work.title }}</p>
            <span><span v-for="item in props.work.mystack" :key="item">{{ item + ' ' }} </span></span>
        </div>
    </div>
</template>

