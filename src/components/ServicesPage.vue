<template>
    <HeadingSection :headingTxt="'services'"
        :contentTxt="'If you are looking for a full-service construction company, look to Createx Construction Bureau. We are doing our best to be a partner for all of your construction needs.'" />
    <ul>
        <ItemServices v-for="(item, index) in massive" :key="index" :index="index" :item="item" />
    </ul>
</template>

<script>
import HeadingSection from './sections/HeadingSection.vue';
import { servicesList } from '@/utils/constans/servicesList.js'
import ItemServices from './items/ItemServices.vue';


export default {
    name: "ServicesPage",
    data() {
        return { massive: servicesList }
    },
    mounted() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },
    components: { HeadingSection, ItemServices }
}

</script>

<style scoped>
ul {
    max-width: var(--max-width);
    margin: auto;
    padding: 120px 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 120px;
}
</style>