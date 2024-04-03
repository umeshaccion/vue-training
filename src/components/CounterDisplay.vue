<template>
  <div>

    <!-- // counter app  -->
    <button @click="increment()"
      style="width: 40px;background-color: green;border-radius: 5%;margin-right:10px;">+</button>
    <input :value="counter" type="text" @change="changeValue()" />
    <button @click="decrement()" style="width: 40px;background-color: red;border-radius: 5%;margin-left:10px">-</button>

    <hr />
    <div v-if="isOdd">This number is odd {{ counter }}</div>
    <div v-else-if="!isOdd && counter != 0">This number is even {{ counter }}</div>
    <div v-show="isOdd"> v show This number is idd {{ counter }}</div>
    <hr />
    <div v-if="isOdd">This number is idd {{ counter }}</div>
    <hr />
    <!-- Javascript Expressions -->
    <div> {{ counter + 1 }} </div>
    <hr />
    <div>{{ counter > 1 ? 'YES' : 'NO' }}</div>
    <hr />
    <div>{{ msg.split('').reverse().join('') }}</div>
    <hr />
    <div :id="`list-${id}`"></div>
    <hr />
    <!-- directives -->
    <div v-text="msg"></div>
    <!-- same as -->
    <div>{{ msg }}</div>
    <hr />
    <div v-html="msgHTML"></div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
const msg = "This is training, please concentrate.";
const msgHTML = "<code>This is training..</code>"
const id = 'unqiueID';
const counter = ref(0);
// const CounterReactive = reactive({ counter: 0 });

const increment = () => {
  console.log(counter.value);
  counter.value++;
}
const decrement = () => counter.value--;

const isOdd = computed(displayOddnumber);

const changeValue = () => console.log(counter.value);

// const isOdd = displayOddnumber();
function displayOddnumber() {
  return counter.value % 2 != 0
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
