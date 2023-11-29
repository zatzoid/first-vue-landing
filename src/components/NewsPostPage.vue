<template>
    <HeadingSection :headingTxt="item.heading" />
    <NewsPost :item="item" />
</template>

<script>
import NewsPost from './newsPostPage/NewsPost.vue';
import HeadingSection from './sections/HeadingSection.vue';

export default {
    name: "NewsPostPage",
    mounted() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },
    props: ["item"],
    components: { HeadingSection, NewsPost }
}
</script>

<style scoped></style>