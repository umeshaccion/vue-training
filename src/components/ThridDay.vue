<template>
    <div class="container">
        <div class="pageSizeDropdown">
            <label for="pageSize">Records per page:</label>
            <select v-model="selectedPageSize" @change="updatePageSize">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in paginatedposts" :key="post.id">
                    <td>{{ post.userId }}</td>
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                </tr>
            </tbody>
        </table>
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
// import { usePagination } from '@/use/usePagination.js';
// const {
//     paginatedposts.value,
//     currentPage,
//     totalPages,
//     nextPage,
//     prevPage,
//     selectedPageSize,
//     fetchData
// } = usePagination();
import axios from 'axios'; // Import Axios library

const posts = ref([]);
const currentPage = ref(1);
const selectedPageSize = ref(10);

const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const totalPages = computed(() => Math.ceil(posts.value.length / selectedPageSize.value));

const paginatedposts = computed(() => {
    const startIndex = (currentPage.value - 1) * selectedPageSize.value;
    const endIndex = startIndex + selectedPageSize.value;
    console.log(posts.value.slice(startIndex, endIndex));
    return posts.value.slice(startIndex, endIndex);
});

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const updatePageSize = () => {
    currentPage.value = 1; // Reset current page to 1 when page size changes
};

onBeforeMount(() => console.log('Before Mount'));

onMounted(() => {
    console.log(`the component is now mounted.`)
    fetchData();
});


onBeforeUpdate(() => console.log('Before Update'));
onUpdated(() => console.log('Updated'));
onBeforeUnmount(() => console.log('Before Unmount'));
onUnmounted(() => console.log('Unmounted'));

</script>

<style scoped>
.container {
    margin: 20px;
}

.pageSizeDropdown {
    margin-bottom: 10px;
}

.table {
    width: 100%;
    border-collapse: collapse;
}

.table th,
.table td {
    border: 1px solid #ddd;
    padding: 8px;
}

.table th {
    background-color: #f2f2f2;
    font-weight: bold;
    text-align: left;
}

.pagination {
    margin-top: 10px;
}

.pagination button {
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
}

.pagination span {
    margin: 0 10px;
}
</style>@/use/usePagination.js