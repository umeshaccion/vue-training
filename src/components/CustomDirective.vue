<template>
    <div v-highlight="highlightColor">
        This text will be highlighted
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const highlightColor = ref('yellow');

// const highlightDirective = (el, binding) => {
//     el.style.backgroundColor = binding.value;
// };

// onMounted(() => {
//     highlightColor.value = 'yellow';
// });

const vHighlight = {
    mounted(el, binding) {
        el.style.backgroundColor = binding.value;
    }

};
</script>

<style scoped>
/* Styles can be added here if needed */
</style>