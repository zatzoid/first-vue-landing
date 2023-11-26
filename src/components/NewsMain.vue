<template>
    <section>
        <h2 class="section-heading">Recent news</h2>
        <ul class="news__grid">
            <ItemNews v-for="(item, index) in massive" :key="index" :item="item" :shorted="true" />

        </ul>
<SectionFooter :text="'Explore all our news posts'" :btnText="'View all news'"/>
    </section>
</template>

<script>
import ItemNews from './items/ItemNews.vue';
import { newsList } from '@/utils/constans/newsList';
import SectionFooter from './items/SetionFooter.vue'
export default {
    name: "NewsMain",
    data() {
        return { massive: newsList.slice(0, 3) }
    },
    components: { ItemNews, SectionFooter }
}
</script>

<style scoped lang="scss">
section {
    max-width: var(--max-width);
    margin: auto;
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 705px 495px;
    grid-template-rows:  repeat(2, 255px);
    gap: 30px;
}
</style>