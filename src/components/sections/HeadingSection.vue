<template>
    <section>
        <div class="heading-container">
            <nav>
                <router-link v-for="(item, index) in currentPath" :key="index" class="heading__nav-link link-style" :to="`/${item}`">{{ item !== '' ? item : 'homepage' }}</router-link>
            </nav>
            <h2>{{ headingTxt }}</h2>
            <p>{{ contentTxt }}</p>

        </div>

    </section>
</template>

<script>
export default {
    name: 'HeadingSection',
    data(){
return{
    currentPath: window.location.pathname.split('/'),

}
    },
    props: ['headingTxt', 'contentTxt']
}
</script>

<style scoped>
section {
    background-color: var(--col-grey);
    background-image: url(@/assets/background3.png);
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 100px;
    height: 600px;
}

.heading-container {
    max-width: var(--max-width);
    margin: auto;
}

nav {
    margin: 100px 0 40px;
}
.heading__nav-link::after{
    content: ' / ';
}

.heading__nav-link:last-of-type{
    opacity: 0.3;
}
.heading__nav-link:last-of-type::after{
    content: '';
    
}
h2 {
    margin: 0 0 24px;
    font-size: 72px;
    font-weight: 700;
    line-height: 94px;
    letter-spacing: 1px;
}

p {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: #787A80;
    max-width: 600px;
}
</style>