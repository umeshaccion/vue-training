<template>
  <div>

    <!-- // counter app  -->
    <button @click="increment"
      style="width: 40px;background-color: green;border-radius: 5%;margin-right:10px;">+</button>
    <span>{{ counter }} </span>
    <button @click="decrement" style="width: 40px;background-color: red;border-radius: 5%;margin-left:10px">-</button>

    <hr />
    <div v-if="isOdd">This number is odd {{ counter }}</div>

  </div>
</template>

<script setup>
// import { computed, ref } from 'vue';
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";
const { counter, isOdd } = storeToRefs(useCounterStore()); //destructuring reactive items from the store
const { increment, decrement } = useCounterStore(); //destructuring unreactive item from the store
// const msg = "This is training, please concentrate.";
// const msgHTML = "<code>This is training..</code>"
// const id = 'unqiueID';
// const counter = ref(0);
// // const CounterReactive = reactive({ counter: 0 });

// const increment = () => {
//   console.log(counter.value);
//   counter.value++;
// }
// const decrement = () => counter.value--;

// const isOdd = computed(displayOddnumber);

// const changeValue = () => console.log(counter.value);

// // const isOdd = displayOddnumber();
// function displayOddnumber() {
//   return counter.value % 2 != 0
// }

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
