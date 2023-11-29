<template>
    <section>
        <h2>Categories</h2>
        <div class="news__category-list">
            <button :disabled="currentFilter === 'all'" @click="filterList('all')" 
            class=" news__category-btn">All
                News</button>
            <button :disabled="currentFilter === 'company'" @click="filterList('company')"
                class=" news__category-btn">Company News</button>
            <button :disabled="currentFilter === 'innovation'" @click="filterList('innovation')"
                class=" news__category-btn">Innovation</button>
            <button :disabled="currentFilter === 'industry'" @click="filterList('industry')"
                class=" news__category-btn">Industry News</button>
            <button :disabled="currentFilter === 'expert'" @click="filterList('expert')" 
            class=" news__category-btn">Expert
                Tips</button>
            <button :disabled="currentFilter === 'marketing'" @click="filterList('marketing')"
                class=" news__category-btn">Marketing</button>
        </div>
        <ul class="news__list">
            <ItemNews v-for="(item, index) in massive" :key="index" :item="item" />
        </ul>

    </section>
</template>

<script>
import ItemNews from '../items/ItemNews.vue';
import { newsList } from '@/utils/constans/newsList';
export default {
    name: "NewsList",
    data() {
        return { massive: newsList, currentFilter: 'all' };
    },
    methods: {
        filterList(category) {
            if (category !== 'all') {
                this.currentFilter = category
                this.massive = newsList.filter(el => el.type === category);
            } else {
                this.massive = newsList
            }
        }
    },
    components: { ItemNews }
}
</script>

<style scoped>
section {
    max-width: var(--max-width);
    margin: 120px auto 180px;
}

h2 {

    font-size: 46px;
    font-weight: 700;
    line-height: 60px;

    text-align: center;

}

.news__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 482px;
    gap: 60px 30px;
    list-style: none;
    padding: 0;
}

.news__category-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

}

.news__category-btn {
    background-color: var(--col-clear);
    border: none;
    opacity: 0.5;
    cursor: pointer;
    padding: 10px 30px;
    transition: all .2s;
    border: 1px solid var(--col-clear);
}

.news__category-btn:disabled {
    opacity: 1;
    border: none;
    border-radius: 5px;
    border: 1px solid var(--col-main);
    color: var(--col-main);
}
</style>