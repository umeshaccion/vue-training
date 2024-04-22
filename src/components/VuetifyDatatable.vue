<template>
    <div v-color="color"></div>
    <v-btn>Button </v-btn>

    <v-card title="Card title" subtitle="Subtitle" text="...">
        <v-card-actions>
            <v-btn>Click me</v-btn>
        </v-card-actions>
    </v-card>

    <v-data-table-virtual :headers="headers" :items="boats" height="400" item-value="name"></v-data-table-virtual>

    <GrandParent />
</template>
<script setup>
import { ref, computed } from 'vue';
import GrandParent from '@/components/GrandParent.vue';
const headers = [
    { title: 'Boat Type', align: 'start', key: 'name', sortable: false },
    { title: 'Speed (knots)', align: 'end', key: 'speed' },
    { title: 'Length (m)', align: 'end', key: 'length' },
    { title: 'Price ($)', align: 'end', key: 'price' },
    { title: 'Year', align: 'end', key: 'year' },
];



const boats = ref([
    {
        name: 'Speedster',
        speed: 35,
        length: 22,
        price: 300000,
        year: 2021,
    },
    {
        name: 'OceanMaster',
        speed: 25,
        length: 35,
        price: 500000,
        year: 2020,
    },
    // Add more boats as needed
]);

const virtualBoats = computed(() => {
    return [...Array(10000).keys()].map(i => {
        const boat = { ...boats.value[i % boats.value.length] }
        boat.name = `${boat.name} #${i}`
        return boat
    });
});
</script>