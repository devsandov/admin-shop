<template>
  <top-menu></top-menu>
  <router-view></router-view>
  <custom-footer></custom-footer>
</template>

<script lang="ts" setup>
import TopMenu from '../components/TopMenu.vue';
import CustomFooter from '../components/CustomFooter.vue';
</script>
