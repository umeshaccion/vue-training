<template>

  <div style="height: 50px;" v-highlight="highlightColor">
    This is root page {{ fromChildText }}
  </div>
  <CounterDisplay />
  <!-- <SecondDay :peopleProps="people" @childToParent="displayNumber($event)" /> -->
  <!-- <VuetifyDatatable /> -->
  <!-- <CustomDirective /> -->

</template>

<script setup>
import CounterDisplay from './components/CounterDisplay.vue';
//import SecondDay from './components/SecondDay.vue';
import VuetifyDatatable from './components/VuetifyDatatable.vue';
import CustomDirective from './components/CustomDirective.vue';
import { vHighlight } from './directives/highlightDirective.js';
import { ref, provide } from 'vue';

const people = ref([
  { name: 'John Doe', age: 30, email: 'john@example.com' },
  { name: 'Jane Doe', age: 25, email: 'jane@example.com' },
  { name: 'Bob Smith', age: 40, email: 'bob@example.com' }
]);

const name = "Umesh";
const highlightColor = ref('Red');

// const ProvideData = {
//   people: people,
//   name: name,
//   isActive: isActive
// }

// provide('provideData', ProvideData);
// provide('name', true);
// provide('isActive', true);

// let fromChildText = ref('')

// const displayNumber = (event) => {
//   console.log(event);
//   fromChildText.value = event;
// }

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
