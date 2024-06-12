<template>
  <Encabezado />
  <StarField />
  <div class="container">
      <RouterView />
  </div>
  <StarField />
</template>


<script setup lang="ts">
import Encabezado from './components/saintseiya/encabezado.vue';
import  StarField from '@/plugins/StarField.vue';
</script>

<style scoped>

body{
    background-color: #000;
}

</style>