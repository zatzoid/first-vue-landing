<template>
    <section class="serviceEl__container">
        <div class="serviceEl__img-container">
            <img :src="image" :alt="item.name">
        </div>
        <div>
            <h3>We offer</h3>
            <p>{{ item.description }}</p>
        </div>

    </section>
</template>

<script>
export default {
    name: 'ElementDescription',
    data() {
        return {
            image: require(`@/assets/${this.item.image}.jpg`)
        }
    },
    props: ['item']
}

</script>

<style scoped>
section {
    max-width: var(--max-width);
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 120px auto 180px;
    gap: 105px;
}

.serviceEl__img-container {

    height: 440px;
    width: 705px;
    display: flex;
    overflow: hidden;

}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
}

h3 {
    font-size: 46px;
    font-weight: 900;
    line-height: 60px;
}

p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
}
</style>