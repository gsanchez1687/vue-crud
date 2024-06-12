<template>
    <div class="row">
        <div v-for="data in saintseiya" :key="data.id" class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img :src="data.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ data.name }}</h5>
                    <p class="card-text">{{ data.lema }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><span class="text-start">Rango</span> <span class="text-end">{{ data.category_id }}</span></li>
                    <li class="list-group-item"><span class="text=start">Constelación</span> <span class="text-end">{{ data.constellation_id }}</span></li>
                    <li class="list-group-item"><span class="text-start">Edad</span> <span class="text-end">{{ data.age }}</span></li>
                    <li class="list-group-item"><span class="text-start">Genero</span> <span class="text-end">{{ data.gender }}</span></li>
                    <li class="list-group-item"><span class="text-start">Fecha de nacimiento</span> <span class="text-end">{{ data.birth }}</span></li>
                    <li class="list-group-item"><span class="text-start">Nacionalidad</span> <span class="text-end">{{ data.nationality_id }}</span></li>
                    <li class="list-group-item"><span class="text-start">Entrenamiento</span> <span class="text-end">{{ data.training }}</span></li>
                    <li class="list-group-item"><span class="text-start">Altura</span> <span class="text-end">{{ data.height }} CM</span></li>
                    <li class="list-group-item"><span class="text-start">Peso</span> <span class="text-end">{{ data.weight }} KG</span></li>
                    <li class="list-group-item"><span class="text-start">Tipo de sangre</span> <span class="text-end">{{ data.blood }}</span></li>
                    <li class="list-group-item"><span class="text-start">Maestro</span> <span class="text-end">{{ data.master }}</span></li> <li class="list-group-item"><span class="text-start">Tipo de sangre</span> <span class="text-end">{{ data.blood }}</span></li>
                    <li class="list-group-item"><span class="text-start">Aprendis</span> <span class="text-end">{{ data.apprentice }}</span></li>
                    <li class="list-group-item"><span class="text-start">Ataques</span> <span class="text-end">{{ data.attacks }}</span></li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
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
.card, .list-group{
    background-color: #2d3436 !important;
    color: #FFF !important;
}
.list-group-item{
    background-color: #2d3436 !important;
    color: #FFF !important;
    border-color: #636e72 !important;
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
</style>