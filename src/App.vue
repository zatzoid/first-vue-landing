<template>
  <HeaderMain />
  <SliderMain />
  <VideoMain />
  <CoreValuesMain />
  <AskQuestionMain />
  <ServiceMain />
  <SliderItemsSection />
  <SupportedSection/>
  <FactsMain/>
  <NewsMain/>
  <FooterForm/>
  <FooterSection/>
</template>

<script>
import './utils/fonts/fonts.css'
import AskQuestionMain from './components/AskQuestionMain.vue';
import CoreValuesMain from './components/CoreValuesMain.vue';
import HeaderMain from './components/HeaderMain.vue';
import SliderItemsSection from './components/SliderItemsSection.vue';
import ServiceMain from './components/ServiceMain.vue';
import SliderMain from './components/SliderMain.vue';
import VideoMain from './components/VideoMain.vue';
import SupportedSection from './components/SupportedSection.vue';
import FactsMain from './components/FactsMain.vue';
import NewsMain from './components/NewsMain.vue';
import FooterForm from './components/FooterForm.vue';
import FooterSection from './components/FooterSection.vue';



export default {
  name: 'App',
  components: {
    HeaderMain,
    SliderMain,
    VideoMain,
    CoreValuesMain,
    AskQuestionMain,
    ServiceMain,
    SliderItemsSection,
    SupportedSection,
    FactsMain,
    NewsMain,
    FooterForm,
    FooterSection
}
}
</script>

<style>
body {
  --col-main: #FF5A30;
  --col-clear: rgba(0, 0, 0, 0);
  --max-width: 1230px;
  font-family: 'Ubuntu Regular', sans-serif;
  background-color: white;
}

p {
  margin: 0;
}
input:focus{
  outline: none;
}
.section-heading {
  font-size: 46px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: center;
}

.section-subheading {
  opacity: 0.5;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  opacity: 0.5;
}

.btn-hover-orange {    
  border: none;
  background-color: var(--col-main);
  border-radius: 5px;
  border: 1px solid var(--col-main);
  color: white;
  cursor: pointer;
  transition: all .2s;
}

.btn-hover-orange:hover {
  color: var(--col-main);
  background-color: white;
}
.btn-hover-orange:active{
  opacity: 0.5;
}
.btn-hover-white {    
  border: none;
  background-color: white;
  border-radius: 5px;
  border: 1px solid var(--col-main);
  color: var(--col-main);
  cursor: pointer;
  transition: all .2s;
}

.btn-hover-white:hover {
  color: white;
  background-color: var(--col-main);
}
.btn-hover-white:active{
  opacity: 0.5;
}
.section-el-shadow{
  box-shadow: -8px 24px 32px 0px rgba(0, 0, 0, 0.2);
}
.section-el-shadow_hover:hover{
  box-shadow: -8px 24px 32px 0px rgba(0, 0, 0, 0.2);
}
</style>
