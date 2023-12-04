<template>
 <HeadingSection :headingTxt="item.heading" />
 <NewsPost :item="item" />
</template>

<script>
 import NewsPost from './newsPostPage/NewsPost.vue'; 
 import HeadingSection from './sections/HeadingSection.vue'; 
import { newsList } from '@/utils/constans/newsList';

export default {
    name: "NewsPostPage",
    computed: {
        item() {
            return newsList.find(el => el.newsIndex.toString() === this.postId);
        }
    },
    mounted() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },
    props: ["postId"],
      components: { HeadingSection, NewsPost } 
}
</script>

<style scoped></style>