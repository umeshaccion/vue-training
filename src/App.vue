<template>

  <div style="height: 50px;">
    This is root page {{ fromChildText }}
  </div>
  <!-- <CounterDisplay /> -->
  <SecondDay :peopleProps="people" :isActive="isActive" @childToParent="displayNumber($event)" />
</template>

<script setup>

import SecondDay from './components/SecondDay.vue';

import { ref } from 'vue';

const people = ref([
  { name: 'John Doe', age: 30, email: 'john@example.com' },
  { name: 'Jane Doe', age: 25, email: 'jane@example.com' },
  { name: 'Bob Smith', age: 40, email: 'bob@example.com' }
]);

let isActive = ref(true);
let fromChildText = ref('')

const displayNumber = (event) => {
  console.log(event);
  fromChildText.value = event;
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
