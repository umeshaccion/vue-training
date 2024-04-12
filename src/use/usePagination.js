import { ref, computed } from 'vue';
import axios from 'axios';

export const usePagination = () => {
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

    const paginatedPosts = computed(() => {
        const startIndex = (currentPage.value - 1) * selectedPageSize.value;
        const endIndex = startIndex + selectedPageSize.value;
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

    return {
        paginatedPosts,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        selectedPageSize,
        updatePageSize,
        fetchData
    };
}
