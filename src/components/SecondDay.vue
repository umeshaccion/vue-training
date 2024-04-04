<template>
    <!-- Two way data binding -->
    <input v-model="name">
    <div>{{ name }}</div>
    <hr>
    <!-- Event Handling -->
    <input :value="name" @keyup="doSomething('This Is New input', $event)">

    <hr>
    <div :style="{ 'font-size': fontSize + 'px' }"></div>
    <div :class="{ 'addBackground': props.isActive }">COLOR IT</div>
    <hr>
    <!-- for loop -->
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in props.peopleProps" :key="index">
                <td>{{ index }} {{ item.name }}</td>
                <td>{{ index }} {{ item.age }}</td>
                <td>{{ index }} {{ item.email }}</td>
            </tr>
        </tbody>
    </table>
    <ThridDay :isActive="props.isActive" />
</template>

<script setup>
import { onMounted, ref, defineProps, defineEmits, onUpdated } from 'vue';
import ThridDay from '@/components/ThridDay.vue';
const name = ref('Accionlabs');
const fontSize = ref(22);
// const isActive = ref(true)
// const people = ref([
//     { name: 'John Doe', age: 30, email: 'john@example.com' },
//     { name: 'Jane Doe', age: 25, email: 'jane@example.com' },
//     { name: 'Bob Smith', age: 40, email: 'bob@example.com' }
// ]);

const props = defineProps(['peopleProps', 'isActive']);
const emits = defineEmits(['childToParent']);

onMounted(() => {
    console.log(name);
})

onUpdated(() => {
    console.log(name.value)
})
const doSomething = (event, type) => {
    // console.log(event);
    console.log(type);
    emits('childToParent', type.target.value);
}

</script>


<style scoped>
/* CSS styles for the table */
table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

.addBackground {
    background-color: aqua;
    width: 200px;
    margin: auto;
}
</style>