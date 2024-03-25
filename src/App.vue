<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from './components/general/HeaderView.vue';
</script>

<template>
  <HeaderView />
  <main>
    <div>
      <RouterView />
    </div>

  </main>

</template>

<style scoped lang="scss"></style>
