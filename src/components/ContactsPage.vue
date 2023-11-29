<template>
    <HeadingSection :headingTxt="'CONTACTS'" :contentTxt="'Contact us for all your construction needs. We always welcome any questions and comments.'"/>
    <ContactUs />
    <OurOffices />
</template>


<script>
import ContactUs from './contactsPage/ContactUs.vue';
import OurOffices from './contactsPage/OurOffices.vue';
import HeadingSection from './sections/HeadingSection.vue';

export default{
    name: "ContactsPage",
    components: { HeadingSection, ContactUs, OurOffices }
}
</script>