<template>
    {{ props.isActive ? "Data shared" : " NOt shared" }}
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['isActive'])
</script>