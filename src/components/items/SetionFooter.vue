<template>
    <div>
        <p>{{ text }}</p>
        <router-link class="sectionFooter__link btn-hover-orange" :to="`/${route}`" >{{ btnText }}</router-link>
    </div>
</template>
<script>
export default {
    name: 'SectionFooter',
    props: ['text', 'btnText', 'route']
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    margin: 85px 0;
}

p {
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    margin-right: 40px;
    margin: auto 40px auto 0;

}

.sectionFooter__link {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-align: center;
    padding: 20px 40px;
    text-transform: uppercase;
    text-decoration: none;


}
</style>