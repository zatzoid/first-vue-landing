<template>
    <li class="servicesEl">
        <div :class="{'servicesEl__img': true,'servicesEl__img-container_reversed': isReverse}">
            <img :src="image" alt="slider">
        </div>

        <div :class="{'servicesEl__content':true, 'servicesEl__content_reversed': isReverse}">
            <h3>{{ item.name }}</h3>
            <p>{{ item.heading }}</p>
            <router-link :to="`/services/${item.link}`" class="btn-hover-white serviceEl__btn">Learn More</router-link>
        </div>
    </li>
</template>

<script>
export default {
    name: 'ItemServices',
    data() {
        return {
            isReverse: false,
            image: require(`@/assets/${this.item.image}.jpg`)
        }
    },
    mounted() {
        if (this.index % 2 !== 0) {
            this.isReverse = true
        }
    },
    props: ['item', 'index']
}

</script>
<style scoped>
li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 420px;
    gap: 80px;

}

.servicesEl__img-container {
    display: flex;
}

.servicesEl__img-container_reversed {
    grid-column: 2;
}

.servicesEl__content_reversed {
    grid-column: 1;
    grid-row: 1;
}

img {
    max-width: 575px;
    object-fit: cover;
    object-position: center center;
}

.servicesEl__content {
    margin: auto 0;

}

h3 {

    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    margin: 0;
}

p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: #787A80;
    margin: 24px 0 48px;
}

.serviceEl__btn {
    padding: 10px 30px;
    text-decoration: none;

}

.serviceEl__btn:active {
    opacity: 0.5;
}
</style>