<script setup lang="ts">
import Header from "./components/layout/Header.vue";
import Notes from "./components/layout/Notes.vue";
import Pages from "./components/layout/Pages.vue";
import OpendPage from "./components/layout/OpendPage.vue";
console.log(
  "[App.vue]",
  `Hello world from Electron ${process.versions.electron}!`
);
</script>

<template lang="pug">
Header
div(class="w-full h-full flex items-center overflow-hidden bg-[var(--dark400)]")
  Notes
  Pages
  OpendPage
</template>

<style></style>
