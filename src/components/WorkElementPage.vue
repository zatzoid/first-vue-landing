<template>
    <ElementHeading :el="item" />
    <ProjectGoal/>
    <ConstructivE/>
    <SliderItemsSection :heading="'Similar project'" />
   
</template>

<script>
import SliderItemsSection from './sections/SliderItemsSection.vue';
import ConstructivE from './workElementPage/ConstructivE.vue';
import ElementHeading from './workElementPage/ElementHeading.vue';
import ProjectGoal from './workElementPage/ProjectGoal.vue';

export default {
    name: "WorkElementPage",
    props: ['item'],
    mounted() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },
    components: { SliderItemsSection, ElementHeading, ProjectGoal, ConstructivE }
}
</script>