<template>
    <div class="row">
        <div v-for="data in saintseiya" :key="data.id" class="col-md-3">
            <div class="card">
                <img :src="data.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ data.name }}  <router-link class="text-end" :to="{name:'saintseiya-view', params:{id:data.id}}" ><i class="bi bi-person-vcard-fill"></i></router-link></h5>
                    <p class="card-text">{{ data.lema }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Saintseiya } from '@/types/seintseiya-type';
import SaintseiyaService from '@/services/service-saintseiya';

const saintseiya = ref<Saintseiya[]>([]);


onMounted( async () => {
    try {
        const response = await SaintseiyaService.getAll();
        saintseiya.value = response.data;
    } catch (error) {
        console.log(error);
    }
});
</script>

<style scoped>
.card{
    background-color: #2d3436 !important;
    color: #FFF !important;
    margin-bottom: 20px;
}

.title{
    font-weight: bold;
    font-size: 1rem;
    color: #f39c12;
}
.card-title{
    color: #f39c12;
    font-weight: bold;
}
.text-end{
    float: right;
}

.card-body{
    height: 8rem;
    background-color: #1e272e;
}
.bi{
    color: #f39c12;
}
</style>