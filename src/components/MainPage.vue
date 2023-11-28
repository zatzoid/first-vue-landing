<template>
    <SliderMain />
    <VideoMain />
    <CoreValuesMain />
    <AskQuestionMain />
    <ServiceMain />
    <SliderItemsSection :heading="'Browse our selected projects and learn more about our work'" />
    <SupportedSection />
    <ClientsSayingSection />
    <FactsMain />
    <NewsMain />
</template>

<script>
import AskQuestionMain from '@/components/mainPage/AskQuestionMain.vue';
import CoreValuesMain from '@/components/mainPage/CoreValuesMain.vue';
import SliderItemsSection from '@/components/sections/SliderItemsSection.vue';
import ServiceMain from '@/components/mainPage/ServiceMain.vue';
import SliderMain from '@/components/mainPage/SliderMain.vue';
import VideoMain from '@/components/mainPage/VideoMain.vue';
import SupportedSection from '@/components/sections/SupportedSection.vue';
import FactsMain from '@/components/mainPage/FactsMain.vue';
import NewsMain from '@/components/mainPage/NewsMain.vue';
import ClientsSayingSection from './sections/ClientsSayingSection.vue';


export default {
    name: "MainPage",
    mounted() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },
    components: {
        SliderMain,
        VideoMain,
        CoreValuesMain,
        AskQuestionMain,
        ServiceMain,
        SliderItemsSection,
        SupportedSection,
        FactsMain,
        NewsMain,
        ClientsSayingSection
    }
}


</script>