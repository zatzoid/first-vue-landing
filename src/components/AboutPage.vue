<template>
    <HeadingSection :headingTxt="'ABOUT US'"
        :contentTxt="'Createx Construction Bureau has been successfully operating in <!--  -->the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.'" />
    <AchivmentsAbout />
    <CEOmsg />
    <div style="background-color: var(--col-grey);">
        <CoreValuesMain />
    </div>
    <div style="background-color: var(--col-grey);">
        <OurHistory />
    </div>
    <SupportedSection />
    <OurTeam />
    <section class="worldwide">
        <h2 class="worldwide__heading">We work worldwide</h2>
        <img class="worldwide__map" src="@/assets/map.svg" alt="map">
    </section>
</template>

<script>
import AchivmentsAbout from './aboutPage/AchivmentsAbout.vue';
import CEOmsg from './aboutPage/CEOmsg.vue';
import OurHistory from './aboutPage/OurHistory.vue';
import OurTeam from './aboutPage/OurTeam.vue';
import CoreValuesMain from './mainPage/CoreValuesMain.vue';
import HeadingSection from './sections/HeadingSection.vue';
import SupportedSection from './sections/SupportedSection.vue';

export default {
    name: "AboutPage",
    components: { HeadingSection, AchivmentsAbout, CEOmsg, CoreValuesMain, OurHistory, SupportedSection, OurTeam }
}
</script>
<style >
.worldwide {
    background-color: var(--col-grey);
    text-align: center;
    padding: 80px 0 120px;

}

.worldwide__heading {
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
}

.worldwide__map {
    max-width: var(--max-width);
}
</style>