<template>
    <form @submit.prevent.stop="guardar">
        <div class="container">
            <h1>Formulario</h1>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" v-model="data.name">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" v-model="data.class">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <select class="form-control" v-model="data.gender">
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="number" class="form-control" v-model.number="data.age">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" v-model="data.constellation">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="alert alert-info">{{ data }}</div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <select class="form-control" v-model="data.rank">
                        <option value="bronce">Bronce</option>
                        <option value="plata">Plata</option>
                        <option value="oro">Oro</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" v-model="data.attack">
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>  
        </div>
    </form>

</template>


<script setup lang="ts">
import type { saintseiya } from '@/types/saintseiya';
import { ref, reactive } from 'vue';
const mensaje = ref('Hola mundo');

setTimeout(() => {
    mensaje.value = 'Hola mundo';
}, 2000)

const data = reactive<saintseiya>({
    id: 1,
    name: 'Seiya',
    age: 17,
    gender:'masculino',
    birth:'27/3/1969',
    nationality:'Chinese',
    training:'Jamir, Himalayas, China',
    height:'182cm',
    weight:'75kg',
    blood:'A',
    master:'Shion de Aries',
    apprentice:'kiki',
    attack: 'Athena Exclamation,Crystal Net,Crystal Wall,Stardust Revolution,Starlight Extinction',
})

const guardar = () => {
    console.log(data);
}

</script>