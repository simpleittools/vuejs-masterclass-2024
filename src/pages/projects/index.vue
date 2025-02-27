<script setup lang="ts"></script>

<template>
  <div>
    <h1>Projects Page</h1>
    <router-link :to="{ name: '/' }">home</router-link> |
    <router-link :to="{ name: '/projects/[id]', params: { id: 1 } }">Project 1</router-link>
  </div>
</template>
