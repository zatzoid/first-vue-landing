<template>
    <HeadingSection :headingTxt="'News'" :contentTxt="'Stay tuned with our news, expert tips and articles.'"/>
<NewsList/>
</template>

<script>
import NewsList from './newsPage/NewsList.vue';
import HeadingSection from './sections/HeadingSection.vue';

export default{
    name: "NewsPage",
    mounted() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },
    components: { HeadingSection, NewsList }
}
</script>

