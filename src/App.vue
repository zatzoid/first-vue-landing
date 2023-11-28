<template>
  <HeaderSection />
  <router-view></router-view>
  <FooterForm />
  <FooterSection/>
</template>

<script>
import './utils/fonts/fonts.css'

import HeaderSection from './components/sections/HeaderSection.vue';
import FooterForm from './components/sections/FooterForm.vue';
import FooterSection from './components/sections/FooterSection.vue';



export default {
  name: 'App',
  components: {

    HeaderSection,
    FooterForm,
    FooterSection
}
}
</script>

<style>
body {
  --col-main: #FF5A30;
  --col-clear: rgba(0, 0, 0, 0);
  --col-grey:#F4F5F6;
  --max-width: 1230px;
  font-family: 'Ubuntu Regular', sans-serif;
  background-color: white;

}
#app{
  position: relative;
}

p {
  margin: 0;
}

input:focus {
  outline: none;
}
.link-style{
  text-decoration: none;
  color: black;
}
.link-style:hover{
  color: var(--col-main);
}
.link-style:active{
  opacity: 0.5;
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
  padding: 10px 30px;
  transition: all .2s;
}

.btn-hover-orange:hover {
  color: var(--col-main);
  background-color: white;
}

.btn-hover-orange:active {
  opacity: 0.5;
}

.btn-hover-white {
  border: none;
  background-color: white;
  border-radius: 5px;
  border: 1px solid var(--col-main);
  color: var(--col-main);
  cursor: pointer;
  padding: 10px 30px;
  transition: all .2s;
}

.btn-hover-white:hover {
  color: white;
  background-color: var(--col-main);
}

.btn-hover-white:active {
  opacity: 0.5;
}

.section-el-shadow {
  box-shadow: -8px 24px 32px 0px rgba(0, 0, 0, 0.2);
}

.section-el-shadow_hover:hover {
  box-shadow: -8px 24px 32px 0px rgba(0, 0, 0, 0.2);
}</style>
