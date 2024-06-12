<script setup lang="ts">
const anio = new Date().getFullYear()
</script>
<template>
  <div class="container-fluid">
    <footer class="py-3 my-4">
      <p class="text-center text-body-secondary">© {{ anio }} Guillermo Enrique, Inc</p>
    </footer>
  </div>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>