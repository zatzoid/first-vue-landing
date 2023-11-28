<template>
    <HeadingSection :headingTxt="item.name" :contentTxt="item.heading" />
    <ElementDescription :item="item" />
    <HowWeDo />
    <BenefitsServices />
    <SliderItemsSection :heading="'Related projects'" />
    <PricingServices />
    <SupportedSection />
</template>


<script>

import HeadingSection from './sections/HeadingSection.vue';
import SliderItemsSection from './sections/SliderItemsSection.vue';
import SupportedSection from './sections/SupportedSection.vue';
import BenefitsServices from './servicesElementPage/BenefitsServices.vue';
import ElementDescription from './servicesElementPage/ElementDescription.vue';
import HowWeDo from './servicesElementPage/HowWeDo.vue';
import PricingServices from './servicesElementPage/PricingServices.vue';
//  scroll-behavior: smooth;
export default {
    name: "ServicesElementPage",
   
    mounted(){
        window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    },
    props: ['item'],
    components: { HeadingSection, ElementDescription, HowWeDo, BenefitsServices, SliderItemsSection, PricingServices, SupportedSection }
}
</script>
<style scoped></style>
