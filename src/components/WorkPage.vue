

<template>
    <HeadingSection :headingTxt="'OUR WORK'"
        :contentTxt="'Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry.'" />
    <WorksList />
    <ClientsSayingSection />
    <SupportedSection />
</template>

<script>
import WorksList from './WorkPage/WorksList.vue';
import ClientsSayingSection from './sections/ClientsSayingSection.vue';
import HeadingSection from './sections/HeadingSection.vue';
import SupportedSection from './sections/SupportedSection.vue';

export default {
    name: "WorkPage",
    mounted() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },
    components: { HeadingSection, ClientsSayingSection, SupportedSection, WorksList }
}
</script>