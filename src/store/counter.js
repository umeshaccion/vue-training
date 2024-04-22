import { defineStore } from "pinia";
import { ref, computed } from 'vue';
export const useCounterStore = defineStore('counter', () => {
    const counter = ref(0)
    const isOdd = computed(() => counter.value % 2 != 0)
    const increment = () => {
        // console.log(counter.value);
        counter.value++;
    }
    const decrement = () => counter.value--;
    return { counter, isOdd, increment, decrement }
})